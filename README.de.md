# Kriterion: Chromatographische Validierungs-Engine auf Unternehmensniveau ⚗️📈

*[Read in English](README.md) | [Leer en Español](README.es.md) | [中文 (Chinese)](README.zh.md)*

![Compliance](https://img.shields.io/badge/Compliance-ICH_Q2(R2)-success.svg?style=for-the-badge)
![Data Integrity](https://img.shields.io/badge/Data_Integrity-ALCOA+-005571.svg?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688.svg?style=for-the-badge&logo=fastapi&logoColor=white)

> **Die Brücke zwischen strenger analytischer Chemie und moderner, skalierbarer Softwareentwicklung.**

Kriterion ist ein Cloud-natives, hochleistungsfähiges analytisches Dashboard zur Automatisierung, Standardisierung und Sicherung der statistischen Validierung von Hochleistungsflüssigkeitschromatographie (HPLC)-Methoden. Es wurde für pharmazeutische Labore, Qualitätskontrollumgebungen (QC) und F&E-Zentren entwickelt und ersetzt fehleranfällige Tabellenkalkulationen durch eine deterministische, API-gesteuerte statistische Engine.

## 🎯 Der Business Case

**Das Problem:** Die traditionelle Methodenvalidierung stützt sich auf fragmentierte Excel-Tabellen. Dies führt zu menschlichen Übertragungsfehlern, mangelnder Versionskontrolle, erschwert die Einhaltung von 21 CFR Part 11 und erfordert stundenlange manuelle Überprüfungen.

**Die Kriterion-Lösung:** Kriterion entkoppelt die Benutzeroberfläche von der statistischen Berechnung. Durch die Zentralisierung der mathematischen Modelle in einem hochoptimierten Python/FastAPI-Backend und die Bereitstellung der Ergebnisse über ein blitzschnelles React/Next.js-Edge-Netzwerk bieten wir:
- **Zero-Trust-Berechnungen:** Zustandslose mathematische Verarbeitung garantiert reproduzierbare Ergebnisse.
- **Audit-Ready Workflows:** Entwickelt nach ALCOA+ Prinzipien.
- **Sofortige Ergebnisse:** Echtzeit-Compliance-Prüfungen gegen globale regulatorische Schwellenwerte.

## 🔬 Wissenschaftliche & Regulatorische Strenge

Kriterion hält sich strikt an die **ICH Q2(R2)** Richtlinien. Die Core-Engine berechnet Linearitäts- und Kalibrierungsmetriken unter Verwendung von Modellen der gewöhnlichen kleinsten Quadrate (OLS-Regression).

Die statistische Engine bewertet die Linearität durch Berechnung der Regressionsgeraden:
$$y = \beta_0 + \beta_1 x + \epsilon$$

Das Bestimmtheitsmaß ($R^2$) wird berechnet, um die Anpassungsgüte des Modells zu bewerten:
$$R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$$

## 📡 API-Referenz

`POST /api/v1/linearity/calculate`

**Anfrage-Payload (JSON):**
```json
{
  "concentrations": [10.0, 20.0, 30.0, 40.0, 50.0],
  "areas": [12520.0, 24985.0, 37540.0, 50012.0, 62490.0],
  "r_squared_limit": 0.999
}
```

---
*Entwickelt für Präzision. Gebaut für Compliance. Entwickelt von S-labs.*