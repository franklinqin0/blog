---
title: Git Notes
date: 2020-10-08
categories:
  - study
tags:
  - tech
publish: false
---

## [Git vs. Svn](https://stackoverflow.com/a/137069)

### Save Credentials for Git

Enable credentials storage in local Git repository:

```sh
git config credential.helper store
```

Enable credentials storage globally:

```sh
git config --global credential.helper store
```

[this answer](https://stackoverflow.com/a/35943882/6421652)

## [Your branch and 'origin/master' have diverged](https://stackoverflow.com/a/19864960/6421652)

```sh
git fetch origin
git reset --hard origin/master
```

## [fatal: refusing to merge unrelated histories](https://www.educative.io/edpresso/the-fatal-refusing-to-merge-unrelated-histories-git-error)

```sh
git pull origin master --allow-unrelated-histories
```

[undo the most recent local commit](https://stackoverflow.com/a/927386)

```sh
git reset HEAD~
```

[delete a branch local+remote](https://stackoverflow.com/a/2003515/6421652)

remote

```sh
git push -d <remote_name> <branchname>
```

local

```sh
git branch -d <branchname>
```

## Git Submodules

```sh
git clone --recursive / --recurse-submodules
git pull —-recurse-submodules
git config submodule.recurse true

git submodule sync --recursive
git submodule update --init --recursive
```

## Delete Branch Locally and Remotely

```sh
# locally
git branch -d <BranchName>

# delete branch remotely
git push origin --delete <BranchName>
```
