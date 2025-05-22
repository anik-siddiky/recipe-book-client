import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AllContext } from '../Provider/ContextProvider';

const AddRecipes = () => {
    const { user } = useContext(AllContext)
    console.log(user)

    const handleAddRecipes = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const ingredients = form.ingredients.value;
        const instructions = form.instructions.value;
        const cuisineType = form.cuisineType.value;
        const time = form.prepTime.value;
        const categories = Array.from(form.querySelectorAll('input[name="categories"]:checked')).map(cb => cb.value);
        const likeCount = parseInt(form.likeCount.value);

        const email = user?.email;
        console.log(email)

        const newRecipeData = {
            title,
            image,
            ingredients,
            instructions,
            cuisineType,
            time,
            categories,
            email,
            likeCount
        }

        fetch('https://recipe-book-server-ten.vercel.app/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your recipe has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })

    }

    return (
        <div className="max-w-3xl mx-auto p-6 py-12 md:py-20">
            <h2 className="md:text-4xl text-3xl font-bold md:mb-8 mb-6 text-center">Add Your Recipe</h2>
            <form onSubmit={handleAddRecipes} className="space-y-4">

                <div>
                    <label className="block mb-1 font-semibold">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="input input-bordered w-full"
                        placeholder="Recipe title"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        className="input input-bordered w-full"
                        placeholder="Enter image URL (4:3 Ratio Preferred)"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Ingredients</label>
                    <input
                        type="text"
                        name="ingredients"
                        className="input input-bordered w-full"
                        placeholder="List of ingredients"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Instructions</label>
                    <textarea
                        name="instructions"
                        className="textarea textarea-bordered w-full min-h-[150px]"
                        placeholder="Step-by-step cooking instructions"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Cuisine Type</label>
                    <select name="cuisineType" className="select select-bordered w-full" required>
                        <option value="">Select cuisine</option>
                        <option value="Bangladeshi">Bangladeshi</option>
                        <option value="Italian">Italian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Indian">Indian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Preparation Time (minutes)</label>
                    <input
                        type="number"
                        name="prepTime"
                        className="input input-bordered w-full"
                        min="1"
                        placeholder="e.g., 30"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">Categories</label>
                    <div className="flex flex-wrap gap-4">
                        {["Breakfast", "Lunch", "Dinner", "Dessert", "Snacks", "Vegan"].map((category) => (
                            <label key={category} className="flex items-center gap-2">
                                <input type="checkbox" name="categories" value={category} className="checkbox" />
                                <span>{category}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <input type="hidden" name="likeCount" value={0} />

                <div className='mt-10 md:mt-16 mb-5 md:mb-14'>
                    <button type="submit" className="btn bg-[#ED1C24] md:text-xl md:font-normal md:py-6 text-white w-full">
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipes;
