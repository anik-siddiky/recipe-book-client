import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AllContext } from '../Provider/ContextProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, setUser, updateUser, signInWithGoogle } = use(AllContext)
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user);
                navigate("/");
                Swal.fire({
                    icon: 'success',
                    title: 'Account created!',
                    text: 'Your account has been successfully created.',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => alert(error.message));
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        setPasswordError("");

        const form = e.target;
        const fullName = form.fullName.value;
        const imageUrl = form.imageUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must include at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must include at least one lowercase letter.");
            return;
        }
        if (!/\d/.test(password)) {
            setPasswordError("Password must include at least one number.");
            return;
        }
        if (!/[@$!%*?&]/.test(password)) {
            setPasswordError("Password must include at least one special character.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: fullName, photoURL: imageUrl }).then(() => {
                    setUser({ ...user, displayName: fullName, photoURL: imageUrl });
                })
                    .catch(error => {
                        console.log(error);
                        setUser(user);
                    })

                Swal.fire({
                    icon: 'success',
                    title: 'Account created!',
                    text: 'Your account has been successfully created.',
                    confirmButtonColor: '#ED1C24'
                });

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
    };

    return (
        <div className='pt-8 md:px-0 px-4 pb-40'>
            <h2 className='md:text-4xl text-3xl text-center font-semibold md:mb-8 mb-6'>Signup Now</h2>
            <div className="flex items-center justify-center">
                <div className="shadow-lg rounded-2xl p-8 w-full max-w-md bg-gray-100">

                    <button onClick={handleGoogleSingIn} className="flex items-center justify-center gap-3 border w-full py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer">
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

                        {passwordError && (
                            <p className="text-red-600 font-medium text-[12px]">{passwordError}</p>
                        )}

                        <button
                            type="submit"
                            className="btn w-full text-white bg-[#ED1C24] hover:bg-[#c9151c] transition"
                        >
                            Sign Up
                        </button>

                        <small>
                            Already have an account?{' '}
                            <Link to="/login" className='underline text-[#ED1C24]'>
                                Login
                            </Link>
                        </small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
