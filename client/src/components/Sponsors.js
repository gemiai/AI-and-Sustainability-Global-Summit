
import React, { useEffect, useState } from 'react';
import RegistrationModal from './Registration.js'; 
import { sponsorsData } from './sponsorsData.js';

// Detailed Partners Page Component with Real Partnership Data
const Sponsors = ({onNavigate}) => {
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    // const [sponsorsData, setSponsorsData] = useState([]);
    const [data, setData] = useState(null);
    useEffect(() => {
            // Simulate loading data
            setData(sponsorsData);
          }, []);

    // useEffect(() => {
    //      fetch('/api/sponsors')
    //       .then(res => res.json())
    //         .then(data => setSponsorsData(data))
    //  .catch(err => console.error('Failed to load sponsors data', err));
    // }, []);
     


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
            {sponsorsData.map(category => (
                <section key={category.id} className="px-6 mb-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">{category.title}</h2>
                        {/* Partners Grid */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {category.sponsors.map(sponsors => (
                                <div
                                    key={sponsors.id}
                                    className="border border-gray-300 bg-white rounded-lg aspect-square
           hover:border-green-500 transition-colors group relative overflow-hidden"
                                >
                                    {sponsors.logo ? (
                                        <img
                                            src={sponsors.logo}
                                            alt={`${sponsors.name} logo`}
                                            className="w-full h-full object-contain"
                                            onError={e => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}

                                    {/* Fallback text if the logo can't load */}
                                    <div className={`text-center ${sponsors.logo ? 'hidden' : 'block'}`}>
                                        <div className="text-gray-600 px-2">
                                            <div className="text-lg font-semibold">{sponsors.name}</div>
                                            {sponsors.founder && (
                                                <div className="text-xs mt-2">Founder: {sponsors.founder}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Founder overlay */}
                                    {sponsors.founder && (
                                        <div className="absolute inset-0 bg-black bg-opacity-90 rounded-lg opacity-0
                        group-hover:opacity-100 transition-opacity duration-300 flex flex-col
                        justify-center items-center p-4">
                                            <div className="text-center">
                                                <div className="text-lg font-bold mb-2 text-white">{sponsors.name}</div>
                                                <div
                                                    className="text-sm text-gray-300 mb-2">Founder: {sponsors.founder}</div>
                                                {sponsors.linkedin && (
                                                    <a
                                                        href={sponsors.linkedin}
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

          

        </div>
    );
};

export default Sponsors;