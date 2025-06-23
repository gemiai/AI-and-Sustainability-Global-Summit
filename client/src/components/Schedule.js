import React, { useState, useEffect } from 'react';
import { scheduleData } from './scheduleData.js';
import Registration from './Registration.js';

// Summit Program Page Component
const Schedule = ({onNavigate}) => {
    const [activeDay, setActiveDay] = useState('SAT');
    const [activeCategory, setActiveCategory] = useState('All');
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    // const [scheduleData, setScheduleData] = useState(null);


   const [schedule, setSchedule] = useState(null);
    
  useEffect(() => {
    setSchedule(scheduleData);
  }, []);

    // useEffect(() => {
    // fetch('/api/schedule')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('Fetched schedule data:', data);
    //     setScheduleData(data);
    //   })
    //   .catch(err => console.error('Failed to load schedule data:', err));
    // }, []);

    // if (!scheduleData) {
    //     return <div>Loading schedule...</div>;
    // }

    

    const handleRegisterClick = () => {
        setIsRegistrationModalOpen(true);
        console.log('Register button clicked');
    };

    const handleCloseRegistrationModal = () => {
        setIsRegistrationModalOpen(false);
    };

    const filteredEvents = scheduleData.schedule.filter(schedule => {
    const dayMatch = activeDay === 'ALL' || schedule.day === activeDay;
    const categoryMatch = activeCategory === 'All' || schedule.category === activeCategory;
    return dayMatch && categoryMatch;
  });

    return (
        <div className="min-h-screen bg-white text-black font-bold"> 

            <div className="flex flex-col md:flex-row min-h-[calc(100vh-76px)]">
                {/* Left Panel */}
                <div className="w-full md:w-1/3 border-r border-gray-200 p-8 ">
                    <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent ">AI & Sustainability<br/>Summit Schedule</h1>

                    <div
                        className="mb-12 border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center">
                        <div className="text-6xl font-bold">{scheduleData.totalEvents}</div>
                        <div className="text-gray-600 uppercase tracking-widest">SESSIONS</div>
                    </div>

                    {/* Date Display */}
                    <div className="relative w-full h-96 mb-12">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="w-64 h-64 rounded-full border border-green-300 bg-gradient-to-br from-green-100 to-blue-100 relative">
                                <div className="absolute w-full h-full rounded-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-green-700 mb-2">JULY</div>
                                        <div className="text-6xl font-bold text-black">18</div>
                                        <div className="text-xl text-green-700">2025</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-8">
                        <h2 className="text-2xl mb-4">Session Types</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {scheduleData.categories.map(category => (
                                <button
                                    key={category}
                                    className={`py-2 px-4 rounded-md text-sm ${activeCategory === category ? 'bg-teal-400' : 'border border-gray-300'}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        className="w-full border-teal-400 border-2 py-3 rounded-md hover:bg-green-600 transition"
                        onClick={handleRegisterClick}
                    >
                        REGISTER FOR SUMMIT
                    </button>
                </div>

                {/* Right Panel - Sessions List */}
                <div className="w-full md:w-2/3 p-8 overflow-y-auto">
                    <h2 className="text-2xl mb-6">Summit Sessions</h2>

                    {filteredEvents.length > 0 ? (
                        <div className="space-y-6">
                            {filteredEvents.map(schedule => (
                                <div key={schedule.id} className="flex border-b border-gray-200 pb-6">
                                    <div className="w-40 h-40 flex-shrink-0 mr-6">
                                        <div
                                            className="w-full h-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative group">
                                            <div
                                                className={`w-full h-full flex items-center justify-center relative overflow-hidden rounded-lg ${
                                                    schedule.category === 'Networking' ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500' :
                                                        schedule.category === 'Opening' ? 'bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400' :
                                                            schedule.category === 'Education' ? 'bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400' :
                                                                schedule.category === 'Planet' ? 'bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400' :
                                                                    schedule.category === 'Art' ? 'bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-400' :
                                                                        schedule.category === 'Technology' ? 'bg-gradient-to-br from-gray-600 via-slate-500 to-blue-400' :
                                                                            schedule.category === 'Food' ? 'bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400' :
                                                                                schedule.category === 'Finance' ? 'bg-gradient-to-br from-emerald-600 via-green-500 to-lime-400' :
                                                                                    schedule.category === 'Challenge' ? 'bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400' :
                                                                                        schedule.category === 'Foundation' ? 'bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400' :
                                                                                            'bg-gradient-to-br from-green-500 to-blue-600'
                                                }`}>
                                                {/* Background pattern */}
                                                <div className="absolute inset-0 opacity-20">
                                                    <div
                                                        className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full"></div>
                                                    <div
                                                        className="absolute top-6 right-4 w-2 h-2 bg-white rounded-full"></div>
                                                    <div
                                                        className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-white rounded-full"></div>
                                                    <div
                                                        className="absolute bottom-2 right-2 w-2.5 h-2.5 bg-white rounded-full"></div>
                                                </div>

                                                {/* Main icon */}
                                                <div
                                                    className="text-5xl font-bold text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                                    {schedule.category === 'Networking' && '🤝'}
                                                    {schedule.category === 'Opening' && '🎯'}
                                                    {schedule.category === 'Education' && '🎓'}
                                                    {schedule.category === 'Planet' && '🌍'}
                                                    {schedule.category === 'Art' && '🎨'}
                                                    {schedule.category === 'Technology' && '⚙️'}
                                                    {schedule.category === 'Food' && '🍽️'}
                                                    {schedule.category === 'Finance' && '💰'}
                                                    {schedule.category === 'Challenge' && '🏆'}
                                                    {schedule.category === 'Foundation' && '🌟'}
                                                    {!['Networking', 'Opening', 'Education', 'Planet', 'Art', 'Technology', 'Food', 'Finance', 'Challenge', 'Foundation'].includes(schedule.category) && '💡'}
                                                </div>

                                                {/* Category label overlay */}
                                                <div
                                                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs font-bold py-1 px-2 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                    {schedule.category}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex flex-col md:flex-row md:items-center mb-2 space-y-2 md:space-y-0">
                                            <div className="text-gray-600 font-mono">{schedule.date}, {schedule.time}</div>
                                            <div className="flex items-center space-x-2 md:ml-3">
                                                <span className={`px-2 py-0.5 text-xs rounded ${
                                                    schedule.type === 'KEYNOTE' ? 'bg-purple-200 text-purple-800' :
                                                        schedule.type === 'RESEARCH' ? 'bg-blue-200 text-blue-800' :
                                                            schedule.type === 'WORKSHOP' ? 'bg-orange-200 text-orange-800' :
                                                                schedule.type === 'SHOWCASE' ? 'bg-green-200 text-green-800' :
                                                                    schedule.type === 'PANEL' ? 'bg-red-200 text-red-800' :
                                                                        'bg-gray-200 text-gray-800'
                                                }`}>
                            {schedule.type}
                          </span>
                                                {schedule.category && (
                                                    <span className="px-2 py-0.5 text-xs rounded bg-green-200 text-green-800">
                              {schedule.category}
                            </span>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-2">{schedule.title}</h3>

                                        {schedule.speaker && (
                                            <div className="text-sm text-green-600 mb-1">Speaker: {schedule.speaker}</div>
                                        )}

                                        {schedule.location && (
                                            <div className="text-sm text-gray-500 mb-2">📍 {schedule.location}</div>
                                        )}

                                        <p className="text-gray-600 text-sm">{schedule.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <p className="text-xl">No sessions found for the selected filters</p>
                            <button
                                className="mt-4 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                                onClick={() => {
                                    setActiveDay('SAT');
                                    setActiveCategory('All');
                                }}
                            >
                                Show all sessions
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Registration
                isOpen={isRegistrationModalOpen}
                onClose={handleCloseRegistrationModal}
                navigateHome={() => {}} // Stay on schedule page, don't navigate
            />

        </div>
    );
};

export default Schedule;