import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ currentPage, onNavigate, onRegisterClick }) => {
    const navigate = useNavigate();     
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleNavigation = (path, callback) => {
        navigate(path);
        if (callback) callback();
        closeMobileMenu();
    };
    
    return (
        <header className="px-4 sm:px-6 lg:px-8 xl:px-12 py-4 border-b border-gray-200 bg-white relative">
            <div className="flex justify-between max-w-7xl mx-auto items-center">
                {/* LEFT - Desktop Navigation */}
                <div className="hidden md:flex justify-start space-x-6 lg:space-x-8 xl:space-x-10">
                    <a
                        href="/schedule"
                        className={`font-bold text-sm lg:text-base ${location.pathname === '/schedule' ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'} transition-colors`}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/schedule');
                        }}
                    >
                        Schedule
                    </a>
                    <a
                        href="/sponsors"
                        className={`font-bold text-sm lg:text-base ${currentPage === 'sponsors' ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'} transition-colors`}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/sponsors');
                        }}
                    >
                        Sponsors
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                  
                {/* Center - Logo */}
                <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={() => handleNavigation('/home')}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-400 shadow-lg">
                            <img
                                src="/gemi-logo-nobg.png"
                                alt="Gemi Logo"
                                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden text-xl sm:text-2xl font-bold text-green-600">🌱</span>
                        </div>
                    </button>
                </div>
                
                {/* RIGHT - Desktop Navigation */}
                <div className="hidden md:flex justify-end space-x-4 lg:space-x-6 xl:space-x-8">
                    <a
                        href="#"
                        className="text-gray-600 hover:text-black font-bold text-sm lg:text-base transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/register');
                            onRegisterClick();
                        }}
                    >
                        Register
                    </a>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdby_n20P72Fu9n3Iu5ul7OFda7hVbOcy0dM24ee-PKHIWNSg/viewform?usp=dialog"
                        className="text-gray-600 hover:text-black font-bold text-sm lg:text-base transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Subscribe
                    </a>
                </div>

                {/* Mobile Register Button - Always visible on mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => {
                            navigate('/register');
                            onRegisterClick();
                        }}
                        className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm font-bold hover:bg-green-500 transition-colors"
                    >
                        Register
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
                    <div className="px-4 py-2 space-y-1">
                        <a
                            href="/schedule"
                            className={`block py-3 px-2 font-bold text-base ${location.pathname === '/schedule' ? 'text-black bg-gray-50' : 'text-gray-600'} hover:text-black hover:bg-gray-50 transition-colors rounded-md`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('/schedule');
                            }}
                        >
                            Schedule
                        </a>
                        <a
                            href="/sponsors"
                            className={`block py-3 px-2 font-bold text-base ${currentPage === 'sponsors' ? 'text-black bg-gray-50' : 'text-gray-600'} hover:text-black hover:bg-gray-50 transition-colors rounded-md`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('/sponsors');
                            }}
                        >
                            Sponsors
                        </a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdby_n20P72Fu9n3Iu5ul7OFda7hVbOcy0dM24ee-PKHIWNSg/viewform?usp=dialog"
                            className="block py-3 px-2 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors rounded-md font-bold text-base"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobileMenu}
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;