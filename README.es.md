# Kriterion: Motor de Validación Cromatográfica de Nivel Empresarial ⚗️📈

*[Read in English](README.md) | [Auf Deutsch lesen (German)](README.de.md) | [中文 (Chinese)](README.zh.md)*

![Compliance](https://img.shields.io/badge/Compliance-ICH_Q2(R2)-success.svg?style=for-the-badge)
![Data Integrity](https://img.shields.io/badge/Data_Integrity-ALCOA+-005571.svg?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688.svg?style=for-the-badge&logo=fastapi&logoColor=white)

> **Cerrando la brecha entre la química analítica rigurosa y la ingeniería de software moderna y escalable.**

Kriterion es un dashboard analítico nativo de la nube y de alto rendimiento, diseñado para automatizar, estandarizar y asegurar la validación estadística de métodos de Cromatografía de Líquidos de Alta Resolución (HPLC). Creado para laboratorios farmacéuticos, entornos de control de calidad (QC) y centros de I+D, reemplaza las hojas de cálculo propensas a errores con un motor estadístico determinista impulsado por API.

## 🎯 El Caso de Negocio

**El Problema:** La validación de métodos tradicional depende de hojas de Excel fragmentadas. Esto introduce errores de transcripción humana, carece de control de versiones estricto, complica el cumplimiento de la norma 21 CFR Parte 11 y requiere horas de revisión manual.

**La Solución Kriterion:** Kriterion desacopla la interfaz de usuario del cálculo estadístico. Al centralizar los modelos matemáticos en un backend altamente optimizado (Python/FastAPI) y entregar los resultados a través de una red perimetral ultrarrápida (React/Next.js), proporcionamos:
- **Cálculos de Confianza Cero (Zero-Trust):** El procesamiento matemático sin estado garantiza resultados reproducibles.
- **Flujos de Trabajo Listos para Auditoría:** Diseñado bajo los principios ALCOA+.
- **Veredictos Instantáneos:** Verificaciones de cumplimiento en tiempo real contra umbrales regulatorios globales.

## 🔬 Rigor Científico y Regulatorio

Kriterion se adhiere estrictamente a las directrices **ICH Q2(R2)**. El motor central calcula la linealidad y las métricas de calibración utilizando modelos de regresión de Mínimos Cuadrados Ordinarios (OLS).

El motor estadístico evalúa la linealidad calculando la línea de regresión:
$$y = \beta_0 + \beta_1 x + \epsilon$$

El Coeficiente de Determinación ($R^2$) se calcula para evaluar la bondad de ajuste del modelo:
$$R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$$

## 📡 Referencia de API

`POST /api/v1/linearity/calculate`

**Payload de Petición (JSON):**
```json
{
  "concentrations": [10.0, 20.0, 30.0, 40.0, 50.0],
  "areas": [12520.0, 24985.0, 37540.0, 50012.0, 62490.0],
  "r_squared_limit": 0.999
}
```

---
*Diseñado para la precisión. Construido para el cumplimiento. Desarrollado por S-labs.*