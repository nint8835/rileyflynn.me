---
title: Chainmail
summary: Wrapper for the Minecraft server software, adding basic plugin support.

links:
    - label: GitHub
      url: https://github.com/Chainmail-Project/Chainmail
---

# About

Chainmail is a wrapper for the Minecraft server software, which enables the addition of custom functionality via plugins.

Chainmail works by running the Minecraft server software as a subprocess, reading all output to standard output from the process and parsing it to understand what is happening on the server, and writing to standard in to interact with the server.

It provides a wide variety of events that plugin authors can act on, as well as a suite of tools to greatly simplify the process of interacting with the server, such as:

- Command parsing
- Object-oriented APIs for interacting with players
- Rich message builder, greatly simplifying the process of authoring complex messages which should appear in the chat for users

Plugin support for Chainmail is provided by [Jigsaw](/projects/jigsaw), which was initially a part of Chainmail but was later split into it's own library.
