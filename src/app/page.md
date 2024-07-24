---
title: Quick start
---
Scikit-Ollama builds on [Scikit-LLM](https://github.com/iryna-kondr/scikit-llm) and allows you to query large language models running through [Ollama](https://github.com/ollama/ollama) for advanced natural language processing.

Let's see how to use llama3 for zero-shot text classification.

---

## Installation

First of all, install scikit-ollama using the following command:

```bash
pip install scikit-ollama
```

---

{% callout title="Note" %}
Scikit-Ollama requires setting up Ollama to run on your machine. For more information, please refer to the [Ollama setup](/docs/ollama-setup) section.
{% /callout %}

---

## Zero-Shot Text Classification

If you have setup Ollama correctly and loaded a model (e.g. llama3), we are ready to perform zero-shot text classification. We can use scikit-llm's dataset module for showcasing:

```python
from skllm.datasets import get_classification_dataset

# demo sentiment analysis dataset
# labels: positive, negative, neutral
X, y = get_classification_dataset()
```

Scikit-Ollama uses the same syntax as Scikit-LLM and therefore scikit-learn:

```python
from skollama.models.gpt.classification.zero_shot import ZeroShotGPTClassifier

clf = ZeroShotGPTClassifier(model="llama3")
clf.fit(X,y)
clf.predict(X)
```

Scikit-Ollama uses the Client class from the Ollama Python SDK and queries the (by default) local server and return a list of labels.

Like Scikit-LLM, Scikit-Ollama ensures that a valid label is returned. If this is not the case, a label will be selected randomly (label probabilities are proportional to label occurrences in the "training" set).

The implemented approaches don't do actual training but rather so-called in-context-learning. Meaning that the additional information in the prompt is meant to guide the classification.
Furthermore, since the "training" data is not strictly required, it can be fully omitted. The only thing that has to be provided is the list of candidate labels.

```python
from skollama.models.gpt.classification.zero_shot import ZeroShotGPTClassifier

clf = ZeroShotGPTClassifier(model="gpt-4")
clf.fit(None, ["positive", "negative", "neutral"])
clf.predict(X)
```