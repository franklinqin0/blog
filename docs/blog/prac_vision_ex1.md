---
title: Prac Vision exercise 1
date: 2023-05-07
sidebar: false
categories:
  - study
tags:
  - tech
  - research
publish: false
---

## Part 1: CMake

Explain the following lines in `CMakeLists.txt`:

`set(CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/cmake_modules/" ${CMAKE_MODULE_PATH})`  
This line enables CMake to search for custom modules in the specified `cmake_modules` directory, while keeping the previously set modules paths intact.

`set(CMAKE_CXX_STANDARD 14)`
`set(CMAKE_CXX_STANDARD_REQUIRED ON)`  
`set(CMAKE_CXX_EXTENSIONS OFF)`  
These lines set the Cmake standard to C++14 as a requirement for the project and disables any compiler-specific extensions to ensure portability across different compilers.

`set(CMAKE_CXX_FLAGS_DEBUG  "-O0 -g -DEIGEN_INITIALIZE_MATRICES_BY_NAN")`  
`set(CMAKE_CXX_FLAGS_RELWITHDEBINFO "-O3 -DNDEBUG -g -DEIGEN_INITIALIZE_MATRICES_BY_NAN")`  
`set(CMAKE_CXX_FLAGS_RELEASE "-O3 -DNDEBUG")`  
`SET(CMAKE_CXX_FLAGS " -ftemplate-backtrace-limit=0 -Wall -Wextra ${EXTRA_WARNING_FLAGS} -march=${CXX_MARCH} ${CMAKE_CXX_FLAGS}")`  
These lines set numerous compiler flags for different build configurations, control the compilation process, such as enabling compiler warnings, disabling debugging mode for release, and disabling optimization during debugging.

## Part 2

### Theory

<img src="/prac_vision/part2_1.png" width=100% class="medium-zoom">

<img src="/prac_vision/part2_2.png" width=100% class="medium-zoom">

### Implementation

See `ex1.h`.

## Part 3: What is SLAM?

- Why would a SLAM system need a map?

  Two reasons:

  1. required to support other tasks. For instance, a map can inform path planning or provide an intuitive visualization for a human operator.
  2. allows limiting the error committed in estimating the state of the robot. In the absence of a map, dead-reckoning would quickly drift over time; on the other hand, using a map, e.g., a set of distinguishable landmarks, the robot can "reset" its localization error by re-visiting known areas (so-called loop closure). Therefore, SLAM ﬁnds applications in all scenarios in which a prior map is not available and needs to be built.

- How can we apply SLAM technology into real-world applications?

  Self-driving cars, augmented reality, flying drones, etc.

- Describe the history of SLAM.

  First is the _classical age_ (1986 - 2004). The classical age saw the introduction of the main probabilistic formulations for SLAM, including approaches based on Extended Kalman Filters, RaoBlackwellised Particle Filters, and maximum likelihood estimation; moreover, it delineated the basic challenges connected to efﬁciency and robust data association.

  The subsequent period, _algorithmic-analysis age_ (2004-2015), saw the study of fundamental properties of SLAM, including observability, convergence, and consistency. In this period, the key role of sparsity towards efﬁcient SLAM solvers was also understood, and the main open-source SLAM libraries were developed.
