import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import navImage from '../assets/recipe-book-header-2.png';
import { AllContext } from '../Provider/ContextProvider';
import DarkModeToggleButton from '../Components/DarkModeToggleButton';
import Swal from 'sweetalert2';

const catImg = 'https://i.ibb.co.com/JWzvwk7H/catImg.webp';

const Navbar = () => {
  const { user, logOut } = use(AllContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  const handelLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have logged out successfully.',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar p-0 shadow-sm bg-white dark:bg-gray-900 dark:text-white transition-colors">
      <div className="navbar md:w-10/12 mx-auto md:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-10 mt-3 w-40 p-2 shadow gap-2"
            >
              <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-600' : 'text-black dark:text-white'}><li>Home</li></NavLink>
              <NavLink to="/all-recipes" className={({ isActive }) => isActive ? 'text-red-600' : 'text-black dark:text-white'}><li>All Recipe</li></NavLink>
              <NavLink to="/add-recipes" className={({ isActive }) => isActive ? 'text-red-600' : 'text-black dark:text-white'}><li>Add Recipe</li></NavLink>
              <NavLink to="/my-recipes" className={({ isActive }) => isActive ? 'text-red-600' : 'text-black dark:text-white'}><li>My Recipe</li></NavLink>
            </ul>
          </div>
          <Link to="/">
            <img className="md:w-32 w-24" src={navImage} alt="Site Logo" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'
              }
            >
              <li className="md:text-[18px] font-normal">Home</li>
            </NavLink>
            <NavLink
              to="/all-recipes"
              className={({ isActive }) =>
                isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'
              }
            >
              <li className="md:text-[18px] font-normal">All Recipe</li>
            </NavLink>
            <NavLink
              to="/add-recipes"
              className={({ isActive }) =>
                isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'
              }
            >
              <li className="md:text-[18px] font-normal">Add Recipe</li>
            </NavLink>
            <NavLink
              to="/my-recipes"
              className={({ isActive }) =>
                isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'
              }
            >
              <li className="md:text-[18px] font-normal">My Recipe</li>
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end md:gap-3 gap-1">
          <DarkModeToggleButton />

          {user ? (
            <div className="flex items-center md:pr-0 pr-3">
              <div className="relative group">
                <div
                  className="avatar avatar-online cursor-pointer md:mt-0.5"
                  onClick={handleAvatarClick}
                >
                  <div className="w-10 md:w-12 rounded-full">
                    <img
                      src={
                        user?.photoURL ||
                        user.reloadUserInfo?.photoURL ||
                        catImg
                      }
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = catImg;
                      }}
                      alt="User Avatar"
                    />
                  </div>
                </div>

                <div
                  className={`absolute top-full right-0 md:left-1/2 md:-translate-x-1/2 mt-2 md:h-32 h-28 w-32 md:w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  } group-hover:opacity-100 group-hover:visible transition-all duration-200`}
                >
                  <div className="flex flex-col justify-center mt-5 md:mt-4">
                    <p className="p-1 md:p-2 text-[14px] md:text-[16px] text-center text-black dark:text-white">
                      Hi, {user?.displayName || user?.email}
                    </p>
                    <div className="flex justify-center">
                      <button
                        onClick={handelLogOut}
                        className="bg-[#ED1C24] md:px-8 md:py-2 px-4 py-1 rounded cursor-pointer text-white hover:bg-red-700"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-[#ED1C24] md:px-8 md:py-2 px-4 py-1 rounded cursor-pointer text-white hover:bg-red-700 border border-[#ED1C24]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
