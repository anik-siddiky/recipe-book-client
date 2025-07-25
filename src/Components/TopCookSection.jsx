import React from 'react';
import { FaStar } from 'react-icons/fa';
import davidSmith from '../assets/chef-1.png'
import loganWilliam from '../assets/chef-2.png'
import loraJordan from '../assets/chef-3.png'
import gordonRamsay from '../assets/chef-4.png'

const chefs = [
    {
        name: "David Smith",
        image: davidSmith,
        description:
            "David Smith is a professional chef based in Dubai, working at one of the city's premier five-star restaurants. With a passion for culinary innovation, he blends global flavors with modern techniques to create unforgettable dining experiences.",
    },
    {
        name: "Logan William",
        image: loganWilliam,
        description:
            "Logan William is a farm-to-table enthusiast and seasonal food advocate. Known for his rustic yet refined approach, Logan brings soul to the plate using local ingredients and authentic methods.",
    },
    {
        name: "Lora Jordan",
        image: loraJordan,
        description:
            "Lora Jordan crafts vibrant, health-focused recipes that celebrate whole foods. Her balanced approach to cooking and creative presentations have made her a favorite among wellness-driven foodies.",
    },
    {
        name: "Gordon Ramsay",
        image: gordonRamsay,
        description:
            "Gordon Ramsay is a world-renowned chef and television personality. Famed for his exacting standards, he's transformed modern cuisine with his fearless techniques and relentless passion.",
    },
];

const TopCookSection = () => {
    return (
        <div className="pb-20 lg:px-0 px-4">
            <h3 className="text-center text-2xl md:text-4xl font-semibold md:mb-6 mb-3 text-black dark:text-white">Our Top Creators</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 md:mb-10 max-w-2xl mx-auto">Meet the masterminds behind our best recipes. These top chefs bring passion, creativity, and expertise to every dish they craft.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:w-10/12 mx-auto">
                {chefs.map((chef, index) => (
                    <div key={index} className=" bg-gray-100 shadow-lg rounded-xl p-6 text-center transition-transform transform hover:scale-103 border border-transparent hover:shadow-2xl dark:bg-gray-800 cursor-pointer">
                        <img
                            src={chef.image}
                            alt={chef.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#ED1C24] shadow-md" />
                        <h4 className="text-xl font-semibold text-gray-700 mb-2 dark:text-white">
                            {chef.name}
                        </h4>
                        <div className="flex justify-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} color="#FFD700" className="mx-0.5" />
                            ))}
                        </div>
                        <p className="text-gray-700 dark:text-white text-sm">{chef.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCookSection;
