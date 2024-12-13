import { Suspense } from 'react';
import { fetchVehicleModels } from '@/utils/api';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/app/components/Breadcrumbs';

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
  searchParams: searchParamsPromise,
}: {
  params: Promise<{ makeId: string; year: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const params = await paramsPromise;
  const searchParams = await searchParamsPromise;
  const { makeId, year } = params;

  const makeName = decodeURIComponent(
    searchParams['makeName'] || 'Unknown Make'
  );

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
        <ul className="space-y-2 w-full max-w-md">
          {vehicleModels.map((model, index) => (
            <li
              key={`${model.Model_Name}-${index}`}
              className="border border-gray-200 p-2 rounded-md shadow-sm text-center"
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
    <div className="flex flex-col items-center justify-center bg-white text-black">
      <Breadcrumbs />
      <h1 className="text-3xl font-bold mb-6">
        Vehicle Models for {makeName} ({year})
      </h1>
      <Suspense fallback={<p>Loading vehicle models...</p>}>
        <ModelsList />
      </Suspense>
    </div>
  );
}
