import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-white text-black">
    <header className="p-4 border-b border-gray-200">
      <h1 className="text-2xl font-bold">Car Dealer App</h1>
    </header>
    <main className="flex-grow">{children}</main>
    <footer className="p-4 border-t border-gray-200 text-center text-sm text-gray-600">
      &copy; {new Date().getFullYear()} Car Dealer App.{' '}
      <Link
        href="https://olenacodes.netlify.app/"
        aria-label="OlenaCodes"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 hover:text-blue-700"
      >
        OlenaCodes
      </Link>
      .
    </footer>
  </div>
);

export default Layout;
