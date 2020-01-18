---
layout: post
title: How to Customize Vim
create_date: 2019-12-03 00:00 +0800
update_date: 2019-12-30 17:30 +0800
categories: tech
excerpt: Write our own .vimrc!
---

Following the [last article]({{ site.baseurl }}/Vim-commands) about how to use Vim w/o any customization or plugin, this article talks about how to customize Vim for better personal usage by writing a `.vimrc`.

In Unix systems, we could create a hidden file (starting with `.`): `vim ~/.vimrc`. In Windows, we set value of environmental variable `$MYVIMRC` and `vim $MYVIMRC`.

In `.vimrc`, we don't need `:`. Here is a simple `.vimrc`:
```Vim
set number                             " display line number
syntax on
set pastetoggle=<F2>                   " press F2 to when paste
set hlsearch                           " highlight search results
set incsearch                          " show matches while typing pattern
set foldmethod=indent                  " set fold method

" some useful mappings
let mapleader=','
let g:mapleader=','

inoremap jj <Esc>`^
inoremap <leader>w <Esc>:w<cr>
noremap <leader>w :w<cr>

nnoremap <silent> [b :bprevious<CR>
nnoremap <silent> [n :bnext<CR>

```

There are basically 4 parts in a `.vimrc`:
1. Settings such as line numbers and colorscheme. To see what can be set, search by `:h option-list`
2. Mappings such as `jj` for `<Esc>`
3. Plugins ???
4. Vim script defines functions to streamline common tasks such as setting a title in a Python file

## Mappings
To map some key, say, `dd` to `\`, we could do `map \ dd`. We could then `\` to delete the current line.

To map in **only one mode**, we could do:

- `nm[ap]`: map in *normal* mode
- `im[ap]`: map in *insert* mode
- `vm[ap]`: map in *visual* mode
- `cm[ap]`: map in *command* mode

The following enables `<C-d>` to delete a line under both *normal* and *insert* modes:

```Vim
:nmap \ dd
:imap \ <Esc>ddi
```

To unmap `dd` from `\`, do `unmap \`.

If we define:

```Vim
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

```Vim
let mapleader=','
inoremap <leader>w <Esc>:w<cr>
```

The leader key is `,` and we could now `,w` to save.

p.s.: `<cr>` is carriage return (`<Enter>` or `<Return>`).

## Plugins

We can use a plugin manager to manager plugins to make Vim more customizable and powerful.

### Plugin Manager
There are many plugin managers for Vim/NeoVim, I switched from singled-threaded [*Vundle*](https://github.com/VundleVim/Vundle.vim) to multi-threaded [*vim-plug*](https://github.com/junegunn/vim-plug) since installing and updating plugins in parallel save much time.

The installation steps are written on *vim-plug*'s [Github page](https://github.com/junegunn/vim-plug). To add a plugin, just put the Github repo after `Plug`, between call begin and end:

```Vim
call plug#begin('~/.vim/plugged')

Plug 'mhinz/vim-startify'

call plug#end()
```

### How to search for plugins
1. Google
2. go to [vimawesome](https://vimawesome.com) and search

### Useful Plugins
Below are some useful plugins, which you can learn how to use through these [videos in Chinese](https://www.imooc.com/learn/1129), searching on Google, or reading corresponding documentation:
- start `nvim` with a fancy screen: [vim-startify](https://github.com/mhinz/vim-startify)
- customize your `colorscheme` to your favorite: `colo[rscheme] {your favorite}`. Personally I liked: [gruvbox](https://github.com/morhetz/gruvbox), [hybrid](https://github.com/w0ng/vim-hybrid), [solarized](https://github.com/altercation/vim-colors-solarized), [molokai](https://github.com/tomasr/molokai), etc.
- beautify status and tab lines: [vim-airline](https://github.com/vim-airline/vim-airline)
- display indentation levels with thin vertical lines: [indentline](https://github.com/yggdroot/indentline)
- file explorer as tree: [nerdtree](https://github.com/scrooloose/nerdtree)
- fuzzy file finder: 1. [fzf](https://github.com/junegunn/fzf) is a really good command-line fuzzy finder, and in Vim you could use [fzf.vim](https://github.com/junegunn/fzf.vim). 2. more traditional and in my opinion is less powerful: [ctrip.vim](https://github.com/ctrlpvim/ctrip.vim). I prefer `fzf` b/c of its blazing speed.
- jump to any character on screen: [vim-easymotion](https://github.com/easymotion/vim-easymotion)
- change, delete, or add quotes/parentheses: [vim-surround](https://github.com/tpope/vim-surround)
- find and replace in multiple files: [far.vim](https://github.com/brooth/far.vim)
- python-mode
- lfv89/vim-interestingwords
- neoclide/coc.nvim   Shougo/deoplete.nvim
- sbdchd/neoformat
- w0rp/ale
- tpope/vim-commentary

Vim + Git:
- the best Git wrapper in Vim: tpope/vim-fugitive Gstatus Gblame Gedit
- airblade/vim-gitgutter
- junegunn/gv.vim

airblade/vim-gitgutter

Useful Pages:
- [The Ultimate Vim configuration: vimrc](https://github.com/amix/vimrc)
- SpaceVim
- https://github.com/spf13/spf13-vim
- PegasusWang/vim-config

- Practical Vim

While so many editors/IDE's became favorable and extinct, Vim has been the world's best editor over almost 30 years. Vim/NeoVim are used by so many developers and the community is actively pushing forward many new features and plugins. Remeber: it is never a waste of time to learn Vim, and practice makes perfect.







