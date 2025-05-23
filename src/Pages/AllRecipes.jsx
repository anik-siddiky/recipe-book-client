import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../Components/RecipeCard';

const AllRecipes = () => {

    const recipes = useLoaderData();

    const cuisineTypes = ["All Recipes", ...new Set(recipes.map(recipe => recipe.cuisineType))];
    const [selectedCuisine, setSelectedCuisine] = useState("All Recipes");
    const filteredRecipes = selectedCuisine === "All Recipes" ? recipes : recipes.filter(recipe => recipe.cuisineType === selectedCuisine);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='md:w-10/12 md:px-0 px-4 mx-auto py-7 md:py-10 md:mb-10 mb-5'>
            <h2 className="text-2xl md:text-4xl font-semibold text-center">All Recipes</h2>

            <div className='flex justify-end my-3 md:my-5'>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="bg-[#ED1C24] md:px-4 md:py-2 px-4 py-1 rounded cursor-pointer text-white hover:bg-red-700">Filter Recipes</div>

                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {
                            cuisineTypes.map((cType, index) => (<li key={index}><button onClick={() => setSelectedCuisine(cType)}>{cType}</button></li>))
                        }

                    </ul>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                {
                    filteredRecipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;