import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const MyRecipePageCard = ({ recipe, handleRecipeDelete, onUpdateClick }) => {
    const {
        title, image, ingredients, instructions,
        cuisineType, time, categories, likeCount, _id
    } = recipe;

    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden flex flex-col">
            <img src={image} alt={title} className="w-full h-52 object-cover" />

            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h2>

                <div className="mb-2">
                    <p className="font-semibold text-black dark:text-white">Ingredients:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{ingredients}</p>
                </div>

                <div className="mb-2">
                    <p className="font-semibold text-black dark:text-white">Instructions:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{instructions}</p>
                </div>

                <div className="flex flex-wrap justify-between text-sm text-gray-600  dark:text-gray-300 mt-2">
                    <p><span className="font-semibold">Cuisine:</span> {cuisineType}</p>
                    <p><span className="font-semibold">Time:</span> {time} min</p>
                    <p><span className="font-semibold">Like Received:</span> {likeCount}</p>
                </div>

                <div className="mt-2">
                    <p className="font-semibold text-black dark:text-white">Categories:</p>
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
                    onClick={onUpdateClick}
                        className="bg-black hover:bg-gray-600 text-white px-4 py-2 w-full flex justify-center items-center gap-1"
                    >
                        <FaEdit size={20} />
                        Update
                    </button>
                    <button
                        onClick={() => handleRecipeDelete(_id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-full flex justify-center items-center gap-1"
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
