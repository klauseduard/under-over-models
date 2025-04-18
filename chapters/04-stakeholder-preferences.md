# 4. Stakeholder Preferences and Model Complexity

## 4.1 Management Preferences

Management often exhibits a preference for simpler and more scalable models in software development and organizational design. This inclination is driven by several key factors:

### Key Drivers
- Cost efficiency
- Ease of implementation across large teams
- Better perceived control
- Simpler understanding of processes

### Focus on Scalability
Scalable business models are highly valued by management because they:
- Allow for growth without significant structural changes
- Enable increased revenue without proportional cost increases
- Facilitate expansion across the organization

```mermaid
graph TD
    subgraph "Scalability vs Complexity Trade-offs"
        S[Scalability] --> B[Benefits]
        S --> C[Costs]
        
        subgraph "Benefits"
            B1[Growth Potential]
            B2[Cost Efficiency]
            B3[Standardization]
        end
        
        subgraph "Complexity Costs"
            C1[Reduced Flexibility]
            C2[Loss of Detail]
            C3[Context Loss]
        end
        
        B --> B1
        B --> B2
        B --> B3
        C --> C1
        C --> C2
        C --> C3
    end
    
    style B1 fill:#90EE90
    style B2 fill:#90EE90
    style B3 fill:#90EE90
    style C1 fill:#FFB366
    style C2 fill:#FFB366
    style C3 fill:#FFB366
```

### Risk of Underfitting
The emphasis on repeatability and standardized processes in scalable models can lead to:
- Oversimplified approaches
- Potential underfitting of specific project complexities
- Reduced effectiveness for specialized teams.

> See also: [Scalable business models - how to use them for business growth](https://serengetitech.com/business/scalable-business-models-how-to-use-them-for-business-growth/) -- a consulting company frames scalability as the capacity to let revenue out‑run costs, arguing that this requires clear leadership, repeatable processes, modular tech and strict cash‑flow discipline; that promise of growth without structural upheaval explains why managers gravitate toward “scalable” models in both software and organization design.

## 4.2 Technical Specialists Preferences

In contrast to management, technical specialists often prefer more detailed and precise models that reflect the intricacies of their domain. 
Their focus on accuracy and the ability to account for specific technical challenges and nuances drives this preference.
For instance, in fields like building information modeling or artificial intelligence evaluation, technical experts emphasize
the importance of detailed representations and precise criteria. This desire for specificity can sometimes lead to the development
of models that might appear overly complex or "overfit" from a management perspective, as they incorporate a high level of detail
that might not be immediately apparent or deemed necessary by those with a broader, less technical focus.


```mermaid
graph LR
    subgraph "Stakeholder Model Preferences"
        subgraph "Management"
            M1[Simple Models]
            M2[Standardization]
            M3[Cost Efficiency]
            
            M1 --- M2
            M2 --- M3
        end
        
        subgraph "Technical Specialists"
            T1[Detailed Models]
            T2[Domain Specificity]
            T3[Technical Accuracy]
            
            T1 --- T2
            T2 --- T3
        end
        
        Gap[Preference Gap]
        M2 --> Gap
        T2 --> Gap
    end
    
    style M1 fill:#FFB366
    style M2 fill:#FFB366
    style M3 fill:#FFB366
    style T1 fill:#90EE90
    style T2 fill:#90EE90
    style T3 fill:#90EE90
    style Gap fill:#FF6B6B
```

## 4.3 Potential Conflicts and Trade-offs

The divergent preferences between management and technical specialists regarding model complexity often create organizational tensions.

While management might prioritize simpler, scalable models for budgetary and strategic reasons, technical teams often advocate for more detailed models to ensure accuracy and address the specific challenges of their work.

Navigating these conflicting preferences requires organizations to establish clear communication channels and processes for understanding the trade-offs involved in choosing the level of model complexity. 

Tools like the [Value vs Complexity Matrix](https://fibery.io/blog/product-management/value-complexity-matrix/) can help in assessing the benefits of model detail against the effort required to implement it. 

![Value vs Complexity Matrix](../images/value-vs-complexity.svg)

Ultimately, a balance must be struck that considers both the strategic objectives of the organization and the technical requirements of the work being done, often involving compromises on both sides to achieve a model that is both effective and manageable

[Back to Table of Contents](../README.md)
