import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer.js';
import Registration from './Registration.js';

import { useNavigate } from 'react-router-dom';
import { eventData,upcomingSessions,featuredSpeakers } from './homeData.js';



// Main App Component - Refactored with separated components
const Home = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoading, setIsLoading] = useState(true);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    // const [data, setData] = useState(null);
    const data = {eventData, upcomingSessions,featuredSpeakers };

    const navigate = useNavigate()

    //  useEffect(() => {
    // // Simulate loading data
    //  setData(homeData);
    //  }, [])
   
//   useEffect(() => {
//     fetch('/api/home')  // adjust if your server URL is different
//       .then(res => {
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//         return res.json();
//       })
//       .then(json => {
//         setData(json);
//         setFetchError(null);
//       })
//       .catch(err => {
//         console.error('Fetch failed:', err);
//         setFetchError('Failed to load data');
//       });
//   }, []);
;

  if (fetchError) {
    return <div className="text-red-600 font-bold text-center mt-10">{fetchError}</div>;
  }

  if (!data) {
    return <div className="text-center font-bold text-xl mt-10">Loading data...</div>;
  }




    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setIsRegistrationModalOpen(true);
    };
  
    const handleCloseRegistrationModal = () => {
        setIsRegistrationModalOpen(false);
    };

      const handleSubscribeClick = (e) => {
        e.preventDefault();
        setIsSubscribeModalOpen(true);
    };

    const handleCloseSubscribeModal = () => {
        setIsSubscribeModalOpen(false);
    };

 

    if (currentPage === 'calendar') {
        return <EventsCalendarPage onNavigate={handleNavigation}/>;
    }

    if (currentPage === 'partners') {
        return <PartnersPage onNavigate={handleNavigation}/>;
    }

    return (
        <div className="min-h-screen bg-white text-black font-bold">

            {/* Hero Section */}
            <section className="py-8 px-6 relative min-h-[600px] overflow-hidden">
                {/* Landing Page Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-10 md:mt-20">
                    <img 
                        src="/earth.png" 
                        alt="Globe background"
                        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover z-0 transition-opacity duration-500"
                        style={{
                            opacity: 0.8,
                            animation: 'rotate-clockwise 40s linear infinite'
                        }}
                    />
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 relative z-10">
                    {/* Content Section - Left Aligned */}
                    <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-start pt-0 min-h-[60vh]">
                        <div className="text-left w-full">
                            <div className="inline-block bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
                                <h1 className="text-3xl md:text-5xl font-black mb-4 whitespace-nowrap">AI and Sustainability Global Summit</h1>
                                <p className="text-lg md:text-2xl font-bold">{eventData.date}</p>
                            </div>
                            
                            {/* Countdown Section */}
                            <div className="mt-12 text-left">
                                <h3 className="text-lg md:text-xl font-semibold tracking-wider text-gray-600 mb-4">
                                    Summit Countdown
                                </h3>
                                <CountdownTimer targetDate="2025-07-18T09:00:00"/>
                                <button
                                    onClick={handleRegisterClick}
                                    className="mt-8 w-auto bg-transparent hover:bg-teal-50 transition
                                       py-2 px-8 rounded-md text-sm md:text-base font-bold text-teal-500 text-center border-2 border-teal-500"
                                >
                                    Secure Your Seat
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Empty column on the right to keep content on the left of the globe */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-6"></div>
                </div>

                {/* Overlaid Description Card */}
                <div className="absolute z-20 bottom-4 md:bottom-8 right-4 md:right-[6.25rem] max-w-xs md:max-w-2xl p-4 md:p-6 rounded-lg bg-white/20 backdrop-blur-md shadow-lg text-left">
                    <p className="text-2xl md:text-4xl font-extrabold text-gray-600 mb-2">
                        Thrive in the AI World.
                    </p>
                    <p className="text-sm md:text-lg font-medium text-gray-600">
                        AI with clear purpose, strong guardrails and real-world impact.
                    </p>
                    <button
                        className="mt-2 md:mt-4 bg-transparent text-teal-400 font-bold py-1 md:py-2 px-0 text-sm md:text-base hover:underline transition"
                        onClick={() => navigate('/schedule')}
                    >
                        View Full Schedule &rarr;
                    </button>
                </div>
            </section>

            {/* Featured Speakers Section */}
            <section className="py-16 px-6 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center mb-12">
                        <div
                            className="w-16 h-16 border border-gray-400 rounded-full flex items-center justify-center mr-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-black">Featured Speakers</h2>
                    </div>

                    <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-8 justify-center">
                        {featuredSpeakers.map((speaker, index) => (
                            <div key={speaker.id} className="mb-8">
                                <div
                                    className="w-full h-64 bg-gray-100 rounded-md mb-4 overflow-hidden relative">
                                    <img
                                        src={speaker.logo}
                                        alt={`${speaker.name} photo`}
                                        className="w-full h-full object-cover object-top"
                                        onError={(e) => {
                                            // Fallback to gradient with initials if image fails to load
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div
                                        className={`hidden w-full h-full absolute inset-0 ${index === 0 ? 'bg-gradient-to-b from-purple-600 to-green-600' : 'bg-gradient-to-b from-blue-600 to-green-600'} flex items-center justify-center`}>
                                        <div className="text-4xl font-black text-white">
                                            {speaker.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-sm">{speaker.title}</div>
                                <h3 className="text-2xl font-black mb-2">{speaker.name}</h3>
                                {speaker.affiliation && (
                                    <div className="text-green-600 text-sm mb-2">{speaker.affiliation}</div>
                                )}
                                {speaker.event && (
                                    <p className="text-xs text-gray-600">
                                        {speaker.event}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Sessions Section */}
            <section className="py-16 px-6 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center">
                            <div
                                className="w-16 h-16 border border-gray-400 rounded-full flex items-center justify-center mr-4">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-xl">🧠</span>
                                </div>
                            </div>
                            <h2 className="text-3xl font-black">Featured Sessions</h2>
                        </div>
                        <button
                            className="bg-green-600 text-white font-black py-2 px-4 rounded-md hover:bg-green-500 transition"
                            onClick={() => navigate('/schedule')}
                        >
                            View Full Schedule
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {upcomingSessions.slice(0, 2).map((session, index) => (
                            <div key={session.id} className="flex mb-8">
                                <div className="w-32 h-32 bg-gray-100 rounded-md mr-6 flex-shrink-0 overflow-hidden">
                                    <div
                                        className={`w-full h-full flex flex-col items-center justify-center relative overflow-hidden rounded-md ${
                                            session.category === 'Opening' ? 'bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400' :
                                                session.category === 'Education' ? 'bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400' :
                                                    session.category === 'Planet' ? 'bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400' :
                                                        session.category === 'Art' ? 'bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-400' :
                                                            session.category === 'Technology' ? 'bg-gradient-to-br from-orange-600 via-red-500 to-pink-400' :
                                                                session.category === 'Finance' ? 'bg-gradient-to-br from-yellow-600 via-orange-500 to-red-400' :
                                                                    session.category === 'Ethics' ? 'bg-gradient-to-br from-slate-600 via-gray-500 to-blue-400' :
                                                                        'bg-gradient-to-br from-green-500 to-blue-600'
                                        }`}>
                                        {/* Background pattern */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full"></div>
                                            <div className="absolute top-6 right-4 w-2 h-2 bg-white rounded-full"></div>
                                            <div
                                                className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-white rounded-full"></div>
                                            <div
                                                className="absolute bottom-2 right-2 w-2.5 h-2.5 bg-white rounded-full"></div>
                                        </div>

                                        {/* Main icon */}
                                        <div
                                            className="text-2xl font-bold text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300 mb-3">
                                            {session.category === 'Opening' && '🎯'}
                                            {session.category === 'Education' && '🎓'}
                                            {session.category === 'Planet' && '🌍'}
                                            {session.category === 'Art' && '🎨'}
                                            {session.category === 'Technology' && '💻'}
                                            {session.category === 'Finance' && '💰'}
                                            {session.category === 'Ethics' && '⚖️'}
                                            {!['Opening', 'Education', 'Planet', 'Art', 'Technology', 'Finance', 'Ethics'].includes(session.category) && '💡'}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-600 mb-1">{session.date}</div>
                                    <h3 className="text-2xl font-black mb-2">{session.title}</h3>

                                    {/* Speaker info - Both Keynote and Panel with Avatars */}
                                    <div className="mb-3 space-y-2">
                                        {session.keynoteSpeaker && (
                                            <div className="flex items-center space-x-2">
                                                <span className="inline-block px-2 py-1 rounded text-xs font-bold uppercase tracking-wide bg-blue-100 text-blue-800">
                                                    Keynote
                                                </span>
                                                <div className="flex items-center space-x-1">
                                                    <img
                                                        src={session.keynoteSpeaker.avatar}
                                                        alt={session.keynoteSpeaker.name}
                                                        className="w-6 h-6 rounded-full object-cover border border-gray-300"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <div className="hidden w-6 h-6 rounded-full bg-blue-500 border border-gray-300 items-center justify-center text-xs text-white font-bold">
                                                        {session.keynoteSpeaker.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {session.panelSpeakers && session.panelSpeakers.length > 0 && (
                                            <div className="flex items-start space-x-2">
                                                <span className="inline-block px-2 py-1 rounded text-xs font-bold uppercase tracking-wide bg-green-100 text-green-800">
                                                    Panel
                                                </span>
                                                <div className="flex flex-wrap gap-1">
                                                    {session.panelSpeakers.map((speaker, idx) => (
                                                        <div key={idx} className="flex items-center">
                                                            <img
                                                                src={speaker.avatar}
                                                                alt={speaker.name}
                                                                className="w-6 h-6 rounded-full object-cover border border-gray-300"
                                                                onError={(e) => {
                                                                    e.target.style.display = 'none';
                                                                    e.target.nextSibling.style.display = 'flex';
                                                                }}
                                                            />
                                                            <div className="hidden w-6 h-6 rounded-full bg-green-500 border border-gray-300 items-center justify-center text-xs text-white font-bold">
                                                                {speaker.name.split(' ').map(n => n[0]).join('')}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {session.location && (
                                        <div className="text-gray-500 text-sm mb-1">📍 {session.location}</div>
                                    )}
                                    <p className="text-gray-600 font-bold text-sm">{session.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                     <div className="grid md:grid-cols-2 gap-8">
                        {upcomingSessions.slice(2).map((session, index) => (
                            <div key={session.id} className="flex mb-8">
                                <div className="w-32 h-32 bg-gray-100 rounded-md mr-6 flex-shrink-0 overflow-hidden">
                                    <div
                                        className={`w-full h-full flex flex-col items-center justify-center relative overflow-hidden rounded-md ${
                                            session.category === 'Opening' ? 'bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400' :
                                                session.category === 'Education' ? 'bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400' :
                                                    session.category === 'Planet' ? 'bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400' :
                                                        session.category === 'Art' ? 'bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-400' :
                                                            session.category === 'Technology' ? 'bg-gradient-to-br from-orange-600 via-red-500 to-pink-400' :
                                                                session.category === 'Finance' ? 'bg-gradient-to-br from-yellow-600 via-orange-500 to-red-400' :
                                                                    session.category === 'Ethics' ? 'bg-gradient-to-br from-slate-600 via-gray-500 to-blue-400' :
                                                                        'bg-gradient-to-br from-green-500 to-blue-600'
                                        }`}>
                                        {/* Background pattern */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full"></div>
                                            <div className="absolute top-6 right-4 w-2 h-2 bg-white rounded-full"></div>
                                            <div
                                                className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-white rounded-full"></div>
                                            <div
                                                className="absolute bottom-2 right-2 w-2.5 h-2.5 bg-white rounded-full"></div>
                                        </div>

                                        {/* Main icon */}
                                        <div
                                            className="text-2xl font-bold text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300 mb-3">
                                            {session.category === 'Opening' && '🎯'}
                                            {session.category === 'Education' && '🎓'}
                                            {session.category === 'Planet' && '🌍'}
                                            {session.category === 'Art' && '🎨'}
                                            {session.category === 'Technology' && '💻'}
                                            {session.category === 'Finance' && '💰'}
                                            {session.category === 'Ethics' && '⚖️'}
                                            {!['Opening', 'Education', 'Planet', 'Art', 'Technology', 'Finance', 'Ethics'].includes(session.category) && '💡'}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-600 mb-1">{session.date}</div>
                                    <h3 className="text-2xl font-black mb-2">{session.title}</h3>

                                    {/* Speaker info - Both Keynote and Panel with Avatars */}
                                    <div className="mb-3 space-y-2">
                                        {session.keynoteSpeaker && (
                                            <div className="flex items-center space-x-2">
                                                <span className="inline-block px-2 py-1 rounded text-xs font-bold uppercase tracking-wide bg-blue-100 text-blue-800">
                                                    Keynote
                                                </span>
                                                <div className="flex items-center space-x-1">
                                                    <img
                                                        src={session.keynoteSpeaker.avatar}
                                                        alt={session.keynoteSpeaker.name}
                                                        className="w-6 h-6 rounded-full object-cover border border-gray-300"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <div className="hidden w-6 h-6 rounded-full bg-blue-500 border border-gray-300 items-center justify-center text-xs text-white font-bold">
                                                        {session.keynoteSpeaker.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {session.panelSpeakers && session.panelSpeakers.length > 0 && (
                                            <div className="flex items-start space-x-2">
                                                <span className="inline-block px-2 py-1 rounded text-xs font-bold uppercase tracking-wide bg-green-100 text-green-800">
                                                    Panel
                                                </span>
                                                <div className="flex flex-wrap gap-1">
                                                    {session.panelSpeakers.map((speaker, idx) => (
                                                        <div key={idx} className="flex items-center">
                                                            <img
                                                                src={speaker.avatar}
                                                                alt={speaker.name}
                                                                className="w-6 h-6 rounded-full object-cover border border-gray-300"
                                                                onError={(e) => {
                                                                    e.target.style.display = 'none';
                                                                    e.target.nextSibling.style.display = 'flex';
                                                                }}
                                                            />
                                                            <div className="hidden w-6 h-6 rounded-full bg-green-500 border border-gray-300 items-center justify-center text-xs text-white font-bold">
                                                                {speaker.name.split(' ').map(n => n[0]).join('')}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {session.location && (
                                        <div className="text-gray-500 text-sm mb-1">📍 {session.location}</div>
                                    )}
                                    <p className="text-gray-600 font-bold text-sm">{session.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Summit Feature Section */}
            <section className="py-16 px-6 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl overflow-hidden border border-gray-200">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="p-8 flex items-center">
                                <div>
                                    <div className="font-black text-4xl mb-2 text-green-700">AI for Greater Good
                                        Challenges
                                    </div>
                                    <div className="font-black text-2xl mb-4 text-blue-700">Roadshow</div>

                                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                        <div>
                                            <div className="text-green-700">DATE</div>
                                            <div className="text-black">July 18, 2025</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col justify-center">
                                <div className="font-black mb-2 text-green-700">SATURDAY, JULY 18 / 1:00 PM</div>
                                <p className="text-blue-800 font-bold">
                                    Our mission is to harness the transformative power of artificial intelligence to
                                    drive ethical innovation, social impact, and sustainability, fostering a future
                                    where AI serves humanity's most pressing challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Registration
            isOpen={isRegistrationModalOpen}
            onClose={handleCloseRegistrationModal}
            navigateHome={() => navigate('/home', { replace: true })}
            />             

         
        </div>
    );
};

export default Home;