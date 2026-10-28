# Kriterion: Enterprise-Grade Chromatographic Validation Engine ⚗️📈

*[Read in Spanish (Español)](README.es.md) | [Auf Deutsch lesen (German)](README.de.md) | [中文 (Chinese)](README.zh.md)*

![Compliance](https://img.shields.io/badge/Compliance-ICH_Q2(R2)-success.svg?style=for-the-badge)
![Data Integrity](https://img.shields.io/badge/Data_Integrity-ALCOA+-005571.svg?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688.svg?style=for-the-badge&logo=fastapi&logoColor=white)

> **Bridging the gap between rigorous analytical chemistry and modern, scalable software engineering.**

Kriterion is a high-performance, cloud-native analytical dashboard designed to automate, standardize, and secure the statistical validation of High-Performance Liquid Chromatography (HPLC) methods. Built for pharmaceutical laboratories, quality control (QC) environments, and R&D centers, it replaces error-prone spreadsheets with a deterministic, API-driven statistical engine.

## 🎯 The Business Case

**The Problem:** Traditional method validation relies on fragmented Excel spreadsheets. This introduces human transcription errors, lacks strict version control, complicates 21 CFR Part 11 compliance, and requires hours of manual peer review to ensure mathematical accuracy.

**The Kriterion Solution:** Kriterion decouples the user interface from the statistical computation. By centralizing mathematical models in a highly optimized Python/FastAPI backend and delivering results through a lightning-fast React/Next.js edge network, we provide:
- **Zero-Trust Calculations:** Stateless mathematical processing guarantees reproducible results.
- **Audit-Ready Workflows:** Designed with ALCOA+ principles.
- **Instant Verdicts:** Real-time compliance checks against global regulatory thresholds.

## 🔬 Scientific & Regulatory Rigor

Kriterion strictly adheres to **ICH Q2(R2)** guidelines. The core engine calculates linearity and calibration metrics utilizing Ordinary Least Squares (OLS) regression models.

The statistical engine evaluates linearity across the specified range by calculating the regression line:
$$y = \beta_0 + \beta_1 x + \epsilon$$

The Coefficient of Determination ($R^2$) is computed to evaluate goodness-of-fit:
$$R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$$

## 📡 API Reference & Contract

`POST /api/v1/linearity/calculate`

**Request Payload (JSON):**
```json
{
  "concentrations": [10.0, 20.0, 30.0, 40.0, 50.0],
  "areas": [12520.0, 24985.0, 37540.0, 50012.0, 62490.0],
  "r_squared_limit": 0.999
}
```

---
*Engineered for precision. Built for compliance. Developed by S-labs.*