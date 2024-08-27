---
title: Text summarization
nextjs:
  metadata:
    title: Text summarization
    description: Learn about text summarization.
---

## Overview

LLMs excel at performing summarization tasks. Scikit-Ollama provides a summarizer that can be used both as stand-alone estimator, or as a preprocessor (in this case we can make an analogy with a dimensionality reduction preprocessor).

Example:

```python
from skollama.models.ollama.text2text.summarization import OllamaSummarizer
from skllm.datasets import get_summarization_dataset

X = get_summarization_dataset()
summarizer = OllamaSummarizer(model="llama3", max_words=15)
X_summarized = summarizer.fit_transform(X)
```

Please be aware that the `max_words` hyperparameter sets a soft limit, which is not strictly enforced outside of the prompt. Therefore, in some cases, the actual number of words might be slightly higher.

Additionally, it is possible to generate a summary, emphasizing a specific concept, by providing an optional parameter `focus`:

```python
summarizer = OllamaSummarizer(model="llama3", max_words=15, focus="apples")
```

---

## API Reference

The following API reference only lists the parameters needed for the initialization of the estimator. The remaining methods follow the syntax of a scikit-learn transformer.

### OllamaSummarizer
```python
from skollama.models.ollama.text2text.summarization import OllamaSummarizer
```

| **Parameter**   | **Type**            | **Description**                                                                 |
|-----------------|---------------------|---------------------------------------------------------------------------------|
| `model`         | `str, optional`     | Model to use, by default "llama3".                                              |
| `host`          | `str, optional`     | Ollama host to connect to, by default "http://localhost:11434".                 |
| `options`       | `dict, optional`    | Additional options to pass to the Ollama API, by default None.                  |
| `default_label` | `str, optional`     | Default label for failed prediction; if "Random" -> selects randomly based on class frequencies, by default "Random". |
| `max_words`     | `Optional[int], optional` | Maximum number of words to use, by default 15.                                  |
| `focus`         | `Optional[str]`     | Concept in the text to focus on, by default None.                               |