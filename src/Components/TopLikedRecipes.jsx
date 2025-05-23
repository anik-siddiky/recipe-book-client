import React, { useEffect, useState } from 'react';
import TopLikedRecipeCard from './TopLikedRecipeCard';
import { Link } from 'react-router';

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
            <Link className='flex justify-center md:mt-14 mt-8' to="all-recipes">
                <button className="bg-[#ED1C24] text-white px-6 py-3 md:px-12 md:py-7 btn border-none rounded-none md:text-2xl md:font-normal shadow-none hover:bg-red-700 hover:scale-110 hover:shadow-xl transition duration-400 ease-in-out">
                    See All Recipes
                </button>
            </Link>
        </div>
    );
};

export default TopLikedRecipes;