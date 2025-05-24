import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AllContext } from '../Provider/ContextProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { logIn, signInWithGoogle } = use(AllContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                navigate(`${location.state ? location.state : "/"}`)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successful!",
                    text: 'You have successfully logged in.',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successful!",
                    text: 'You have successfully logged in.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Signup Failed',
                    text: errorMessage,
                    confirmButtonColor: '#ED1C24'
                });
            });

    }

    return (
        <div className='md:pt-16 pt-8 md:px-0 px-4 pb-48'>
            <h2 className='md:text-4xl text-3xl text-center font-semibold md:mb-8 mb-6 text-black dark:text-white'>Login Now</h2>
            <div className="flex items-center justify-center">
                <div className="shadow-lg rounded-2xl p-8 w-full max-w-md bg-gray-100 dark:bg-gray-800">

                    <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center gap-3 border w-full py-3 rounded-lg font-medium transition cursor-pointer  text-black border-gray-200 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                        <FcGoogle className="text-2xl" />
                        Login with Google
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                        <span className="mx-4 text-gray-500 dark:text-gray-400 font-semibold">or</span>
                        <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                    </div>

                    <form onSubmit={handleLogIn} className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1 text-black dark:text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full bg-gray-200 text-black border-gray-300 dark:border-gray-200 dark:bg-gray-700 dark:text-white"
                                placeholder="Enter email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1 text-black dark:text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full bg-gray-200 text-black border-gray-300 dark:border-gray-200 dark:bg-gray-700 dark:text-white"
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn border-none w-full text-white bg-[#ED1C24] hover:bg-[#c9151c] transition"
                        >
                            Log In
                        </button>
                        <small className="block text-center text-black dark:text-white">
                            Don't have an account?{' '}
                            <Link to="/signup" className='underline text-[#ED1C24] dark:text-red-400'>
                                Signup
                            </Link>
                        </small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
