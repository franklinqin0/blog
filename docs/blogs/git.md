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
