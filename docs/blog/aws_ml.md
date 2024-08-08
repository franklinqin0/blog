---
title: AWS Machine Learning
date: 2024-07-04
sidebar: "auto"
categories:
  - study
tags:
  - tech
  - research
publish: false
---

## About the Exam

180 min, ~65 total questions  
multiple choice (pick best answer) * multiple-response (pick 3 of 5)  
no partial credit  
score 100-1000, 750 to pass

## Data Collection

### Concepts

| Traits of good data                        | Traits of bad data                               | Why                                                |
|--------------------------------------------|--------------------------------------------------|----------------------------------------------------|
| Large datasets.                            | Small datasets (less than 100 rows).             | Generally, more data means better model training.  |
| Precise attribute types, feature rich.     | Useless attributes, not needed for solving problem at hand. | Models need to train on important features.         |
| Complete fields, no missing values.        | Missing values, null fields.                     | Models can skew results when data points are missing. |
| Values are consistent.                     | Inconsistent values.                             | Models like clean and consistent data.              |
| Solid distribution of outcomes.            | Lots of positive outcome, few negative outcomes. | Models cannot learn with skewed distributions of outcomes. |
| Fair sampling                              | Biased sampling                                  | Models will skew results with biased data.          |

rule of thumb: at least 10 times as many data points as the total number of features.

congregate the data into a single data repository.

### General Data Terminology

dataset: a collection of data, the data we use in ML.  
dataset = input data = training/testing data

schema: info needed to interpret the data, including attributes names and their assigned data types.  
structured data: has a defined schema (SQL)  
unstructured data: no defined schema or structural properties (PDFs, images, audios, videos, majority of collected data)  
semi-structured data: unstructured for relational data, but has some organizational structure (NoSQL, CSV, JSON, XML)

databases: store relational data  
data warehouse: collect data in diff sources and formats, process/clean, congregate, analyze using BI tools to find out impt info in the data  
data lake: mass amount of data, no preprocessing, dump and forget

categorial feature: attribute falls into a group/category  
continuous feature: on a number line

text data (corpus data): datasets collected from text
ground truth datasets: data observed, labeled and trusted as truth $\rightarrow$ Amazon SageMaker Ground Truth  
image data: datasets w/ tagged images

### AWS Data Stores

#### Amazon Simple Storage Service (S3)

unlimited data storage that provides object-based storage for any type of data

For ML workflows in AWS (especially SageMaker), S3 is commonly used as the primary storage source for datasets.

#### Relational Database Service (RDS)

relational databases
can choose engine types

#### Dynamo DB

unrelational databases, schema-less, unstructured

#### Redshift

fully-managed, clustered petabyte data warehousing solution that congregates data from other data sources like S3, Dynamo DB, etc. Once in Redshift, can use SQL Client / BI tools to query info.  
Redshift Spectrum: query S3 data  
QuickSight: BI tool to visualize data

#### Timestream

time-series data

#### Document DB

migrate MongoDB data
better performance and scalability than MongoDB on EC2 or on premise

### Helper Tools

#### EMR

EMR: Hadoop cluster ecosystem running on multiple EC2 instances  
pick diff frameworks to include in the cluster  
can run distributed workloads across many EC2 instances w/ petabytes of data

us: store mass amounts of files in distributed filesystem to use as our input data

#### Athena

serverless platform to run SQL queries on S3 data
Redshift spectrum could also do, but Athena has no need for Reshift cluster

## Streaming Data Collection

## Kinesis Data Streams

get data from data producers (application log files, IoT devices)
phy devices that produce streaming data

shard: a container that holds data to send to AWS

data consumer processes data  
EC

## Data Preparation

transform a dataset using diff techniques to prepare it for model training and testing

### Concepts

#### Options for Data Preparation

Ad hoc: SageMaker, Jupyter Notebook  
Reusable: ETL Jobs in **AWS Glue**

### Categorical Encoding

categorical data: qualitative  
continuous data: quantitative

discrete category / group

#### nominal

order does not matter $\rightarrow$

- one-hot encoding
- group similar categories
- map rare values to "others"

#### ordinal

order does matter $\rightarrow$ encode to continuous values

### Text Feature Engineering

tokenize text(corpus) data into byte-sized pieces

#### Bag-of-Words

break up text by white space into single words
$\rightarrow$ statistical representation (table) of these words, infer more info

#### N-Gram

groups of words of size $n$.

BoW equivalent to: n-gram with size=1

#### Orthogonal Sparse Bigram (OSB)

slides the window of size n over the text, and outputs every pair of words that includes the first word in the window.  
encodes not just the tokens seen within a window, but also an indication of number of tokens skipped within that same window.

```text
Raw Text: { “he is a jedi and he will save us” }

OSB, size = 4

{ “he_is”, “he__a”, “he___jedi” }
{ “is_a”, “is__jedi”, “is___and” }
{ “a_jedi”, “a__and”, “a__he” }
{ “jedi_and”, “jedi__he”, “jedi___will” }
{ “and_he”, “and__will”, “and___save” }
{ “he_will”, “he__save”, “he___us” }
{ “will_save”, “will__us” }
{ “save_us” }
```

#### Term Frequency - Inverse Document Frequency (TF-IDF)

term frequency: how frequent does a word appear  
inverse: make common words less meaningful
document frequency: number of documents in which terms occur

(# of documents, # of unique n-grams)

can filter out common words like "the" or "and".

#### Conclusion

n-gram: match whole words / phrases  
OSB: find common word combinations / bigrams  
TF-IDF: which words more impt in documents

#### Two Transformations for Preprocessing

- remove punctuations
- lowercase transformation

#### Cartesian Product Transformation

create a new feature from the combination of two or more text or categorical values.

Example:
| Title                                  | Binding   | Cartesian product of no_punct(Title) and Binding                                      |
|----------------------------------------|-----------|---------------------------------------------------------------------------------------|
| Economics: Principles, Problems, Policies | Hardcover | {"Economics_Hardcover", "Principles_Hardcover", "Problems_Hardcover", "Policies_Hardcover"} |
| The Invisible Heart: An Economics Romance | Softcover | {"The_Softcover", "Invisible_Softcover", "Heart_Softcover", "An_Softcover", "Economics_Softcover", "Romance_Softcover"} |
| Fun With Problems                      | Softcover | {"Fun_Softcover", "With_Softcover", "Problems_Softcover"}                             |


#### Feature Engineering Dates

extracts information from dates and creates new features

```text
Date:
2015-06-17

Encoding:
is_weekend: 0
day_of_week: 2
month: 6
year: 2015
```

### Numerical Feature Engineering

#### Feature Scaling

Change numeric values to the same scale

scaling = feature scaling = normalization

##### normalization

- scale prices to $[0, 1]$
- $x' = \frac{x - \min}{\max - \min}$
- but outliers could exist

##### standardization

- average to 0, use z-score to consider both mean and standard deviation
- $z = \frac{x - \bar{x}}{\sigma}$

#### Binning

group numerical values into categories to reduce the effects of minor observation errors

##### Quantile Binning

bins not uniform with the number of data points  
$\rightarrow$ assign the same number of instances to each bin

can then use one-hot encoding

### Other Feature Engineering

#### Image & Audio Feature Engineering

- Image Feature Engineering
  - image to 0,1 values
- Audio Featuring Engineering
  - sample at equal interval

#### Dataset Formats

- File: load all data from s3 onto training volume
  - Csv, parquet, json, images...
- Pipe: Stream data directly from s3
  - RecordIO-protobuf creates tensors

### Handling Missing Values

#### Missingness Mechanism

- Missing at Random (MAR): not related to the missing data, but it is related to some of the observed data.
- Missing Completely at random (MCAR): nothing to do with its hypothetical value and with the values of other variables.
- Missing Not at Random (MNAR): the missing value depends on the hypothetical value or missing value is dependent on some other variable’s value.

#### How to Handle

- supervised learning: most difficult, can yield best results
- mean, median, mode: quick and easy, results can vary
- drop rows: easiest but can dramatically change datasets

imputation: replace data (first two methods)

### Feature Selection

other than intuitive selection, can also use Principal Component Analysis (PCA): an unsupervised learning algo to reduce the number of features while retaining as much info as possible

### AWS Data Preparation Tools

AWS Glue: ETL or data tranformation processes

