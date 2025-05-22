import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../Provider/ContextProvider';
import MyRecipePageCard from '../Components/MyRecipePageCard';
import Loading from '../Components/Loading';
import Swal from 'sweetalert2';

const MyRecipePage = () => {

    const { user, loading, setLoading } = useContext(AllContext);
    const [myRecipes, setMyRecipes] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/recipes/user/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyRecipes(data);
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false)
                });
        }
    }, [user, setLoading, loading])

    if (loading) {
        return <Loading></Loading>
    }


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
                        "Content-type": "Application/json"
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


    return (
        <div className='md:py-10 py-5 md:mb-20'>
            <h2 className='text-center font-medium md:text-4xl text-3xl mb-3'>Your Total Recipes: {myRecipes.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 md:w-10/12 md:px-0 px-4 mx-auto'>
                {
                    myRecipes.map(recipe => <MyRecipePageCard key={recipe._id} handleRecipeDelete={handleRecipeDelete} recipe={recipe}></MyRecipePageCard>)
                }
            </div>
        </div>
    );
};

export default MyRecipePage;