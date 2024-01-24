---
title: Prac Vision exercise 3
date: 2023-05-27
author: Ziyuan Qin
sidebar: false
categories:
  - study
tags:
  - tech
  - research
publish: false
---

## Part 2: Epipolar Constraint

Derive the computation of the essential matrix from the transformation between two cameras.

The following is based on Prof. Cremers' course _Multiple View Geometry_, on slide 7 in the lecture "Reconstruction from Two Views: Linear Algorithms".

In the first camera, camera parameters ($K = I$) is known and there is no rotation or translation. There is only projection with unknown depth $\lambda_1$. From the first to the second frame, there is a camera rotation $R$ and translation $T$ followed by a projection. Thus:

$$
\lambda_1 x_1 = X, \quad \lambda_2 x_2 = R X + T
$$

Inserting the 1st equation into the 2nd:

$$
\lambda_2 x_2 = R \left(\lambda_1 x_1\right) + T
$$

Now remove the translation by multiplying with $\widehat{T}$ ($\widehat{T} \equiv T \times v$):

$$
\lambda_2 \widehat{T} x_2 = \lambda_1 \widehat{T} R x_1
$$

Because $x_2$ is orthogonal to $\hat{T} x_2$ and thus $x_2^{\top} \hat{T} x_2 = 0$, projection onto $x_2$ gives the **epipolar constraint**:

$$
x_2^{\top} \widehat{T} R x_1 = 0
$$

Or:

$$
x_2^{\top} E x_1 = 0
$$

where **essential matrix** $E = \widehat{T} R$.

## Part 4: Bag-of-Words for Place Recognition

### What's the difference between `match_all` and `match_bow` in `src/sfm.cpp`? What does `num_bow_candidates` parameter control?

The main difference between the `match_all` and `match_bow` functions is the approach used for feature matching and inlier filtering.

- `match_all` performs brute-force matching and RANSAC inlier filtering for all possible non-stereo image pairs.
- `match_bow` uses the Bag-of-Words (BoW) approach for feature matching and inlier filtering. It constructs BoW vectors for each image, queries the BoW database to retrieve candidate images, and performs matching and RANSAC filtering on these candidates.

The `num_bow_candidates` parameter controls the number of candidate images considered in BoW matching. It specifies the top N most similar images retrieved from the BoW database for matching and inlier filtering.

### What would be the number of candidate pairs for 2 × 1000 images for these two functions?

The number of candidate pairs excludes stereo pairs because they have the same timestamp.

For $2 \times 82$ images:

`match_bow`:  
Successfully matched 458 out of 3649 image pairs with a total of 23896 inlier feature matches (43850 total). New total of matched image pairs is 3649.

`match_all`:  
Successfully matched 1001 out of 13284 image pairs with a total of 43994 inlier feature matches (109579 total). New total of matched image pairs is 13284.

For $2 \times 1000$ images:

`match_bow`:  
There should be no bigger than `1000 x (num_bow_candidates-1) x 2` candidate pairs.

`match_all`:  
There should be `1000 x 999 x 2` candidate pairs.
