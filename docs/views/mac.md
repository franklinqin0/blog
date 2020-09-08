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

## Clean Unused Homebrew Dependencies

Like `apt-get autoremove` in Ubuntu, I have too many unused homebrew dependencies and want to clean them.

```sh
brew bundle dump && brew bundle --force cleanup
```

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

### German Key Combs

Happy ending? Not yet! I recently started [learning German](goethe) and had to find some workaround to type chars and symbols such as `ä`, `ö`, `ü`, `ß`, `„` and `”`.

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

### Further

Please see this article for [more details](https://ia.net/writer/support/mac/special-characters) on keyboard viewer, quotes, ellipsis, and IA writer.

## Terminal Proxy w/ Socks5

It's fairly easy to use a socks5 proxy in browser, but how to use it in terminal, especially when downloading from GitHub is super slow in China? From [this article](https://www.jianshu.com/p/205aff65954a) I made the following terminal proxy settings.

In sock5 proxy app set:

- Local Socks5 Listen Address $\rightarrow$ 127.0.0.1
- Local Socks5 Port $\rightarrow$ 1086
- Connection Timeout $\rightarrow$ 60

Then in `sh` config file (`.bashrc` for `Bash`):

```sh
# set/unset proxy in terminal
alias setproxy="export ALL_PROXY=socks5://127.0.0.1:1086"
alias unsetproxy="set -e ALL_PROXY"

# set/unset proxy just for Git
alias agent="git config --global http.proxy socks5://127.0.0.1:1086;git config --global https.proxy socks5://127.0.0.1:1086;git config --global http.sslVerify false"
alias unagent="git config --global --unset http.proxy;git config --global --unset https.proxy"
```

Enable credentials storage in local Git repository:

```sh
$ git config credential.helper store
```

Enable credentials storage globally:

```
$ git config --global credential.helper store
```
