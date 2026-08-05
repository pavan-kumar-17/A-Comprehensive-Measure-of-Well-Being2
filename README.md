# A-Comprehensive-Measure-of-Well-Being2
A multidimensional assessment framework and data model evaluating physical, psychological, emotional, and social well-being.
# A Comprehensive Measure of Well-Being

## 📌 Project Overview
This project predicts overall well-being scores based on lifestyle, physical, and mental health metrics using Machine Learning integrated into a Flask web application.

## 🔄 Project Flow
1. **Environment Setup & Package Installation**
2. **Data Preprocessing & Encoding**
3. **Train-Test Split & Model Fitting**
4. **Model Saving (`.pkl` file)**
5. **Flask Web Application Integration**

## 🗄️ Database Architecture (ER Diagram)
```mermaid
erDiagram
    USERS ||--o{ WELLBEING_RESPONSES : submits
    WELLBEING_RESPONSES ||--|| PREDICTION_RESULTS : generates
