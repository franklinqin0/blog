---
title: Can Computer Think?
date: 2020-09-30
categories:
  - study
tags:
  - tech
  - paper
---

::: theorem
What, we asked, _wasn't_ the perceptron capable of? Dr. Rosenblatt threw up his hands, "Love," he said. "Hope. Despair. Human nature, in short. If we don't understand the human sex drive, why should we expect a machine to?"
::: right
Frank Rosenblatt, the inventor of perceptron, the first AI algorithm
:::

<!-- more -->

Artificial Intelligence (AI) is computer programs that perform tasks normally requiring human intelligence. There are programs that master Go and beat 18-time world champion, predict chemical reactions, recognize images, translate languages, drive cars, etc. In the foreseeable future, AI will only be more prevalent. As computers evolve and perform more difficult tasks, we naturally come up with the leading question: can computers think (like humans)? By the end of this essay, we will see, this question is no longer worth asking, as humans and computers will be one.

Alan Turing, the father of computer science and AI, proposed a test for machine's ability to think: imitation game, or _Turing test_[^1]. The test would rule computer as a human if $C$, a human interrogator, cannot see the difference in response between player $A$, a computer, and player $B$, a human. The decision, based on observation of responses, however, has multiple caveats.

Firstly, the calibre of the interrogator is critical: the questions from a 5-year child would be easier than those from a philosopher. Secondly, it is possible for $C$ to rule computer as a human (false positive) and human as a computer (false negative). Thirdly, the number of possible questions asked by the interrogator is practically limited, so if the computer can remember a manual of limited questions and corresponding answers, it might fool the interrogator.

Of course, the first and second problems can be resolved if there are sufficiently large number of interrogators and questions, so that a hypothesis test can be conducted to eliminate inaccuracies due to individual differences. The third question would lead to the _Chinese Room_ thought experiment[^2].

The Chinese Room is a argument that if a computer can take an input of Chinese characters from a Chinese speaker outside the room, follow the instructions of a computer program, and produce an output of some Chinese characters as response, it can fool the Chinese speaker, pass the Turing test, and said to be able to "think". But does the computer "think" to produce the seemingly correct answers? Does it literally "understand" Chinese? Or is it merely simulating the ability to understand Chinese? The evident answers to the above questions can safely refute the effectiveness of Turing test, which concludes that AI could "think" if producing valid answers.

Before we proceed with more counter-arguements, let us consider the **definition of "think"**. According to René Descartes, a "thinking thing" is "a thing that doubts, understands, affirms, denies, is willing, is unwilling, and also imagines and has sensory perceptions"[^3]. By his definition, a computer definitely can not "think", at least in the same way that humans do.

When a computer "listens" to music, "sees" an image, or "drives" a car, it receives input signals in time domain, converts them to frequency domain, uses some clever algorithms, such as deep learning, to classify or predict results based on training data. And if the training data is lacking or computing power is insufficient, the model cannot reach an optimal state and produce effective results.

These claims can be backed by real-world examples. In 2015, Google, a forerunner in commercial AI, was blamed for classifying some African Americans in a photo as gorillas[^4]. By 2018, the company still hasn’t fixed the algorithm, but simply blocked its image recognition algorithms from identifying gorillas altogether. Moreover, primates such as "gorilla", "chimp", "chimpanzee", and "monkey" remained blocked on Google Photos. Though there have been many impressive attempts on interpretablity[^5][^6], no simple and quick adjustment exists for AI algorithms with a black-box nature. Another example is Tesla's autopilot system which has caused multiple accidents already[^7]. Yet Elon Musk boasted that Tesla engineers would "complete the basics of a completely autonomous driving system this year". The best algorithm we can analog to human intelligence, deep learning, would fail occasionally and not necessarily be as flexible as a human to make logical decision in a novel situation.

Can computers, given enough time, one day become a "thinking thing" by Descartes' definition? To answer this question, we have to acknowledge the fundamental differences between humans and computers. Humans live in a physical world; perceive electromagnetic waves with narrow wavelengths bewteen $400$nm and $780$nm; have gender, family, lovers, and friends; have emotions like love, hatred, ecstasy, and sorrow; most importantly, humans can perceive so many different forms of data, namely, sight, sound, smell, taste, touch. In comparison, computers can only perceive data encoding in numbers. A phone chatbot mimics a female voice but is not female; it loves to eat ice cream but has no taste. There is no fundamental difference between the way an abacus, a mechanical computer, a electrical computer, or even a quantum computer in terms of data encoding: numbers. Even the state-of-the-art machine learning algorithms, such as BERT[^8] in natural language processing, YOLO[^9] in object detection, and ShuffleNet[^10] in mobile applications, "think" in numbers and only excel at specific tasks (weak AI). **Therefore, regretably or auspiciously, human intelligence (strong AI) may never befall as long as a numeric system is essential in the way computers store and process data.**

A further question can be raised naturally: if computers can never nurture the human nature and perceive data as we do, can they have "human intelligence"? We provide a positive answer with the help of brain-computer Interface (BCI), a bidirectional communication pathway between a wired brain and an external computer. There are non-invasive BCI's such as electroencephalography (EEG) that acquires brain wave signals and translates them into useful commands, and transcranial magnetic stimulation (TMS) that translates digital information into electric signals and feeds them to brains via stimulators. Another appraoch is to build an invasive BCI, such as electrocorticography (ECoG) or intracortical microelectrodes. Neuralink, a company founded by Elon Musk, introduced the new technology of minimally invasive brain implant that offers communication access and mobility to patients with spinal cord injuries. With more time and efforts from surgeons, neuroscientists, and engineers, we expect fervently that a symbiosis of humans and computers will bring unprecedented ease of acquiring knowledge without typing and conducting communications without talking.

With such synergy, humans can utilize computers' efficiency with repetitive work, while computers can perceive with human senses, process data more than numbers, and thus "think" like humans. Till that day, there would be no need for Turing test, because humans are computers, and computers are humans.

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
