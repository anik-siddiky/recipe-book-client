import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AllContext } from '../Provider/ContextProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { logIn } = use(AllContext);
    const location = useLocation();
    const navigate = useNavigate();

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
            <h2 className='md:text-4xl text-3xl text-center font-semibold md:mb-8 mb-6'>Login Now</h2>
            <div className=" flex items-center justify-center">
                <div className="shadow-lg rounded-2xl p-8 w-full max-w-md bg-gray-100">

                    <button className="flex items-center justify-center gap-3 border w-full py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer">
                        <FcGoogle className="text-2xl" />
                        Login with Google
                    </button>


                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-4 text-gray-400 font-semibold">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>


                    <form onSubmit={handleLogIn} className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                                placeholder="Enter email"
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