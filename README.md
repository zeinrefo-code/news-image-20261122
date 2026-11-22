# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/zeinrefo-code/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/zeinrefo-code/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

The World in One Day — a newspaper front page summing up Sunday 22 November 2026 in one image: Iran's strikes on US defences in Bahrain (Tehran claims missile and drone hits on Patriot radars), Russia's strike on Lviv, the EU–Indonesia landmark trade deal, COP31 deadlocked in overtime in Turkey, and Eisenkot tapped to lead Israel's government talks. The image is held in this repository as `entry.png` (1024×1024); `main.ts` (Node 22, standard library only, no network) deterministically copies it to `/output/entry.png`, byte-identical on every run.

## Design

Earlier editions of this front page used dense columns of small print, which read poorly and risked garbled lettering. This edition keeps the redesigned format: a single dominant lead visual — an engraving-style illustration of missile defence interceptors over a Gulf port for the Iran–US escalation — with one huge headline, one short sub-headline, and a bottom strip of four large, short secondary headlines with small icons. There is no small body text anywhere on the page, so every word stays large, crisp and exactly spelled.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bxjfe4p7&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
