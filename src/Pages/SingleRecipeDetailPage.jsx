import React from 'react';
import { useLoaderData } from 'react-router';

const SingleRecipeDetailPage = () => {

    const recipe = useLoaderData();
    console.log(recipe);

    return (
        <div>

        </div>
    );
};

export default SingleRecipeDetailPage;