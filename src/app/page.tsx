'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [concentrations, setConcentrations] = useState('10.0, 20.0, 30.0, 40.0, 50.0');
  const [areas, setAreas] = useState('12520.0, 24985.0, 37540.0, 50012.0, 62490.0');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState('');

  const calculateLinearity = async () => {
    try {
      setError('');
      setResults(null);
      
      const parsedConcentrations = concentrations.split(',').map(c => Number(c.trim()));
      const parsedAreas = areas.split(',').map(a => Number(a.trim()));

      const response = await fetch('/api/v1/linearity/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          concentrations: parsedConcentrations,
          areas: parsedAreas,
          r_squared_limit: 0.999
        })
      });

      if (!response.ok) {
        throw new Error('Failed to compute linearity. Check your API server connection.');
      }

      const data = await response.json();
      setResults(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen p-10 bg-slate-50 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="border-b pb-4">
          <h1 className="text-3xl font-bold text-brand-900">Kriterion HPLC</h1>
          <p className="text-slate-500">Analytical Method Validation Dashboard</p>
        </header>

        <section className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Concentrations (μg/mL, comma separated)</label>
            <input 
              className="w-full border p-2 rounded focus:ring-2 focus:ring-brand-600 outline-none"
              value={concentrations}
              onChange={(e) => setConcentrations(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Peak Areas (comma separated)</label>
            <input 
              className="w-full border p-2 rounded focus:ring-2 focus:ring-brand-600 outline-none"
              value={areas}
              onChange={(e) => setAreas(e.target.value)}
            />
          </div>
          <button 
            onClick={calculateLinearity}
            className="bg-brand-600 text-white px-4 py-2 rounded hover:bg-brand-900 transition-colors"
          >
            Calculate Validation
          </button>
        </section>

        {error && <div className="text-red-600 bg-red-50 p-4 rounded border border-red-200">{error}</div>}

        {results && (
          <section className="bg-white p-6 rounded-lg shadow-sm border grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded border">
              <p className="text-sm text-slate-500">R-Squared</p>
              <p className="text-2xl font-bold">{results.r_squared.toFixed(5)}</p>
            </div>
            <div className={`p-4 rounded border ${results.is_compliant ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <p className="text-sm text-slate-500">ICH Q2 Compliance</p>
              <p className="text-2xl font-bold text-slate-800">{results.is_compliant ? 'PASS' : 'FAIL'}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded border">
              <p className="text-sm text-slate-500">Slope</p>
              <p className="text-xl">{results.slope.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded border">
              <p className="text-sm text-slate-500">Y-Intercept</p>
              <p className="text-xl">{results.intercept.toFixed(2)}</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}