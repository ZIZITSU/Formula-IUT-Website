import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';
import ScrollProgress from '../components/shared/ScrollProgress/ScrollProgress';

const Root = () => {
    const location = useLocation();

    // Scroll to top after changing route
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [location.pathname]);

    return (
        <div>
            <ScrollProgress />
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;
