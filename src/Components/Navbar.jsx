import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import navImage from "../assets/recipe-book-header.png"
import { AllContext } from '../Provider/ContextProvider';
import Swal from 'sweetalert2';
const catImg = "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp";


const Navbar = () => {

    const { user, logOut } = use(AllContext);
    console.log(user)

    const handelLogOut = () => {
        logOut().then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "You have logged out successfully.",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="navbar p-0 bg-base-100 shadow-sm">
            <div className="navbar md:w-10/12 mx-auto md:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow md:gap-4">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-600' : ''}><li>Home</li></NavLink>

                            <NavLink to="/all-recipes" className={({ isActive }) => isActive ? 'text-red-600' : ''}><li>All Recipe</li></NavLink>

                            <NavLink to="/add-recipes" className={({ isActive }) => isActive ? 'text-red-600' : ''}><li>Add Recepie</li></NavLink>

                            <NavLink to="/my-recipes" className={({ isActive }) => isActive ? 'text-red-600' : ''}><li>My Recepie</li></NavLink>
                        </ul>
                    </div>
                    <Link to="/">
                        <img className='md:w-32 w-24' src={navImage} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-600' : ''}>
                            <li className="md:text-[18px] font-normal">Home</li>
                        </NavLink>
                        <NavLink to="/all-recipes" className={({ isActive }) => isActive ? 'text-red-600' : ''}>
                            <li className="md:text-[18px] font-normal">All Recipe</li>
                        </NavLink>
                        <NavLink to="/add-recipes" className={({ isActive }) => isActive ? 'text-red-600' : ''}>
                            <li className="md:text-[18px] font-normal">Add Recipe</li>
                        </NavLink>
                        <NavLink to="/my-recipes" className={({ isActive }) => isActive ? 'text-red-600' : ''}>
                            <li className="md:text-[18px] font-normal">My Recipe</li>
                        </NavLink>
                    </ul>

                </div>

                <div className="navbar-end md:gap-3 gap-1">
                    {
                        user ?
                            (
                                <>
                                    <div className="avatar avatar-online">
                                        <div className="w-12 rounded-full">
                                            <img src={user.photoURL || catImg} />
                                        </div>
                                    </div>
                                    <button onClick={handelLogOut} className='bg-white border border-[#ED1C24] md:px-8 md:py-2 px-4 py-1 rounded cursor-pointer hover:text-white hover:bg-[#ED1C24]'>Log Out</button>
                                </>
                            )
                            :
                            (
                                <>
                                    <Link to="/login">
                                        <button className='bg-white border border-[#ED1C24] md:px-8 md:py-2 px-4 py-1 rounded cursor-pointer hover:text-white hover:bg-[#ED1C24]'>Login</button>
                                    </Link>
                                    <Link to='/signup'>
                                        <button className='bg-white border border-[#ED1C24] md:px-8 md:py-2 px-4 py-1 rounded cursor-pointer hover:text-white hover:bg-[#ED1C24]'>Signup</button>
                                    </Link>
                                </>
                            )
                    }

                </div>
            </div>
        </div>

    );
};

export default Navbar;