import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LoadingSpinner from '../common/LoadingSpinner';

function Layout() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {isLoading ? <LoadingSpinner /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
