---
title: How to Customize Vim
date: 2020-01-02
tags:
 - tech
---

Write our own .vimrc!

Following the [last blog](Vim-commands.md) about how to use Vim w/o any customization or plugin, this blog talks about how to customize Vim for better personal usage by writing a `.vimrc`.

In Unix systems, we could create a hidden file (starting with `.`) `vim ~/.vimrc` for Vim or `vim ~/.config/nvim/init.vim`. In Windows, we set value of environmental variable `$MYVIMRC` and `vim $MYVIMRC`.

In `.vimrc`, we don't need `:`.

There are basically 4 parts in a `.vimrc`:

1. `Settings` such as line numbers and colorscheme. To see what can be set, search by `:h option-list`
2. `Mappings` such as `jj` for `<Esc>`
3. `Plugins`' installations and settings
4. `Vimscript` defines functions to streamline common tasks such as setting a title in a Python file

## Mappings

To map some key, say, `dd` to `\`, we could do `map \ dd`. We could then `\` to delete the current line.

To map in **only one mode**, we could do:

- `nm[ap]`: map in *normal* mode
- `im[ap]`: map in *insert* mode
- `vm[ap]`: map in *visual* mode
- `cm[ap]`: map in *command* mode

The following enables `<C-d>` to delete a line under both *normal* and *insert* modes:

```vim
:nmap \ dd
:imap \ <Esc>ddi
```

To unmap `dd` from `\`, do `unmap \`.

If we define:

```vim
map \ dd
map - \
```

Because Vim mapping is **recursive** by default, we could then `-` to delete the current line.

Because some plugins define new mappings, there are cases when recursive mappings bring in accidental conflicts. Thus, we should **always use non-recursive** over recursive mappings.

To create a **no**n-**re**cursive mapping under **n***ormal* mode, do `nnoremap <space> zz`, after which pressing `Space` centers current line on the screen.

To summarize, these are **non-recursive** mappings:

- `no[remap]`: map in all modes
- `nn[oremap]`: map in *normal* mode
- `ino[remap]`: map in *insert* mode
- `vn[oremap]`: map in *visual* mode
- `cno[remap]`: map in *command* mode

### Leader Key (See [explanation](https://learnvimscriptthehardway.stevelosh.com/chapters/06.html#leader) from [Learn Vimscript the Hard Way](https://learnvimscriptthehardway.stevelosh.com))

After we define a `<leader>` key, we could define mappings combining the leader key:

```vim
let mapleader=','
inoremap <leader>w <Esc>:w<cr>
```

The leader key is `,` and we could now `,w` to save.

p.s.: `<cr>` is carriage return (`<Enter>` or `<Return>`).

## Plugins

We can use a plugin manager to manage plugins which would make Vim more customizable and powerful.

### Plugin Manager

There are many plugin managers for Vim/NeoVim, I switched from singled-threaded [*Vundle*](https://github.com/VundleVim/Vundle.vim) to multi-threaded [*vim-plug*](https://github.com/junegunn/vim-plug) since installing and updating plugins in parallel save much time.

### Plugin installation

To add a plugin using [vim-plug](https://github.com/junegunn/vim-plug), just put the Github repo after `Plug`, between call begin and end:

```vim
call plug#begin('~/.vim/plugged')
Plug 'mhinz/vim-startify'
call plug#end()
```

### How to search for plugins

1. You know what you need, then search on Google
2. You don't know what you need, but randomly browse on [vimawesome](https://vimawesome.com)

### Useful Plugins

Below are some useful plugins, which you can learn how to use through these [videos in Chinese](https://www.imooc.com/learn/1129), searching on Google, or reading corresponding documentation:

- start `nvim` with a fancy screen: [vim-startify](https://github.com/mhinz/vim-startify)
- customize your `colorscheme` to your favorite: `colo[rscheme] {your favorite}`. Personally I liked: [gruvbox](https://github.com/morhetz/gruvbox), [hybrid](https://github.com/w0ng/vim-hybrid), [solarized](https://github.com/altercation/vim-colors-solarized), [molokai](https://github.com/tomasr/molokai), etc.
- beautify status and tab lines: [vim-airline](https://github.com/vim-airline/vim-airline)
- display indentation levels with thin vertical lines: [indentline](https://github.com/yggdroot/indentline)
- file explorer as tree: [nerdtree](https://github.com/scrooloose/nerdtree)
- fuzzy file finder: 1. [fzf](https://github.com/junegunn/fzf) is a really good command-line fuzzy finder, and in Vim you could use [fzf.vim](https://github.com/junegunn/fzf.vim). 2. more traditional and is less powerful: [ctrip.vim](https://github.com/ctrlpvim/ctrip.vim). I prefer `fzf` b/c of its blazing speed.
- jump to any character instantly on screen: [vim-easymotion](https://github.com/easymotion/vim-easymotion)
- overview of file structure: [majutsushi/tagbar](https://github.com/majutsushi/tagbar)
- change, delete, or add quotes/parentheses: [vim-surround](https://github.com/tpope/vim-surround)
- find and replace in multiple files: [far.vim](https://github.com/brooth/far.vim)
- highlight different words simultaneously: [lfv89/vim-interestingwords](https://github.com/lfv89/vim-interestingwords)
- code completion: 1. [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim) is a new tool by a Chinese frontend pro but needs to install nodejs before installation. 2. [Shougo/deoplete.nvim](https://github.com/Shougo/deoplete.nvim) does a similar job but I feel the user experience of coc is better
- format code: [sbdchd/neoformat](https://github.com/sbdchd/neoformat)
- lint code: [w0rp/ale](https://github.com/dense-analysis/ale)
- comment code: [tpope/vim-commentary](https://github.com/tpope/vim-commentary)
- easily align code: [junegunn/vim-easy-align](https://github.com/junegunn/vim-easy-align)
- easier look on parentheses: [luochen1990/rainbow](https://github.com/luochen1990/rainbow)

These are great plugings to combine Git and Vim:

- the best Git wrapper in Vim: [tpope/vim-fugitive](https://github.com/tpope/vim-fugitive) could do the following commands: `:G[status]`, `:Gblame`, `:Gedit` for a try
- git diff in the gutter (sign column): [airblade/vim-gitgutter](https://github.com/airblade/vim-gitgutter)
- git commit browser: [junegunn/gv.vim](https://github.com/junegunn/gv.vim)

### Plugin customization

To customize installed plugins, please read the official Github README(linked above for each plugin I recommended) and customize according to your needs.

## My .vimrc

This is [my `init.vim`](https://github.com/franklinqin0/dotfiles/blob/master/nvim/init.vim) for NeoVim.

## Useful Pages

- a clean and well-documented `.vimrc`:[The Ultimate Vim configuration: vimrc](https://github.com/amix/vimrc)
- a Vim rookie could use [SpaceVim](https://spacevim.org/), but personally I hate black box
- a really good book if you want to read more about Vim: [Practical Vim](https://isidore.co/calibre/get/pdf/5334)

## Coda

While so many editors/IDE's became favorable and extinct, Vim has been the world's best editor over almost 30 years. Vim/NeoVim are used by so many developers and the community is actively pushing forward many new features and plugins. Remeber: it is never a waste of time to learn Vim, and practice makes perfect.

This is the 2nd of totally 2 blogs I wrote about Vim. In the [next blog](Tmux), I will write about `tmux`.
