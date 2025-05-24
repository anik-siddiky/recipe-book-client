import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../Provider/ContextProvider';
import MyRecipePageCard from '../Components/MyRecipePageCard';
import RecipeUpdateModal from '../Components/RecipeUpdateModal';
import Loading from '../Components/Loading';
import Swal from 'sweetalert2';

const MyRecipePage = () => {
    const { user, loading, setLoading } = useContext(AllContext);
    const [myRecipes, setMyRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/recipes/user/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyRecipes(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                });
        }
    }, [user, setLoading]);


    const refreshRecipes = () => {
        fetch(`http://localhost:3000/recipes/user/${user.email}`)
            .then(res => res.json())
            .then(setMyRecipes);
    };


    const handleRecipeDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to recover this recipe!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/recipes/${id}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const recipesLeft = myRecipes.filter(singleRecipe => singleRecipe._id !== id);
                            setMyRecipes(recipesLeft);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recipe has been deleted.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false
                            });
                        }
                    });
            }
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='md:py-10 py-5 md:mb-20 min-h-screen'>
            <h2 className='text-center font-medium md:text-4xl text-3xl mb-3 text-black dark:text-white'>
                Your Total Recipes: {myRecipes.length}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 md:w-10/12 md:px-0 px-4 mx-auto'>
                {myRecipes.map(recipe => (
                    <MyRecipePageCard
                        key={recipe._id}
                        recipe={recipe}
                        handleRecipeDelete={handleRecipeDelete}
                        onUpdateClick={() => setSelectedRecipe(recipe)}
                    />
                ))}
            </div>
            {selectedRecipe && (
                <RecipeUpdateModal
                    recipe={selectedRecipe}
                    onClose={() => {
                        refreshRecipes();
                        setSelectedRecipe(null)

                    }}
                />
            )}
        </div>
    );
};

export default MyRecipePage;
