---
title: Mac Notes
date: 2020-03-09
categories:
 - study
tags:
 - tech
---

This blog illustrates some notes on using my Mac (model was released in mid 2015, OS is Catalina 10.15).

<!-- more -->

## Accented Chars vs. Key Repeat

Mac enables users to hold down a letter key and show accented or special chars.

To **enable pop-up** and disable key repeat, could set `ApplePressAndHoldEnabled` to `true`:

```sh
defaults write -g ApplePressAndHoldEnabled -bool true
```

However, as I used `Vim`([commands](vim_commands) and [config](vim_customize)) more and more, I see popping up the accented chars less useful.

To disable pop-up and **enable key repeat**, could set `ApplePressAndHoldEnabled` to `false`:

```sh
defaults write -g ApplePressAndHoldEnabled -bool false
```

## German Chars

Happy ending? Nah. I recently started [learning German](goethe) and had to find some workaround to type chars and symbols such as `ä`, `ö`, `ü`, `ß`, `„` and `”`.

### Key Combs

These are the ways to type them on my mac:

- `ä`: `Option u` + `a`
- `ö`: `Option u` + `o`
- `ü`: `Option u` + `u`
- `ß`: `Option s`

and the lower and upper quotes:

- `„`: `Option Shift w`
- `”`: `Option Shift [`

Note that I actually searched online and saw other key combs, but don't work.

### Add Input Source

Another way to guarantee typing the correct German chars, or any language's chars is to use the corresponding input source. This could be done on Mac by: `System Preferences` $\rightarrow$ `Keyboard` $\rightarrow$ `Input Souces` $\rightarrow$ $+$ $\rightarrow$ {another language}.

## Further

Please see this article for [more details](https://ia.net/writer/support/mac/special-characters) on keyboard viewer, quotes, ellipsis, and IA writer.
