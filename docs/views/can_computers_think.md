---
title: Can Computers Think?
date: 2020-09-30
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

## Introduction

Artificial Intelligence (AI) is the theory and development of computer systems able to perform tasks normally requiring human intelligence. There are programs that master various board games, predict chemical reactions, recognize images, translate languages, drive cars, etc. In the foreseeable future, AI will only be more prevalent. As computers evolve and perform more difficult tasks, we naturally come up with the leading question: can computers think (like humans do)? By the end of this essay, we will see that this question is no longer worth asking, as humans and computers will gradually be as one.

## Turing Test

Alan Turing, the father of computer science and AI, proposed a test for machine's ability to think: imitation game, or _Turing test_[^1]. The test would rule computer as a human if $C$, a human interrogator, cannot see the difference in response between player $A$, a computer, and player $B$, a human. The decision, based on **observation of responses**, however, has multiple caveats.

Firstly, the calibre of the interrogator is critical: the questions from a 5-year child would be less insightful than those from a philosopher. Secondly, it is possible for $C$ to rule computer as a human (false positive) and human as a computer (false negative). Thirdly, as the interrogator judges by response and the number of possible questions is practically limited, the computer might fool the interrogator if it can remember a manual of limited questions and corresponding answers.

With a sufficiently large number of interrogators and questions, the first and second problems can be resolved when a hypothesis test is conducted to eliminate inaccuracies due to individual differences. The third question, however, would lead to the _Chinese Room_ thought experiment[^2].

## Chinese Room

The Chinese Room is a argument that if a computer inside a room can take an input of Chinese characters from a Chinese speaker outside the room, follow the instructions of a computer program, and produce an output of some Chinese characters as response, it can fool the Chinese speaker, pass the Turing test, and said to be able to "think". But does the computer "think" to produce the seemingly correct answers? Does it literally "understand" Chinese? Or is it merely simulating the ability to understand Chinese? The evident answers to the above questions can safely **refute the effectiveness of Turing test**, which concludes that AI could "think" if producing valid answers.

## Computers cannot "Think" while Submarines can "Swim"

::: theorem
What, we asked, _wasn't_ the perceptron capable of? Dr. Rosenblatt threw up his hands, "Love," he said. "Hope. Despair. Human nature, in short. If we don't understand the human sex drive, why should we expect a machine to?"
::: right
Frank Rosenblatt, inventor of perceptron, the first AI algorithm
:::

Before we proceed with more counter-arguements, let us consider the **definition of "think"**. According to René Descartes, a "thinking thing" is "a thing that doubts, understands, affirms, denies, is willing, is unwilling, and also imagines and has sensory perceptions"[^3]. By his definition, a computer definitely cannot "think", at least in the same way that humans do.

When a computer "listens" to music, "sees" an image, or "drives" a car, it receives input signals in time domain, converts them to frequency domain, uses some clever algorithms such as CNN to classify or predict based on training data. And if the training data is lacking or computing power is insufficient, the model cannot reach an optimal state and produce effective results.

These flaws have happened in real world. In 2015, Google, a forerunner in commercial AI, was blamed for classifying some African Americans in a photo as gorillas[^4]. By 2018, the company still hasn’t fixed the algorithm, but simply blocked its image recognition algorithms from identifying gorillas altogether. Moreover, primates such as "gorilla", "chimp", "chimpanzee", and "monkey" remained blocked on Google Photos. Though there have been many impressive attempts on interpretablity[^5][^6], no simple and quick fix exists for AI algorithms with a black-box nature. Another example is Tesla's autopilot system, which has caused multiple accidents already[^7]. Yet Elon Musk boasted that Tesla engineers would "complete the basics of a completely autonomous driving system this year". Deep learning, the avant-garde algorithm most analogous to human intelligence, would fail occasionally and not necessarily be as flexible as a human being to make logical decision in a novel situation.

Can computers, given enough time, one day become a "thinking thing" by Descartes' definition? To answer this question, we have to acknowledge the **fundamental differences between humans and computers**. Human brains store and process data in the vicinity; have gender, family, lovers, and friends; have emotions like love, hatred, ecstasy, and sorrow. Most importantly, humans can perceive so many different forms of data, namely, sight, sound, smell, taste, touch. In comparison, computers have separate memory (data storage) and CPU (data processing) and can **only perceive data encoded in numbers**. A phone chatbot mimics a female voice but is not female; it loves to eat ice cream but has no taste. There is no fundamental difference between an abacus and a quantum computer in terms of data encoding: numbers. Even the state-of-the-art machine learning algorithms, such as BERT[^8] in natural language processing, YOLO[^9] in object detection, and ShuffleNet[^10] in mobile applications, "think" in binaries and only excel at specific tasks (weak AI).

<!-- Thus, a more valid question than the previous one would be: can computers mimic human brains, i.e., can digital circuits form our nervous systems? This answer, however, has to do with neuromorphic computing -->

**As long as a digital system is essential in the way computers store and process data, human intelligence (strong AI) may never befall, regretably or auspiciously.**

## Brain-computer Interface (BCI)

::: theorem
And eventually even the brain might go. As the seat of consciousness, it was not essential; the development of electronic intelligence had proved that. The conflict between mind and machine might be resolved at last in the eternal truce of complete symbiosis....
::: right
Arthur C. Clarke, "_2001: A Space Odyssey_"
:::

A further question can be naturally raised: if computers can never nurture the human nature and perceive data as we do, can they have "human intelligence"? We provide a **positive answer** with the help of BCI, a bidirectional communication pathway between a wired brain and an external computer. There are non-invasive BCI's such as electroencephalography and transcranial magnetic stimulation, or invasive BCI's such as electrocorticography or intracortical microelectrodes. Neuralink, a company founded by Elon Musk, introduced the new technology of **minimally invasive brain implant** that offers communication access and mobility to patients with spinal cord injuries. With more time and efforts from surgeons, neuroscientists, and engineers, a symbiosis of humans and computers may bring unprecedented ease of acquiring knowledge without typing and conducting communications without talking. Humans can utilize computers' efficiency with repetitive work, while computers can perceive with human senses, process data more than numbers, and thus "think" like/as/with humans. Humans may never need a brain to "think": mind can free itself from matter and memories can be preserved beyond flesh and blood.

Till that day, there would be no need for Turing test, because humans are computers, and computers are humans.

## References

[^1]: A. M. Turing, Computing Machinery and Intelligence,” Mind, vol. LIX, no. 236, pp. 433–460, 1950.‌
[^2]: J. R. Searle, “Minds, brains, and programs,” in Readings in Cognitive Science, 1988, pp. 20–31.
[^3]: René Descartes, Meditations on First Philosophy, translated by J. Cottingham, 1986, pp. 19
[^4]: "Google ‘fixed’ its racist algorithm by removing gorillas from its image-labeling tech - The Verge". Available: https://www.theverge.com/2018/1/12/16882408/google-racist-gorillas-photo-recognition-algorithm-ai
[^5]: C. Olah et al., “The Building Blocks of Interpretability,” Distill, vol. 3, no. 3, Mar. 2018.
[^6]: R. Guidotti, A. Monreale, S. Ruggieri, F. Turini, F. Giannotti, and D. Pedreschi, “A Survey of Methods for Explaining Black Box Models,” ACM Computing Surveys, vol. 51, no. 5, pp. 1–42, Aug. 2018.
[^7]: "Tesla on autopilot had steered driver towards same barrier before fatal crash, NTSB says". Available: https://abcnews.go.com/Business/tesla-autopilot-steered-driver-barrier-fatal-crash-ntsb/story?id=68936725
[^8]: J. Devlin, M.-W. Chang, K. Lee, K. Google, and A. Language, “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding,” 2019.
[^9]: A. Bochkovskiy, C.-Y. Wang, and H.-Y. Liao, “YOLOv4: Optimal Speed and Accuracy of Object Detection,” 2020
[^10]: X. Zhang, X. Zhou, M. Lin, and J. Sun, “ShuffleNet: An Extremely Efficient Convolutional Neural Network for Mobile Devices,” 2017.
