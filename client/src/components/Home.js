import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer.js';
import Registration from './Registration.js';

import { useNavigate } from 'react-router-dom';
import { eventData, upcomingSessions, keynoteSpeakers, panelSpeakers, onlinePanels } from './homeData.js';



// Main App Component - Refactored with separated components
const Home = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoading, setIsLoading] = useState(true);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    // const [data, setData] = useState(null);
    const data = {eventData, upcomingSessions, keynoteSpeakers, panelSpeakers, onlinePanels };

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
        <div className="min-h-screen bg-white text-black font-bold overflow-x-hidden">

            {/* Hero Section */}
            <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 xl:px-12 relative min-h-[500px] sm:min-h-[600px] overflow-hidden">
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
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 md:gap-8 relative z-10">
                    {/* Content Section - Left Aligned */}
                    <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-start pt-0 min-h-[50vh] sm:min-h-[60vh]">
                        <div className="text-left w-full">
                            <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black mb-3 sm:mb-4 leading-tight">AI and Sustainability Global Summit</h1>
                                <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold">{eventData.date}</p>
                            </div>
                            
                            {/* Countdown Section */}
                            <div className="mt-6 sm:mt-8 md:mt-12 text-left mb-32 sm:mb-20 md:mb-0">
                                <h3 className="text-sm sm:text-base md:text-xl font-semibold tracking-wider text-black mb-3 sm:mb-4">
                                    Summit Countdown
                                </h3>
                                <CountdownTimer targetDate="2025-07-18T09:00:00"/>
                                <button
                                    onClick={handleRegisterClick}
                                    className="mt-4 sm:mt-6 md:mt-8 w-full sm:w-auto bg-teal-500 sm:bg-transparent hover:bg-teal-600 sm:hover:bg-teal-50 transition
                                       py-2 sm:py-2 px-4 sm:px-6 md:px-8 rounded-md text-sm md:text-base font-bold text-white sm:text-teal-500 text-center border-0 sm:border-2 sm:border-teal-500"
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
                <div className="absolute z-20 bottom-2 sm:bottom-4 md:bottom-8 left-0 right-0 md:left-auto md:right-[6.25rem] w-full md:w-auto max-w-xs md:max-w-2xl p-3 sm:p-4 md:p-6 rounded-lg bg-white/20 backdrop-blur-md shadow-lg text-left">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-black mb-2">
                        Thrive in the AI World.
                    </p>
                    <p className="text-xs sm:text-sm md:text-lg font-medium text-black mb-3 sm:mb-2">
                        AI with a clear purpose, strong guardrails and real-world impact.
                    </p>
                    <button
                        className="mt-2 md:mt-4 bg-transparent text-teal-400 font-bold py-1 md:py-2 px-0 text-xs sm:text-sm md:text-base hover:underline transition"
                        onClick={() => navigate('/schedule')}
                    >
                        View Full Schedule &rarr;
                    </button>
                </div>
            </section>

            {/* Keynote Speakers Section */}
            <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-200 mt-4 sm:mt-0">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center mb-8 md:mb-12">
                        <div
                            className="w-12 h-12 md:w-16 md:h-16 border border-gray-400 rounded-full flex items-center justify-center mr-3 md:mr-4">
                            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-green-600">Keynote Speakers</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center">
                        {keynoteSpeakers.map((speaker, index) => (
                            <div key={speaker.id} className="mb-4 sm:mb-8">
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
                                        className={`hidden w-full h-full absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center`}>
                                        <div className="text-4xl font-black text-white">
                                            {speaker.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                </div>
    
                                <h3 className="text-2xl font-black mb-2">{speaker.name}</h3>
                                {speaker.affiliation && (
                                    <div className="text-green-600 text-lg leading-tight mb-2">{speaker.affiliation}</div>
                                )}
                                {speaker.event && (
                                    <p className="text-xs-2 text-gray-600">
                                        {speaker.event}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Panel Speakers Section */}
            <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center mb-12">
                        <div
                            className="w-16 h-16 border border-gray-400 rounded-full flex items-center justify-center mr-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-blue-500">Panel Speakers</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center">
                        {panelSpeakers.map((speaker, index) => (
                            <div key={speaker.id} className="mb-4 sm:mb-8">
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
                                        className={`hidden w-full h-full absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-500 flex items-center justify-center`}>
                                        <div className="text-4xl font-black text-white">
                                            {speaker.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                </div>
                               
                                <h3 className="text-2xl font-black mb-2">{speaker.name}</h3>
                                {speaker.affiliation && (
                                    <div className="text-blue-500 text-lg mb-2">{speaker.affiliation}</div>
                                )}
                                {speaker.event && (
                                    <p className="text-xs-2 text-gray-600">
                                        {speaker.event}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Sessions Section */}
            <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-200">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {upcomingSessions.slice(0, 2).map((session, index) => (
                            <div key={session.id} className="mb-6 sm:mb-8 group">
                                {/* Top row: Icon and content */}
                                <div className="flex mb-2">
                                    <div className="w-32 mr-6 flex-shrink-0">
                                        <div
                                            className={`w-full h-32 flex flex-col items-center justify-center relative overflow-hidden rounded-md ${
                                                session.category === 'Opening' ? 'bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-100' :
                                                    session.category === 'Education' ? 'bg-gradient-to-br from-indigo-300 via-blue-200 to-cyan-100' :
                                                        session.category === 'Planet' ? 'bg-gradient-to-br from-green-300 via-emerald-200 to-teal-100' :
                                                            session.category === 'Art' ? 'bg-gradient-to-br from-purple-300 via-fuchsia-200 to-pink-100' :
                                                                session.category === 'Technology' ? 'bg-gradient-to-br from-orange-300 via-red-200 to-pink-100' :
                                                                    session.category === 'Finance' ? 'bg-gradient-to-br from-yellow-300 via-orange-200 to-red-100' :
                                                                        session.category === 'Ethics' ? 'bg-gradient-to-br from-slate-300 via-gray-200 to-blue-100' :
                                                                            'bg-gradient-to-br from-green-200 to-blue-300'
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
                                                className="text-3xl font-bold text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300 mb-3">
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
                                    <div className="w-140 bg-white p-2 ">
                                        <div className="text-gray-500 mb-1 text-xs-4">{session.date}</div>
                                        <h3 className="text-lg font-black mb-2 text-gray-800 leading-tight">{session.title}</h3>
                                        <p className="text-gray-600 text-xs-2 mb- leading-relaxed">{session.description}</p>
                                        {session.location && (
                                            <div className="text-gray-500 text-xs">📍 {session.location}</div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Middle row: Keynote */}
                                <div className="flex items-center mb-2">
                                    <div className="w-32 mr-6 flex-shrink-0">
                                        <div className="border border-teal-500 text-black text-sm font-bold tracking-wide px-3 py-2 rounded text-center">
                                            Keynote
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-center pl-2">
                                        {session.keynoteSpeaker && (
                                            <img
                                                src={session.keynoteSpeaker.avatar}
                                                alt={session.keynoteSpeaker.name}
                                                title={session.keynoteSpeaker.name}
                                                className="w-10 h-10 rounded-full object-cover border-2 border-blue-300 cursor-pointer hover:scale-110 hover:border-blue-500 transition-all duration-200"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                                
                                {/* Bottom row: Panel */}
                                <div className="flex items-center">
                                    <div className="w-32 mr-6 flex-shrink-0">
                                        <div className="border border-blue-600 text-black text-sm font-bold tracking-wide px-3 py-2 rounded text-center">
                                            Panel
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-center gap-2 pl-2">
                                        {session.panelSpeakers && session.panelSpeakers.length > 0 && (
                                            <>
                                                {session.panelSpeakers.slice(0, 4).map((speaker, speakerIndex) => (
                                                    <img
                                                        key={speakerIndex}
                                                        src={speaker.avatar}
                                                        alt={speaker.name}
                                                        title={speaker.name}
                                                        className="w-10 h-10 rounded-full object-cover border border-green-300 cursor-pointer hover:scale-110 hover:border-green-500 transition-all duration-200"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                ))}
                                                {session.panelSpeakers.length > 10 && (
                                                    <div className="w-10 h-10 rounded-full bg-green-200 text-green-800 text-xs flex items-center justify-center border border-green-300">
                                                        +{session.panelSpeakers.length - 10}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                     <div className="grid md:grid-cols-2 gap-8">
                        {upcomingSessions.slice(2).map((session, index) => (
                            <div key={session.id} className="mb-8 group">
                                {/* Top row: Icon and content */}
                                <div className="flex mb-2">
                                    <div className="w-32 mr-6 flex-shrink-0">
                                        <div
                                            className={`w-full h-32 flex flex-col items-center justify-center relative overflow-hidden rounded-md ${
                                                session.category === 'Opening' ? 'bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-100' :
                                                    session.category === 'Education' ? 'bg-gradient-to-br from-indigo-300 via-blue-200 to-cyan-100' :
                                                        session.category === 'Planet' ? 'bg-gradient-to-br from-green-300 via-emerald-200 to-teal-100' :
                                                            session.category === 'Art' ? 'bg-gradient-to-br from-purple-300 via-fuchsia-200 to-pink-100' :
                                                                session.category === 'Technology' ? 'bg-gradient-to-br from-orange-300 via-red-200 to-pink-100' :
                                                                    session.category === 'Finance' ? 'bg-gradient-to-br from-yellow-300 via-orange-200 to-red-100' :
                                                                        session.category === 'Ethics' ? 'bg-gradient-to-br from-slate-300 via-gray-200 to-blue-100' :
                                                                            'bg-gradient-to-br from-green-200 to-blue-300'
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
                                                className="text-3xl font-bold text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300 mb-3">
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
                                    <div className="w-140 bg-white p-2 ">
                                        <div className="text-gray-500 mb-1 text-xs-4">{session.date}</div>
                                        <h3 className="text-lg font-black mb-2 text-gray-800 leading-tight">{session.title}</h3>
                                        <p className="text-gray-600 text-xs-2 leading-relaxed">{session.description}</p>
                                        {session.location && (
                                            <div className="text-gray-500 text-xs">📍 {session.location}</div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Middle row: Keynote */}
                                <div className="flex items-center mb-2">
                                    <div className="w-32 mr-6 flex-shrink-0">
                                        <div className="border border-teal-500 text-black text-sm font-bold tracking-wide px-3 py-2 rounded text-center">
                                            Keynote
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-center pl-2">
                                        {session.keynoteSpeaker && (
                                            <img
                                                src={session.keynoteSpeaker.avatar}
                                                alt={session.keynoteSpeaker.name}
                                                title={session.keynoteSpeaker.name}
                                                className="w-10 h-10 rounded-full object-cover border-2 border-blue-300 cursor-pointer hover:scale-110 hover:border-blue-500 transition-all duration-200"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                                
                                {/* Bottom row: Panel */}
                                <div className="flex items-center">
                                    <div className="w-32 mr-6 flex-shrink-0">
                                        <div className="border border-blue-500 text-black text-sm font-bold tracking-wide px-3 py-2 rounded text-center">
                                            Panel
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-center gap-2 pl-2">
                                        {session.panelSpeakers && session.panelSpeakers.length > 0 && (
                                            <>
                                                {session.panelSpeakers.slice(0, 6).map((speaker, speakerIndex) => (
                                                    <img
                                                        key={speakerIndex}
                                                        src={speaker.avatar}
                                                        alt={speaker.name}
                                                        title={speaker.name}
                                                        className="w-10 h-10 rounded-full object-cover border border-green-300 cursor-pointer hover:scale-110 hover:border-green-500 transition-all duration-200"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                ))}
                                                {session.panelSpeakers.length > 6 && (
                                                    <div className="w-10 h-10 rounded-full bg-green-200 text-green-800 text-xs flex items-center justify-center border border-green-300">
                                                        +{session.panelSpeakers.length - 6}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Panels Section */}
            <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center">
                            <div
                                className="w-16 h-16 border border-gray-400 rounded-full flex items-center justify-center mr-4">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                                    <span className="text-xl">🎯</span>
                                </div>
                            </div>
                            <h2 className="text-3xl font-black">Online Panels</h2>
                        </div>
                     
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {onlinePanels.slice(0, 2).map((panel, index) => (
                            <div key={panel.id} className="mb-6 sm:mb-8 group">
                                <div className="flex flex-col sm:flex-row mb-4 space-y-4 sm:space-y-0">
                                    <div className="w-full sm:w-32 sm:mr-6 flex-shrink-0 mb-4 sm:mb-0">
                                        <div className="w-full h-24 sm:h-32 bg-gradient-to-br from-purple-300 via-indigo-200 to-blue-100 flex flex-col items-center justify-center relative overflow-hidden rounded-md">
                                            {/* Background pattern */}
                                            <div className="absolute inset-0 opacity-20">
                                                <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full"></div>
                                                <div className="absolute top-6 right-4 w-2 h-2 bg-white rounded-full"></div>
                                                <div className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-white rounded-full"></div>
                                                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 bg-white rounded-full"></div>
                                            </div>

                                            {/* Main icon */}
                                            <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                                🎤
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white p-3 sm:p-2 rounded-lg sm:rounded-none border sm:border-none border-gray-200">
                                        <div className="text-gray-500 mb-1 text-xs">{panel.time}</div>
                                        <h3 className="text-lg font-black mb-2 text-gray-800 leading-tight">{panel.title}</h3>
                                        <p className="text-purple-600 text-sm font-bold mb-3">{panel.topic}</p>
                                        
                                        {/* Speakers */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-bold text-gray-700">Speakers:</span>
                                            <div className="flex flex-wrap gap-1">
                                                {panel.speakers.slice(0, 4).map((speaker, speakerIndex) => (
                                                    <img
                                                        key={speakerIndex}
                                                        src={speaker.avatar}
                                                        alt={speaker.name}
                                                        title={`${speaker.name} - ${speaker.expertise}`}
                                                        className="w-8 h-8 rounded-full object-cover border border-purple-300 cursor-pointer hover:scale-110 hover:border-purple-500 transition-all duration-200"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                ))}
                                                {panel.speakers.length > 4 && (
                                                    <div className="w-8 h-8 rounded-full bg-purple-200 text-purple-800 text-xs flex items-center justify-center border border-purple-300">
                                                        +{panel.speakers.length - 4}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span>{panel.format} • {panel.platform}</span>
                                            <span>{panel.attendeeCount}/{panel.maxCapacity} attendees</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Summit Feature Section */}
            <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-gray-200">
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
                                <div className="font-black mb-2 text-green-700">Friday, JULY 18 / 4:00 PM</div>
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