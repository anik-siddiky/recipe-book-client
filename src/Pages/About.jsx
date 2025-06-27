import React from 'react';
import image1 from '../assets/Kitchen/kitchen-photo-1.jpg';
import image2 from '../assets/Kitchen/kitchen-photo-2.jpg';
import image3 from '../assets/Kitchen/kitchen-photo-3.jpg';

const About = () => {
    return (
        <div className="dark:bg-gray-900 bg-white text-gray-800 dark:text-white py-20 px-4 lg:w-10/12 mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
                Discover the Story Behind <span className="text-red-600">Every Flavor</span>
            </h2>

            {/* Section 1 */}
            <div className="grid md:grid-cols-2 gap-14 mb-24">
                <img src={image1} alt="Our Kitchen" className="shadow-2xl object-cover w-full h-auto" />
                <div>
                    <h3 className="text-3xl font-bold mb-4 text-red-600">Crafted with Passion</h3>
                    <p className="text-lg leading-relaxed mb-3">
                        Welcome to a world where cooking is an art form and ingredients tell stories. Our kitchen is more than a workspace. It's a sanctuary of creativity and care, where every sizzling pan and aromatic spice is infused with soul.
                    </p>
                    <p className="text-lg leading-relaxed">
                        We don’t just share recipes. We share moments. From passed-down family secrets to spontaneous midnight cravings, each dish reflects a heartbeat, a history, and a home.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="grid md:grid-cols-2 gap-14 mb-24">
                <div>
                    <h3 className="text-3xl font-bold mb-4 text-red-600">A Community of Creators</h3>
                    <p className="text-lg leading-relaxed mb-3">
                        At our core is a thriving, supportive community of food lovers. From amateur cooks to seasoned chefs, we celebrate everyone’s unique culinary voice.
                    </p>
                    <p className="text-lg leading-relaxed">
                        By contributing and exploring, you don’t just grow your skills, you inspire others. Food is the bridge that brings us together, and every contribution adds flavor to our global table.
                    </p>
                </div>
                <img src={image2} alt="Team at Work" className="shadow-2xl object-cover w-full h-auto" />
            </div>

            {/* Section 3 */}
            <div className="grid md:grid-cols-2 gap-14">
                <img src={image3} alt="Global Flavors" className="shadow-2xl object-cover w-full h-auto" />
                <div>
                    <h3 className="text-3xl font-bold mb-4 text-red-600">Flavors Without Borders</h3>
                    <p className="text-lg leading-relaxed mb-3">
                        Explore a universe of taste that spans continents. Whether you're craving the fiery kick of South Asian curries, the delicate layers of French pastries, or the bold tang of Latin cuisine. We bring the world to your plate.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Our mission is to foster culinary exploration without limits. Because every culture, every dish, every spice has a story worth sharing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
