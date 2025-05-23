import React, { useEffect, useState } from 'react';
import TopLikedRecipeCard from './TopLikedRecipeCard';

const TopLikedRecipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/recipes/top-liked')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className='md:w-10/12 md:px-0 px-4 mx-auto md:py-20 py-10'>
            <h2 className='text-center md:text-4xl text-3xl font-semibold md:mb-8 mb-5'>Our Top Recipes</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    recipes.map(recipe => <TopLikedRecipeCard key={recipe._id} recipe={recipe}></TopLikedRecipeCard>)
                }
            </div>
        </div>
    );
};

export default TopLikedRecipes;