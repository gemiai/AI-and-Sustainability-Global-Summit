import React, {useState} from 'react';

// Import components from current directory structure
import RegistrationModal from './RegistrationModal';
import CountdownTimer from './CountdownTimer';
import LoadingScreen from './LoadingScreen';
import PartnersPage from './PartnersPage';
import EventsCalendarPage from './EventsCalendarPage';

// Import data from current directory structure
import {eventData, upcomingSessions, featuredSpeakers} from './appData';

// Main App Component - Refactored with separated components
const TechWeekApp = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoading, setIsLoading] = useState(true);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

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

    // Show loading screen when app first loads
    if (isLoading) {
        return <LoadingScreen onLoadingComplete={handleLoadingComplete}/>;
    }

    if (currentPage === 'calendar') {
        return <EventsCalendarPage onNavigate={handleNavigation}/>;
    }

    if (currentPage === 'partners') {
        return <PartnersPage onNavigate={handleNavigation}/>;
    }

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
                                handleNavigation('calendar');
                            }}
                        >
                            Summit Program
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-black font-bold"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('partners');
                            }}
                        >
                            Partners
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => handleNavigation('home')}
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
                        <a href="#" className="text-gray-600 hover:text-black font-bold"
                           onClick={handleRegisterClick}>Register</a>
                        <a href="#" className="text-gray-600 hover:text-black font-bold">Welcome!</a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-6 relative min-h-[600px] overflow-hidden">
                {/* Earth Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
                        alt="/earth.png"
                        className="w-[400px] md:w-[500px] object-contain opacity-40"
                    />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 relative z-10">
                    {/* Left Side - Countdown */}
                    <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start
                space-y-6 md:space-y-8">

                        {/* heading + countdown */}
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-semibold uppercase tracking-wider text-green-600 mb-4">
                                Event Countdown
                            </h3>
                            <CountdownTimer targetDate="2025-07-19T09:00:00"/>
                        </div>

                        {/* primary CTA */}
                        <button
                            onClick={handleRegisterClick}
                            className="w-full md:w-auto bg-green-600 hover:bg-green-500 transition
               py-3 px-10 rounded-md text-xl font-black text-white text-center"
                        >
                            REGISTER
                        </button>

                        {/* quick-role hints */}
                        <div className="text-center md:text-left text-gray-600 text-sm">
                            <p className="mb-2 font-bold uppercase">Register as:</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {['Keynote Speakers', 'Event Sponsors', 'Start-ups', 'Academia'].map(role => (
                                    <span
                                        key={role}
                                        className="px-2.5 py-1 rounded border border-gray-400 bg-gray-100
                     hover:border-green-500 transition whitespace-nowrap text-xs"
                                    >
          {role}
        </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Center - Title (wider) */}
                    <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-5xl font-black mb-2 text-green-600">AI and Sustainability</h1>
                            <h2 className="text-4xl font-black mb-4"> Global Summit</h2>
                            <p className="text-2xl font-bold">{eventData.date}</p>
                        </div>
                    </div>

                    {/* Right Side - Description and CTA (wider) */}
                    <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-end justify-center">
                        <div className="text-center md:text-right max-w-sm">
                            <div className="mb-4 whitespace-pre-line">
                                <p className="text-2xl font-extrabold text-black mb-1">
                                    Thrive in the AI World.
                                </p>
                                <p className="text-normal font-medium text-gray-700">
                                    AI with clear purpose, strong guardrails and real-world impact.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <button
                                    className="bg-green-600 text-white font-black py-2 px-4 text-sm rounded-md hover:bg-green-500 transition w-full"
                                    onClick={() => handleNavigation('calendar')}
                                >
                                    Event Schedule
                                </button>
                            </div>
                        </div>
                    </div>
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
                                    className="w-full h-48 bg-gray-100 rounded-md mb-4 overflow-hidden relative">
                                    <img
                                        src={speaker.logo}
                                        alt={`${speaker.name} photo`}
                                        className="w-full h-full object-cover object-center"
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
                            onClick={() => handleNavigation('calendar')}
                        >
                            VIEW FULL PROGRAM
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {upcomingSessions.map((session, index) => (
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

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-200">
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

export default TechWeekApp;