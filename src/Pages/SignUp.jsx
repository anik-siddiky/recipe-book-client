import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const SignUp = () => {

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const imageUrl = form.imageUrl.value;
        const password = form.password.value;

        console.log({ fullName, imageUrl, password });

    };

    return (
        <div className='md:pt-16 pt-8 md:px-0 px-4 pb-40'>
            <h2 className='md:text-4xl text-3xl text-center font-semibold md:mb-8 mb-6'>Signup Now</h2>
            <div className=" flex items-center justify-center">
                <div className="shadow-lg rounded-2xl p-8 w-full max-w-md bg-gray-100">
                    
                    <button className="flex items-center justify-center gap-3 border w-full py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer">
                        <FcGoogle className="text-2xl" />
                        Sign up with Google
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-4 text-gray-400 font-semibold">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                className="input input-bordered w-full"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Image URL</label>
                            <input
                                type="text"
                                name="imageUrl"
                                className="input input-bordered w-full"
                                placeholder="Paste profile image URL"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full"
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn w-full text-white bg-[#ED1C24] hover:bg-[#c9151c] transition"
                        >
                            Sign Up
                        </button>
                        <small>Already have an account? <Link to="/login" className='underline text-[#ED1C24]'>Login</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
