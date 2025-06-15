---
title: Parsley
summary: Command parser library for Discord bots.

links:
    - label: Docs
      url: https://pkg.go.dev/github.com/nint8835/parsley
    - label: GitHub
      url: https://github.com/nint8835/parsley
---

# About

Parsley is an addon for the [`discordgo`](https://github.com/bwmarrin/discordgo) Discord client library for Go, adding an automatic command parser & dispatch system.

Bot authors can write commands for their Parsley-powered bots by implementing a handler function, taking two arguments - the `MessageCreate` event from `discordgo`, and an arbitrary struct of their own choosing.
Parsley will then, on receipt of a message with a matching command, perform reflection on the provided handler and automatically populate the struct via the user's provided arguments, calling the handler with the resulting value.

Parsley was initially built as [`borik`](/projects/borik)'s command parser, but was spun out into it's own library. It was heavily inspired by [`discord.py`'s commands extension](https://discordpy.readthedocs.io/en/stable/ext/commands/commands.html).

# Bots using Parsley

- [`STollenaar/CopypastaBotV2`](https://github.com/STollenaar/CopypastaBotV2)
- [`fogo-sh/borik`](https://github.com/fogo-sh/borik)
- [`nint8835/8-grack`](https://github.com/nint8835/8-grack)
- [`nint8835/Elkbot`](https://github.com/nint8835/Elkbot)
- [`nint8835/scribe`](https://github.com/nint8835/scribe)
