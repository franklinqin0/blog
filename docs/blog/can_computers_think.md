---
title: Can Computers Think?
date: 2020-09-30
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - paper
---

::: theorem
The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.
::: right
Edsger Wybe Dijkstra
:::

<!-- more -->

## Introduction

Artificial Intelligence (AI) is the theory and development of _computer systems able to perform tasks normally requiring human intelligence_. There are programs that master various board games, predict chemical reactions, recognize images, translate languages, drive cars, etc. In the foreseeable future, AI will only be more prevalent. As computers evolve and perform more difficult tasks, we naturally come up with the leading question: **can computers think just as submarines can swim?** By the end of this essay, we will see that this question is trivially positive, as humans and computers will gradually be as one.

## Methods to Test if Computers Can Think

Alan Turing, the father of computer science and AI, proposed a test for machine's ability to think: imitation game, or _Turing test_[^1]. The test would rule computer as a human if $C$, a human interrogator, cannot see the difference in response between player $A$, a computer, and player $B$, a human. The decision, based on **observation of responses**, however, would lead to the _Chinese Room_ thought experiment[^2].

The Chinese Room is a argument that if a computer inside a room can take an input of Chinese characters from a Chinese speaker outside the room, follow the instructions of a computer program, and produce an output of some Chinese characters as response, then it can fool the Chinese speaker, pass the Turing test, and said to be able to "think". But does the computer "think" to produce the seemingly correct answers? Does it literally "understand" Chinese? Or is it merely simulating the ability to understand Chinese? The evident answers to the above questions can safely **refute the effectiveness of Turing test**, which concludes that a computer can "think" if producing valid answers. Thus, even if a computer can **behave** to think as a human, we still cannot say it thinks like a human.

## Computers Cannot "Think"

::: theorem
What, we asked, _wasn't_ the perceptron capable of? Dr. Rosenblatt threw up his hands, "Love," he said. "Hope. Despair. Human nature, in short. If we don't understand the human sex drive, why should we expect a machine to?"
::: right
Frank Rosenblatt, inventor of perceptron, the first AI algorithm
:::

Before we proceed with more counter-arguements, let us consider the **definition of "think"**. According to René Descartes, a "thinking thing" is "a thing that doubts, understands, affirms, denies, is willing, is unwilling, and also imagines and has sensory perceptions"[^3]. By his definition, a computer definitely cannot "think", and may never will, at least in the same way that humans do.

<!--
When a computer "listens" to music, "sees" an image, or "drives" a car, it converts input from sensors into electric signals , uses some clever algorithms such as neural network to classify or predict based on training data. And if the training data is lacking or computing power is insufficient, the model cannot reach an optimal state and produce effective results. -->

In 2015, Google, a forerunner in commercial AI, was blamed for classifying some African Americans in a photo as gorillas[^4]. By 2018, the company still hasn’t fixed the algorithm, but simply blocked its image recognition algorithms from identifying gorillas altogether. Moreover, primates such as "gorilla", "chimp", "chimpanzee", and "monkey" remained blocked on Google Photos. Though there have been some impressive attempts on interpretablity[^5][^6], **no simple and quick fix** exists for AI algorithms with a black-box nature. Another example is Tesla's autopilot system, which has caused multiple accidents already[^7]. Yet Elon Musk boasted that Tesla engineers would "complete the basics of a completely autonomous driving system this year". Deep learning, the avant-garde algorithm most analogous to human intelligence, would **fail occasionally** and not necessarily be as flexible as a human being to make logical decision in a novel situation.

Can computers, given enough time, one day become a "thinking thing" by Descartes' definition? To answer this question, we have to acknowledge the **fundamental differences between humans and computers**. Human brains house neurons and synapses; store and process data in the vicinity; have gender, family, lovers, and friends; have emotions like love, hatred, ecstasy, and sorrow. Most importantly, humans can perceive so many different forms of data, namely, vision, sound, smell, taste, touch. In comparison, computers have separate memory (data storage) and CPU (data processing) and can **only perceive data encoded in numbers**--there is no fundamental difference between an abacus and a quantum computer in terms of digital number encoding. A phone chatbot mimics a female voice but is not female; it loves to eat ice cream but has no taste. Even the state-of-the-art machine learning algorithms, such as BERT[^8] in natural language processing, YOLO[^9] in object detection, and ShuffleNet[^10] in mobile applications, "think" in binaries and only excel at specific tasks (weak AI). If we have not known how to have computers store and process data beyond numbers, how do we expect them to understand Chinese, aesthetics, and human nature?

**As long as digital system is the only way computers store and process data, human intelligence (strong AI) may never befall, regretably or auspiciously.**

Before we attempt to solve a hard problem, it is crucial that we are convinced it is the right problem to be solved. Must we create a novel system to help computers understand sex drive? **If we could bridge the gap between humans and computers, then we can circumvent the problem to create a novel computing system and nurture the human nature, because the synergy of humans and computers must be able to think like humans.**

## Get around with the question - Brain Computer Interface

::: theorem
And eventually even the brain might go. As the seat of consciousness, it was not essential; the development of electronic intelligence had proved that. The conflict between mind and machine might be resolved at last in the eternal truce of complete symbiosis ....
::: right
Arthur C. Clarke, _2001: A Space Odyssey_
:::

Brain Computer Interface (BCI) is a bidirectional communication pathway between a wired brain and an external computer. There are non-invasive BCI's such as electroencephalography and transcranial magnetic stimulation, or invasive BCI's such as electrocorticography or intracortical microelectrodes. Neuralink, a company founded by Elon Musk, introduced the new technology of **minimally invasive brain implant that offers communication access and mobility to patients with spinal cord injuries**. With more time and efforts from surgeons, neuroscientists, and engineers, a symbiosis of humans and computers may bring unprecedented ease of knowing without learning and communicating without talking. Humans can utilize computers' efficiency with repetitive work, while computers can perceive with human senses, process data more than numbers, and thus "think" like/as/with humans. Humans may never need a brain to "think": mind can free itself from matter and memories can be preserved beyond flesh and blood.

Till that day, humans and computers will be a harmonious symbiosis, which would "think" in ways beyond fantasy.

## References

[^1]: A. M. Turing, "Computing Machinery and Intelligence," Mind, vol. LIX, no. 236, pp. 433–460, 1950.‌
[^2]: J. R. Searle, "Minds, brains, and programs," in Readings in Cognitive Science, 1988, pp. 20–31.
[^3]: René Descartes, Meditations on First Philosophy, translated by J. Cottingham, 1986, pp. 19
[^4]: "Google 'fixed' its racist algorithm by removing gorillas from its image-labeling tech - The Verge". Available: [https://www.theverge.com/2018/1/12/16882408/google-racist-gorillas-photo-recognition-algorithm-ai]()
[^5]: C. Olah et al., "The Building Blocks of Interpretability," Distill, vol. 3, no. 3, Mar. 2018.
[^6]: R. Guidotti, A. Monreale, S. Ruggieri, F. Turini, F. Giannotti, and D. Pedreschi, "A Survey of Methods for Explaining Black Box Models," ACM Computing Surveys, vol. 51, no. 5, pp. 1–42, Aug. 2018.
[^7]: "Tesla on autopilot had steered driver towards same barrier before fatal crash, NTSB says". Available: [https://abcnews.go.com/Business/tesla-autopilot-steered-driver-barrier-fatal-crash-ntsb/story?id=68936725]()
[^8]: J. Devlin, M.-W. Chang, K. Lee, K. Google, and A. Language, "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding," 2019.
[^9]: A. Bochkovskiy, C.-Y. Wang, and H.-Y. Liao, "YOLOv4: Optimal Speed and Accuracy of Object Detection," 2020.
[^10]: X. Zhang, X. Zhou, M. Lin, and J. Sun, "ShuffleNet: An Extremely Efficient Convolutional Neural Network for Mobile Devices," 2017.
