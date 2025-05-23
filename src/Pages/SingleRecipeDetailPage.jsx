import React, { useContext, useEffect, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import likeIcon from "/icons8-like-100.png"
import { Tooltip } from 'react-tooltip';
import { AllContext } from '../Provider/ContextProvider';

const SingleRecipeDetailPage = () => {
    const recipe = useLoaderData();
    const { user } = useContext(AllContext);
    const recipeEmail = recipe.email;
    const userEmail = user.email;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { title, image, ingredients, instructions, cuisineType, time, categories, likeCount } = recipe;

    const [likes, setLikes] = useState(parseInt(likeCount));

    const handleLike = async () => {
        if (userEmail === recipeEmail) return;
        try {
            const response = await fetch(`http://localhost:3000/recipes/${recipe._id}/like`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setLikes(prev => prev + 1);
                Swal.fire({
                    title: "You Liked The Recipe!",
                    imageUrl: likeIcon,
                    imageWidth: 80,
                    imageHeight: 80,
                    imageAlt: "Like Icon",
                    confirmButtonColor: "#ED1C24",
                });
            } else {
                console.error("Failed to like the recipe");
            }
        } catch (error) {
            console.error("Error liking recipe:", error);
        }
    };


    return (
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-20">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={image} alt={title} className="w-full md:h-[500px] h-72 " />

                <div className="p-6">
                    <p className='text-green-700 font-medium md:mb-3 mb-2'>{likes} people are interested in this recipe!</p>
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                                Cuisine: {cuisineType}
                            </span>
                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                Prep Time: {time} mins
                            </span>
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                Total Likes: {likes}
                            </span>
                        </div>

                        <div className="flex justify-start md:justify-end">
                            <button
                                onClick={handleLike}
                                disabled={userEmail === recipeEmail}
                                {...(userEmail === recipeEmail
                                    ? {
                                        'data-tooltip-id': 'likeTip',
                                        'data-tooltip-content': 'You can’t like your own recipe!',
                                    }
                                    : {})}
                                className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1 md:py-2 text-white text-xs md:text-sm rounded ${userEmail === recipeEmail
                                    ? 'bg-gray-400 cursor-not-allowed opacity-50'
                                    : 'bg-blue-500 hover:bg-blue-600'}`}>
                                <AiFillLike size={16} className="md:size-[18px]" />
                                Like It</button>

                            {userEmail === recipeEmail && (
                                <Tooltip id="likeTip" place="top" />
                            )}

                        </div>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl font-semibold mb-2">Categories</h2>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-300 text-blue-950 px-2 py-1 text-sm rounded-full"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl font-semibold mb-2">Ingredients</h2>
                        <p className="text-gray-700 text-sm md:text-base">{ingredients}</p>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-semibold mb-2">Instructions</h2>
                        <p className="text-gray-700 text-sm md:text-base">{instructions}</p>
                    </div>
                </div>
            </div>
            <Link className='flex justify-center' to="/all-recipes">
                <button className='btn hover:bg-red-700 bg-[#ED1C24] md:text-xl md:font-normal md:py-6 text-white w-1/2  mt-10 md:mt-20'>Back to All Recipes</button>
            </Link>
        </div>
    );
};

export default SingleRecipeDetailPage;