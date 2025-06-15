import React, { useState } from 'react';
import { partnerData } from './partnerData';
import RegistrationModal from './RegistrationModal';

// Detailed Partners Page Component with Real Partnership Data
const PartnersPage = ({onNavigate}) => {
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (typeof onNavigate === 'function') {
            onNavigate('home');
        }
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setIsRegistrationModalOpen(true);
    };

    const handleCloseRegistrationModal = () => {
        setIsRegistrationModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-white text-black font-bold">
            {/* Header */}
            <header className="border-b border-gray-200 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex space-x-8">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-black font-bold"
                            onClick={(e) => {
                                e.preventDefault();
                                if (typeof onNavigate === 'function') {
                                    onNavigate('calendar');
                                }
                            }}
                        >
                            Summit Program
                        </a>
                        <a
                            href="#"
                            className="text-black border-b-2 border-black font-bold"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            Partners
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleHomeClick}
                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <div
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 shadow-lg">
                                <img
                                    src="/gemi-logo-nobg.png"
                                    alt="Gemi Logo"
                                    className="w-8 h-8 object-contain"
                                    onError={(e) => {
                                        // Fallback to emoji if image fails to load
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <span className="hidden text-2xl font-bold text-green-600">🌱</span>
                            </div>
                        </button>
                    </div>

                    <div className="flex space-x-8">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-black font-bold"
                            onClick={handleRegisterClick}
                        >
                            Register
                        </a>
                        <a href="#" className="text-gray-600 hover:text-black font-bold">Welcome!</a>
                    </div>
                </div>
            </header>

            {/* Page Title */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold mb-8">Summit Partners</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        The AI and Sustainability Summit is made possible through collaboration with leading research
                        institutions,
                        innovative startups, and organizations committed to leveraging artificial intelligence for
                        environmental solutions
                        and sustainable development.
                    </p>
                </div>
            </section>

            {/* Partners Grid */}
            {partnerData.map(category => (
                <section key={category.id} className="px-6 mb-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">{category.title}</h2>
                        {/* Partners Grid */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {category.partners.map(partner => (
                                <div
                                    key={partner.id}
                                    className="border border-gray-300 bg-white rounded-lg aspect-square
           hover:border-green-500 transition-colors group relative overflow-hidden"
                                >
                                    {partner.logo ? (
                                        <img
                                            src={partner.logo}
                                            alt={`${partner.name} logo`}
                                            className="w-full h-full object-contain"
                                            onError={e => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                    ) : null}

                                    {/* Fallback text if the logo can't load */}
                                    <div className={`text-center ${partner.logo ? 'hidden' : 'block'}`}>
                                        <div className="text-gray-600 px-2">
                                            <div className="text-lg font-semibold">{partner.name}</div>
                                            {partner.founder && (
                                                <div className="text-xs mt-2">Founder: {partner.founder}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Founder overlay */}
                                    {partner.founder && (
                                        <div className="absolute inset-0 bg-black bg-opacity-90 rounded-lg opacity-0
                        group-hover:opacity-100 transition-opacity duration-300 flex flex-col
                        justify-center items-center p-4">
                                            <div className="text-center">
                                                <div className="text-lg font-bold mb-2 text-white">{partner.name}</div>
                                                <div
                                                    className="text-sm text-gray-300 mb-2">Founder: {partner.founder}</div>
                                                {partner.linkedin && (
                                                    <a
                                                        href={partner.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 text-xs"
                                                    >
                                                        <svg className="w-4 h-4 mr-1" fill="currentColor"
                                                             viewBox="0 0 20 20">
                                                            <path fillRule="evenodd"
                                                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                  clipRule="evenodd"/>
                                                        </svg>
                                                        LinkedIn
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-200 mt-12">
                <div className="max-w-7xl mx-auto text-center text-gray-600">
                    <p>© 2025 AI and Sustainability Summit. All rights reserved.</p>
                </div>
            </footer>

            {/* Registration Modal */}
            <RegistrationModal
                isOpen={isRegistrationModalOpen}
                onClose={handleCloseRegistrationModal}
            />
        </div>
    );
};

export default PartnersPage;