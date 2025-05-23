import React from 'react';
import { useDarkMode } from '../Provider/ThemeContext';

const DarkModeToggleButton = () => {
    const { darkMode, setDarkMode } = useDarkMode()
    return (
        <button onClick={() => setDarkMode(!darkMode)} className='px-6 py-2 bg-gray-200 rounded-md transition-all'>
            {darkMode ? "Light" : "Dark"}
        </button>
    );
};

export default DarkModeToggleButton;