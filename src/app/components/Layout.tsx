const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-white text-black">
    <header className="p-4 border-b border-gray-200">
      <h1 className="text-2xl font-bold">Car Dealer App</h1>
    </header>
    <main className="flex-grow">{children}</main>
    <footer className="p-4 border-t border-gray-200 text-center">
      &copy; {new Date().getFullYear()} Car Dealer App
    </footer>
  </div>
);

export default Layout;
