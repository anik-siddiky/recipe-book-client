import React, { useContext, useRef } from 'react';
import { NavLink, Outlet, Link } from 'react-router';
import { Home, PlusCircle, BookOpen } from 'lucide-react';
import image from '../assets/recipe-book-header-2.png';
import { AllContext } from '../Provider/ContextProvider';
import DarkModeToggleButton from '../Components/DarkModeToggleButton';

const Dashboard = () => {
    const drawerRef = useRef(null);
    const { user } = useContext(AllContext);

    const closeDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = false;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="drawer lg:drawer-open">
                <input ref={drawerRef} id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                {/* Page content */}
                <div className="drawer-content flex flex-col min-h-screen">
                    {/* Mobile Navbar */}
                    <div className="navbar bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow px-4 lg:hidden">
                        <div className="flex items-center justify-between w-full">
                            <label htmlFor="my-drawer-2" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <span className="text-lg font-semibold">Dashboard</span>
                        </div>
                    </div>

                    {/* Main content from nested routes */}
                    <div className="flex-1">
                        <Outlet />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <aside className="h-full w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col">
                        {/* Logo */}
                        <div className='flex justify-between items-center'>
                            <Link to="/" className="mb-4 block text-center">
                                <img
                                    src={image}
                                    alt="Recipe Book Logo"
                                    className="lg:mx-auto h-16 object-contain"
                                />
                            </Link>
                            <div className='mb-4'>
                                <DarkModeToggleButton />
                            </div>
                        </div>

                        {/* User Info */}
                        {user && (
                            <div className='bg-gray-200 dark:bg-gray-700 rounded-xl mb-6'>
                                <div className="flex justify-center items-center gap-5 p-3">
                                    <p className="font-semibold">{user.displayName || 'Anonymous'}</p>

                                    <img
                                        src={user.photoURL || 'https://via.placeholder.com/80'}
                                        alt={user.displayName || 'User'}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-red-500" />
                                </div>
                            </div>
                        )}

                        {/* Navigation Links */}
                        <ul className="space-y-4 flex-1">
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    end
                                    onClick={closeDrawer}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                            ? 'bg-red-600 text-white'
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`
                                    }
                                >
                                    <Home size={20} /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/my-recipes"
                                    onClick={closeDrawer}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                            ? 'bg-red-600 text-white'
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`
                                    }
                                >
                                    <BookOpen size={20} /> My Recipes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/add-recipe"
                                    onClick={closeDrawer}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                            ? 'bg-red-600 text-white'
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`
                                    }
                                >
                                    <PlusCircle size={20} /> Add Recipe
                                </NavLink>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
