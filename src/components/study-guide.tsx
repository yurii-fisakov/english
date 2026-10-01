"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import { Check, Copy, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { spheres, topics, type SphereId, type Topic } from "@/data/topics";
import { ruOfTotal, ruTopics, sphereRu, topicTitleRu, ui } from "@/data/ui-ru";

type Lang = "en" | "uk" | "both";
type SphereFilter = SphereId | "all";

const accent: Record<SphereId, string> = {
  personal: "text-russet",
  public: "text-pine",
  education: "text-navy",
};

const rail: Record<SphereId, string> = {
  personal: "border-l-russet",
  public: "border-l-pine",
  education: "border-l-navy",
};

function answerText(topic: Topic, lang: Lang): string {
  if (lang === "en") return topic.answerEn;
  if (lang === "uk") return topic.answerUk;
  return `${topic.answerEn}\n\n${topic.answerUk}`;
}

export function StudyGuide() {
  const [sphere, setSphere] = useState<SphereFilter>("all");
  const [lang, setLang] = useState<Lang>("both");
  const [query, setQuery] = useState("");
  const [practice, setPractice] = useState(false);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(null), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return topics.filter((topic) => {
      if (sphere !== "all" && topic.sphere !== sphere) return false;
      if (!needle) return true;
      const meta = spheres.find((item) => item.id === topic.sphere);
      const haystack = [
        topic.titleUk,
        topic.titleEn,
        topicTitleRu[topic.id],
        topic.answerEn,
        topic.answerUk,
        meta?.titleUk,
        meta?.titleEn,
        meta ? sphereRu[meta.id].title : "",
        meta ? sphereRu[meta.id].description : "",
      ]
        .join("\n")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [query, sphere]);

  const groups = spheres
    .map((item) => ({
      sphere: item,
      topics: filtered.filter((topic) => topic.sphere === item.id),
    }))
    .filter((group) => group.topics.length > 0);

  const readyCount = topics.filter((topic) => ready[topic.id]).length;

  function togglePractice() {
    setPractice((value) => !value);
    setOpen({});
  }

  async function copyAnswer(topic: Topic) {
    try {
      await navigator.clipboard.writeText(answerText(topic, lang));
      setCopied(topic.id);
    } catch {
      setCopied(`fail:${topic.id}`);
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-24 pt-8 sm:px-6 sm:pt-12">
      <header>
        <p className="text-xs font-semibold tracking-[0.16em] text-russet uppercase">
          {ui.eyebrow}
        </p>
        <h1 className="font-heading mt-3 text-[2.35rem] leading-[1.12] text-balance sm:text-5xl">
          {ui.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
          {ui.subtitle}
        </p>
      </header>

      <section className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <h2 className="font-heading text-2xl">{ui.asking}</h2>
        <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
          <div className="space-y-3 text-base leading-7">
            {ui.analysis.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="overflow-hidden rounded-xl border border-border bg-white">
            <div className="max-h-72 overflow-auto lg:max-h-80">
              <Image
                src="/source-page.jpg"
                width={1400}
                height={1867}
                alt={ui.sourceAlt}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 280px, 100vw"
                priority
              />
            </div>
            <figcaption className="border-t border-border px-3 py-2 text-xs leading-5 text-muted-foreground">
              {ui.sourceCaption}
            </figcaption>
          </figure>
        </div>
        <dl className="mt-5 grid grid-cols-1 gap-3 border-t border-border pt-4 sm:grid-cols-3 sm:text-center">
          {spheres.map((item) => {
            const count = topics.filter((topic) => topic.sphere === item.id).length;
            return (
              <div
                key={item.id}
                className="flex items-baseline justify-between gap-4 sm:block"
              >
                <dt className={`font-heading text-sm leading-snug ${accent[item.id]}`}>
                  {item.numeral}. {sphereRu[item.id].title}
                </dt>
                <dd className="text-sm text-muted-foreground sm:mt-1">
                  {ruTopics(count)}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      <section className="no-print mt-6 rounded-2xl border border-border bg-card p-4">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <label htmlFor="topic-search" className="sr-only">
              {ui.searchLabel}
            </label>
            <Search
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="topic-search"
              value={query}
              onValueChange={(value) => setQuery(value)}
              placeholder={ui.searchPlaceholder}
              className="h-11 pr-10 pl-9 text-base"
              autoComplete="off"
            />
            {query ? (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-1 size-9 -translate-y-1/2"
                onClick={() => setQuery("")}
                aria-label={ui.clearSearch}
              >
                <X />
              </Button>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap" role="group" aria-label={ui.sphereGroup}>
            <FilterButton
              pressed={sphere === "all"}
              onClick={() => setSphere("all")}
            >
              {ui.allTopics}
            </FilterButton>
            {spheres.map((item) => (
              <FilterButton
                key={item.id}
                pressed={sphere === item.id}
                onClick={() => setSphere(item.id)}
              >
                {item.numeral}. {sphereRu[item.id].title}
              </FilterButton>
            ))}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={ui.languageGroup}>
              {(
                [
                  ["en", ui.english],
                  ["uk", ui.ukrainian],
                  ["both", ui.both],
                ] as const
              ).map(([value, label]) => (
                <Button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={lang === value}
                  variant={lang === value ? "default" : "outline"}
                  className="h-11 px-3"
                  onClick={() => setLang(value)}
                >
                  {label}
                </Button>
              ))}
            </div>
            <Button
              type="button"
              variant={practice ? "default" : "outline"}
              aria-pressed={practice}
              className="h-11 px-3"
              onClick={togglePractice}
            >
              {practice ? ui.showAnswers : ui.hideAnswers}
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            {ruOfTotal(filtered.length, topics.length)}
            {readyCount > 0 ? `, отмечено: ${readyCount}` : ""}
          </p>
        </div>
      </section>

      {groups.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
          <p className="font-heading text-2xl">{ui.emptyTitle}</p>
          <p className="mx-auto mt-2 max-w-md text-base leading-7 text-muted-foreground">
            {ui.emptyBody}
          </p>
          <Button
            type="button"
            className="mt-5 h-11 px-4"
            onClick={() => {
              setQuery("");
              setSphere("all");
            }}
          >
            {ui.showAll}
          </Button>
        </div>
      ) : (
        groups.map((group) => (
          <section key={group.sphere.id} className="mt-12">
            <div className="border-b border-border pb-3">
              <h2 className="font-heading text-3xl leading-tight">
                <span className={accent[group.sphere.id]}>
                  {group.sphere.numeral}.
                </span>{" "}
                {sphereRu[group.sphere.id].title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                <span lang="uk">{group.sphere.titleUk}.</span>{" "}
                {sphereRu[group.sphere.id].description}
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              {group.topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  numeral={group.sphere.numeral}
                  lang={lang}
                  practice={practice}
                  revealed={!practice || Boolean(open[topic.id])}
                  marked={Boolean(ready[topic.id])}
                  copyState={
                    copied === topic.id
                      ? "copied"
                      : copied === `fail:${topic.id}`
                        ? "failed"
                        : "idle"
                  }
                  onReveal={() =>
                    setOpen((current) => ({ ...current, [topic.id]: true }))
                  }
                  onHide={() =>
                    setOpen((current) => ({ ...current, [topic.id]: false }))
                  }
                  onCopy={() => void copyAnswer(topic)}
                  onToggleReady={() =>
                    setReady((current) => ({
                      ...current,
                      [topic.id]: !current[topic.id],
                    }))
                  }
                />
              ))}
            </div>
          </section>
        ))
      )}

      <footer className="mt-16 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
        {ui.footer}
      </footer>
    </main>
  );
}

function FilterButton({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <Button
      type="button"
      variant={pressed ? "default" : "outline"}
      aria-pressed={pressed}
      className="h-auto min-h-11 whitespace-normal px-3 py-2 text-left sm:flex-none"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

function TopicCard({
  topic,
  numeral,
  lang,
  practice,
  revealed,
  marked,
  copyState,
  onReveal,
  onHide,
  onCopy,
  onToggleReady,
}: {
  topic: Topic;
  numeral: string;
  lang: Lang;
  practice: boolean;
  revealed: boolean;
  marked: boolean;
  copyState: "idle" | "copied" | "failed";
  onReveal: () => void;
  onHide: () => void;
  onCopy: () => void;
  onToggleReady: () => void;
}) {
  const indexLabel = `${numeral} · ${String(topic.index).padStart(2, "0")}`;

  return (
    <article
      id={topic.id}
      className={`scroll-mt-6 rounded-2xl border border-border border-l-4 bg-card px-4 py-4 sm:px-5 sm:py-5 ${rail[topic.sphere]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className={`font-heading text-sm ${accent[topic.sphere]}`}>
          {indexLabel}
        </p>
        {marked ? (
          <Badge variant="secondary" className="h-6 px-2">
            {ui.readyBadge}
          </Badge>
        ) : null}
      </div>
      <h3 lang="uk" className="font-heading mt-1 text-xl leading-snug">
        {topic.titleUk}
      </h3>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">
        {topicTitleRu[topic.id]}
      </p>

      <div className="mt-4 border-t border-dashed border-border pt-4">
        {revealed ? (
          <div className="max-w-prose space-y-4">
            {lang !== "uk" ? (
              <AnswerBlock label={ui.english} lang="en" text={topic.answerEn} />
            ) : null}
            {lang !== "en" ? (
              <AnswerBlock label={ui.ukrainian} lang="uk" text={topic.answerUk} />
            ) : null}
          </div>
        ) : (
          <p className="text-sm leading-6 text-muted-foreground">
            {ui.answerHidden}
          </p>
        )}

        <div className="no-print mt-4 flex flex-wrap gap-2">
          {practice ? (
            <Button
              type="button"
              variant={revealed ? "outline" : "default"}
              className="h-11 px-3"
              onClick={revealed ? onHide : onReveal}
            >
              {revealed ? ui.hideThis : ui.showThis}
            </Button>
          ) : null}
          {revealed ? (
            <Button
              type="button"
              variant="outline"
              className="h-11 px-3"
              onClick={onCopy}
            >
              {copyState === "copied" ? (
                <Check data-icon="inline-start" />
              ) : (
                <Copy data-icon="inline-start" />
              )}
              {copyState === "copied"
                ? ui.copied
                : copyState === "failed"
                  ? ui.copyFailed
                  : ui.copy}
            </Button>
          ) : null}
          <Button
            type="button"
            variant={marked ? "default" : "outline"}
            aria-pressed={marked}
            className="h-11 px-3"
            onClick={onToggleReady}
          >
            {marked ? ui.marked : ui.canSay}
          </Button>
        </div>
      </div>
    </article>
  );
}

function AnswerBlock({
  label,
  lang,
  text,
}: {
  label: string;
  lang: "en" | "uk";
  text: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </p>
      <p lang={lang} className="mt-1 text-base leading-7">
        {text}
      </p>
    </div>
  );
}
