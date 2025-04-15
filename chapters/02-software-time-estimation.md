# 2. Underfitting and Overfitting in Software Time Estimation

## 2.1 Analysis of Common Software Time Estimation Models

### COCOMO (Constructive Cost Model)

COCOMO is a well-known regression-based algorithmic technique used for estimating software costs. It employs the size of the project, typically measured in Kilo Source Lines of Code (KSLOC), along with a set of cost drivers, including 5 scale factors and 17 effort multipliers, to estimate the total effort required in person-months.

```mermaid
flowchart TD
    A[Project Size KSLOC] --> D[COCOMO Model]
    B[Scale Factors x5] --> D
    C[Effort Multipliers x17] --> D
    D --> E[Effort Estimation]
    E --> F[Person-Months]
```
```mermaid
flowchart TD
    subgraph "Scale Factors"
    SF1[Precedentedness]
    SF2[Development Flexibility]
    SF3[Architecture/Risk Resolution]
    SF4[Team Cohesion]
    SF5[Process Maturity]
    end
```

```mermaid
flowchart TD
    subgraph "Effort Multipliers"
    EM1[Product Attributes]
    EM2[Platform Attributes]
    EM3[Personnel Attributes]
    EM4[Project Attributes]
    end
```

A potential limitation of COCOMO is that the values of its parameter coefficients are often constant for similar types of projects. This assumption of uniformity might lead to underfitting, as the model may fail to capture the significant variations that can exist between different organizations or even between different projects within the same organization.

<!-- TODO: Add visualization of COCOMO estimation vs actual effort scatter plot -->

The difficulty in establishing a single, universally applicable parametric model suggests an inherent risk of oversimplification. Research indicates that integrating COCOMO with Artificial Neural Networks (ANN) can yield improved results, implying that COCOMO's standalone model might not fully account for the complex relationships between its parameters.

### Function Points (FPs)

Function Points offer a measure of software size that is independent of the programming language or implementation details. This method focuses on quantifying the functionality delivered to the customer by considering five user function types:
- External inputs
- External outputs
- External inquiries
- Internal logical files
- External interface files

Each is categorized by complexity and adjusted using 14 general system characteristics.


```mermaid
mindmap
  root((Function Points))
    (External Inputs)
      [Simple]
      [Average]
      [Complex]
    (External Outputs)
      [Simple]
      [Average]
      [Complex]
    (External Inquiries)
      [Simple]
      [Average]
      [Complex]
    (Internal Logical Files)
      [Simple]
      [Average]
      [Complex]
    (External Interface Files)
      [Simple]
      [Average]
      [Complex]
```

While aiming for an objective measure, the process of defining and weighting these function points involves a degree of subjectivity. This subjectivity, coupled with the risk of developing overly complex models based on limited data or chance occurrences, raises the potential for overfitting. Criticisms of Function Points include its "black box" view of the system, its potential lack of suitability for modern technologies, oversimplified complexity classifications, and the subjective nature of weight assignments [[38]]. These limitations suggest that estimations based on Function Points might become too specific to past projects or individual interpretations, potentially overfitting the data used to derive them and hindering generalization to new projects with different characteristics.

### Planning Poker

Planning Poker is a widely used consensus-based agile estimation technique that employs story points as relative units of effort or complexity. In this method, the development team discusses user stories or tasks, and each member anonymously votes using cards with values from a modified Fibonacci sequence.  The team then discusses any significant discrepancies in the estimates to reach a consensus.

```mermaid
sequenceDiagram
    participant M as Moderator
    participant T as Team Members
    participant C as Consensus

    M->>T: Present User Story
    M->>T: Explain Requirements
    T->>T: Individual Estimation
    Note over T: Each member selects a card
    T->>C: Show Cards Simultaneously
    alt Estimates Differ Significantly
        C->>T: Discuss Differences
        T->>T: Re-estimate
    else Estimates are Close
        C->>M: Record Final Estimate
    end
```

While Planning Poker fosters team collaboration and shared understanding, its reliance on abstract units like story points, which are not directly tied to time or resources, can lead to underfitting. The process also carries the risk of "groupthink" or pressure to conform to certain estimates, potentially overlooking individual complexities or risks. Research indicates that accurately estimating hours using Planning Poker can be challenging, as it is more effective for relative comparisons. Teams sometimes defaulting to a single value for story points might also indicate an underestimation of the true effort involved. Furthermore, the influence of senior
team members or the desire to avoid conflict can lead to estimates that do not fully reflect the perceived difficulty of a task.

### Expert Judgment

Expert judgment involves leveraging the knowledge and experience of specialists to estimate project details. This approach is particularly useful when empirical data is scarce or for tackling complex, ill-defined problems.

However, expert judgment is highly susceptible to various cognitive biases, which can lead to both underfitting and overfitting:
- Optimism bias might cause experts to underestimate the effort required
- Anchoring bias could lead to estimates being unduly influenced by initial figures
- Overconfidence can result in experts overlooking potential challenges or the need for more detailed analysis, leading to overfitting.

Conversely, experts might rely too heavily on specific past experiences that are not entirely relevant to the current project, potentially leading to overfitting by incorporating unnecessary details or inflating estimates. Studies have shown a significant degree of inconsistency in expert judgment-based effort estimates, highlighting the unreliability of this method when used in isolation.



## 2.2 Evidence for Underfitting in Classical Models

Classical software estimation models often exhibit a tendency towards underfitting by failing to fully capture the unique complexities and variability inherent in software projects. Many hidden complexities are frequently overlooked during the initial estimation phase, leading to an oversimplified view of the project lifecycle, including:

- Time required for thorough testing
- Code reviews
- Deployment
- Integration
- Context-switching between different tasks or projects
- Impact of team changes and internal controversies
- Increased uncertainty associated with novel work

```mermaid
mindmap
  root((Hidden<br/>Complexities))
    (Testing)
      [Unit Tests]
      [Integration Tests]
      [Performance Tests]
    (Reviews)
      [Code Reviews]
      [Design Reviews]
    (Deployment)
      [Environment Setup]
      [Configuration]
    (Team Dynamics)
      [Context Switching]
      [Team Changes]
      [Internal Discussions]
    (Integration)
      [System Dependencies]
      [API Integration]
      [Data Migration]
```

The common practice of multiplying initial software estimates by a factor (e.g., by 3, as suggested in [[55]]) underscores the widespread recognition that initial estimates tend to be overly optimistic and often fall short of the actual time required.

### Long Tail of Software Project Risks

Furthermore, simplified estimation models often fail to account for the "long tail" of software project risks. The "long tail" refers to the distribution of risks where a large number of less frequent but potentially high-impact events can occur alongside the more common risks.

<!-- TODO: Add visualization of long-tail distribution in software project risks -->

These might include:
- Rare technical glitches
- Unexpected dependencies on other teams or systems
- Significant changes in requirements late in the project

Estimation models that primarily focus on typical tasks and average scenarios often fail to incorporate contingencies for these "long-tail" risks, leading to underestimation of the overall project effort and potential for delays when these unforeseen events materialize.

```mermaid
graph LR
    subgraph "Risk Distribution"
    A[Common Risks] --> B[Medium Risks] --> C[Rare but High-Impact Risks]
    style A fill:#90EE90
    style B fill:#FFB366
    style C fill:#FF6B6B
    end

    subgraph "Examples"
    D[Minor Bugs] --> E[Integration Issues] --> F[Critical System Failures]
    G[Small Delays] --> H[Resource Changes] --> I[Major Requirement Changes]
    style D fill:#90EE90
    style E fill:#FFB366
    style F fill:#FF6B6B
    style G fill:#90EE90
    style H fill:#FFB366
    style I fill:#FF6B6B
    end
```



[Back to Table of Contents](../README.md) 
