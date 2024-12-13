'use client';

import { useState } from 'react';
import Link from 'next/link';
import MakesSelector from './components/MakesSelector';

export default function FilterPage() {
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => (2015 + i).toString()
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Filter Vehicles</h1>
      <div className="w-full max-w-md space-y-4">
        <MakesSelector
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
        />
        <div>
          <label htmlFor="years" className="block text-sm font-medium mb-2">
            Select Model Year
          </label>
          <select
            id="years"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Choose a Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <Link
          href={
            selectedMake && selectedYear
              ? `/result/${selectedMake}/${selectedYear}`
              : '#'
          }
        >
          <button
            disabled={!selectedMake || !selectedYear}
            className={`mt-6 w-full bg-black text-white py-2 px-4 rounded-lg ${
              !selectedMake || !selectedYear
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
