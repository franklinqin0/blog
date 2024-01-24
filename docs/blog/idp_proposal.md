---
title: IDP Proposal - Explain the Uncertainty
date: 2022-10-17
categories:
  - study
tags:
  - tech
  - research
  - IDP
publish: false
---

## Description of Project

While Deep neural networks (DNNs) have been prevalent in various applications, how these models achieve particular predictions remains hardly explained. Thus, it is crucial for the model to be interpretable - able to explain the decision in understandable terms to humans. In safe-critical situations, such as medical operations and autonomous driving, building not only accurate but also interpretable models allows us to verify model correctness and build trust in the system.

Moreover, neural networks are not well calibrated: they usually suffer from over or under confidence or do not produce uncertainty estimates. To overcome this problem, different approaches to measure and quantify uncertainty in neural network’s prediction have been proposed. In particular, predictive uncertainty is composed of two components: aleatoric uncertainty, caused by inherent noise in the generative process of the data, and epistemic uncertainty, which represents lack of knowledge about model parameters.

Recently, Antorán et al. combine interpretability and uncertainty estimation for trustworthy machine learning systems [^1]. Specifically, it seeks to make small changes to an input to reduce model’s predictive uncertainty. This small change, called Counterfactual Latent Uncertainty Explanations (CLUE) in [^1], explains which input features can be changed to reduce the predictive uncertainty of a probabilistic model, such as Bayesian Neural Network (BNN), whose uncertainty could easily be obtained through its posterior weight distribution.

Our project follows the idea of [^1] to find causes for uncertainty, but instead of attributing uncertainty to input features only, we will analyze the causes of uncertainty from a practical perspective. For instance, when a robot tries to grasp a cup but fails to do so due to large uncertainty, it would try to identify the causes, such as the cup that the robot tries to grasp is occluded by another cup at front. After removing the causes in this scenario, the robot then grasps again with lower uncertainty. We would first model for a classification problem with a toy dataset, in which the causes for uncertainty would be artificially generated, e.g., by object occlusion, initial pose uncertainty, sensor noise, partial overlap, etc. Later on, we could refine our model with a real-world dataset. Our project aim is to build an explanation module to identify the causes for uncertainties in robotic tasks.

## Description of Relationship between Project and Application Area

In various robotics tasks like grasping and manipulation, point cloud registration is used to find a rigid transformation to align one point cloud to another. If visual pipeline is uncertain about the pose estimates and the robot therefore fails to execute the task, the explanation module would try to explain such uncertainty and failures, the robot can then try to eliminate them as much as possible, and achieve tasks with less uncertainty. Thus, the explanation module would help the robot mitigate the causes and achieve successful task execution in various practical circumstances.

## Justification of Choice of Lecture

The carefully chosen math course Integer Optimization covers the fundamentals of integer optimization, in which the variables are constrained to be integers. There exist multiple applications of integer optimization in machine learning. The robustness of a neural network with ReLU activation can be certified as a mixed integer linear program [^2]. The Optimal Classification Tree (OCT) [^3], simpler and more interpretable than CART [^4], uses modern mixed integer optimization techniques to yield the optimal decision tree for axes-aligned splits. In problems we would focus on such as robot grasping, the knowledge of integer programming would help us formulate these problems with more interpretability and certifiable optimality.

## Milestones

### Literature review: 2 months

In order to start our research, a thorough understanding of relevant topics such as point cloud registration, uncertainty, explanation, typical sources of uncertainty for point cloud registration need to be obtained through literature review.

### Verify causes for uncertainty: 1 week

The causes for uncertainty are verified through experiments on some simple point clouds.

### Collect data: 2 weeks

Collecting appropriate data is essential for our research and model performance. We will train and test our model on simple dataset and later on larger and real-world dataset. Depending on whether we need to write our own data loader and preprocess the data, the data collection time can vary about a week more or less.

### Construct model and obtain preliminary results: 2 months

Constructing the model takes trial and error. In order to improve model performance, many possible ideas can be explored, whereas the best will be exploited. This stage would occupy most of our project time due to much model programming and formulae deductions.

### Refine model: 2 weeks

Given the preliminary model, we could attempt to refine it with some further insights, if possible.

### Conduct ablation experiments: 1 week

After the model is done, ablation experiments may need to be conducted to evaluate model performance with and without some model components.

### Check and think about possible further directions: 1 week

In order to guarantee correctness, a final check on data, math and code of model, and conducted experiments is essential. During this process, if further ideas turn up, we could think about possible future research paths.

### Write and submit report: 1 month

To organize the work of past few months, a report for IDP will be written and submitted to my supervisor and advisor.

## Timetable

<img src="/idp/timetable.png" alt="source" width=100% class="medium-zoom">

The timetable according to the milestones is shown above. The project begins on the first day of semester Winter 2022, October 17, and is scheduled to end in late March.

## References

[^1]: Antoran, Javier, et al. "Getting a CLUE: A Method for Explaining Uncertainty Estimates." International Conference on Learning Representations. 2020.
[^2]: Tjeng, Vincent, Kai Y. Xiao, and Russ Tedrake. "Evaluating Robustness of Neural Networks with Mixed Integer Programming." International Conference on Learning Representations. 2018.
[^3]: Bertsimas, Dimitris, and Jack Dunn. "Optimal classification trees." Machine Learning 106.7 (2017): 1039-1082.
[^4]: Breiman L, Friedman JH, Olshen RA, Stone CJ. Classification and Regression Trees. CRC Press; 1984.
