---
title: Prac Vision exercise 2
date: 2023-05-19
author: Ziyuan Qin
sidebar: false
categories:
  - study
tags:
  - tech
  - research
publish: false
---

## Part 1: Camera Models

The `test/src/test_ex2.cpp` file tests the 4 camera models: Pinhole, Extended Unified, Double Sphere, and Kannala-Brandt. Given a set of intrinsic parameters, multiple 3D points are normalized, projected to 2D image space and unprojected to 3D world space. If the unprojected coordinates are approximate to the normalized coordinates, then the camera model is said as implemented correctly.

## Part 2: Optimization

In the tutorial, the two examples both demonstrate how to solve a curve-fitting problem.

The first example "Curve Fitting" uses a simple least squares regression model to fit a set of data points.

In the second example "Robust Curve Fitting", two outliers are added. Regularization is added to the robust loss function to downweight the influence of large residuals induced by outliers. The fitted curve is thus closer to the ground truth curve.

## Part 3: Camera Calibration

The command line parameters that `src/calibration.cpp` includes are: `pinhole`, `eucm`, `ds`, `kb4`, corresponding to the four camera models implemented in `include/visnav/camera_models.h`.
