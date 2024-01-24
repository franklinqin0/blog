---
title: IDP Model Architecture
date: 2023-04-18
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - research
  - IDP
publish: false
---

## Methods

<img src="/idp/taxonomy_interpretable_explainable.png" alt="A taxonomy of interpretable and explainable ML techniques" width=100% class="medium-zoom">

Counterfactual explanation  
refer to CLUE

## High-level Approach

1. Preprocessing point cloud data: downsampling, or noise removal
2. Train Stein ICP to align point clouds and obtain pose estimation
3. Estimate the uncertainty from distribution of solutions. (TODO: how? entropy?)
4. Train VAE for decoder: train a VAE to learn low-dim latent representation of point cloud data. May need other representations: e.g., voxel grid.
5. Search for counterfactual latent representation
   - replace BNN with Stein ICP
   - change VAE to diffusion (TODO: read diffusion)
6. Reconstruction: use VAE decoder to reconstruct counterfactual point cloud from the counterfactual latent representation
7. Interpretation: compare original and counterfactual point cloud. Analyze the differences in point locations, shapes, or local features

<img src="/idp/CLUE_intuition.png" alt="CLUE intuition" width=100% class="medium-zoom">

<img src="/idp/CLUE_algo.png" alt="CLUE algorithm" width=100% class="medium-zoom">

## Potential Difficulties

- computational resources
- quality of the VAE, the latent representation, the uncertainty estimation method, and the effectiveness of the counterfactual search method
- how to evaluate

## Further Novelties

separate [aleatoric and epistemic uncertainties](idp_uncertainty_explain#unceratinty) (see CLUE Appendix B.2)
