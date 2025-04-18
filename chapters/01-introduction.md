# 1. Introduction

This publication explores how concepts from machine learning can provide valuable frameworks for understanding
challenges in organizational structures and software development processes. By examining the parallels between machine
learning models and organizational/software models, we can gain insights into why certain approaches succeed or fail in
different contexts. The core thesis is that both domains face similar fundamental challenges in balancing simplicity
with complexity, and that principles from one field can illuminate problems in the other.

***

In the realm of machine learning and general modeling, the concepts of underfitting and overfitting represent two
fundamental challenges in creating effective representations of data and predicting future outcomes.

**Underfitting** occurs when a model is too simplistic in its assumptions and structure, leading to a **high bias** and
low variance. This means the model makes strong, often incorrect assumptions about the underlying relationships in the
data, causing it to miss important patterns and resulting in poor performance on both the training data used to build
the model and unseen test data meant to evaluate its generalizability. Such models lack the complexity required to adapt
to the nuances of the data, leading to high error rates and an inability to make accurate predictions.

<figure> <img src="../images/complexity-error-relationship.svg" alt="U-shaped relationship between model complexity and
error rates, showing underfitting (high bias) and overfitting (high variance) regions" width="700" /> <figcaption>Figure
1.1: The U-shaped relationship between model complexity and error rates</figcaption> </figure>

Conversely, **overfitting** arises when a model becomes excessively complex, learning not only the underlying patterns
in the training data but also the noise, random fluctuations, and specific details that are unique to that particular
dataset. This results in a model with **low bias** and high variance, performing exceptionally well on the training data
it has \"memorized\" but failing to generalize effectively to new, unseen data. These models become too tailored to the
specific intricacies of the training set, including its irrelevant information, making them brittle and unreliable for
real-world applications. The key challenge is to strike a balance, creating a model complex enough to capture essential
patterns without learning the noise.

- [Overfitting vs. underfitting (IBM Think)](https://www.ibm.com/think/topics/overfitting-vs-underfitting)

## Purpose and Scope

This publication aims to investigate the validity and evidence base for applying these machine learning concepts as
analogies to describe phenomena in software development models (specifically **time estimation**, which functions as a
predictive model forecasting duration, effort, and cost) and **organizational structures** (which can be viewed as
models representing communication patterns, hierarchies, and responsibilities). Furthermore, it will explore the
implications of these analogies across various dimensions, including:

- Stakeholder preferences
- The influence of organizational size and type on modeling approaches
- Connections to related theoretical concepts like long-tail distributions and dissipative systems theory
- A context-specific case study in medical information systems, considering the idea of "strategic overfitting" and
  modular design

Furthermore, the recent and rapid integration of [**Artificial Intelligence (AI) assistants and agents** into
organizational workflows](https://www.wired.com/story/artificial-intelligence-work-organizational-strategy/) presents a
significant new factor influencing these dynamics. While the core analogies explored in this publication remain
relevant, AI introduces novel complexities and capabilities that challenge traditional models of work, communication,
and structure. The impact of AI will be touched upon contextually within relevant chapters, with a dedicated and
comprehensive exploration provided in Chapter 8.

Underpinning some of these explorations will be ideas related to [system
dynamics](https://en.wikipedia.org/wiki/System_dynamics), feedback, and adaptation, drawing inspiration from fields like
[cybernetics](https://en.wikipedia.org/wiki/Cybernetics) to better understand how these systems regulate themselves and
interact with their environment.

## Core Analogy

The fundamental idea behind this analogy is that both machine learning models and models in software development and
organizational design are attempts to represent complex realities. Organizational structures, often depicted as charts
or processes, are simplified representations of complex social systems. Similarly, software time estimation functions as
a predictive model forecasting outcomes based on available information.

Just as a machine learning model needs to strike a balance between capturing the underlying signal and not fitting the
noise in data, software development models and organizational structures must balance simplicity and complexity to
effectively represent and operate within their respective domains. Approaches like **[Domain-Driven Design
(DDD)](https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/february/best-practice-an-introduction-to-domain-driven-design)**,
particularly relevant in the software context explored in this report, offer specific strategies and patterns focused on
managing domain complexity to achieve this balance. Furthermore, the inherent relationship between an organization's
communication structure and the design of the systems it creates, often referred to as **[Conway's
Law](https://martinfowler.com/bliki/ConwaysLaw.html)**, provides a critical lens for understanding how organizational
models directly impact software architecture, a theme explored within this report.

<figure> <img src="../images/ml-org-comparison.svg" alt="Comparison between machine learning models and organizational
models" width="700" /> <figcaption>Figure 1.2: Analogous concepts between machine learning and organizational
models</figcaption> </figure>

<figure> <img src="../images/organization-complexity-flow.svg" alt="Manifestations of underfitting and overfitting in
organizational decision-making processes" width="700" /> <figcaption>Figure 1.3: Real-world manifestations of
underfitting and overfitting in organizational contexts</figcaption> </figure>

Overly simplistic models (underfitting) might fail to account for critical details and variations. For example, an
underfitted organizational structure might lack necessary specialization or communication channels, leading to
inefficiencies. An underfitted time estimation model might overlook key factors like scope or risks, resulting in
inaccurate predictions.

Conversely, overly complex models (overfitting) could become unwieldy, difficult to manage, and brittle when faced with
new situations. An overfitted organizational structure might manifest as excessive bureaucracy, hindering agility. An
overfitted estimation model might rely too heavily on specific past project details, failing to generalize.

[Back to Table of Contents](../README.md) 
