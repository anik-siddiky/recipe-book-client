import React from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <div>
                    <Outlet></Outlet>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;