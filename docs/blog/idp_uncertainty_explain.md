---
title: Literature Review on Uncertainty Estimate and Interpretability/Explainability
date: 2022-12-13
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - research
publish: false
---

## Unceratinty

Unceratinty: the lack of confidence for each output

- Epistemic uncertainty: uncertainty due to a lack of knowledge, stemming from observing only a subset of all possible data points
- Aleatoric uncertainty: captures inherent stochasticity in the dataset, for example due to points that lie on the decision boundary between two classes

In ICP[^1], sources of uncertainty include: initial pose uncertainty, sensor noise, partial overlap, multiple local minima of the cost function, and under-constrained or ill-posed cases, e.g. long featureless corridors or rotational symmetric objects such as bottles that admit infinite solutions.

- epistemic ???: intrinsic to the problem, in the alignment of an under-constrained object where there is ambiguity in the matching, uncertainty relates to the geometry of the object.

According to [^2], Uncertainties are epistemic, if the modeler sees a possibility to reduce them by gathering more data or by refining models. Uncertainties are categorized as aleatory if the modeler does not foresee the possibility of reducing them.

## Interpretability vs. Explainability

In [^3], interpretability, explainability, and the state-of-the-art examples are reviewed.

Interpretability of ML systems is "the ability to explain or to present in understandable terms to a human" [^5].

Interpretable ML focuses on designing models that are inherently interpretable. Explainable ML tries to provide **post hoc** explanations for existing **black box** models [^4].

Interpretability raises the question "How does the model work?"; whereas explanation methods try to answer "What else can the model tell me?"

<img src="/idp/taxonomy_interpretable_explainable.png" alt="A taxonomy of interpretable and explainable ML techniques" width=100% class="medium-zoom">

## Explanation

Feature importance estimation:

1. gradient-based methods: only applicable to differentiable models, such as NN; fast computation
2. methods based on sensitivity analysis: quantify a model’s sensitivity to changes in the input, such as LIME, SHAP, Kernel SHAP; slow to compute, as large numbers of model evaluations are necessary to assess a model’s sensitivity
3. methods that measure the change in model confidence when removing input features: mask parts of the input and measure the model’s resulting change in conﬁdence
4. mimic models: train interpretable models that mimic black-box model

**Cxplain**

## Counterfactual Explanations

Try to answer: Why this prediction was made instead of another one?

Such techniques focus on producing _contrastive_ and _actionable local_ explanations.

Interpretability community: how input variables must be modiﬁed to change a model’s output without making explicit causal assumptions [^8].

According to [^7], CEs should have the following properties:

- Minimal Perturbation
- Realistic Explanation
- Unambiguous Explanation
- Realistic or Actionable Perturbation
- Run Time of the Algorithm (suﬃciently quickly)

**CLUE**

## References

[^1]: Stein ICP
[^2]: Aleatory or epistemic? Does it matter?
[^3]: Interpretability and Explainability: A Machine Learning Zoo Mini-tour
[^4]: C. Rudin, “Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead,” Nature Machine Intelligence, vol. 1, no. 5, pp. 206–215, 2019.
[^5]: F. Doshi-Velez and B. Kim, “Towards a rigorous science of interpretable machine learning,” 2017. arXiv:1702.08608.
[^6]: Z. C. Lipton, “The mythos of model interpretability,” Queue, vol. 16, no. 3, pp. 31–57, 2018.
[^7]: Generating Interpretable Counterfactual Explanations By Implicit Minimisation of Epistemic and Aleatoric Uncertainties
[^8]: Sandra Wachter, Brent Mittelstadt, and Chris Russell. Counterfactual explanations without opening the black box: Automated decisions and the GDPR. Harvard Journal of Law & Technology, 31(2), 2018.
