import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router';

const TopLikedRecipeCard = ({ recipe }) => {

    const { image, title, cuisineType, likeCount, _id } = recipe;
    const placeholderImage = "https://images.deliveryhero.io/image/foodpanda/city-page/refresh-hero-city-bd.png"

    return (
        <div className="bg-gray-100 dark:bg-gray-800 shadow-xl hover:scale-105 overflow-hidden transition duration-300 rounded-sm">
            <div>
                <img
                    src={image || placeholderImage}
                    alt={title}
                    className="w-full h-56 object-cover"
                />
            </div>
            <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-700  dark:text-white">Cuisine: {cuisineType}</p>
                <p className="text-sm text-gray-700  dark:text-white flex items-center gap-1"><AiFillLike size={18} color='#ED1C24' /> Likes: {likeCount}</p>
                <Link to={`/recipe-details/${_id}`}>
                    <button className="w-full rounded-none mt-3 bg-[#ED1C24] text-white px-4 py-2  hover:bg-red-700 transition cursor-pointer"
                    >View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default TopLikedRecipeCard;