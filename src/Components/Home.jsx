import React from 'react';
import Hero from './Hero';
import TopLikedRecipes from './TopLikedRecipes';
import TopCookSection from './TopCookSection';

const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <TopLikedRecipes></TopLikedRecipes>
            </section>
            <section>
                <TopCookSection></TopCookSection>
            </section>
        </div>
    );
};

export default Home;