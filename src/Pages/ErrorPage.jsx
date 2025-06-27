import React from 'react';
import { Link } from 'react-router';
import icon from '../assets/recipe-favicon.png';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <img src={icon} alt="Site Icon" className="w-36 h-36 mb-6" />
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
            <p className="text-gray-600 mb-6 max-w-md">
                Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link to="/">
                <button className="bg-[#ED1C24] hover:bg-red-700 text-white font-semibold py-3 px-6 shadow">
                    Go to Homepage
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
