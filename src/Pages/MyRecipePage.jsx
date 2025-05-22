import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../Provider/ContextProvider';
import MyRecipePageCard from '../Components/MyRecipePageCard';
import Loading from '../Components/Loading';

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


    return (
        <div className='md:py-10 py-5'>
            <h2 className='text-center font-medium md:text-4xl text-3xl mb-3'>Your Recipes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 md:w-10/12 md:px-0 px-4 mx-auto'>
                {
                    myRecipes.map(recipe => <MyRecipePageCard key={recipe._id} recipe={recipe}></MyRecipePageCard>)
                }
            </div>
        </div>
    );
};

export default MyRecipePage;