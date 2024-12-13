'use client';

import { useState, useEffect } from 'react';
import { fetchMakes } from '@/utils/api';

interface MakesSelectorProps {
  selectedMake: string;
  setSelectedMake: (makeId: string) => void;
}

export default function MakesSelector({
  selectedMake,
  setSelectedMake,
}: MakesSelectorProps) {
  const [makes, setMakes] = useState<{ MakeId: number; MakeName: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMakes() {
      try {
        const data = await fetchMakes();
        setMakes(data);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      } finally {
        setLoading(false);
      }
    }
    loadMakes();
  }, []);

  return (
    <div>
      <label htmlFor="makes" className="block text-sm font-medium mb-2">
        Select Vehicle Make
      </label>
      <select
        id="makes"
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2"
        disabled={loading}
      >
        {loading ? (
          <option>Loading vehicle makes...</option>
        ) : (
          <>
            <option value="">Choose a Make</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeId}>
                {make.MakeName}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
}
