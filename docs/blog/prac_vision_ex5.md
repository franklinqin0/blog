---
title: Prac Vision exercise 5
date: 2023-06-18
author: Ziyuan Qin
sidebar: false
categories:
  - study
tags:
  - tech
  - research
publish: false
---

## Part 1: Skeleton Code

### Inspect the `next_step` function and describe in the PDF file a workflow for the implemented odometry method

After `load_data`, the `next_step` function processes frames (each frame consists of an image pair from a stereo camera) in time order (timestamp).

The workflow is as follows:

- if `current_frame` is a keyframe

  - stereo matching to find inlier correspondences between the two images
  - project the current landmarks to the image plane using the current locations of the camera
  - find matches between projected landmarks and detected keypoints in the current keyframe
  - localize the camera to update keyframe's pose and set it as current pose
  - add new landmarks from the stereo images
  - remove old cameras and observations
  - optimize the active map with bundle adjustment

- else if `current_frame` is not a keyframe

  - no stereo matching, adding new landmarks, and bundle adjustment
  - landmarks projection, matches finding, and camera localization, and current pose update are still conducted
  - next frame would be chosen as a keyframe if the current number of inliers from inliers from camera localization is below threshold

- The process continues until all frames are processed

## Part 3: Optimization

### What is the difference to the optimize function in `src/sfm.cpp` from the previous exercise?

1. In `odometry`, bundle adjustment is run in a background thread
2. In `odometry`, the function `optimize` only optimizes over camera poses and landmark 3D locations in world frame of **current keyframes**. However, in `sfm`, the optimization is done over all frames.

### What is the functionality of the variables `opt_finished` and `opt_running`? What will happen if we remove them?

These two variables are created as atomic objects, so that inter-thread synchronization is ensured.

We need to use them because optimizing camera poses and landmark locations in current keyframes with bundle adjustment is done in a background thread.

Only after updating these two variables, can a new keyframe be added.
