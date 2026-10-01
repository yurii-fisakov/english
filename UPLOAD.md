# Upload this project yourself

This folder is the decoded study page. The photograph is `public/source-page.jpg`. The icon is `src/app/favicon.ico`. Do not upload an `encoded` folder.

## 1. Unzip

Unzip `english-study-page.zip` into an empty folder.

## 2. Put the files on GitHub

From that folder:

```bash
git init
git add .
git commit -m "Publish the study page"
git branch -M master
git remote add origin https://github.com/yurii-fisakov/english.git
git push -u origin master --force
```

The force push replaces the partial text upload already on that repository, including the `encoded` pieces.

## 3. Turn on GitHub Pages

On GitHub, open the repository Settings, then Pages. Set Source to GitHub Actions.

The workflow in `.github/workflows/pages.yml` runs on `master` and publishes the static site.

## 4. Open the site

https://yurii-fisakov.github.io/english/

The first deploy takes a minute. If the Actions run fails because Pages is not enabled, repeat step 3 and re-run the workflow.

## Local preview

Node 22.

```bash
npm install
npm run dev
```

Open http://127.0.0.1:43123
