---
title: Verify the Sources of Uncertainty in ICP
date: 2022-01-10
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - research
  - IDP
publish: false
---

## Sources of Uncertainty

The following sources of uncertainty are mentioned in Stein ICP[^1]:

- initial pose uncertainty
- sensor noise
- partial overlap
- wrong convergence (multiple local minima of the cost function)
- under-constrained or ill-posed cases, e.g. long featureless corridors or rotational symmetric objects such as bottles that admit infinite solutions
  - epistemic uncertainty: intrinsic to the problem, in the alignment of an under-constrained object where there is ambiguity in the matching, uncertainty relates to the geometry of the object
- NEW: ambiguous environment, initial condition, and occlusion
- ???: OOD
  - diff env or diff objects
  - soln: binary classifier?

## Verification

Source point cloud:  
<img src="/idp/source_point_cloud.png" alt="source" width=50% class="medium-zoom">

Target point cloud:  
<img src="/idp/target_point_cloud.png" alt="target" width=50% class="medium-zoom">

Original Uncertainties:  
<img src="/idp/original_uncertainties.png" alt="target" width=50% class="medium-zoom">

### Sensor Noise

```py
# add sensor noise to source (and target) point cloud
s_noise = np.random.normal(0, 0.7, s_arr.shape[0])
s_arr[:, 0] += s_noise
t_noise = np.random.normal(0, 0.7, t_arr.shape[0])
t_arr[:, 0] += t_noise
```

<img src="/idp/source_x_0_7.png" alt="source point cloud, x add N(0, 0.7) noise" width=50% class="medium-zoom">

<img src="/idp/source_target_x_0_7.png" alt="source and target point cloud, x add N(0, 0.7) noise" width=50% class="medium-zoom">

### Initial Pose Uncertainty

```py
# uniform initialization for (x, y, z, roll, pitch, yaw)
# x from [-0.8, 0.8] to [-8, 8]
from_ = torch.tensor([-8, -0.5, -0.1, -0.1753/4, -0.1753/4, -0.1753]).to(device)
to_ = torch.tensor([8, 0.5, 0.1, 0.1753/4, 0.1753/4, 0.1753]).to(device)
```

<img src="/idp/init_x_times_10.png" alt="init x range * 10" width=50% class="medium-zoom">

```py
# yaw from [-0.1753, 0.1753] to [-1.753, 1.753] (10 to 100 deg)
from_ = torch.tensor([-0.8, -0.5, -0.1, -0.1753/4, -0.1753/4, -0.1753*10]).to(device)
to_ = torch.tensor([0.8, 0.5, 0.1, 0.1753/4, 0.1753/4, 0.1753*10]).to(device)
```

<img src="/idp/init_yaw_times_10.png" alt="init yaw range * 10" width=50% class="medium-zoom">

### Partial Overlap

```py
s_arr = s_arr[-7501:] # just the cone
```

<img src="/idp/last_7501_cones.png" alt="last 7501 points = cone" width=50% class="medium-zoom">

<img src="/idp/partial_overlap_source_keep_last_7501.png" alt="source has just the cone" width=50% class="medium-zoom">

```py
t_arr = t_arr[40000:] # first cone + second whole (cone & base)
```

<img src="/idp/target_del_first_40k.png" alt="target_del_first_40k" width=50% class="medium-zoom">

<img src="/idp/partial_overlap_target_del_40k.png" alt="target left with first cone + second whole (cone & base)" width=50% class="medium-zoom">

### Under-constrained or Ill-posed Cases

```py
t_arr = t_arr[-7501:]
s_arr = s_arr[-7501:]
```

KDE plot:  
<img src="/idp/underconstrained_two_cones_kde.png" alt="target left with first cone + second whole (cone & base)" width=50% class="medium-zoom">

Samples plot:  
<img src="/idp/underconstrained_two_cones_samples.png" alt="target left with first cone + second whole (cone & base)" width=50% class="medium-zoom">

Measure uncertainty: neg log likelihood, calibration error

## Questions

Any GPU?

1. How to correct the sources of uncertainty?

For initial _pose uncertainty_, depends on algorithm. No (explicit) initial pose uncertainty

Related: where do the initializations come from? Depends on dataset and real-life env.

```py
from_ = torch.tensor([-0.8, -0.5, -0.1, -0.1753/4, -0.1753/4, -0.1753]).to(device)
to_ = torch.tensor([0.8, 0.5, 0.1, 0.1753/4, 0.1753/4, 0.1753]).to(device)
```

<!-- For _partial overlap_, not sure  -->

Regarding _wrong convergence_ in Censi 2007[^2]: ICP can converge to a local minimum out of the attraction area of the ‘true’ solution. It is essentially **unavoidable**. In fact, an iterative method cannot be complete, as there are situations in which two equally likely solutions exists. This kind of error is very hard to model, because global convergence results do not exist for ICP.  
No corresponding action to correct this?

Related: _multiple local minima of the cost function_ vs. _under-constrained or ill-posed cases_  
Latter causes the former, former inevitable?

Detect _under-constrained or ill-posed cases_ by checking if Fisher information matrix is degenerate: [^5]

2. Should we differ btw _Sensor White Noise_ and _Sensor Bias Noise_? [^3]

Sensor White Noise: each point measured in a point cloud is affected by an independent random sensor noise of centimetric magnitude which is a function of point depth and beam angle.

Sensor Bias Noise: the observed points share common errors that stem from: temperature drift effect, i.e. stability of the laser; observed material; incidence and beam angles resulting in large bias; or wrong calibration, e.g. a distortion of 0.22 degrees of the scan point clouds due to intrinsic calibration process.

Regarding _occlusion completion_, haven't verified yet. 1. partial overlap vs. occlusion 2. solution: unsupervised learning, autoencoder [^4]

## Symbolic AI Paper[^6]

## References

[^1]: Stein ICP
[^2]: An accurate closed-form estimate of ICP’s covariance (Andrea Censi)
[^3]: A New Approach to 3D ICP Covariance Estimation (Martin Brossard, Silvére Bonnabel, and Axel Barrau)
[^4]: Unsupervised Point Cloud Pre-training via Occlusion Completion (Hanchen Wang, Qi Liu, Xiangyu Yue, Joan Lasenby, Matt J. Kusner)
[^5]: A. Censi, “On achievable accuracy for range-ﬁnder localization,” in Proc. of the IEEE Int. Conf. on Robotics and Automation (ICRA), 2007.
[^6]: Learning Symbolic Failure Detection for Grasping and Mobile Manipulation Tasks (Patrick Hegemann, Tim Zechmeister, Markus Grotz, Kevin Hitzler and Tamim Asfour)
