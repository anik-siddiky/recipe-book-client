import React, { useEffect, useState, useRef } from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../Components/RecipeCard';

const AllRecipes = () => {

    const recipes = useLoaderData();

    const cuisineTypes = ["All Recipes", ...new Set(recipes.map(recipe => recipe.cuisineType))];
    const [selectedCuisine, setSelectedCuisine] = useState("All Recipes");
    const filteredRecipes = selectedCuisine === "All Recipes" ? recipes : recipes.filter(recipe => recipe.cuisineType === selectedCuisine);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='lg:w-10/12 px-4 mx-auto py-7 md:py-10 md:mb-10 mb-5'>
            <h2 className="text-2xl md:text-4xl font-semibold text-center text-black dark:text-white">All Recipes</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2 md:mt-4 max-w-3xl mx-auto text-sm md:text-base"> Browse through our collection of delicious recipes from various cuisines around the world. Use the filter to explore by cuisine type.</p>

            <div className='flex justify-end my-3 md:my-5'>
                <div ref={dropdownRef} className="relative inline-block text-left">
                    <div
                        role="button" style={{ width: '160px', textAlign: 'center' }}
                        className="bg-[#ED1C24] md:px-4 md:py-2 px-4 py-1 rounded cursor-pointer text-white hover:bg-red-700"
                        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                    >
                        {selectedCuisine === "All Recipes" ? "Filter Recipes" : selectedCuisine}
                    </div>

                    {
                        isDropDownOpen && (
                            <ul className="bg-gray-50 dark:bg-gray-800 absolute right-0 mt-2 w-52 rounded-box shadow p-2 z-10">
                                {
                                    cuisineTypes.map((cType, index) => (
                                        <li key={index}>
                                            <button
                                                className="w-full text-left px-2 py-1 bg-gray-50 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded text-black dark:text-white"
                                                onClick={() => {
                                                    setSelectedCuisine(cType);
                                                    setIsDropDownOpen(false);
                                                }}
                                            >
                                                {cType}
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {
                    filteredRecipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;
