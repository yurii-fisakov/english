# Сфери спілкування

A study page for the Ukrainian school foreign-language syllabus, **Сфери спілкування і тематика текстів для читання та використання мови**.

The printed page groups 37 topics into three spheres: personal, public, and educational. Each topic has a model oral answer of two sentences in English and in Ukrainian. Where the syllabus says «країна, мову якої вивчають», the English answers use the United Kingdom. The page interface is in Russian.

## Run

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

`npm run check` confirms that every topic has exactly two sentences in each language.

## GitHub Pages

Pushes to `master` build a static export and publish it to [https://yurii-fisakov.github.io/english/](https://yurii-fisakov.github.io/english/). The Pages build sets `GITHUB_PAGES=true`, which serves the site from `/english`.
