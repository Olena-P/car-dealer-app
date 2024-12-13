import { Suspense } from 'react';
import { fetchVehicleModels } from '@/utils/api';
import { notFound } from 'next/navigation';

interface VehicleModel {
  Model_Name: string;
}

export async function generateStaticParams() {
  const exampleMakeIds = ['440', '441'];
  const exampleYears = ['2021', '2022'];
  return exampleMakeIds.flatMap((makeId) =>
    exampleYears.map((year) => ({ makeId, year }))
  );
}

export default async function ResultPage({
  params: paramsPromise,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) {
  const params = await paramsPromise;
  const { makeId, year } = params;

  const ModelsList = async () => {
    try {
      const vehicleModels: VehicleModel[] = await fetchVehicleModels(
        makeId,
        year
      );
      if (vehicleModels.length === 0) {
        return (
          <p className="text-gray-500">
            No models found for the selected make and year.
          </p>
        );
      }
      return (
        <ul className="space-y-2">
          {vehicleModels.map((model) => (
            <li
              key={model.Model_Name}
              className="border border-gray-300 p-2 rounded-md shadow-sm"
            >
              {model.Model_Name}
            </li>
          ))}
        </ul>
      );
    } catch (error) {
      console.error(error);
      notFound();
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold mb-4">
        Vehicle Models for Make ID: {makeId} and Year: {year}
      </h1>
      <Suspense fallback={<p>Loading vehicle models...</p>}>
        <ModelsList />
      </Suspense>
    </div>
  );
}
