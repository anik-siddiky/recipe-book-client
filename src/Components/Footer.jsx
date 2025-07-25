import React from 'react';
import footerLogo from "../assets/recipe-book-footer.png"
import { Link } from 'react-router';

const Footer = () => {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className='bg-black py-20 md:py-28 md:flex px-0 md:px-4 lg:px-0'>


            <div className="footer footer-horizontal footer-center bg-black text-primary-content md:px-0 px-3">
                <aside>
                    <Link onClick={goToTop} to="/">
                        <img className='md:w-44 w-28' src={footerLogo} alt="" />
                    </Link>
                    <p className="font-bold">
                        Where great meals begin
                        <br />
                        bringing families together and serving unforgettable flavor since 2015!
                    </p>
                    <p>© 2025 Recipe Book. All rights reserved.</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://x.com/home" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </Link>
                        <Link to="https://www.youtube.com/" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </Link>
                        <Link to="https://web.facebook.com/" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>

            <div className="container flex flex-col flex-wrap content-center justify-center py-6 mx-auto">
                <h1 className="text-xl antialiased font-bold leading-none text-center md:text-3xl text-white mb-4">Get Our Updates</h1>
                <p className='text-white mb-4'>We will send you some special recipes.</p>
                <div className="flex flex-row">
                    <input type="text" placeholder="Your Email" className="p-3 rounded-l-lg w-full sm:w-2/3 text-black dark:text-black bg-white" />
                    <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-[#ED1C24] text-white cursor-pointer">Subscribe</button>
                </div>
            </div>


        </div>
    );
};

export default Footer;