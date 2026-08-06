## 🧠 Theoretical Framework

Well-being is a complex, multifaceted construct that cannot be captured by a single health metric. This project adopts a **multidimensional assessment model** combining foundational research in positive psychology, public health, and behavioral sciences:

---

### 1. Key Dimensions of Well-Being

* **🏋️ Physical Well-Being:** Evaluates physiological metrics, daily physical activity, sleep quality, nutritional habits, and overall bodily functioning.
* **🧘 Psychological & Cognitive Well-Being:** Measures stress resilience, self-efficacy, mindfulness, cognitive load, and psychological distress.
* **❤️ Emotional Well-Being:** Tracks mood balance, affect stability, coping mechanisms, and overall emotional regulation.
* **🌐 Social & Environmental Well-Being:** Assesses social connectivity, support systems, work-life balance, and environmental satisfaction.

---

## 📊 Dataset & Feature Breakdown

The predictive model uses key indicators collected from user inputs to compute an objective composite score.

| Feature Category | Features Included | Measurement Type |
| :--- | :--- | :--- |
| **Physical** | Daily Steps, Sleep Duration, Physical Activity Index | Continuous / Numeric |
| **Psychological** | Perceived Stress Scale (PSS), Anxiety Levels, Mindfulness Score | Discrete / Ordinal |
| **Emotional** | Mood Index, Daily Affect Scale | Ordinal Scale (1–10) |
| **Social** | Social Interaction Frequency, Work-Life Balance Rating | Categorical / Ordinal |
| **Target Variable** | **Composite Well-Being Index** | Continuous (0 – 100) |

---

## 🔬 Machine Learning Methodology

### 1. Data Preprocessing & Pipeline
* **Missing Value Imputation:** Median imputation for continuous variables, mode imputation for categorical attributes.
* **Feature Encoding:** One-Hot Encoding for non-ordinal categorical metrics; Min-Max / Standard Scaling for numerical features.
* **Outlier Removal:** IQR-based filtering to reduce noise in subjective self-reports.

---

### 2. Model Selection & Evaluation
Multiple regression and ensemble algorithms were evaluated to determine the best predictive performance:

* **Linear / Ridge Regression:** Baseline linear modeling.
* **Random Forest Regressor:** Handles complex non-linear feature interactions and offers built-in feature importance.
* **XGBoost Regressor:** Optimizes predictive accuracy through gradient boosting.

#### Performance Metrics
Models are evaluated using standard regression criteria:
* **Mean Absolute Error (MAE):** Quantifies average absolute error magnitude.
* **Root Mean Squared Error (RMSE):** Penalizes larger prediction anomalies.
* **Coefficient of Determination ($R^2$):** Measures total variance explained by the model:

$$R^2 = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2}$$

---

## ⚙️ System Architecture

```text
[ User Interface (HTML/CSS) ] 
            │
            ▼
[ Flask Backend (app.py) ] ◄─── Loads Model (`model.pkl`)
            │
            ▼
[ Prediction Pipeline ] ───► Calculates Well-Being Index ───► [ JSON Response / Rendered Page ]
