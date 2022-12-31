---
title: How to Use Vim
date: 2020-01-01
categories:
  - study
tags:
  - tech
next: vim_customize
publish: false
---

This blog both spreads the holiness of `Vim` and keeps a reminder of useful commands for myself.

This is the 1st of totally 2 blogs about Vim. And this is the [next blog](vim_customize).

<!-- more -->

## My Previous Experience

In my junior year, I took the course _Computer Architecture and Systems Programming_. I started to use Vim because I hated the only other option for an non-GUI editor: Nano. I didn't seriously wrote my `.bashrc`, `.vimrc`, and `tmux.conf` till the following summer. However, my Vim skills plateaued afterwards, since there weren't many scenarios to force me to use Vim, and I was sufficiently happy with VSCode/Sublime Text/IntelliJ.

When I worked at GS, I used `less` more than `Vim`. There were few times requiring my Vim skills to edit files on a server, but not enough to be more familiar with it. Though I was busy with work, I always wanted to refresh my skills on Vim when I get time.

Now is the time!

## Why Care About Editor

You might spend $\frac{2}{3}$ of your waking hours coding, and you might spend $\frac{2}{3}$ of your coding time in your editor. Thus, you might want to twitch your editor to make half of your day happy and efficient. Vim is the perfect suit: completely customizable, blazingly fast, and super geeky.

## Why Vim

Vim's philosophy conincides with geeks': **keyboard is faster and more powerful than mouse**. I envy the those on YouTube who could just type Vim commands and my eyes couldn't follow. To be a geek, I need to first become a Vimer.

## Philosophy of this Blog

I try to cut baloney, if any, and directly explain commands.

I try to go from simple to complex. First we learn basic commands in vanilla Vim, and then we think about customizing in `.vimrc`, at last we can install more plugins and combine Vim with Tmux.

This blog only focuses on the first: basic commands.

## Notes before Proceeding

- You need to practice multiple times till the commands become your physical memory. **Practice makes perfect!**
- `<C-w>` means the command being `Control` key followed by `w`
- `<cr>` is carriage return (`<Enter>` or `<Return>`)
- In `x{y}`, `{y}` is a placeholder
- In `x[y]`, either `x` or `xy` could do the same job

## Vim or NeoVim?

To be frank, both behave essentially the same, but NeoVim's codebase is slightly better than Vim's (read [this blog](https://geoff.greer.fm/2015/01/15/why-neovim-is-better-than-vim)). Now that Vim 8 has caught up and improved, there isn't much difference a user would discern between the two.

But I would still vote for NeoVim.

### Fun Facts

Vim stems from Vi and stands for `Vi IMproved`. The prefix "Neo" in "NeoVim" signifies that NeoVim stems from Vim. But why isn't NeoVim called "Vimim"? However, if were so, how do you pronounce this word? 😬

Note that for NeoVim, you don't type `neovim` to start it, but `nvim`. Could do the following to start NeoVim with `vim`:

```sh
if type nvim > /dev/null 2>&1; then
  alias vim='nvim'
fi
```

## Install and Upgrade NeoVim

For my Mac, I use `brew install nvim` to install NeoVim and `brew upgrade nvim` to upgrade it.

For Unix/Linux systems, could use the corresponding package manager to install and upgrade.

For Windows, could install gVim (GUI Vim), or Cygwin/Cmder for a more powerful terminal, or a Linux distro in MS store and use the terminal.

Personally, I don't like virtual machines nor dual boot.

## Tutorials

Before proceeding, there are some tutorials I recommend:

1. a fun and interactive tutorial written by Vim developers:
   - If you use Vim, in shell do `vimtutor`
   - If you use NeoVim, enter it and do `:Tutor`
     Personally I prefer the 2nd as it's more updated.
2. [a group of tutorials in Chinese](https://github.com/vim-china/hello-vim)
3. [a video tutorial in Chinese](https://www.imooc.com/learn/1129) (where I found very useful and learned most stuff written below)

## Basic Commands

If you don't know a command in Vim, you could always do `:h[elp] {Command}`.

### Start Vim, Insert, Save, and Quit

When you enter Vim with command `vim`, the default mode is _normal_. To start typing, you need to enter the _insert_ mode, and here is how:

By pressing `a`, or `i`, or `o`, you can insert at different places:

| Command | Usage                                        |
| :-----: | :------------------------------------------- |
|   `a`   | **a**ppend _after_ the cursor                |
|   `i`   | **i**nsert _before_ the cursor               |
|   `o`   | **o**pen a new line _below_ the current line |

And here are `A`, `I`, `O`:

| Command | Usage                                        |
| :-----: | :------------------------------------------- |
|    A    | **a**ppend at _end_ of line                  |
|    I    | **i**nsert at _start_ of line                |
|    O    | **o**pen a new line _above_ the current line |

Note that `o` opens a new line _below_ the current line, while `O` _above_.

To go back to _normal_ mode, you just press `esc`.

In _normal_ mode, press:

- to save, `:w` and `Enter`
- to quit, `:q` and `Enter`
- to quit w/o saving, press `:q!` and `Enter`, or just `<S-ZQ>`
- to save and quit, press `:wq` or `:x` and `Enter`, or just `<S-ZZ>`

### Understand the Modes

Most users are surprised that there are so many modes in Vim: _normal_, _insert_, _replace_, _visual_, _command_.

Initially Vim was designed to use both from a command-line interface and as a standalone application in a GUI without a mouse/cursor. The _normal_ mode to navigate around the file. When we users open a file, rather than just editing, more often we _read_, _select_, and _jump to where we want to edit_. _Normal_ mode makes navigation on keyboard much faster, which is why it is still used today after almost 3 decades since its initial release in 1991.

Here are what the four modes are for and how to enter them:

| Mode    | Usage                                       | How to enter                                                                                                                                              |
| :------ | :------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| normal  | navigate and enter commands                 | - default mode when entering vim.<br/> - in other modes, press `esc` or `<C-[>` to come back to this mode                                                 |
| insert  | edit the document, like any other editor    | see [last section](#start-vim-insert-save-and-quit)                                                                                                       |
| replace | replace the current char and go to the next | `R`                                                                                                                                                       |
| visual  | select chars                                | - `v`, select from current char<br/> - `<C-v>`, select a block using `hjkl`<br/> - `<S-v>`, select the whole line, could then `hjkl` to select more lines |
| command | execute commands                            | `:`                                                                                                                                                       |

### Common Commands under _insert_ Mode

also works in shell:

- `<C-h>`, delete prev char
- `<C-w>`, delete last word
- `<C-u>`, delete from current position to start of line

### Common Commands under _command_ Mode (prefixed with `:`)

- `set nu[mber]`: set line number
- `syntax on`: turn on syntax highlighting
- `vs`: vertical split
- `sp`: horizontal split
- `% s/foo/bar/g`: **s**ubstitute **foo** with **bar** **g**lobally (see more in [How to substitute](#how-to-substitute))
- `<C-d>`: see possible completions
- `<C-p>`: show the last command

### How to Move Your Cursor around in _Normal_ Mode

Again, the default mode of Vim is _normal_, under which there are so many cool commands to navigate the file!

---

#### Move $\leftarrow$, $\downarrow$, $\uparrow$, $\rightarrow$

Vim uses `hjkl` becauses they are the keys your right hand could reach the fastest. They become pretty intuitive once I get used to them.

Move by one char:

- `h`: $\leftarrow$
- `j`: $\downarrow$
- `k`: $\uparrow$
- `l`: $\rightarrow$

Move down 20 lines: `20j`.

#### move between words

`w` or `W` (**w**ord) moves to the **start** of next _word_

`e` or `E` (**e**nd) moves to the **end** of next _word_

`b` or `B` (**b**ack) moves to the **start** of last _word_

The difference between the three lowercase and respective capitalized commands above is how you define a _word_:

- the lowercase command sees a word delimited by **non-alphanumeric char**
- the capitalized command sees a word delimited by **space**

So the capitalized commands move faster than the lowercase ones.

Most times, I just use `w` and `b`.

#### move to a char on the current line

- `f{char}` (**f**ind): move to the next \<char\>
- `t{char}` (**t**ill): move to the char before \<char\>

Despite search successful or not, could press `;` to go to the **next** and `,` to go to the **last**.

To search for a **prev char**, could `F<char>`, which is equivalent to `f<char>` then `,`.

#### move to the start/end of current line

- `0`: first char
- `^`: first non-whitespace char

To move to the end of current line, could:

- `$`: last char
- `g_`: last non-whitespace char

Personally, I use `0` and `$` most often. To avoid remembering `^` and `g_`, I would press `0` and then `w` to move to the first non-whitespace char, and press `$` and then `b` to move to the last non-whitespace char.

#### move between sentences/paragraphs (not used often)

- `(` or `)`: between sentences
- `{` or `}`: between paragraphs

#### move to start/end of document and last edit

- `gg`: start of document
- `G`: end of document

#### move back/forward

- `<C-o>`: jump back
- `<C-i>`: jump forward

#### move to a line given the line number

Given the line number, `:{n}` or `{n}G` moves to line `n`.

#### move to the head/middle/bottom of a page

On a **page**,

- `H` (**H**ead): head
- `M` (**M**iddle): middle
- `L` ( **L**ow): bottom

#### move pages up/down

Move by _half_ page:

- `<C-u>` (**U**p): $\uparrow$
- `<C-d>` (**D**own): $\downarrow$

Move by _full_ page:

- `<C-b>` (**B**ackward): $\uparrow$
- `<C-f>` (**F**orward): $\downarrow$

Move by _one_ line **without moving the cursor**:

- `<C-e>`: $\downarrow$
- `<C-y>`: $\uparrow$

#### jump to _any character_ instantly on screen

See [vim-easymotion](https://github.com/easymotion/vim-easymotion) in [How to Customize Vim](vim_customize).

---

### How to Copy and Paste

- `y`ank: copy
- `p`ut: paste after
- `P`ut: paste before

Examples:

- `yw`: copy from current cursor to word end
- `yiw` copy the **inner word**
- `yaw`: delete **a word**, which includes whitespace char after the word
- `yy`: copy a line
- `{n}yy` or `y{n}y`: copy `n` lines
- `{n}p`: paste after the cursor `n` times
- `{n}P`: paste before the cursor `n` times

In _visual_ mode, `y` stores the deleted the content in clipboard(or unnamed register). See more in [text object](#text-object) and [register](#register).

### How to Delete

`d` is the delete operator.

`x` deletes char **under** the cursor; `{n}x` deletes `n` chars **under and after** the cursor. `X` deletes a char **before** the cursor; `{n}X` deletes `n` chars **before** the cursor.

Examples:

- `dw`: delete from current cursor to word end
- `diw`: delete the **inner word**
- `daw`: delete **a word**, which includes whitespace char after the word
- `dd`: delete a line
- `{n}dd` or `d{n}d`: delete `n` lines

In _visual_ mode, and both `x` and `d` store the deleted the content in clipboard(or unnamed register). See more in [text object](#text-object) and [register](#register).

### How to replace, change(, and substitute)

Compared to `d`elete, in _normal_ mode, more often we `r`eplace, `c`hange, and `s`ubstitute.

- `r` replaces a char; `R` enters _replace_ mode
- `s` cuts **char** under the cursor and enters _insert_ mode; `{n}s` cuts **`n` char(s)** and enters _insert_ mode; `S` cuts **line** and enters _insert_ mode
- `c` equals to `d`elete and `i`nsert; `cw` deletes a word and enters _insert_ mode (similar for `ciw` and `caw`)

### How to search

`set hls` to highlight search; `set incsearch` to increment search.

`/` searches forward; `?` searches backward.

`n` jumps to next match; `N` jumps to last match.

If on a word, could jump to the same **next** word by `*` and to the same **last** word by `#`.

### How to substitute

`:{range} s/{pattern}/{string}/{flags}`

`{range}` specifies the range of substitution. E.g., `10,20` means line 10 to 20. `%` means all content in the file

`s` stands for _substitute_.

`{pattern}` is the text to substitute and could be regex.

`{string}` is the target text.

common `{flags}` include:

- `g`lobally substitute
- `c`onfirm whether or not substitute
- `n`umber reports the number of matches but not substitute

examples:

- `1,6 s/self/this/g`: globally substitute all `self` with `this` from line 1 to 6
- `% s/self//n`: reports number of matches on total number of lines
- `:% s/\<abc\>/def/g`: only substitutes the word `abc` but not words that contain it

To substitute matches in multiple files, see [far.vim](https://github.com/brooth/far.vim) in [How to Customize Vim](vim_customize).

### Undo and Redo

In _normal_ mode,

- `u`: undo
- `<C-r>`: redo

## Buffer, Window, Tab

These three words may have different meanings in Vim than in other context.

### Buffer

A **buffer** in Vim is an _open instance of a file_, but may not necessarily be visible on the current screen.

The following two commands can use `Tab` for auto-completion:

- `:e {buffer_name}`: open a new file and store into a buffer
- `:b {buffer_name}`: open a buffer with name `{buffer_name}`

Other common commands:

- `:ls`: list all buffers
- `:b {n}`: jump to the `n`th buffer
- `:bd` or `bdelete`: close a buffer
- `:bp` or `:bpre` or `:bprev` or `:bprevious`: jump to the `prev`ious buffer
- `:bn` or `bnext`: jump to the `next` buffer
- `:bf` or `:bfirst`: jump to the `first` buffer
- `:bl` or `:blast`: jump to the `last` buffer

### Window

A **window** in Vim is a _viewport onto a single buffer_. Within a single Vim session, a buffer can be viewed in multiple windows, and a window could view multiple buffers.

`W` in the following commands stands for "window".

- `<C-W>s` or `:sp[lit]`: horizontally split
- `<C-W>v` or `:vs[plit]`: vertically split

`:sp` or `:vs` opens the same file in a new window; `:sp {another_file_name}` opens another file in a horizontally split new window.

`:q` quits a window; `:q!` or `<S-ZQ>` quits a window without saving.

To **switch between windows**:

- `<C-w>w`: next
- `<C-w>h`: $\leftarrow$
- `<C-w>j`: $\downarrow$
- `<C-w>k`: $\uparrow$
- `<C-w>l`: $\rightarrow$

To **move windows**:

- `<C-w>H`: $\leftarrow$
- `<C-w>J`: $\downarrow$
- `<C-w>K`: $\uparrow$
- `<C-w>L`: $\rightarrow$

To **resize windows**:

- `<C-w>=` makes all windows equal lengths and heights
- `<C-w>_` maximizes current window's height
- `<C-w>|` maximizes current window's width
- `{n}<C-w>_` sets current window's height to `n` lines
- `{n}<C-w>|` sets current window's width to `n` columns

### Tab

A tab in Vim is _a collection of one or more windows_. **Tab** is not used very much if screen is big enough for multiple windows. We could just understand the basic commands:

- `tabe[dit] {file_name}` or `tabn[ew] {file_name}`: open a new file
- `<C-w>T`: move the current window to a new tab
- `:tabc[lose]`: close the current tab and all the windows in it
- `:tabo[nly]`: keep only the current tab and close all other tabs

To switch between tabs:

- `:tabn[ext] {n}` or `{n}gt`: tab `n`
- `:tabn[ext]` or `gt`: next tab
- `:tabp[revious]` or `gT`: previous tab

## Text Object

Similar as class as object in OOP, Vim has **object**, but on text. Editing on text objects is definitely more efficient than on single chars.

In _normal_ mode, to operate on a text object: `{number}{operator}{text object}`.

`{number}` is the number of times the `{operator}` needs to be executed.

`{operator}` is the operator to execute, such as `v`iew, `d`elete, `c`hange, `y`ank(copy), `p`aste.

`{text object}` could be: `w`ord, `s`entence, `p`aragraph, `"` for text in quotes, `(` for text in parentheses etc.

## Register (will use "reg" instead)

When we `x`, `d`elete or `y`ank(copy), the content is stored into an unnamed reg.

### Store into A Named Reg

Could use `"{reg}` to specify the reg name. If not specified, then content is stored into an unnamed reg.

Examples:

- `:reg a`: show text stored in reg `a`
- `"0yy`: `y`ank the current line to reg `0`
- `"ayiw`: `y`ank an `i`nner `w`ord to reg `a`
- `"bdd`: `d`elete current line and stores into reg `b`
- `"0p`: paste text stored in reg `0`

### Other Common Regs

Common regs by default:

- `0`: store yanked text
- `+`: store to system clipboard to yank/paste text outside Vim
- `%`: current file name
- `.` text inserted last time

## Macro

Macro in Vim is a set of commands to run on texts. It comes handy when lots of text are run with same set of commands. These are the steps:

1. `q{reg}`: record commands to a reg. For example, `qa` stores commands to reg `a`.
2. Edit with a set of commands
3. `q`: end recording
4. `@{reg}`: replay the macro, however many times you want (could enter _visual_ mode before replay)

For simple examples, could see [this video in Chinese](https://www.imooc.com/video/19455/0).

## Autocomplete

We programmers always need the autocomplete feature in IDE to help us code better and faster. There are 3 common commands:

- `<C-n><C-p>`: complete word
- `<C-x><C-f>`: complete file name
- `<C-x><C-o>`: complete code (needs to: 1. `:filetype on`: turn on check for file type. 2. Install plugins for specific programming language)

In the dropdown list, `<C-n>` to go down and `<C-p>` to go up.

## How to type Chinese in Vim

To type Chinese in Vim on Mac, I found an answer [here](https://www.v2ex.com/t/338262#r_4013304), which uses `caps lock` when using Chinese input method to type in English.

Simply put, could switch the input method back to English.

## Useful tricks

1. Change "ba" to "ab": move the cursor to "b", `x` to cut the char "b" and store into an unnamed reg, `p`aste after current char "a" to change to "ab"
2. If we have `:set autoindent`, copied some text from web, but paste in Vim by `<Ctrl-v>` or `<Cmd-v>`, we might get pasted text with wrong indentation. To solve the problem, under _normal_ mode, we could do one of the following:

   - `:set paste`, paste by `<Ctrl-v>` or `<Cmd-v>`, and `:set nopaste`
   - `:set clipboard=unnamed` and `p`

3. Under _normal_ mode:

- `~`: change case of letter
- `gi`: go to the position of last edit
- `zz` centers current line on the screen
- `zt` makes current line at top of screen
- `zb` makes current line at bottom of screen

## Cliffhanger

The [next blog](vim_customize) focuses on how to customize your `.vimrc`.
