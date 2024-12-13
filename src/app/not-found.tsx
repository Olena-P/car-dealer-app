import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>

      <Link href="/">
        <button className="mt-6 w-full bg-black text-white py-2 px-4 rounded-lg">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}
