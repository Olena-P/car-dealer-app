import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-white text-black w-full max-w-3xl mx-auto">
    <header className="flex items-center p-4 border-b border-gray-200 gap-4 ">
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      <h1 className="text-2xl font-bold text-gray-600">Car Dealer App</h1>
    </header>
    <main className="flex-grow p-4">{children}</main>
    <footer className="p-4 border-t border-gray-200 text-center text-sm text-gray-600">
      &copy; {new Date().getFullYear()} Car Dealer App.{' '}
      <Link
        href="https://olenacodes.netlify.app/"
        aria-label="OlenaCodes website link"
        title="OlenaCodes website link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-900 hover:text-blue-800 underline"
      >
        OlenaCodes
      </Link>
      .
    </footer>
  </div>
);

export default Layout;
