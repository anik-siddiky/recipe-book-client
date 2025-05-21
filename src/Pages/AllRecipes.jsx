import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../Components/RecipeCard';

const AllRecipes = () => {

    const recipes = useLoaderData();

    return (
        <div className='md:w-10/12 md:px-0 px-4 mx-auto py-7 md:py-10 md:mb-10 mb-5'>
            <h2 className="text-2xl md:text-4xl mb-4 md:mb-10 font-semibold text-center">All Recipes</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                {
                    recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;