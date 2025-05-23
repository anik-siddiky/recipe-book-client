import React from 'react';
import Swal from 'sweetalert2';

const RecipeUpdateModal = ({ recipe, setMyRecipes, myRecipes, setSelectedRecipe }) => {

    if (!recipe) {
        return null;
    }

    const handleRecipeUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedRecipe = {
            title: form.title.value,
            image: form.image.value,
            ingredients: form.ingredients.value,
            instructions: form.instructions.value,
            cuisineType: form.cuisineType.value,
            time: parseInt(form.prepTime.value),
            categories: Array.from(form.categories).filter(input => input.checked).map(input => input.value),

        };

        const res = await fetch(`http://localhost:3000/recipes/${recipe._id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedRecipe)
        });

        const data = await res.json();
        if (data.modifiedCount) {
            const updatedList = myRecipes.map(singleRec => singleRec._id === recipe._id ? { ...singleRec, ...updatedRecipe } : singleRec);
            setMyRecipes(updatedList);
            Swal.fire("Updated!", "Your recipe has been updated.", "success");
        }
    }

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box min-h-[calc(100vh-100px)] md:max-w-2/4">
                <form method="dialog">
                    <button onClick={() => setSelectedRecipe(null)} className="btn bg-red-500 hover:bg-red-600 text-white absolute right-2 top-2">
                        Close</button>
                </form>



                <div className="max-w-3xl mx-auto p-6 py-16 md:py-8">
                    <h2 className="md:text-4xl text-3xl font-bold md:mb-8 mb-6 text-center">Update Your Recipe</h2>
                    <form onSubmit={handleRecipeUpdate} className="space-y-4">

                        <div>
                            <label className="block mb-1 font-semibold">Title</label>
                            <input
                                type="text"
                                defaultValue={recipe?.title}
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
                                defaultValue={recipe?.image}
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
                                defaultValue={recipe?.ingredients}
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
                                defaultValue={recipe?.instructions}
                                className="textarea textarea-bordered w-full min-h-[150px]"
                                placeholder="Step-by-step cooking instructions"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Cuisine Type</label>
                            <select name="cuisineType" defaultValue={recipe?.cuisineType} className="select select-bordered w-full" required>
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
                                defaultValue={recipe?.time}
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
                                        <input type="checkbox" name="categories" defaultChecked={recipe?.categories?.includes(category)} value={category} className="checkbox" />
                                        <span>{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>


                        <div className='mt-10 md:mt-16 mb-5 md:mb-14'>
                            <button type="submit" className="btn bg-[#ED1C24] md:text-xl md:font-normal md:py-6 text-white w-full">
                                Update Recipe
                            </button>
                        </div>
                    </form>
                </div>




            </div>
        </dialog>
    );
};

export default RecipeUpdateModal;
