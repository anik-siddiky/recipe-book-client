import React, { useRef, use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import navImage from '../assets/recipe-book-header-3.png';
import { AllContext } from '../Provider/ContextProvider';
import DarkModeToggleButton from '../Components/DarkModeToggleButton';
import Swal from 'sweetalert2';

const catImg = 'https://i.ibb.co.com/JWzvwk7H/catImg.webp';

const Navbar = () => {
  const { user, logOut } = use(AllContext);
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const handleAvatarClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  const handelLogOut = () => {
    logOut()
      .then(() => {
        closeDrawer();
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

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  return (
    <div className="drawer">
      <input ref={drawerRef} id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col overflow-visible">
        {/* Top Navbar */}
        <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors">
          <div className="w-full lg:w-10/12 mx-auto flex justify-between items-center px-4">
            {/* Mobile: hamburger */}

            <div className="lg:hidden">
              <label htmlFor="my-drawer-3" className="text-black dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
            <div className='md:hidden'>
              <Link to="/">
                <img className="w-20" src={navImage} alt="Site Logo" />
              </Link>
            </div>

            {/* Desktop logo */}
            <div className="hidden md:block">
              <Link to="/">
                <img className="md:w-32" src={navImage} alt="Site Logo" />
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal gap-6">
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'}>
                  <li className="md:text-[18px] font-normal">Home</li>
                </NavLink>
                <NavLink to="/all-recipes" className={({ isActive }) => isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'}>
                  <li className="md:text-[18px] font-normal">All Recipe</li>
                </NavLink>
                {/* <NavLink to="/add-recipes" className={({ isActive }) => isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'}>
                  <li className="md:text-[18px] font-normal">Add Recipe</li>
                </NavLink>
                <NavLink to="/my-recipes" className={({ isActive }) => isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'}>
                  <li className="md:text-[18px] font-normal">My Recipe</li>
                </NavLink> */}
                  <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'}>
                    <li className="md:text-[18px] font-normal">Dashboard</li>
                  </NavLink>
                  <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#ED1C24]' : 'hover:text-[#ED1C24] text-black dark:text-white'}>
                    <li className="md:text-[18px] font-normal">About us</li>
                  </NavLink>
              </ul>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <div className='hidden md:flex'>
                <DarkModeToggleButton />
              </div>
              {user ? (
                <div className="relative group">
                  <div className="avatar avatar-online cursor-pointer" onClick={handleAvatarClick}>
                    <div className="w-10 md:w-12 rounded-full">
                      <img
                        src={user?.photoURL || user.reloadUserInfo?.photoURL || catImg}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = catImg;
                        }}
                        alt="User Avatar"
                      />
                    </div>
                  </div>

                  <div
                    className={`absolute top-full right-0 md:left-1/2 md:-translate-x-1/2 mt-2 md:h-32 h-28 w-32 md:w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      } group-hover:opacity-100 group-hover:visible transition-all duration-200 hidden md:block`}
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
      </div>

      {/* Mobile Drawer Side Nav */}
      <div className="drawer-side lg:hidden z-50">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu bg-white dark:bg-gray-800 text-black dark:text-white min-h-full w-80 p-4 space-y-2">
          <div className='flex items-center justify-between'>
            <div className="flex">
              <img src={navImage} alt="Site Logo" className="w-24" />
            </div>
            <div className='mr-4'>
              <DarkModeToggleButton />
            </div>
          </div>
          <div className="divider divider-neutral"></div>
          <NavLink to="/" onClick={closeDrawer} className={({ isActive }) => isActive ? 'text-[#ED1C24]' : ''}>
            <li className='text-[17px] font-light'>Home</li>
          </NavLink>

          <NavLink to="/all-recipes" onClick={closeDrawer} className={({ isActive }) => isActive ? 'text-[#ED1C24]' : ''}>
            <li className='text-[17px] font-light'>All Recipe</li>
          </NavLink>

          {/* <NavLink to="/add-recipes" onClick={closeDrawer} className={({ isActive }) => isActive ? 'text-[#ED1C24]' : ''}>
            <li className='text-[17px] font-light'>Add Recipe</li>
          </NavLink>

          <NavLink to="/my-recipes" onClick={closeDrawer} className={({ isActive }) => isActive ? 'text-[#ED1C24]' : ''}>
            <li className='text-[17px] font-light'>My Recipe</li>
          </NavLink> */}

          <NavLink to="/dashboard" onClick={closeDrawer} className={({ isActive }) => isActive ? 'text-[#ED1C24]' : ''}>
            <li className='text-[17px] font-light'>Dashboard</li>
          </NavLink>
          <NavLink to="/about" onClick={closeDrawer} className={({ isActive }) => isActive ? 'text-[#ED1C24]' : ''}>
            <li className='text-[17px] font-light'>About us</li>
          </NavLink>
          {
            user && <NavLink onClick={handelLogOut} className="text-[17px] font-light">Log Out</NavLink>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;