import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='md:pt-16 pt-8 md:px-0 px-4 pb-48'>
            <h2 className='md:text-4xl text-3xl text-center font-semibold md:mb-8 mb-6'>Login Now</h2>
            <div className=" flex items-center justify-center">
                <div className="shadow-lg rounded-2xl p-8 w-full max-w-md bg-gray-100">
                    
                    <button className="flex items-center justify-center gap-3 border w-full py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer">
                        <FcGoogle className="text-2xl" />
                        Login with Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-4 text-gray-400 font-semibold">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Signup Form */}
                    <form className="space-y-4">
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
                            Log In
                        </button>
                        <small>Don't have an account? <Link to="/signup" className='underline text-[#ED1C24]'>Signup</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;