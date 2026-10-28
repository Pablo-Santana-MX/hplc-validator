# Kriterion: 企业级色谱验证引擎 ⚗️📈

*[Read in English](README.md) | [Leer en Español](README.es.md) | [Auf Deutsch lesen (German)](README.de.md)*

![Compliance](https://img.shields.io/badge/Compliance-ICH_Q2(R2)-success.svg?style=for-the-badge)
![Data Integrity](https://img.shields.io/badge/Data_Integrity-ALCOA+-005571.svg?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688.svg?style=for-the-badge&logo=fastapi&logoColor=white)

> **弥合严谨的分析化学与现代可扩展软件工程之间的差距。**

Kriterion 是一个高性能的云原生分析仪表板，旨在自动化、标准化并确保高效液相色谱 (HPLC) 方法统计验证的安全性。专为制药实验室、质量控制 (QC) 环境和研发中心设计，它通过 API 驱动的确定性统计引擎取代了容易出错的电子表格。

## 🎯 商业案例

**痛点：** 传统的方法验证依赖于零散的 Excel 电子表格。这引入了人为的转录错误，缺乏严格的版本控制，使符合 21 CFR 第 11 部分的合规性变得复杂，并需要数小时的人工审查。

**Kriterion 解决方案：** Kriterion 将用户界面与统计计算解耦。通过将数学模型集中在高度优化的 Python/FastAPI 后端，并通过极速的 React/Next.js 边缘网络提供结果，我们提供：
- **零信任计算：** 无状态的数学处理保证了结果的可重复性。
- **审计就绪工作流：** 基于 ALCOA+ 原则设计。
- **即时裁决：** 针对全球监管阈值的实时合规性检查。

## 🔬 科学与监管严谨性

Kriterion 严格遵守 **ICH Q2(R2)** 指南。核心引擎利用普通最小二乘法 (OLS) 回归模型计算线性度和校准指标。

统计引擎通过计算回归线来评估指定范围内的线性度：
$$y = \beta_0 + \beta_1 x + \epsilon$$

计算决定系数 ($R^2$) 以评估模型的拟合优度：
$$R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$$

## 📡 API 参考

`POST /api/v1/linearity/calculate`

**请求负载 (JSON):**
```json
{
  "concentrations": [10.0, 20.0, 30.0, 40.0, 50.0],
  "areas": [12520.0, 24985.0, 37540.0, 50012.0, 62490.0],
  "r_squared_limit": 0.999
}
```

---
*专为精度而设计。为合规而构建。由 S-labs 开发。*