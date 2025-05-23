import React from 'react';
import Hero from './Hero';
import TopLikedRecipes from './TopLikedRecipes';
import TopCookSection from './TopCookSection';
import OurPartnersMarquee from './OurPartnersMarquee';

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
            <section>
                <OurPartnersMarquee></OurPartnersMarquee>
            </section>
        </div>
    );
};

export default Home;