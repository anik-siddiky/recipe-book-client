import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const MyRecipePageCard = ({ recipe, handleRecipeDelete, handleUpdateClick }) => {
    const {
        title, image, ingredients, instructions,
        cuisineType, time, categories, likeCount, _id
    } = recipe;

    return (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden m-4 border border-gray-100 flex flex-col">
            <img src={image} alt={title} className="w-full h-52 object-cover" />

            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2">{title}</h2>

                <div className="mb-2">
                    <p className="font-semibold">Ingredients:</p>
                    <p className="text-sm text-gray-700">{ingredients}</p>
                </div>

                <div className="mb-2">
                    <p className="font-semibold">Instructions:</p>
                    <p className="text-sm text-gray-700">{instructions}</p>
                </div>

                <div className="flex flex-wrap justify-between text-sm text-gray-600 mt-2">
                    <p><span className="font-semibold">Cuisine:</span> {cuisineType}</p>
                    <p><span className="font-semibold">Time:</span> {time} min</p>
                    <p><span className="font-semibold">Like Received:</span> {likeCount}</p>
                </div>

                <div className="mt-2">
                    <p className="font-semibold">Categories:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {categories?.map((cat, idx) => (
                            <span key={idx} className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto flex justify-between items-center gap-4 pt-4">
                    <button
                        onClick={handleUpdateClick}
                        className="bg-black hover:bg-gray-600 text-white px-4 py-2 rounded-md w-full flex justify-center items-center gap-1"
                    >
                        <FaEdit size={20} />
                        Update
                    </button>
                    <button
                        onClick={() => handleRecipeDelete(_id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full flex justify-center items-center gap-1"
                    >
                        <MdDelete size={20} />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyRecipePageCard;
