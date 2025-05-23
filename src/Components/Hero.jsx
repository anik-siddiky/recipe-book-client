import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const images = [
    "/hero-image-1.jpg",
    "/hero-image-2.jpg",
    "/hero-image-3.jpg",
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);
    };

    const resetAutoSlide = () => {
        clearInterval(intervalRef.current);
        startAutoSlide();
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        resetAutoSlide();
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        resetAutoSlide();
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="w-full h-full relative">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 text-white text-center px-4">
                <div className="">


                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Discover Your <br />
                        <span className="text-2xl md:text-4xl">
                            <span className="text-[#ED1C24]">
                                <Typewriter
                                    words={['Next Favorite Meal', 'Dream Dinner Tonight', 'Go-To Comfort Dish', 'Ultimate Feast']}
                                    loop={true}
                                    cursor
                                    cursorStyle="..."
                                    typeSpeed={60}
                                    deleteSpeed={40}
                                    delaySpeed={1000}
                                />
                            </span>
                        </span>
                    </h1>



                    <p className="text-base md:text-lg mb-6">Explore a world of delicious recipes tailored to your taste. <br /> Whether you're cooking for one or a crowd, we help you choose with confidence since 2015.</p>
                    <Link to="all-recipes">
                        <button className="bg-[#ED1C24] text-white px-6 py-3 md:px-12 md:py-7 btn border-none rounded-none md:text-2xl md:font-normal shadow-none hover:bg-red-700 hover:scale-110 hover:shadow-xl transition duration-400 ease-in-out">
                            Get All Recipes
                        </button>
                    </Link>
                </div>
            </div>

            <div className="absolute top-1/2 left-3 md:left-5 -translate-y-1/2 z-30">
                <button onClick={prevSlide} className="btn btn-circle btn-sm md:btn-md">❮</button>
            </div>
            <div className="absolute top-1/2 right-3 md:right-5 -translate-y-1/2 z-30">
                <button onClick={nextSlide} className="btn btn-circle btn-sm md:btn-md">❯</button>
            </div>
        </div>
    );
};

export default Hero;