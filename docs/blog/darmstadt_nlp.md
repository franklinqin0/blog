---
title: Natural Language Processing at TU Darmstadt
date: 2020-12-10
categories:
  - study
tags:
  - tech
publish: false
---

Notes on NLP course at TU Darmstadt.

<!-- more -->

## Definition

- **Token:** A sequence of characters that is treated as a single group (i.e., words and punctuation)
- **Type:** A “type” is the form or spelling of the token (including words and punctuation) independently of its specific occurrences in a text. Mind that “type” is highly ambiguous and thus has different meanings in other contexts!
- **Vocabulary:** The vocabulary of a text is the _set_ of tokens it uses
- **corpora:** large bodies of linguistic data

## Information Retrieval

Information retrieval (IR) is **finding** material (usually **documents**) of an **unstructured** nature (usually text) that satisfies an **information need** from within **large collections** (usually stored on computers).

- **information need:** State (of a person) of requiring information for solving an actual problem (e.g.: get rid of mice without hurting them). Also called intent
- **query:** Textual representation of the information need, e.g. as entered into a search engine
- **relevance:** Property of a document with respect to a particular information need. The task of IR is to retrieve relevant documents
- **relevance feedback:** Information about the actual relevance of retrieved documents given by the user of an IR system to the system
- **IR evaluation:** Measuring the quality of an IR system’s performance
- **parts of speech:** word classes or lexical categories
- **part-of-speech tagging:** The process of classifying words into their parts of speech (POS)
- **tagset:** the collection of part of speech tags used

The **term frequency** $tf_{t,d}$ of term $t$ in document $d$ is defined as the number of times that $t$ occurs in $d$.

large number of times in a single document $\rightarrow$ more relevant

Relevance does not increase proportionally with term frequency

$$
td_{t, d}=\left\{\begin{array}{ll}
1+\log _{10} tf_{t, d} & \text { if } tf_{t, d}>0 \\
0 & \text { otherwise }
\end{array}\right.
$$

**Document frequency** $df_{t}$ is the number of documents that $t$ occurs in.

rare terms that occurs in one document but not others make it informative

$$
idf_{t}=\log _{10}\left(\frac{N}{df_{t}}\right)
$$

log transformation for both term frequency and document frequency

|               | Relevant             | Non-relevant         |
| ------------- | -------------------- | -------------------- |
| Retrieved     | true positives (TP)  | false positives (FP) |
| Not retrieved | false negatives (FN) | true negatives (TN)  |

There are different linguistic clues for determining word classes and categories in general:

- morphological clues: the internal structure of a word, e.g., _-ness_ and _-ment_
- syntactic clues: the syntactic relation of a word to other words within a sentence
- semantic clues: the meaning of a word

Reasoning is **defeasible** when the corresponding argument is **rationally compelling** but **not deductively valid**. The truth of the premises of a good defeasible argument provide support for the conclusion, even though it is possible for the **premises** to be **true** and the **conclusion false**.
