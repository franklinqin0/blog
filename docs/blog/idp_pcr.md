---
title: Literature Review on Point Cloud Registration
date: 2022-12-02
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - research
  - IDP
publish: false
---

Point cloud registration aims to find a rigid transformation $R$ and $t$ for aligning one point cloud to another.

## Deep learning (DL) based point cloud registration (PCR): an overview

Two categories: correspondence-free or correspondence-based.

### Traditional methods

ICP:

- alternates between **finding the point cloud correspondences** and **solving the least-squares problem** to update a rigid alignment.
- problem: suboptimal result or local minima.

ICP-variants summarized into 6 phases:

1. key point selection
2. matching
3. correspondences wieghting
4. outlier rejection
5. error metric assignment
6. motion estimation

matching metric: point-to-point, point-to-plane, plane-to-plane

In DL PCR, point-to-point most commonly used

### Deep Learning based PCR

#### Correspondence-free methods

pipeline: **regress** rigid motion parameters by searching for the **difference between global features** of two input point clouds

Performance relies on extracted feature descriptors.

Lower limit determined by accuracy, sensitivity to motion, outlier robustness of the features  
Upper limit determined by align module.

When large difference btw 2 input point clouds, perfermance depends on (generalizability of) feature extractor.

#### Correspondence-based methods

four parts:

1. feature extractor
2. matching
3. outlier rejection
4. motion estimation

## Stein ICP for Uncertainty Estimation in Point Cloud Matching

ICP: point estimate for pose

but want to estimate the uncertainty of pose

solution: Stein variational inference framework with gradient based optimization of ICP’s cost function

- non-parametric estimate of the transformation
- model complex multi-modal distributions
- effectively parallelized on a GPU

### Stein ICP

- initialize $K$ Stein particles. Each particle: transformation of a mini-batch sampled from a source cloud to a reference cloud, producing $K$ transformed mini-batches
- all points in each transformed mini-batch, corresponding closest points from a reference cloud are sought and stored in pairs

$$\text{point-to-point}\left(\mathbf{s}_{\mathbf{i}}^{\prime}, \mathscr{R}\right)=\min _{\mathbf{r} \in \mathscr{R}}\left\|\mathbf{r}-\mathbf{s}_{\mathbf{i}}^{\prime}\right\|$$

- mean gradients are estimated for all the matching pairs belonging to each of the $K$ particles

$$\bar{g}\left(\boldsymbol{\theta}_{1: 3}^t, \mathscr{M}^t\right)=\frac{1}{m} \sum_i^m\left(\left(R^t \mathbf{s}_{\mathbf{i}}+\mathbf{u}^t\right)-\mathbf{r}_{\mathbf{i}}\right) \frac{\partial \mathbf{u}^t}{\partial \boldsymbol{\theta}_{1: 3}^t}$$

$$\bar{g}\left(\boldsymbol{\theta}_{4: 6}^t, \mathscr{M}^t\right)=\frac{1}{m} \sum_i^m\left(\left(R^t \mathbf{s}_{\mathbf{i}}+\mathbf{u}^t\right)-\mathbf{r}_{\mathbf{i}}\right) \frac{\partial R^t}{\partial \boldsymbol{\theta}_{4: 6}^t} \mathbf{s}_{\mathbf{i}}$$

- Stein variational gradients are obtained independently for translations and rotations

$\hat{\boldsymbol{\phi}}^*(\mathbf{x})$ approximate steepest direction:

$$\hat{\boldsymbol{\phi}}^*(\mathbf{x})=\sum_{j=1}^K\left[\nabla \log p\left(\mathbf{x}_j\right) k\left(\mathbf{x}_j, \mathbf{x}\right)+\nabla_{\mathbf{x}_j} k\left(\mathbf{x}_j, \mathbf{x}\right)\right]$$

first term: kernel function smooths gradients, is steepest direction for log probability

second term: gradient of kernel function, repulsive term which induces the spread among the particles and prevents them from collapsing to the local modes of the log probability

$$\hat{\boldsymbol{\phi}}^*(\boldsymbol{\theta})= \sum_{j=1}^K\left[-\left(N \bar{g}\left(\boldsymbol{\theta}_j, \mathscr{M}\right)+\nabla_{\boldsymbol{\theta}} \log p\left(\boldsymbol{\theta}_j\right)\right) k\left(\boldsymbol{\theta}_j, \boldsymbol{\theta}\right)\right. \left.+\nabla_{\boldsymbol{\theta}} k\left(\boldsymbol{\theta}_j, \boldsymbol{\theta}\right)\right]$$

- update each particle

Update rule:

$$x_j \leftarrow x_j + \eta \hat{\boldsymbol{\phi}}^*(\mathbf{x})$$

## Iterative Distance-Aware Similarity Matrix (IDAM) Convolution with Mutual-Supervised Point Elimination for Eﬃcient Point Cloud Registration

### IDAM

While many registration methods use **local geometric features** for point matching, ICP uses the **distance** as the only criterion for matching.

Incorporating both **geometric** and **distance** features into the iterative matching process can resolve ambiguity and have better performance.

Similarity score to find point correspondences  
before: **inner product** or **L2 distance** between feature vectors  
now: **learned module** (distance-aware similarity matrix convolution) to compute the similarity score based on the **entire concatenated features** of the two points

### Two-stage point elimination

Efficiency is a major problem for global registration methods. Two-stage point elimination balances performance and eﬃciency.

Point elimination

1. **hard** point elimination

- filter out **individual points** that are **not** likely to be matched with **confidence**
- reduce the computational burden of similarity matrix convolution

2. **hybrid** point elimination

- applied after similarity matrix convolution
- assign low weights to those pairs that are probable to be false positives
- eliminates **correspondence pairs**, not individual points

Design mutual-supervision loss to train these point elimination modules.

## Learning-based Point Cloud Registration for 6D Object Pose Estimation in the Real World (MatchNorm)

success on synthetic datasets, failure on real-world data

### Problem 1

**difference** between the **feature distributions** of the source and target point clouds

Match Normalization: **instance-level scale parameter** in each layer of the **feature extraction** network  
$\rightarrow$ distributions of the two point clouds more concentrated and similar

### Problem 2

Sensitivity of SVD-based **loss function** to the **range of rotation** between the two point clouds

loss function based on the **negative log likelihood** of point correspondences  
$\rightarrow$ improve convergence and lead to better object-level pose estimation accuracy
