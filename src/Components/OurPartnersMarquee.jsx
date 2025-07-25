import React from 'react';
import Marquee from 'react-fast-marquee';
import logo1 from '../assets/companyLogoForRB/dominos.png';
import logo2 from '../assets/companyLogoForRB/kfc.png';
import logo3 from '../assets/companyLogoForRB/mcdonalds.png';
import logo4 from '../assets/companyLogoForRB/nestle.png';
import logo5 from '../assets/companyLogoForRB/pizzahut.png';
import logo6 from '../assets/companyLogoForRB/starbucks.png';
import logo7 from '../assets/companyLogoForRB/subway.png';
import logo8 from '../assets/companyLogoForRB/ubereats.png';
import logo9 from '../assets/companyLogoForRB/zomato.png';

const OurPartnersMarquee = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

    return (
        <div className='py-10 md:py-20 lg:w-10/12 lg:px-0 px-4 mx-auto'>
            <h4 className='text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-6 text-black dark:text-white'>Our Partners</h4>
            <p className='text-center text-gray-600 dark:text-gray-300 mb-4 md:mb-8 max-w-2xl mx-auto'>
                We’re proud to collaborate with world-renowned food brands and delivery services to bring the best to your plate.
            </p>
            <Marquee speed={70} gradient={false}>
                {logos.map((logo, index) => (<img key={index} src={logo} className='w-40 md:w-52 ' />
                ))}
            </Marquee>
        </div>
    );
};

export default OurPartnersMarquee;