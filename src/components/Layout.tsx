import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="flex-grow min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
