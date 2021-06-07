## Classification

Classification is the task of choosing the correct class label for a given input (= instance) based on its features, e.g.:

- Email spam classification
- Categorizing news articles by topic

### Classification variants

- binary (2 classes) vs. multi-class classification (> 2 classes)
  - multi-class problem can be decomposed using binary classifiers
- single-label vs. multi-label classification
  - each instance may be assigned one vs. multiple class labels
- sequence classification
  - a sequence of instances are jointly classified

## READ

[https://lionbridge.ai/articles/6-types-of-neural-networks-every-data-scientist-must-know/]()

[Alibaba Redis](https://developer.aliyun.com/learning/course/15/detail/39)

[Alibaba RL](https://tianchi.aliyun.com/specials/promotion/aicamprl?spm=5176.14154004.J_1266466330.4.31fe5699pG0gvu)

https://cs231n.github.io/convolutional-networks/

[detailed overview of optimizers and their development](https://ruder.io/optimizing-gradient-descent)

[Tensors for Beginners 7: Linear Maps](https://youtu.be/dtvM-CzNe50)

[Xavier initialization](https://www.deeplearning.ai/ai-notes/initialization)

[transposed convolution](https://towardsdatascience.com/what-is-transposed-convolutional-layer-40e5e6e31c11)

[optuna](https://optuna.readthedocs.io/en/stable/tutorial/index.html)

[Tensorboard tutorial](https://pytorch.org/tutorials/intermediate/tensorboard_tutorial.html)

[Autograd](https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html)

[spline](https://www.analyticsvidhya.com/blog/2018/03/introduction-regression-splines-python-codes)

## PyTorch

### `torch.no_grad` vs. `requires_grad`

with `torch.no_grad()` is a context manager and is used to prevent calculating gradients in the following code block.
Usually it is used when you evaluate your model and don’t need to call `backward()` to calculate the gradients and update the corresponding parameters. Also, you can use it to initialize the weights with `torch.nn.init` functions, since you don’t need the gradients there either.

`requires_grad` on the other hand is used when creating a tensor, which should require gradients. Usually you don’t need this in the beginning, as all parameters which require gradients are already wrapped in `nn.Modules` in the `nn` package. You could set this property e.g. on your input tensor, if you need to update your input for example in an _adversarial training_ setup.

vanishing gradient problem, i.e.

- If weights are initialized with very high values, the term $Xw+b$ becomes significantly higher and with activation function such as $tanh$, the function returns value very close to $-1$ or $1$. At these values, the gradient of $tanh$ is very low, thus learning takes a lot of time.

- If weights are initialized with low values, it gets mapped to around 0, and the small values will kill gradients when backpropagating through the network.

`eval()` from `nn.Module`
Sets the module in evaluation mode.

This has any effect only on certain modules. See documentations of particular modules for details of their behaviors in training/evaluation mode, if they are affected, e.g. Dropout, BatchNorm, etc.

This is equivalent with self.train(False).
