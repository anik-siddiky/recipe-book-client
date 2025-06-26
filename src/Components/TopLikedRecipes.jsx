import React, { useEffect, useState } from 'react';
import TopLikedRecipeCard from './TopLikedRecipeCard';
import { Link } from 'react-router';

const TopLikedRecipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://recipe-book-server-ten.vercel.app/recipes/top-liked')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className='lg:w-10/12 lg:px-0 px-4 mx-auto md:py-32 py-16'>
            <h2 className='text-center md:text-4xl text-2xl font-semibold md:mb-6 mb-3 text-black dark:text-white'>Our Top Recipes</h2>
            <p className='text-center text-gray-600 dark:text-gray-300 mb-6 md:mb-10 max-w-2xl mx-auto'>
                Discover the most loved recipes, hand-picked based on user favorites. These dishes have won hearts and taste buds alike!
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    recipes.map(recipe => <TopLikedRecipeCard key={recipe._id} recipe={recipe}></TopLikedRecipeCard>)
                }
            </div>
            <Link className='flex justify-center md:mt-14 mt-8' to="all-recipes">
                <button className="bg-[#ED1C24] text-white px-6 py-3 md:px-12 md:py-6 btn border-none rounded-none md:text-2xl md:font-normal shadow-none hover:bg-red-700 hover:scale-110 hover:shadow-xl transition duration-400 ease-in-out">
                    See All Recipes
                </button>
            </Link>
        </div>
    );
};

export default TopLikedRecipes;