'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const breadcrumbs = [];

  breadcrumbs.push({
    name: 'Home',
    path: '/',
  });

  if (pathname.startsWith('/result')) {
    const makeId = pathname.split('/')[2];
    const year = pathname.split('/')[3];
    const makeName = searchParams.get('makeName') || 'Unknown Make';

    breadcrumbs.push({
      name: `${makeName} (${year})`,
      path: pathname,
    });
  }

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ul className="flex space-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-600">{breadcrumb.name}</span>
            ) : (
              <Link
                href={breadcrumb.path}
                className="text-blue-900 hover:text-blue-800"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
