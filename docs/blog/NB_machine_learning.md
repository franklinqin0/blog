Too messy. Need to restructure.

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

### Bias & Variance Errors

[What to do when your training and testing data come from different distributions](https://www.kdnuggets.com/2019/01/when-your-training-testing-data-different-distributions.html)

### Data Imbalance

[Class Imbalance & Missing Labels](https://www.kdnuggets.com/2019/11/tips-class-imbalance-missing-labels.html)

## READ

[https://lionbridge.ai/articles/6-types-of-neural-networks-every-data-scientist-must-know/]()

[Alibaba Redis](https://developer.aliyun.com/learning/course/15/detail/39)

[Alibaba RL](https://tianchi.aliyun.com/specials/promotion/aicamprl?spm=5176.14154004.J_1266466330.4.31fe5699pG0gvu)

https://cs231n.github.io/convolutional-networks/

[detailed overview of optimizers and their development](https://ruder.io/optimizing-gradient-descent)

[Tensors for Beginners 7: Linear Maps](https://youtu.be/dtvM-CzNe50)

[Xavier initialization](https://www.deeplearning.ai/ai-notes/initialization)

[optuna](https://optuna.readthedocs.io/en/stable/tutorial/index.html)

[Tensorboard tutorial](https://pytorch.org/tutorials/intermediate/tensorboard_tutorial.html)

[Autograd](https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html)

[spline](https://www.analyticsvidhya.com/blog/2018/03/introduction-regression-splines-python-codes)

[different losses](https://heartbeat.fritz.ai/5-regression-loss-functions-all-machine-learners-should-know-4fb140e9d4b0)

[Sentiment Analysis series](https://github.com/bentrevett/pytorch-sentiment-analysis)

## Watch

[Andrew Ng Case Studies](https://youtu.be/xxHkbWMILjI)
[Deep RL](https://youtu.be/lvoHnicueoE)

[GS - Orthogonal Matrix](https://youtu.be/0MtwqhIwdrI?t=548)

[Jump Point Search](https://www.youtube.com/watch?v=NmM4pv8uQwI)

## PyTorch

### Foundations

[Pytorch 网络构造](https://zhuanlan.zhihu.com/p/53927068)

### `witj torch.no_grad()` vs. `requires_grad`

`with torch.no_grad()` is a context manager and is used to prevent calculating gradients in the following code block.  
Usually it is used when you evaluate your model and don’t need to call `backward()` to calculate the gradients and update the corresponding parameters. Also, you can use it to initialize the weights with `torch.nn.init` functions, since you don’t need the gradients there either.

`requires_grad` on the other hand is used when creating a tensor, which should require gradients. Usually you don’t need this in the beginning, as all parameters which require gradients are already wrapped in `nn.Modules` in the `nn` package. You could set this property e.g. on your input tensor, if you need to update your input for example in an _adversarial training_ setup.

### `eval`

`eval()` from `nn.Module`
Sets the module in evaluation mode.

This has any effect only on certain modules. See documentations of particular modules for details of their behaviors in training/evaluation mode, if they are affected, e.g. Dropout, BatchNorm, etc.

This is equivalent with `self.train(False)`.

### Back Propagation

- `optim.zero_grad()` clears old gradients from the last step (otherwise you’d just accumulate the gradients from all loss.backward() calls).
- `loss.backward()` computes the derivative of the loss w.r.t. the parameters (or anything requiring gradients) using backpropagation.
- `opt.step()` causes the optimizer to take a step based on the gradients of the parameters.

### Transposed Convolution

- [Transposed Convolution Demystified](https://towardsdatascience.com/transposed-convolution-demystified-84ca81b4baba)
- [What is Transposed Convolution](https://towardsdatascience.com/what-is-transposed-convolutional-layer-40e5e6e31c11)
- [Checkerboard Artifacts](https://distill.pub/2016/deconv-checkerboard/)

### Autoencoder

For each image input, the autoencoder just tries to reproduce the same image as output. The difficulty behind is that the autoencoder has to go through a **low dimensional bottleneck**, which we call the **latent space**. In other words, the autoencoder should learn to represent all the input information in the low dimensional latent space; it learns to compress the input distribution. To make our model learn to reproduce the input, we use the mean squared error between our input pixels and the output pixels as the loss function. For this loss we do not need any labels!

AutoEncoder 形式很简单, 分别是 encoder 和 decoder, 压缩和解压, 压缩后得到压缩的特征值, 再从压缩的特征值解压成原图片

用 decoder 的信息输出看和原图片的对比,
还能用 encoder 来看经过压缩后, 神经网络对原图片的理解. encoder 能将不同图片数据大概的分离开来.
这样就是一个无监督学习的过程.

### VAE

[Understanding Variational Autoencoders](https://towardsdatascience.com/understanding-variational-autoencoders-vaes-f70510919f73)

### Batch Normalization

Machine learning methods tend to work better when their input data consists of uncorrelated features with zero mean and unit variance. When training a neural network, we can preprocess the data before feeding it to the network to explicitly decorrelate its features; this will ensure that the first layer of the network sees data that follows a nice distribution. However even if we preprocess the input data, the activations at deeper layers of the network will likely no longer be decorrelated and will no longer have zero mean or unit variance since they are output from earlier layers in the network. Even worse, during the training process the distribution of features at each layer of the network will shift as the weights of each layer are updated.

The authors of [^1] hypothesize that the shifting distribution of features inside deep neural networks may make training deep networks more difficult. To overcome this problem, [^1] proposes to insert batch normalization layers into the network. At training time, a batch normalization layer uses a minibatch of data to estimate the mean and standard deviation of each feature. These estimated means and standard deviations are then used to center and normalize the features of the minibatch. A running average of these means and standard deviations is kept during training, and at test time these running averages are used to center and normalize features.

It is possible that this normalization strategy could reduce the representational power of the network, since it may sometimes be optimal for certain layers to have features that are not zero-mean or unit variance. To this end, the batch normalization layer includes learnable shift and scale parameters for each feature dimension.

### Dropout

Dropout [^2] is a technique for regularizing neural networks by randomly setting some features to zero during the forward pass. While training, dropout is implemented by only keeping a neuron active with some probability p (a hyperparameter), or setting it to zero otherwise. The Dropout technique would help your Neural Network to perform better on test data.

### Vanishing Gradient Problem

- If weights are initialized with very high values, the term $Xw+b$ becomes significantly higher and with activation function such as $tanh$, the function returns value very close to $-1$ or $1$. At these values, the gradient of $tanh$ is very low, thus learning takes a lot of time.

- If weights are initialized with low values, it gets mapped to around 0, and the small values will kill gradients when backpropagating through the network.

## Explanable AI

https://christophm.github.io/interpretable-ml-book/
https://github.com/lopusz/awesome-interpretable-machine-learning
https://stats.stackexchange.com/questions/349319/resources-on-explainable-ai

## References

[^1]: Sergey Ioffe and Christian Szegedy, "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift", ICML 2015.

[^2] Srivastava et al, "Dropout: A Simple Way to Prevent Neural Networks from Overfitting", 2014
