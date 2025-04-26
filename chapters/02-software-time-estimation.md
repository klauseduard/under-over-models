# 2. Underfitting and Overfitting in Software Time Estimation

## Table of Contents
- [2.1 Time Estimation as a Modeling Problem](#21-time-estimation-as-a-modeling-problem)
  - [Bayesian Approaches to Estimation](#bayesian-approaches-to-estimation)
  - [Three-Point Estimation: Practical Uncertainty Modeling](#three-point-estimation-practical-uncertainty-modeling)
  - [Monte Carlo Simulation: Advanced Uncertainty Modeling](#monte-carlo-simulation-advanced-uncertainty-modeling)
- [2.2 Software Estimation Approaches: Analysis Through the Underfitting-Overfitting Lens](#22-software-estimation-approaches-analysis-through-the-underfitting-overfitting-lens)
  - [COCOMO (Constructive Cost Model)](#cocomo-constructive-cost-model)
  - [Function Points (FPs)](#function-points-fps)
  - [Planning Poker](#planning-poker)
  - [Expert Judgment](#expert-judgment)
  - [Estimating AI-Assisted Development: New Uncertainties](#225-estimating-ai-assisted-development-new-uncertainties)
- [2.3 Evidence for Underfitting in Classical Models](#23-evidence-for-underfitting-in-classical-models)
  - [Long Tail of Software Project Risks](#long-tail-of-software-project-risks)

## 2.1 Time Estimation as a Modeling Problem

Software time estimation operates as a predictive model that aims to forecast the duration and effort required to
complete a software development project. Various estimation techniques, including the use of historical data from past
projects, the application of expert judgment, and structured methods like Planning Poker and algorithmic models such as
COCOMO, are employed to create this predictive model.

These methods take into account various inputs, such as the size and complexity of the software, the experience and
skills of the development team, and the technological environment, to produce an estimate of the effort in person-hours
or person-months and the duration of the project. However, these estimation models are inherently subject to various
biases, uncertainties, and the dynamic nature of software development itself.

Factors like evolving requirements, unforeseen technical challenges, and the inherent difficulty in accurately
predicting human effort contribute to the imperfection of these predictive models. Therefore, software time estimation
can be understood as a complex modeling problem that attempts to predict a future outcome under conditions of
uncertainty. This perspective highlights why estimation techniques are susceptible to both underfitting
(oversimplification, missing key risks) and overfitting (overly reliant on specific past data that doesn't generalize).

From an [information theory](https://www.britannica.com/science/information-theory) perspective, software estimation can
be viewed as attempting to model a high-entropy system. As project complexity increases, so does the
[entropy](06-theoretical-concepts.md#63-entropy-and-software-complexity) (uncertainty) within the system, making
accurate prediction inherently more difficult. Estimation models that underfit effectively assume lower entropy than
actually exists in the project, while overfit models mistake random noise in historical data for meaningful patterns.

#### Uncertainty in Novel Domains

In software development, teams face maximum uncertainty when entering entirely new problem domains, implementing
unfamiliar technologies, or building systems without precedent. The uncertainty isn't created by the complexity of
what's been built—it's inherent in the unexplored nature of the work ahead. This perspective challenges the common
assumption that estimation accuracy improves simply by breaking work into smaller components. In novel domains, even
small components carry high uncertainty until the team gains experience and establishes patterns.

### Bayesian Approaches to Estimation

[Bayesian statistics](06-theoretical-concepts.md#64-bayesian-statistics-and-uncertainty-management) offers a promising
framework for addressing software estimation challenges by explicitly modeling and updating uncertainty. Rather than
producing single-point estimates, Bayesian approaches generate probability distributions that quantify the range of
possible outcomes and their likelihoods.

> **Note for readers**: For a more comprehensive explanation of Bayesian statistics and the concepts mentioned in this
> section (such as informative priors, marginal likelihood, and hierarchical modeling), see [Chapter
> 6.4](06-theoretical-concepts.md#64-bayesian-statistics-and-uncertainty-management).

In practice, a Bayesian approach to software estimation involves:

1. **Formulating Prior Distributions**: Initial estimates are expressed as probability distributions rather than single
values. These priors can be derived from historical data, expert knowledge, or both.

2. **Incremental Updating**: As project information emerges (early deliveries, velocity measurements, discovered
complexity), the prior distributions are updated using Bayes' theorem to produce more refined posterior distributions:

   $$P(\text{Duration}|\text{Evidence}) = \frac{P(\text{Evidence}|\text{Duration}) \cdot
   P(\text{Duration})}{P(\text{Evidence})}$$

3. **Explicit Uncertainty Quantification**: Rather than stating "this project will take 3 months," a Bayesian estimate
might express "there's a 50% probability of completion within 3 months, 80% within 4 months, and 95% within 5 months."

<figure> <img src="../images/bayesian-estimation-update.svg" alt="Bayesian Estimation Process - showing how initial
estimates are updated as project evidence accumulates" width="700" /> <figcaption>Figure 2.1a: Bayesian updating of a
project estimate as new information becomes available</figcaption> </figure>

> **Interactive Visualization**: To better understand how Bayesian estimation evolves through a project lifecycle, explore our [interactive Bayesian Project Estimation visualization](../html/bayesian_estimation.html) that demonstrates how probability distributions narrow as confidence increases through different project stages.

Bayesian estimation addresses both underfitting and overfitting in complementary ways:

**Countering Underfitting**:
- Incorporates uncertainty directly into the estimation process
- Allows specification of complex dependencies between variables (relationships between factors like team experience,
  technology complexity, etc.) - see [Complex Dependencies in Ch.
  6.4](06-theoretical-concepts.md#key-bayesian-concepts-explained)
- Can integrate qualitative factors through informative priors (incorporating expert knowledge and subjective judgments
  as starting points) - see [Informative Priors in Ch. 6.4](06-theoretical-concepts.md#key-bayesian-concepts-explained)
- Acknowledges the full range of possible outcomes

**Countering Overfitting**:
- Naturally penalizes overly complex models through the [marginal
  likelihood](https://en.wikipedia.org/wiki/Marginal_likelihood) (statistical evidence) - see [Marginal Likelihood in
  Ch. 6.4](06-theoretical-concepts.md#key-bayesian-concepts-explained)
- Weights new evidence appropriately relative to prior knowledge
- Allows hierarchical modeling that shares information across similar projects (using patterns from past projects to
  inform current estimates) - see [Hierarchical Modeling in Ch.
  6.4](06-theoretical-concepts.md#key-bayesian-concepts-explained)
- Distinguishes between genuine patterns and random noise

While Bayesian methods offer significant theoretical advantages, their practical implementation in software estimation
remains challenging due to:
- The computational complexity of working with full probability distributions
- The difficulty in accurately specifying prior distributions
- The need for specialized statistical knowledge
- Cultural resistance to probabilistic rather than deterministic estimates

Despite these challenges, the increasing availability of probabilistic programming tools and the growing recognition of
uncertainty in software development suggest that Bayesian approaches may become increasingly practical for addressing the fundamental
limitations of traditional estimation techniques, though more empirical validation is needed in industrial settings.

### Three-Point Estimation: Practical Uncertainty Modeling

While full Bayesian approaches offer powerful theoretical frameworks, simpler probabilistic techniques like [three-point
estimation](https://www.tutorialspoint.com/estimation_techniques/estimation_techniques_three_point.htm) provide a
practical middle ground between single-point estimates and comprehensive statistical modeling. These techniques
explicitly acknowledge uncertainty while remaining accessible to teams without statistical expertise.

Three-point estimation stands as a bridge between simplistic point estimates and full probabilistic models. By capturing
three distinct scenarios—optimistic, most likely, and pessimistic—these techniques provide a structured approach to
quantifying uncertainty while remaining accessible to practitioners without extensive statistical backgrounds.

Three-point estimation techniques address key limitations of single-point estimates by:

1. Explicitly acknowledging uncertainty
2. Capturing asymmetric risk profiles
3. Providing a basis for statistical inference
4. Communicating risk to stakeholders

#### Common Three-Point Estimation Methods

Three-point estimation techniques capture uncertainty by collecting three distinct estimates for each task or project:

1. **Optimistic estimate ($O$)**: The best-case scenario, with a low probability (often ~10%)
2. **Most likely estimate ($M$)**: The realistic scenario with highest probability
3. **Pessimistic estimate ($P$)**: The worst-case scenario, with a low probability (often ~10%)

These estimates are then combined using various mathematical formulas to produce both an expected duration and a measure
of uncertainty:

**PERT (Program Evaluation and Review Technique)**: $$E_{PERT} = \frac{O + 4M + P}{6}$$ $$\sigma_{PERT} = \frac{P -
O}{6}$$

The PERT method, developed during the Polaris submarine project in the 1950s, uses a modified beta distribution that
weighs the most likely estimate more heavily than the optimistic and pessimistic values. This approach provides a
skew-adjusted mean that gives four times more weight to the most likely scenario than to either extreme.

**Triangular Distribution**: $$E_{Triangular} = \frac{O + M + P}{3}$$ $$\sigma_{Triangular} = \sqrt{\frac{(O^2 + M^2 +
P^2 - OM - OP - MP)}{18}}$$

The triangular distribution offers a simpler alternative that assumes a linear probability increase and decrease between
the three points. This equal weighting of all three points makes it particularly useful when the most likely value has
similar certainty to the extremes.

<figure> <img src="../images/three-point-estimation.svg" alt="Three-Point Estimation Distributions - showing the
probability distributions produced by PERT and triangular methods" width="700" /> <figcaption>Figure 2.1b: Probability
distributions from three-point estimation techniques</figcaption> </figure>

#### When to Use PERT vs. Triangular

- PERT is recommended when:
  - You have higher confidence in the most likely estimate
  - The risk profile is based on expert judgment
  - You need to reduce the impact of extreme estimates

- Triangular is recommended when:
  - All three estimates have similar reliability
  - The distribution needs to be more responsive to extremes
  - The estimation process involves multiple independent factors

#### Connection to Entropy and Uncertainty

Three-point estimation directly addresses the entropy problem in software estimation:

- The range between optimistic and pessimistic values explicitly quantifies uncertainty
- The standard deviation provides a mathematical measure of entropy in the estimate
- The resulting distribution acknowledges that outcomes are probabilistic, not deterministic

This approach recognizes that entropy increases with task complexity—more complex tasks typically show wider gaps
between optimistic and pessimistic estimates, reflecting higher uncertainty.

#### Estimation Biases

Understanding the cognitive biases that affect each point estimate helps teams produce more accurate three-point ranges:

<figure> <img src="../images/estimation-biases.svg" alt="Estimation Biases - showing factors that influence optimistic,
most likely, and pessimistic estimates" width="700" /> <figcaption>Figure 2.1c: Common biases affecting three-point
estimation components</figcaption> </figure>

#### Generating Better Estimates

To improve three-point estimation it is recommended to:

1. **Separate concerns**: Generate optimistic, most likely, and pessimistic estimates independently
2. **Define scenarios**: Clearly specify the conditions that would lead to each estimate
3. **Use reference classes**: Compare to similar historical projects
4. **Consider decomposition**: Break complex tasks into smaller components
5. **Capture rationales**: Document assumptions behind each estimate point

#### Integration with Other Methods

Three-point estimation can serve as:

- Input to Monte Carlo simulations (see below) for project scheduling
- A structured input mechanism for Bayesian updates
- A communication tool for stakeholder alignment
- The basis for risk-adjusted project planning

#### Addressing Underfitting Through Multiple Points

Traditional single-point estimates severely underfit the complexity of software development by assuming certainty where
none exists. Three-point estimation reduces underfitting by:

1. Acknowledging the range of possible outcomes rather than collapsing to a single point
2. Forcing estimators to explicitly consider risks and uncertainties
3. Creating a simplified probability distribution rather than a simplistic point value
4. Incorporating both best-case and worst-case scenarios

While less sophisticated than full Bayesian approaches, three-point estimation represents a significant improvement over
traditional techniques in addressing the fundamental underfitting problem.

#### Practical Implementation

To implement three-point estimation effectively:

1. **Collect independent estimates**: Have team members generate their O, M, and P values independently to avoid
anchoring bias
2. **Define consistent probability bounds**: Establish common definitions (e.g., O = 10% probability, P = 90%
probability)
3. **Calculate both expected values and uncertainty**: Track not just the expected duration but also the standard
deviation
4. **Aggregate thoughtfully**: When combining task-level estimates, account for dependencies and correlations
5. **Use uncertainty for planning**: Schedule buffers based on the calculated uncertainty, not arbitrary padding
6. **Track accuracy**: Compare actual outcomes to the full distribution, not just the expected value

> For a practical, interactive way to experiment with three-point estimation, try [interactive Three-Point Estimation Calculator](../html/three_point_estimation_calculator.html). This calculator allows you to adjust optimistic, most likely, and pessimistic estimates and instantly see how they affect the expected duration, standard deviation, and confidence intervals. You can also explore how different distribution methods (PERT vs. Triangular) impact the results, and see how factors like task complexity and team experience influence the final estimates.

Three-point estimation serves as an accessible entry point to probabilistic thinking for teams transitioning from
traditional point-based estimates toward more sophisticated uncertainty modeling.

<figure> <img src="../images/under-over-estimation-model.svg" alt="Under vs. Over Estimation Tendencies - showing
factors that lead to each type of estimation error and their consequences" width="700" /> <figcaption>Figure 2.1:
Factors influencing under and over estimation tendencies and their consequences</figcaption> </figure>

### Monte Carlo Simulation: Advanced Uncertainty Modeling

While three-point estimation provides a significant improvement over single-point estimates, it still operates with
relatively simple mathematical formulations and limited ability to model complex interdependencies. [Monte Carlo
simulation](https://en.wikipedia.org/wiki/Monte_Carlo_method) offers a more sophisticated approach to uncertainty
modeling, addressing both underfitting and overfitting in complementary ways.

#### Principles and Operation

Monte Carlo simulation extends probabilistic modeling by:

1. **Replacing point estimates with probability distributions** for each task or component
2. **Modeling dependencies and correlations** between different project elements
3. **Running thousands of randomized scenarios** to build a comprehensive distribution of outcomes
4. **Generating rich statistical outputs** beyond simple means and standard deviations

> **Interactive Demonstration**: Try our [Monte Carlo Project Simulation](../html/monte_carlo_demo.html) tool to see how task distributions, correlations between activities, and multiple simulation runs combine to create a comprehensive project forecast with confidence levels and sensitivity analysis.

This fundamental process is illustrated in the figure below:

<figure> <img src="../images/monte-carlo-simulation.svg" alt="Monte Carlo Simulation Process - showing how individual
task distributions are combined through simulation to produce project-level probability distributions" width="700" />
<figcaption>Figure 2.1d: Monte Carlo simulation process for project estimation</figcaption> </figure>

#### Addressing the Underfitting Problem

Monte Carlo simulation directly counters underfitting in several ways:

1. **Capturing complexity**: Models intricate task dependencies that simple formulas cannot express
2. **Revealing hidden risks**: Exposes "fat tails" in completion probabilities that deterministic methods ignore
   - **Fat tails** are probability distributions where extreme events (those in the "tail" of the distribution) occur with significantly higher probability than would be predicted by normal distributions. Unlike standard long-tail distributions, fat-tail distributions feature truly catastrophic outliers that can single-handedly dominate outcomes. In software projects, fat-tail events might include critical security vulnerabilities requiring complete redesign, fundamental algorithmic flaws discovered late in testing, or unexpected regulatory changes that invalidate core assumptions.
3. **Quantifying uncertainty precisely**: Provides percentile-based estimates (e.g., P50, P90) rather than single values
4. **Integrating multiple risk factors**: Combines schedule, resource, and complexity uncertainties into unified distributions

Traditional approaches underfit reality by ignoring the compounding effect of multiple uncertainties interacting in
complex ways. In contrast, Monte Carlo methods can model these systemic interactions without requiring simplistic
assumptions that dismiss real-world complexity.

#### Avoiding Overfitting

While combating underfitting, Monte Carlo simulation can also guard against overfitting through:

1. **Emphasis on distributions over specifics**: Focusing on the range and shape of possible outcomes rather than exact
predictions
2. **Parameter sensitivity analysis**: Identifying which model inputs most affect outcomes, avoiding
over-parameterization
3. **Transparency of assumptions**: Making uncertainty explicit rather than hiding it in complex model mechanics

However, Monte Carlo models themselves can overfit if:
- Historical data used for distributions is limited or unrepresentative
- Correlation matrices are specified with false precision
- Models include too many parameters relative to available calibration data
- Results are interpreted as having higher certainty than warranted

The key to avoiding overfitting lies in applying appropriate levels of detail given available information and
maintaining awareness of model limitations.

#### Practical Implementation

To effectively implement Monte Carlo simulation for software estimation you might want to:

1. **Start with three-point estimates** as the foundation for task distributions
2. **Use appropriate distribution types**:
   - Triangular or PERT for well-understood tasks
   - [Lognormal](https://en.wikipedia.org/wiki/Log-normal_distribution) for tasks with potential for significant overruns
   - [Uniform](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)) for highly uncertain tasks with little historical basis

3. **Model correlations thoughtfully**:
   - Between similar task types (e.g., all UI components)
   - Between sequential tasks (predecessor delays affecting successors)
   - Between tasks sharing resources or dependencies

4. **Analyze and communicate results effectively**:
   - Present project completion probabilities (e.g., "80% chance of completion by Date X")
   - Identify key risk drivers through sensitivity analysis
   - Show distribution shapes rather than just summary statistics

5. **Update simulations as the project progresses**:
   - Incorporate actual durations for completed tasks
   - Refine estimates for remaining work based on new information
   - Regenerate forecasts to reflect current project state

#### Bridging Simple and Complex Approaches

Monte Carlo simulation occupies a valuable middle ground in the estimation spectrum:

- More sophisticated than three-point estimation, capturing interactions simple formula-based approaches miss
- More accessible than full Bayesian models, requiring less statistical expertise to implement
- Scalable from small projects to complex portfolios
- Adaptable to different levels of available historical data

This positioning makes Monte Carlo particularly useful for organizations transitioning from basic estimation approaches
toward more sophisticated uncertainty management.

<figure> <img src="../images/estimation-spectrum.svg" alt="Software Estimation Methods Spectrum - showing progression
from simplistic to sophisticated approaches and their relationship to underfitting and overfitting risks" width="700" />
<figcaption>Figure 2.1e: Spectrum of estimation approaches showing trade-offs between simplicity and
accuracy</figcaption> </figure>

#### Software Tools and Implementation

⚠️ **REVIEW NEEDED: Several tools facilitate Monte Carlo simulation for software project estimation, each with different levels of sophistication and learning curves:

1. **Specialized project risk tools**:
   - Oracle Crystal Ball and Palisade @RISK provide comprehensive simulation capabilities integrated with Microsoft Excel
   - Risky Project offers project-specific Monte Carlo analysis with advanced visualization
   - Safran Risk combines scheduling capabilities with Monte Carlo simulation features

2. **Agile-focused Monte Carlo tools**:
   - ActionableAgile Analytics offers Monte Carlo forecasting based on historical cycle time
   - Nave's flow metrics tools provide probabilistic delivery forecasts
   - Focused Objective's Forecasting Spreadsheet enables simulation without specialized software
   - Simulert provides team-level delivery probability simulations

3. **Programming libraries and frameworks**:
   - Python libraries (SimPy, NumPy, PyMC) for custom simulation development
   - R statistical packages (MCMCpack, mc2d) for advanced statistical modeling
   - Discrete event simulation frameworks that can model complex project interactions

4. **Lightweight web-based options**:
   - SimulAr provides browser-based Monte Carlo simulation with minimal setup
   - Online Monte Carlo Simulator offers basic probabilistic modeling capabilities
   - Various cloud-based project simulation services with subscription models

The appropriate implementation depends on organizational maturity, available expertise, and the complexity of projects being estimated. Teams new to Monte Carlo approaches often benefit from starting with pre-built templates or web-based tools before investing in specialized software or custom development.

#### Limitations and Considerations

Despite its strengths, Monte Carlo simulation has limitations:

1. **Garbage in, garbage out**: Results are only as good as the input distributions and correlation assumptions
2. **Expertise requirements**: Proper implementation requires understanding of statistics and probabilistic concepts
3. **False precision risk**: Sophisticated outputs can create an illusion of certainty if not properly communicated
4. **Adoption barriers**: Organizational resistance to probabilistic thinking and fuzzy deadlines

Organizations should balance simulation sophistication with their ability to effectively gather inputs and interpret
outputs, gradually increasing model complexity as estimation maturity grows.

## 2.2 Software Estimation Approaches: Analysis Through the Underfitting-Overfitting Lens

Having explored the theoretical underpinnings of estimation as a modeling problem and examined various uncertainty modeling techniques, we now turn to specific estimation models widely used in software development. These models exist along the spectrum introduced in Figure 2.1e, with each approach balancing different trade-offs between simplicity and accuracy. This section analyzes how these models exhibit tendencies toward underfitting (oversimplification) or overfitting (excessive specificity) in different contexts. We progress from algorithmic models that often underfit by design toward increasingly context-specific approaches that risk overfitting to historical patterns.

### COCOMO (Constructive Cost Model)

[**COCOMO**](https://en.wikipedia.org/wiki/COCOMO) is a well-known
[regression](https://en.wikipedia.org/wiki/Regression_analysis)-based algorithmic technique used for estimating software
costs. It employs the size of the project, typically measured in Kilo Source Lines of Code (KSLOC), along with a set of
cost drivers, including 5 scale factors and 17 effort multipliers, to estimate the total effort required in
person-months.

**Historical Context:** COCOMO was originally developed by Barry Boehm in 1981, with COCOMO II appearing in 2000 as a significant update to address modern software development practices. The model emerged during the era of waterfall development methodologies when upfront estimation was considered essential for contract negotiation and resource planning.

**Contemporary Usage:** Today, COCOMO remains in use primarily in:
- Government and defense sectors where formal estimation models are often contractually required
- Large systems engineering projects with significant hardware components
- Academic settings for teaching algorithmic estimation concepts
- Organizations with established measurement programs

However, its usage has significantly declined in commercial software development as more iterative and agile approaches have gained prominence. Industry surveys suggest that less than 15% of commercial software organizations now use COCOMO as their primary estimation method, though it may be used as a supplementary technique.

<figure> <img src="../images/cocomo-model.svg" alt="COCOMO II Model Framework - showing inputs, processing elements, and
outputs of the model" width="700" /> <figcaption>Figure 2.2: COCOMO II Model Framework with inputs, processing, and
outputs</figcaption> </figure>

A potential limitation of COCOMO is that the values of its parameter coefficients are often constant for similar types
of projects.  This assumption of uniformity might lead to underfitting, as the model may fail to capture the significant
variations that can exist between different organizations or even between different projects within the same
organization. Unlike the Bayesian approaches discussed in section 2.1, COCOMO does not naturally incorporate uncertainty or update its parameters as new evidence emerges.

<figure> <img src="../images/cocomo-estimation-actual-scatter.svg" alt="COCOMO Estimation vs Actual Effort - showing how
algorithmic models often underfit real project complexity" width="700" /> <figcaption>Figure 2.2a: Scatter plot showing
systematic underestimation in COCOMO models, particularly for larger projects</figcaption> </figure>

The difficulty in establishing a single, universally applicable parametric model suggests an inherent risk of
oversimplification.  Research indicates that [integrating COCOMO with Artificial Neural
Networks](https://www.researchgate.net/publication/386371108_ANN-based_software_cost_estimation_with_input_from_COCOMO_CANN_model)
can yield improved results, implying that COCOMO's standalone model might not fully account for the complex
relationships between its parameters.

### Expert Judgment

Expert judgment involves leveraging the knowledge and experience of specialists to estimate project details. This
approach is particularly useful when empirical data is scarce or for tackling complex, ill-defined problems.

**Historical Context:** Expert judgment represents the oldest and most fundamental estimation approach, predating formal software engineering methodologies. It was the default approach in the nascent software industry of the 1950s and 1960s before more structured methods emerged.

**Contemporary Usage:** Despite the proliferation of formal estimation techniques, expert judgment remains ubiquitous across all sectors of the software industry:
- Startups and small teams rely heavily on expert judgment due to its low overhead
- Even organizations using formal methods frequently "adjust" model outputs based on expert opinion
- Industry surveys consistently show that 60-80% of organizations consider expert judgment a primary component of their estimation process
- For novel or innovative projects where historical data is limited, expert judgment often becomes the default approach

The trend has shifted toward "structured expert judgment" where experts provide estimates within formal frameworks (like Wideband Delphi or Planning Poker) rather than pure individual assessment.

However, expert judgment is highly susceptible to various [cognitive
biases](https://en.wikipedia.org/wiki/Cognitive_bias) (similar to those affecting three-point estimation, discussed in
[Section 2.1](#estimation-biases)), which can lead to both underfitting and overfitting:
- [Optimism](https://en.wikipedia.org/wiki/Optimism_bias) bias might cause experts to underestimate the effort required
- [Anchoring](https://en.wikipedia.org/wiki/Anchoring_effect) bias could lead to estimates being unduly influenced by
  initial figures
- [Overconfidence](https://en.wikipedia.org/wiki/Overconfidence_effect) can result in experts overlooking potential
  challenges or the need for more detailed analysis, leading to underfitting.

Conversely, experts might rely too heavily on specific past experiences that are not entirely relevant to the current
project, potentially leading to overfitting by incorporating unnecessary details or inflating estimates. Studies have
shown a significant degree of inconsistency in expert judgment-based effort estimates, highlighting the unreliability of
this method when used in isolation.

Unlike the Monte Carlo simulations discussed in section 2.1, expert judgment rarely quantifies uncertainty explicitly, making it difficult to assess confidence levels or probability distributions for outcomes.

### Planning Poker

[Planning Poker](https://en.wikipedia.org/wiki/Planning_poker) is a widely used consensus-based agile estimation
technique that employs story points as relative units of effort or complexity. In this method, the development team
discusses user stories or tasks, and each member anonymously votes using cards with values from a modified Fibonacci
sequence. The team then discusses any significant discrepancies in the estimates to reach a consensus.

**Historical Context:** Planning Poker was formally introduced by James Grenning in 2002 and gained widespread popularity through its inclusion in Mike Cohn's influential 2005 book "Agile Estimating and Planning." The technique evolved from the Wideband Delphi method (developed in the 1970s at RAND Corporation) but was specifically adapted for agile contexts with an emphasis on team consensus and relative sizing.

**Contemporary Usage:** Planning Poker has become the dominant estimation technique in organizations adopting agile methodologies:
- Used by approximately 75% of Scrum teams according to recent industry surveys
- Has crossed beyond software into other project management domains
- Widely supported in agile project management tools (JIRA, Azure DevOps, etc.)
- Often adapted into hybrid forms combining elements of other techniques

The trend toward remote and distributed teams has led to increasing adoption of digital Planning Poker tools rather than physical cards, but the core methodology remains largely unchanged since its introduction.

<figure> <img src="../images/planning-poker-process.svg" alt="Planning Poker Process Flow - showing the sequence of
steps in this consensus-based estimation technique" width="700" /> <figcaption>Figure 2.7: Planning Poker process
workflow showing interaction between participants</figcaption> </figure>

While Planning Poker fosters team collaboration and shared understanding, its reliance on abstract units like story
points, which are not directly tied to time or resources, can lead to underfitting. The process also carries the risk of
"groupthink" or pressure to conform to certain estimates, potentially overlooking individual complexities or risks.
Research indicates that accurately estimating hours using Planning Poker can be challenging, as it is more effective for
relative comparisons. Teams sometimes defaulting to a single value for story points might also indicate an
underestimation of the true effort involved. Furthermore, the influence of senior team members or the desire to avoid
conflict can lead to estimates that do not fully reflect the perceived difficulty of a task.

Planning Poker represents a middle ground on the estimation spectrum presented in Figure 2.1e, incorporating elements of three-point estimation through team discussion while remaining more accessible than formal Monte Carlo approaches.

### Function Points (FPs)

[Function Points](https://en.wikipedia.org/wiki/Function_point) offer a measure of software size that is independent of
the programming language or implementation details. This method focuses on quantifying the functionality delivered to
the customer by considering five user function types:
- External inputs
- External outputs
- External inquiries
- Internal logical files
- External interface files

Each is categorized by complexity and adjusted using 14 general system characteristics.

**Historical Context:** Function Points were developed by Allan Albrecht at IBM in 1979 in response to the limitations of lines of code as a size metric. The International Function Point Users Group (IFPUG) was established in 1986 to standardize the methodology, leading to ISO standardization in 2003. Various adaptations have emerged over time, including COSMIC Function Points and NESMA Function Points.

**Contemporary Usage:** Function Points have maintained a significant niche in specific sectors:
- Financial services and banking, where they remain popular for contracting and project governance
- Government and regulatory contexts where standardized measurements are required
- Organizations focused on process improvement programs like CMMI
- Outsourcing arrangements where contractual metrics are needed

Industry surveys suggest approximately 25% of organizations use Function Points in some capacity, though usage has gradually declined since the early 2000s. The approach remains more popular in Europe, Japan, and Brazil than in North America. Recent years have seen attempts to adapt Function Points to agile contexts, though with limited widespread adoption.

<figure> <img src="../images/function-points-model.svg" alt="Function Points Analysis Model - showing the five function
types and complexity classification" width="700" /> <figcaption>Figure 2.3: Function Points Analysis Model with
complexity weights</figcaption> </figure>

While aiming for an objective measure, the process of defining and weighting these function points involves a degree of
subjectivity. This subjectivity, coupled with the risk of developing overly complex models based on limited data or
chance occurrences, raises the potential for overfitting. Criticisms of Function Points include its "black box" view of
the system, its potential lack of suitability for modern technologies, oversimplified complexity classifications, and
the subjective nature of weight assignments. These limitations suggest that estimations based on Function Points might
become too specific to past projects or individual interpretations, potentially overfitting the data used to derive them
and hindering generalization to new projects with different characteristics.

Unlike the uncertainty-embracing approaches discussed in section 2.1, Function Points attempt to create deterministic measures of size and complexity, potentially masking the inherent uncertainty in software development projects.

### 2.2.5 Estimating AI-Assisted Development: New Uncertainties

The rapid emergence of AI assistants in software development workflows (including code generation, refactoring,
documentation, and testing) introduces significant new uncertainties to the time estimation process. These uncertainties
directly affect both underfitting and overfitting in estimation models in several ways:

**Historical Context:** The widespread adoption of AI coding assistants is an extremely recent phenomenon, with tools like GitHub Copilot only becoming generally available in 2022 and more advanced LLM-based assistants emerging in 2023. This represents the most significant shift in development workflows since the advent of agile methodologies, creating an unprecedented challenge for established estimation approaches.

**Contemporary Usage:** Organizations are currently in the experimental phase with AI-assisted development estimation:
- Most teams are still applying pre-AI estimation techniques while informally adjusting for perceived productivity changes
- Early adopters are developing custom calibration factors based on initial experiences with AI tools
- Limited empirical data exists on how AI assistance affects estimate accuracy across different project types
- A significant "productivity inequality" is emerging between teams that effectively leverage AI tools and those that don't

The trend is toward rapid experimentation and evaluation, with organizations actively seeking new estimation frameworks specifically designed for AI-augmented development workflows.

<figure> <img src="../images/ai-estimation-challenges.svg" alt="Estimation Challenges in AI-Assisted Development -
showing four key challenges affecting traditional estimation models" width="700" /> <figcaption>Figure 2.4: Examples of
challenges in estimating AI-assisted development work</figcaption> </figure> <br/><br/>

**Productivity Variance Amplification:** AI tools can dramatically amplify the variance in developer productivity,
depending on:
- How well a given task aligns with AI capabilities (some tasks see 2-5x productivity gains, others minimal improvement)
- Individual developers' proficiency with AI tools and prompt engineering
- The types of work most amenable to AI assistance (e.g., boilerplate generation vs. novel algorithm design)

This increased variance challenges both expert judgment and historical data-based estimations, as the fundamental
relationships between task complexity and time required have been disrupted.

From an [entropy](06-theoretical-concepts.md#63-entropy-and-software-complexity) perspective, AI tools increase the
overall system entropy by introducing new variables with uncertain impacts. The relationship between task complexity and
completion time—previously somewhat predictable—becomes more probabilistic and less deterministic, making traditional
estimation models less reliable.

<figure> <img src="../images/ai-productivity-variance.svg" alt="AI Productivity Variance - comparing development time
across different task types with and without AI assistance" width="700" /> <figcaption>Figure 2.5: Productivity variance
across task types when using AI assistance (illustrative, not using real metrics)</figcaption> </figure> <br/><br/>

**Incomplete Experience Base:** Organizations lack sufficient historical data about AI-assisted workflows to create
reliable estimation methods. Traditional estimation approaches based on pre-AI development experiences will inherently *underfit* the new reality by
missing crucial interaction patterns between developers and AI tools. Conversely, early attempts to develop new estimation techniques
based on limited AI-assisted experiences risk *overfitting* to specific tool capabilities or early adoption patterns
that may not generalize.

**AI-Specific Optimism Bias:** AI tools introduce a new dimension of optimism bias in estimation:
- The tendency to overestimate productivity gains based on carefully curated demos or best-case scenarios
- "AI solutionism" - believing AI can solve complex problems with minimal human intervention
- Discounting learning curves and adaptation periods needed for effective AI tool usage
- Management pressure to reduce estimates based on general AI hype rather than measured team performance

This AI-specific optimism bias compounds traditional estimation biases and can lead to severe underestimation,
especially for novel or complex tasks where AI tools have yet to demonstrate consistent productivity gains.

**Hidden Overhead Costs:** While AI promises productivity gains, it introduces new overhead activities that remain
poorly quantified in most estimation approaches:
- Prompt engineering and refinement time
- Verification and quality control of AI-generated code
- Troubleshooting AI-specific errors and limitations
- Learning curves for effectively using AI tools

**New Classes of Errors and Challenges:** AI-assisted development introduces novel error types and challenges that
impact estimation:
- "[Hallucinated](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) functionality" - AI confidently
  generating code that appears correct but contains subtle logical errors
- Inconsistent code quality across similar tasks, creating unpredictable review and debugging loads
- Integration friction between AI-generated components and existing codebases
- New security vulnerabilities specific to AI-generated code patterns
- Additional time needed for explainability and knowledge transfer of AI-assisted solutions

These novel challenges typically remain unaccounted for in traditional estimation frameworks, as they have no pre-AI
equivalents against which to calibrate estimates.

**Temporal Instability:** Unlike traditional estimation factors, AI capabilities are evolving rapidly, creating a moving
target for estimation models. What takes a developer several hours with today's AI tools might be accomplished in
minutes with next quarter's update, rendering estimations highly sensitive to release timing and specific capabilities.

Most existing estimation frameworks lack mechanisms to incorporate these AI-specific uncertainties. Organizations
attempting to maintain traditional estimation approaches in AI-augmented environments may therefore experience a decline
in estimation accuracy until new models that explicitly account for AI impact factors can be developed and calibrated.
This represents a classic model adaptation challenge, where the data distribution has fundamentally shifted, requiring a
corresponding shift in modeling approach.

In this context, the probabilistic approaches discussed in section 2.1—particularly Bayesian methods and Monte Carlo simulation—may offer the flexibility needed to incorporate these new uncertainties into estimation processes.

> **Note on Rapid Evolution:** Given the accelerating pace of AI tool development and adoption, the estimation
> challenges described in this section should be considered a snapshot of current understanding rather than definitive
> guidance. We should anticipate the need for periodic reassessment of the estimation approaches as AI capabilities,
> organizational adoption patterns, and data on AI-assisted productivity continue to evolve.

## 2.3 Evidence for Underfitting in Classical Models

Classical software estimation models often exhibit a tendency towards underfitting by failing to fully capture the
unique complexities and variability inherent in software projects. Many hidden complexities are frequently overlooked
during the initial estimation phase, leading to an oversimplified view of the project lifecycle, including:

- Time required for thorough testing
- Code reviews
- Deployment
- Integration
- Context-switching between different tasks or projects
- Impact of team changes and internal controversies
- Increased uncertainty associated with novel work

<figure> <img src="../images/hidden-complexities-model.svg" alt="Hidden Complexities in Software Estimation - factors
often overlooked in traditional estimation approaches" width="700" /> <figcaption>Figure 2.6: Hidden complexity factors
that contribute to estimation errors</figcaption> </figure> <br/><br/>

The common practice of multiplying initial software estimates [by a
factor](https://vadimkravcenko.com/shorts/project-estimates/) underscores the widespread recognition that initial
estimates tend to be overly optimistic and often fall short of the actual time required.

### Long Tail of Software Project Risks

Furthermore, simplified estimation models often fail to account for the "[long tail](06-theoretical-concepts.md)" of
software project risks. The "long tail" refers to the distribution of risks where a large number of less frequent but
potentially high-impact events can occur alongside the more common risks.

<figure> <img src="../images/long-tail-risks.svg" alt="Long Tail Distribution of Software Project Risks - showing the
relationship between risk frequency and impact severity" width="700" /> <figcaption>Figure 2.8: Long tail distribution
of software project risks from common to rare, high-impact events</figcaption> </figure>

These might include:
- Rare technical glitches
- Unexpected dependencies on other teams or systems
- Significant changes in requirements late in the project

In certain high-risk or complex projects, we may also encounter **fat-tail distributions** of risk, where extreme events occur with much higher probability than would be predicted by standard statistical models. These fat-tail risks (explored in detail in [Chapter 6](06-theoretical-concepts.md#61-software-project-risks-and-long-tail-distributions)) represent truly catastrophic outliers—not merely uncommon events, but "black swan" events with the potential to derail entire projects. Fat-tail risks in software projects might include mission-critical security breaches, fundamental flaws in core architectural assumptions, or severe compatibility issues discovered only in production environments.

> **Interactive Tool**: Explore our [interactive visualization of long tail and fat tail distributions in software project risks](../html/long_and_fat_tail_risks.html). This tool allows you to toggle between standard and fat tail distributions to see how they affect project estimation outcomes at different complexity levels.

Estimation models that primarily focus on typical tasks and average scenarios often fail to incorporate contingencies
for these "long-tail" risks, leading to underestimation of the overall project effort and potential for delays when
these unforeseen events materialize. The problem becomes even more severe when fat-tail risks are present but unaccounted for in planning.

From an [information entropy](06-theoretical-concepts.md#63-entropy-and-software-complexity) standpoint, these rare but
high-impact events represent high-entropy elements in the project risk distribution. Traditional estimation models focus
on low-entropy (common, predictable) events while ignoring the significant contribution of high-entropy tail events to
overall project uncertainty. This entropically incomplete view leads to systematic underestimation of total project
complexity and effort requirements.

The concept of [negentropy](06-theoretical-concepts.md#negentropy-in-software-development) (negative entropy) provides a
counterbalance—practices like comprehensive documentation, testing, and knowledge sharing act to reduce uncertainty and
create more predictable outcomes in software projects. However, the time required for these critical negentropy-building
activities themselves is often overlooked in estimation models, further contributing to the underfitting problem.

[Back to Table of Contents](../README.md) 
