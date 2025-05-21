import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router';

const RecipeCard = ({ recipe }) => {

    const { image, title, cuisineType, likeCount, _id } = recipe;

    const placeholderImage = "https://images.deliveryhero.io/image/foodpanda/city-page/refresh-hero-city-bd.png"


    return (
        <div className="bg-gray-100 shadow-xl overflow-hidden hover:shadow-lg transition duration-300 rounded-sm">
            <div>
                <img
                    src={image || placeholderImage}
                    alt={title}
                    className="w-full h-56 object-cover"
                />
            </div>
            <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-700">Cuisine: {cuisineType}</p>
                <p className="text-sm text-gray-700 flex items-center gap-1"><AiFillLike size={18} color='#ED1C24' /> Likes: {likeCount}</p>
                <Link to={`/recipe-details/${_id}`}>
                    <button className="w-full mt-3 bg-[#ED1C24] text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                    >View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;