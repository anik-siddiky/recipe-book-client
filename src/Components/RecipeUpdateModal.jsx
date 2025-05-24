import React, { useState } from 'react';
import Swal from 'sweetalert2';

const categoryOptions = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snacks", "Vegan"];
const cuisineOptions = ["Bangladeshi", "Italian", "Mexican", "Indian", "Chinese", "Others"];

const RecipeUpdateModal = ({ recipe, onClose }) => {
    const [formData, setFormData] = useState({
        title: recipe.title,
        image: recipe.image,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        cuisineType: recipe.cuisineType,
        time: recipe.time,
        categories: recipe.categories || []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const categories = checked
                ? [...prev.categories, value]
                : prev.categories.filter(cat => cat !== value);
            return { ...prev, categories };
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        if (formData.categories.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please select at least one category.',
            });
            return;
        }

        fetch(`http://localhost:3000/recipes/${recipe._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount || data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Recipe updated!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    onClose();
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: 'No changes were made.',
                    });
                }
            })
            .catch(err => {
                console.error("Update error:", err);
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong.',
                });
            });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-2xl overflow-y-auto max-h-[100vh] relative">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 btn border-none text-white bg-[#ED1C24] hover:bg-[#c9151c] transition"
                >Close</button>


                <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Update</h2>

                <form onSubmit={handleUpdate} className="space-y-4">

                    <input name="title" value={formData.title} onChange={handleChange}
                        placeholder="Title"
                        className="input input-bordered w-full bg-gray-100 text-black dark:bg-gray-700 dark:text-white"
                        required
                    />

                    <input name="image" value={formData.image} onChange={handleChange}
                        placeholder="Image URL"
                        className="input input-bordered w-full bg-gray-100 text-black dark:bg-gray-700 dark:text-white"
                        required
                    />

                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        placeholder="Ingredients"
                        className="textarea textarea-bordered w-full bg-gray-100 text-black dark:bg-gray-700 dark:text-white"
                        rows={2}
                        required
                    ></textarea>


                    <textarea name="instructions" value={formData.instructions} onChange={handleChange}
                        placeholder="Instructions"
                        className="textarea textarea-bordered w-full bg-gray-100 text-black dark:bg-gray-700 dark:text-white"
                        rows={8}
                        required
                    ></textarea>

                    <select name="cuisineType" value={formData.cuisineType} onChange={handleChange}
                        className="select select-bordered w-full bg-gray-100 text-black dark:bg-gray-700 dark:text-white"
                        required
                    >
                        <option value="">Select cuisine</option>
                        {cuisineOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    <input name="time" type="number" value={formData.time} onChange={handleChange}
                        placeholder="Time in minutes"
                        min={1}
                        className="input input-bordered w-full bg-gray-100 text-black dark:bg-gray-700 dark:text-white"
                        required
                    />

                    <div>
                        <label className="block mb-1 font-semibold text-black dark:text-white">Categories</label>
                        <div className="flex flex-wrap gap-4">
                            {categoryOptions.map(cat => (
                                <label key={cat} className="flex items-center gap-2 text-black dark:text-white">
                                    <input
                                        type="checkbox"
                                        name="categories"
                                        value={cat}
                                        checked={formData.categories.includes(cat)}
                                        onChange={handleCheckboxChange}
                                        className="checkbox checkbox-primary dark:border-gray-500"
                                    />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="btn border-none w-full text-white bg-[#ED1C24] hover:bg-[#c9151c] transition">Update Recipe</button>
                </form>
            </div>
        </div>
    );
};

export default RecipeUpdateModal;
