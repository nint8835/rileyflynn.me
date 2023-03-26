---
title: Borik
summary: An image manipulation focused Discord bot.

links:
    - label: GitHub
      url: https://github.com/fogo-sh/borik

tags:
    - go
    - discord
    - bot
---

# About

Borik is a Discord bot that implements a wide variety of image manipulation features, designed primarily to distort & corrupt images.
It is a collaborative project between [Jack Harrhy](https://jackharrhy.com/) & I, designed to replace two competing bots we had both built to accomplish the same goal.

All image manipulation is handled by leveraging ImageMagick (via the [`gographics/imagick`](https://github.com/gographics/imagick) package for Go).
Command parsing & dispatch is handled by [`parsley`](/projects/parsley), which was initially built as the integrated command parser for this bot, before finally being split out into it's own library.
