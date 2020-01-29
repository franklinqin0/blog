---
title: Tmux
date: 2020-01-21
tags:
 - tech
sidebar: true
isComment: true
---

This is everything basic we need to know about `tmux`.

## Why tmux

From `man tmux`:
> `tmux` is short for `t`erminal `m`ultipl`ex`er: it enables a number of terminals to be created, accessed, and controlled from a single screen.

Often times we lose the screen once we close a terminal window. However, in tmux, **each session is persistent** and will **survive accidental disconnection**. Thus, we could detach from a session before bed. A snapshot of terminal is **auto saved and revived** the next morning when we reattach to it.

## Notes before Proceeding

- see [Notes before Proceeding in How to Use Vim](Vim-commands#notes-before-proceeding)
- read man page of tmux: `man tmux` (don't worry if you can't understand even half of it by first glance, you'd be a genius if you do, and even a genius needs to read again, learn and practice)
- watch some videos online to demo tmux usage

## My Previous Experience

I was introduced to `tmux` almost the same time as `Vim` by a roommate. I found it useful to open multiple sessions and windows on a screen, saving troubles from switching terminal tabs, but I was too busy and lazy to learn new tools with heavy workload at school.

## Why this Blog

I write this blog both to spread the efficiency of `tmux` and keep some useful notes for myself.

## Install tmux

The following steps are quite similar to [those of Vim](Vim-commands.md#install-and-upgrade-neovim).

For my Mac, I use `brew install tmux` to install tmux and `brew upgrade tmux` to upgrade it.

For Unix/Linux systems, could use the the corresponding package manager to install and upgrade.

For windows, could install Cygwin/Cmder or a Linux distro in MS store and use the terminal.

## Terminologies

Tmux is a *client-server architecture*. A `server` hosts tmux sessions and a `client` displays them on screen. When the client loses connection to server, the sessions are still stored on server and displayed when reattached.

A `session` has one or more windows linked to it.

A `window` occupies the entire screen and may be split into rectangular *panes*.

A `pane` is a separate pseudo terminal.

## Basic Commands

- `tmux`: start tmux
- `tmux new -s {session_name}`: create a named session
- `tmux a[ttach]`: restore a session (reattach to detached session)
- `tmux attach-session -t {session_name}`: attach to a named session
- `tmux kill-session -t {session_name}`: destroy a named session
- `tmux ls`: display all sessions



To input tmux instead of shell commands, a **prefix** (by default `<C-b>`) is needed:
- `{prefix} d`: detach from current session
- `{prefix } %`: split pane vertically
- `{prefix } "`: split pane horizontally
- `{prefix } $`: rename session
- `{prefix } ,`: rename window

## Write our own `.tmux.conf`

Following are some customizations I did in my `.tmux.conf`. Others are quite similar and I will just show you [the code](https://github.com/franklinqin0/dotfiles/blob/master/tmux/.tmux.conf): 

### Redefine the prefix

It is very awkward for most to spread your index and little fingers when pressing `<C-b>`. Thus, some replaced it with `<C-a>`, but I came up with `<M-x>`: **`set -g prefix M-x`**. `M` stands for "Meta" and is basically `Alt`. For my Mac, I did [this](https://superuser.com/a/963367) to use `Option` as Meta key.

### Resize Pane

The following commands resize a pane by **5 rows** (say, `{prefix} J`).

```
bind-key J resize-pane -D 5
bind-key K resize-pane -U 5
bind-key H resize-pane -L 5
bind-key L resize-pane -R 5
```

The following commands resize a pane by **1 row** (say, `{prefix} <M-h>`).

```
bind-key M-h resize-pane -L
bind-key M-j resize-pane -D
bind-key M-k resize-pane -U
bind-key M-l resize-pane -R
```

### Switch Pane

The following commands switch to another pane by direction (say, `{prefix} h`)

```
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R
```

Or (say, `<M-h>`):

```
bind -n M-h select-pane -L
bind -n M-j select-pane -D
bind -n M-k select-pane -U
bind -n M-l select-pane -R
```

## Important Confusion to Watch out for

If in a session and wants to:
- **destroy**, except for `kill-session` above, could either `exit` and Enter, or `<C-d>`.
- **detach**, `{prefix} d`.

DON'T **DESTROY** A SESSION WHILE YOU WANT TO **DETACH** IT!!!

## Useful Links
- the only website, if any, you need to star about tmux: [Tmux Cheat Sheet](https://tmuxcheatsheet.com)
- a `.tmux.conf` where I copied most from: [Pegasus Wang's `.tmux.conf`](https://github.com/PegasusWang/linux_config/blob/master/mac/tmux.conf)
- a cool `.tmux.conf` to **learn but not copy** from: [gpakosz/.tmux](https://github.com/gpakosz/.tmux)