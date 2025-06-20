import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



const Navbar = ({ currentPage, onNavigate, onRegisterClick }) => {
    const navigate = useNavigate();     
    const location = useLocation();
    
    return (
        <header className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between max-w-7xl mx-auto items-center">
                {/* LEFT */}
                <div className="flex justify-start space-x-6">
                    <a
                        href="/schedule"
                        className={`font-bold ${location.pathname === '/schedule' ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'}`}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/schedule');
                        }}
                    >
                        Schedule
                    </a>
                    <a
                        href="/sponsors"
                        className={`font-bold ${currentPage === 'sponsors' ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'}`}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/sponsors');
                        }}
                    >
                        Sponsors
                    </a>
                </div>
                  {/* Center */}
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate('/home')}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 shadow-lg">
                            <img
                                src="/gemi-logo-nobg.png"
                                alt="Gemi Logo"
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden text-2xl font-bold text-green-600">🌱</span>
                        </div>
                    </button>
                </div>
                
                  {/* Right */}
                <div className="flex justify-end space-x-6">
                    <a
                        href="#"
                        className="text-gray-600 hover:text-black font-bold"
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
                        className="text-gray-600 hover:text-black font-bold"
                        target="_blank"
                    >
                        Subscribe
                    </a>
                </div>

            </div>
        </header>
    );
};

export default Navbar;