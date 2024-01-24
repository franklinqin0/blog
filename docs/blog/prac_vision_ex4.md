---
title: Prac Vision exercise 4
date: 2023-06-11
author: Ziyuan Qin
sidebar: false
categories:
  - study
tags:
  - tech
  - research
publish: false
---

## Part 3: Bundle Adjustment

### What a robust loss function such as Huber does and why we should use it here, but not in the calibration from sheet 2?

A robust loss function like Huber loss is less sensitive to outliers than the squared error loss. In bundle adjustment, the distance from feature corners (detected by keypoint detector BRIEF) and corresponding 3D landmarks is to be minimized. However, outliers exist due to wrong matches not yet filtered and wrongly triangulated landmarks. Thus, the loss function may converge to some local minimum and loss function needs to be robust towards outliers.

In calibration from sheet 2, the corners of April grid are known and correspondences are exact. Due to lack of outliers, a robust loss function is not needed.

## Part 4: Outlier Filtering

### Describe the different implemented criteria to detect outliers. For each criterion, what do you think might be the cause of such an outlier and why do we need to remove it?

Reprojection error: distances between detected 2D corners and reprojection of 3D landmarks on images are larger than a set threshold.

1. `OutlierReprojectionErrorHuge`: reprojection error is too huge.
2. `OutlierReprojectionErrorNormal`: though reproject error is normal, the landmark is only removed if no other type of outliers is present.
3. `OutlierCameraDistance`: distance to a camera is too small.
4. `OutlierZCoordinate`: z-coord in some camera frame is too small.

## Part 5: Building a Map

### Provide a screenshot for the completed map

<img src="/prac_vision/complete_map_match_all.png" alt="Complete map" width=100% class="medium-zoom">

### How many cameras can be added to the map? How long does it take? Which parts of the pipeline are taking the most time?

The map has 164 cameras and 4711 landmarks with 23935 observations. It took less than a minute on my virtual machine. Bundle adjustment is the most time-consuming part.

### Do you have any suggestions on how to maybe speed up the map building process?

If recent `n` frames are used rather than all frames are considered, then only some, rather than all, camera poses and landmarks are added to the map, thus much faster. This is realized in visual odometry and SLAM.

### Try again using match bow. What difference do you observe?

<img src="/prac_vision/complete_map_match_bow.png" alt="Complete map" width=100% class="medium-zoom">

`match bow` had a shorter matching time and also shorter map-building time compared to `match all`. It is a trade-off since the map built with match bow also had fewer cameras than one with `match all` (145 vs. 164). This may be caused by matching with a bag of word method missing some image pairs. However, overall results are not far behind those of match all, which suggests it is still a good method when prioritizing map building time.
