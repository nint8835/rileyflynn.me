---
title: Jigsaw
summary: Plugin framework for Python.

links:
    - label: Docs
      url: https://jigsaw.readthedocs.io/en/latest
    - label: GitHub
      url: https://github.com/nint8835/jigsaw
---

# About

Jigsaw is a plugin library for Python, providing the ability to easily add plugin functionality to an application, complete with the ability to dynamically load and unload plugins at runtime.

It was initially built as the integrated plugin support for [Chainmail](/projects/chainmail), but was later split out into it's own library.

At this point, the main user of Jigsaw is [Automata](/projects/automata), which enables developers to build their own functionality for the bot in isolation without needing to make any changes to the bot itself.
It also enables devs to run a more stripped down version of the bot, by disabling all plugins other than their own, reducing the prerequisites they would need to set up before being able to run their own development instance of the bot.
