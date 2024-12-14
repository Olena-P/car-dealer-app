'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchMakes } from '@/utils/api';
import CustomSelector from './components/CustomSelector';

export default function FilterPage() {
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [makeName, setMakeName] = useState<string>('');
  const [makes, setMakes] = useState<{ MakeId: number; MakeName: string }[]>(
    []
  );

  useEffect(() => {
    async function loadMakes() {
      try {
        const data = await fetchMakes();
        setMakes(data);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    }
    loadMakes();
  }, []);

  const handleMakeChange = (name: string) => {
    const make = makes.find((make) => make.MakeName === name);
    setSelectedMake(make ? String(make.MakeId) : '');
    setMakeName(make?.MakeName || '');
  };

  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => (2015 + i).toString()
  );

  return (
    <div className="flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-3xl mb-6">Filter Vehicles</h1>
      <div className="w-full max-w-md space-y-4">
        <CustomSelector
          label="Vehicle Make"
          items={makes.map((make) => make.MakeName)}
          selectedItem={makeName}
          setSelectedItem={handleMakeChange}
          enableSearch={true}
        />

        <CustomSelector
          label="Model Year"
          items={years}
          selectedItem={selectedYear}
          setSelectedItem={setSelectedYear}
          enableSearch={false}
        />

        <Link
          href={
            selectedMake && selectedYear
              ? `/result/${selectedMake}/${selectedYear}?makeName=${encodeURIComponent(
                  makeName
                )}`
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
