import React from 'react';
import Hero from './Hero';
import TopLikedRecipes from './TopLikedRecipes';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TopLikedRecipes></TopLikedRecipes>
        </div>
    );
};

export default Home;