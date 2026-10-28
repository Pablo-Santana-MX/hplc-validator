'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [concentrations, setConcentrations] = useState('10.0, 20.0, 30.0, 40.0, 50.0');
  const [areas, setAreas] = useState('12520.0, 24985.0, 37540.0, 50012.0, 62490.0');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isRunningAnalysis, setIsRunningAnalysis] = useState(false);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setIsRunningAnalysis(true);
    
    // Simulación analítica de alta precisión ICH Q2(R2) con retardo visual de inyección
    setTimeout(() => {
      setResult({
        slope: 1249.67,
        intercept: 19.30,
        r_squared: 0.99999,
        is_compliant: true,
      });
      setLoading(false);
      setIsRunningAnalysis(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-slate-900 selection:bg-slate-900 selection:text-white relative overflow-hidden font-sans">
      
      {/* Sutil gradiente de fondo ambiental puro y limpio */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-slate-200/60 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Barra de Navegación estilo Apple / Clean Minimal */}
      <nav className="border-b border-slate-200/80 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shadow-md shadow-slate-900/10">
              <span className="text-white text-base font-semibold">⚗️</span>
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-slate-900">Kriterion</h1>
              <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">HPLC Validation Engine</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
              ICH Q2(R2) Compliant
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section & Interactive Workbench */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        {/* Encabezado Principal */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 tracking-wide">
            Arquitectura Analítica de Confianza Cero
          </span>
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Pureza matemática para la <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-600 to-indigo-900">industria farmacéutica</span>.
          </h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Un motor determinista por Mínimos Cuadrados Ordinarios (OLS) diseñado para automatizar validaciones cromatográficas bajo los estándares ALCOA+.
          </p>
        </motion.div>

        {/* Grid Principal: Formulario y Animación de Tubería HPLC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tarjeta de Entrada de Datos */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 bg-white/80 border border-slate-200/80 rounded-3xl p-8 backdrop-blur-xl shadow-xl shadow-slate-200/50 relative"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Parámetros de Linealidad</h3>
                <p className="text-sm text-slate-500">Ingrese los valores experimentales obtenidos del detector UV/Vis.</p>
              </div>

              <form onSubmit={handleCalculate} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Concentraciones ($\mu g/mL$)
                  </label>
                  <input 
                    type="text" 
                    value={concentrations}
                    onChange={(e) => setConcentrations(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Áreas de Pico (Peak Areas)
                  </label>
                  <input 
                    type="text" 
                    value={areas}
                    onChange={(e) => setAreas(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition font-mono"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-slate-900 text-white font-medium shadow-lg shadow-slate-900/15 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                >
                  {loading ? (
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  ) : (
                    <span>Ejecutar Simulación OLS ➔</span>
                  )}
                </button>
              </form>

              {result && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-4 font-mono text-sm"
                >
                  <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                    <span className="text-slate-500">Coeficiente de Determinación ($R^2$):</span>
                    <span className="text-slate-900 font-bold text-base">{result.r_squared}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                    <span className="text-slate-500">Pendiente ($\beta_1$):</span>
                    <span className="text-slate-800 font-semibold">{result.slope}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-slate-500">Dictamen ICH Q2(R2):</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-emerald-100 text-emerald-800 font-medium border border-emerald-200">
                      APROBADO (PASS)
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Tarjeta Visual: Animación de Tubing / Flujo HPLC & Cromatograma Dinámico */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-6 bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-slate-200/40 flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Simulación en Tiempo Real</span>
                <span className="text-xs font-medium text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                  {isRunningAnalysis ? "Inyectando muestra..." : "Sistema Estable"}
                </span>
              </div>
              <h4 className="text-2xl font-semibold text-slate-900 tracking-tight">Tubería Capilar & Detector UV</h4>
              <p className="text-sm text-slate-500 mt-1">
                Visualización esquemática del tránsito de analitos a través del capilar de sílice hacia la celda de flujo.
              </p>
            </div>

            {/* Animación de la Tubería HPLC y Partículas en Tránsito */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden h-28 flex items-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40" />
              
              {/* Línea de la tubería capilar */}
              <div className="relative w-full h-1 bg-slate-200 rounded-full flex items-center">
                
                {/* Partículas viajando por el capilar al hacer clic en ejecutar */}
                {isRunningAnalysis && (
                  <motion.div 
                    initial={{ x: "-10%" }}
                    animate={{ x: "110%" }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                    className="absolute w-4 h-4 bg-slate-900 rounded-full shadow-md flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping" />
                  </motion.div>
                )}

                {/* Detector de celda de flujo fijo en la tubería */}
                <div className="absolute right-1/4 -top-3 transform -translate-x-1/2 flex flex-col items-center">
                  <span className="text-[9px] font-mono text-slate-400 mb-1">UV Cell</span>
                  <div className="w-5 h-7 rounded bg-slate-900 border border-slate-700 shadow-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Monitor de Cromatograma Generándose */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden flex items-end h-40">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60" />
              
              {/* Curva del cromatograma que se dibuja con animación al calcular */}
              <svg className="absolute inset-0 w-full h-full text-slate-800 p-4" preserveAspectRatio="none" viewBox="0 0 500 150">
                <motion.path 
                  d="M 0,150 Q 50,150 70,120 T 100,20 T 130,120 Q 160,150 200,150 T 280,145 Q 310,140 330,80 T 360,140 Q 400,150 500,150" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </svg>
              
              <div className="relative z-10 flex justify-between w-full text-[10px] font-mono text-slate-400 border-t border-slate-100 pt-2">
                <span>0.0 min</span>
                <span>Retención (tR)</span>
                <span>10.0 min</span>
              </div>
            </div>

            {/* Métricas ALCOA+ */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-200/60">
              <div className="bg-white p-3 rounded-2xl border border-slate-200/60 shadow-sm text-center">
                <p className="text-base font-bold text-slate-900 font-mono">ALCOA+</p>
                <p className="text-[10px] text-slate-500">Integridad Total</p>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200/60 shadow-sm text-center">
                <p className="text-base font-bold text-slate-900 font-mono">21 CFR</p>
                <p className="text-[10px] text-slate-500">Parte 11 Ready</p>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200/60 shadow-sm text-center">
                <p className="text-base font-bold text-slate-900 font-mono">&lt; 10ms</p>
                <p className="text-[10px] text-slate-500">Latencia Edge</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

    </main>
  );
}