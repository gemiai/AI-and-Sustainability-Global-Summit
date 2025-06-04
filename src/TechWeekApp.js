import React, {useState, useEffect} from 'react';

// Registration Modal Component
const RegistrationModal = ({isOpen, onClose}) => {
    const registrationRoles = [
        {
            id: 'keynote',
            title: 'Keynote Speakers',
            description: 'Leading experts presenting groundbreaking research',
            icon: '🎤',
            link: 'https://surveymars.com/q/75KogrGH8'
        },
        {
            id: 'sponsors',
            title: 'Event Sponsors',
            description: 'Organizations supporting the summit',
            icon: '🏢',
            link: 'https://surveymars.com/q/yJumV4rCq'
        },
        {
            id: 'startups',
            title: 'Start-ups',
            description: 'Innovative companies in AI and sustainability',
            icon: '🚀',
            link: 'https://surveymars.com/q/380ngVo5k'
        },
        {
            id: 'academic',
            title: 'Academia',
            description: 'Researchers and academic institutions',
            icon: '🎓',
            link: 'https://surveymars.com/q/TQhQUKbz3\n'
        }
    ];

    const handleRoleSelect = (role) => {
        // Mock link navigation - in a real app, this would use proper routing
        window.open(role.link, '_blank', 'noopener,noreferrer');
        alert(`Redirecting to registration for ${role.title}...\nLink: ${role.link}`);
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
        >
            <div
                className="bg-gray-900 rounded-lg border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="border-b border-gray-700 p-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Register for Summit</h2>
                        <p className="text-gray-400 mt-1">Select your role to continue registration</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center transition-colors"
                    >
                        ×
                    </button>
                </div>

                {/* Role Selection */}
                <div className="p-6">
                    <div className="grid gap-4">
                        {registrationRoles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => handleRoleSelect(role)}
                                className="w-full p-4 border border-gray-700 rounded-lg hover:border-green-500 hover:bg-gray-800 transition-all duration-200 text-left group"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-3xl">{role.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                                            {role.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">{role.description}</p>
                                    </div>
                                    <div className="text-gray-400 group-hover:text-green-400 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-700 p-6 bg-gray-800 rounded-b-lg">
                    <div className="text-center text-gray-400 text-sm">
                        <p>Questions about registration? Contact us at <span
                            className="text-green-400">register@aisustainabilitysummit.com</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Countdown Timer Component
const CountdownTimer = ({targetDate}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">{timeLeft.days}</div>
                <div className="text-xs text-gray-400 uppercase">Days</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">{timeLeft.hours}</div>
                <div className="text-xs text-gray-400 uppercase">Hours</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-400 uppercase">Min</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-400 uppercase">Sec</div>
            </div>
        </div>
    );
};

// Loading Screen Component
const LoadingScreen = ({onLoadingComplete}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onLoadingComplete(), 300); // Small delay after 100%
                    return 100;
                }
                return prev + 2; // Increment by 2% every 100ms (5 seconds total)
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div className="min-h-screen bg-black text-white font-bold flex flex-col items-center justify-center">
            {/* Main loading content */}
            <div className="text-center">
                <div className="text-xl mb-8 tracking-wider font-black">LOADING...</div>

                {/* Loading bar container */}
                <div className="flex items-center space-x-4">

                    {/* Left 10 segments */}
                    <div className="flex space-x-1">
                        {[...Array(10)].map((_, i) => {
                            // segment index 0-9 → thresholds 5%, 10%, … 50%
                            const filled = progress >= (i + 1) * 5;
                            return (
                                <div
                                    key={i}
                                    className={`w-8 h-8 border-2 ${
                                        filled ? 'bg-gray-600 border-gray-500' : 'border-gray-600 bg-transparent'
                                    }`}
                                />
                            );
                        })}
                    </div>

                    {/* Center logo */}
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-lg">
                        <img
                            src="/gemi-logo.png"
                            alt="Gemi Logo"
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'grid';
                            }}
                        />
                        {/* fallback pattern */}
                        <div className="hidden w-8 h-8 grid grid-cols-2 gap-0.5">
                            <div className="bg-gray-900 rounded-tl"></div>
                            <div className="bg-cyan-400 rounded-tr"></div>
                            <div className="bg-cyan-400 rounded-bl"></div>
                            <div className="bg-gray-900 rounded-br"></div>
                        </div>
                    </div>

                    {/* Right 10 segments */}
                    <div className="flex space-x-1">
                        {[...Array(10)].map((_, i) => {
                            // segment index 10-19 → thresholds 55%, 60%, … 100%
                            const globalIndex = i + 10;          // 10-19
                            const filled = progress >= (globalIndex + 1) * 5;
                            return (
                                <div
                                    key={globalIndex}
                                    className={`w-8 h-8 border-2 ${
                                        filled ? 'bg-gray-600 border-gray-500' : 'border-gray-600 bg-transparent'
                                    }`}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Progress percentage */}
                <div className="mt-6 text-cyan-400 text-sm">{Math.round(progress)}%</div>
            </div>
        </div>
    );
};

// Detailed Partners Page Component with Real Partnership Data
const PartnersPage = ({onNavigate}) => {
    // Real partner data extracted from the provided table
    const partnerCategories = [
        {
            id: 'keynote',
            title: 'Keynote Speakers',
            partners: [
                {
                    id: 1,
                    name: 'Matt James',
                    logo: '/colossal-logo.png',
                    type: 'keynote',
                    founder: 'Matt James',
                    linkedin: 'https://www.linkedin.com/in/matt-james-40b4a595/'
                },
                {
                    id: 2,
                    name: 'Matthew Collado',
                    logo: '/arcana-logo.png',
                    type: 'keynote',
                    founder: 'Matthew Collado',
                    linkedin: 'https://www.linkedin.com/in/mathewcollado/'
                }
            ]
        },
        {
            id: 'events',
            title: 'Event Sponsors',
            partners: [
                {
                    id: 3,
                    name: 'Fantuan',
                    logo: '/fantuan-logo.png',
                    type: 'events',
                    founder: 'FY',
                    linkedin: 'https://www.linkedin.com/company/fantuan/'
                }
            ]
        },
        {
            id: 'startup',
            title: 'Start-up Collaborators',
            partners: [
                {
                    id: 4,
                    name: 'Wink Suite',
                    logo: '/wink-logo.png',
                    type: 'startup',
                    founder: 'Gabriele Rapetti',
                    linkedin: 'https://www.linkedin.com/in/gabriele-rapetti-63b365189/'
                },
                {
                    id: 5,
                    name: 'VeilStream',
                    logo: '/veilstream-logo.png',
                    type: 'startup',
                    founder: 'Steve Jones',
                    linkedin: 'https://www.linkedin.com/in/jonessteven/'
                },
                {
                    id: 6,
                    name: 'EduSight.AI',
                    logo: '/edusight-logo.png',
                    type: 'startup',
                    founder: 'Kushal Kundanmal',
                    linkedin: 'https://www.linkedin.com/in/kundanmal/'
                },
                {
                    id: 7,
                    name: 'PRH Peoples Resource Hub',
                    logo: '/prh-logo.png',
                    type: 'startup',
                    founder: 'Johan Saavedra',
                    linkedin: 'https://www.linkedin.com/in/johan-saavedra-sanchez/'
                },
                {
                    id: 8,
                    name: 'Book an Author',
                    logo: '/bookauthor-logo.png',
                    type: 'startup',
                    founder: 'Serena Y. Li',
                    linkedin: 'https://www.linkedin.com/in/serenayli/'
                },
                {
                    id: 9,
                    name: 'GreenTechNA Consulting Inc.',
                    logo: '/greentech-logo.png',
                    type: 'startup',
                    founder: 'Niels Vilstrup',
                    linkedin: 'https://www.linkedin.com/in/nielsvilstrup/'
                },
                {
                    id: 10,
                    name: 'Frasify AI Inc.',
                    logo: '/frasify-logo.png',
                    type: 'startup',
                    founder: 'Wayne Wei',
                    linkedin: 'https://www.linkedin.com/in/wayne-wei-104a44286/'
                },
                {
                    id: 11,
                    name: 'Hivo Inc',
                    logo: '/hivo-logo.png',
                    type: 'startup',
                    founder: 'Fahad',
                    linkedin: 'https://www.linkedin.com/in/fahad-alruhayem/'
                },
                {
                    id: 12,
                    name: 'Nubel',
                    logo: '/nubel-logo.png',
                    type: 'startup',
                    founder: 'Abel Osorio',
                    linkedin: 'https://www.linkedin.com/in/abelosorio89/'
                },
                {
                    id: 13,
                    name: 'The Bertrand Education Group',
                    logo: '/bertrand-logo.png',
                    type: 'startup',
                    founder: 'Marc Bertrand',
                    linkedin: 'https://www.linkedin.com/in/dr-marc-a-bertrand-0b773939/'
                },
                {
                    id: 14,
                    name: 'Voxxy AI, Inc.',
                    logo: '/voxxy-logo.png',
                    type: 'startup',
                    founder: 'Courtney Greer',
                    linkedin: 'https://www.linkedin.com/in/courtney-greer/'
                }
            ]
        },
        {
            id: 'institutional',
            title: 'Research & Academic Partners',
            partners: [
                {id: 15, name: 'Columbia University', logo: '/columbia-logo.png', type: 'institutional'},
                {id: 16, name: 'New York University', logo: '/nyu-logo.png', type: 'institutional'},
                {id: 17, name: 'Carnegie Mellon University', logo: '/cmu-logo.png', type: 'institutional'},
                {id: 18, name: 'McGill University', logo: '/mcgill-logo.png', type: 'institutional'},
                {id: 19, name: 'Nanyang Technological University', logo: '/ntu-logo.png', type: 'institutional'},
                {
                    id: 20,
                    name: 'London School of Economics and Political Science',
                    logo: '/lse-logo.png',
                    type: 'institutional'
                },
                {id: 21, name: 'University of California, Los Angeles', logo: '/ucla-logo.png', type: 'institutional'},
                {id: 22, name: 'University of Washington', logo: '/uw-logo.png', type: 'institutional'},
                {id: 23, name: 'Cornell University', logo: '/cornell-logo.png', type: 'institutional'},
                {
                    id: 24,
                    name: 'SFU Chang Institute for Entrepreneurship',
                    logo: '/sfu-logo.png',
                    type: 'institutional',
                    founder: 'Thomas Partridge',
                    linkedin: 'https://www.linkedin.com/in/thomaspartridge/'
                },
                {id: 25, name: 'Babson College', logo: '/babson-logo.png', type: 'institutional'}
            ]
        }
    ];

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (typeof onNavigate === 'function') {
            onNavigate('home');
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-bold">
            {/* Header */}
            <header className="border-b border-gray-800 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex space-x-8">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white font-bold"
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
                            className="text-white border-b-2 border-white font-bold"
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
                            className="p-1 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            <div
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 shadow-lg">
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
                        <a href="#" className="text-gray-400 hover:text-white font-bold">Register</a>
                        <a href="#" className="text-gray-400 hover:text-white font-bold">Subscribe</a>
                    </div>
                </div>
            </header>

            {/* Page Title */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold mb-8">Summit Partners</h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        The AI and Sustainability Summit is made possible through collaboration with leading research
                        institutions,
                        innovative startups, and organizations committed to leveraging artificial intelligence for
                        environmental solutions
                        and sustainable development.
                    </p>
                </div>
            </section>

            {/* Partners Grid */}
            {partnerCategories.map(category => (
                <section key={category.id} className="px-6 mb-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">{category.title}</h2>
                        {/* Partners Grid */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {category.partners.map(partner => (
                                <div
                                    key={partner.id}
                                    className="border border-gray-200 bg-white rounded-lg aspect-square
           hover:border-green-500 transition-colors group relative overflow-hidden"
                                >
                                    {partner.logo ? (
                                        <img
                                            src={partner.logo}
                                            alt={`${partner.name} logo`}
                                            className="w-full h-full object-contain"   /* use object-cover if you prefer cropping instead of letter-boxing */
                                            onError={e => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                    ) : null}

                                    {/* Fallback text if the logo can’t load */}
                                    <div className={`text-center ${partner.logo ? 'hidden' : 'block'}`}>
                                        <div className="text-gray-400 px-2">
                                            <div className="text-lg font-semibold">{partner.name}</div>
                                            {partner.founder && (
                                                <div className="text-xs mt-2">Founder: {partner.founder}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Founder overlay (unchanged) */}
                                    {partner.founder && (
                                        <div className="absolute inset-0 bg-black bg-opacity-90 rounded-lg opacity-0
                        group-hover:opacity-100 transition-opacity duration-300 flex flex-col
                        justify-center items-center p-4">
                                            <div className="text-center">
                                                <div className="text-lg font-bold mb-2">{partner.name}</div>
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
            <footer className="py-8 px-6 border-t border-gray-800 mt-12">
                <div className="max-w-7xl mx-auto text-center text-gray-400">
                    <p>© 2025 AI and Sustainability Summit. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

// Summit Program Page Component
const EventsCalendarPage = ({onNavigate}) => {
    const [activeDay, setActiveDay] = useState('SAT');
    const [activeCategory, setActiveCategory] = useState('All');

    // AI and Sustainability Summit focused events data
    const eventsData = {
        totalEvents: 8,
        categories: ['All', 'AI Research', 'Sustainability', 'Keynotes', 'Workshops', 'Networking'],
        days: ['SAT'],
        events: [
            {
                id: 1,
                title: "AI and Sustainability Summit: Opening Keynote",
                date: "July 19",
                time: "1:00 PM",
                type: "KEYNOTE",
                image: "/ai-sustainability-opening.jpg",
                description: "Welcome to the AI and Sustainability Summit! Join us for an inspiring opening keynote exploring how artificial intelligence can address the world's most pressing environmental challenges.",
                day: 'SAT',
                category: 'Keynotes',
            },
            {
                id: 2,
                title: "Machine Learning for Climate Modeling",
                date: "July 19",
                time: "1:30 PM",
                type: "RESEARCH",
                image: "/climate-ml.jpg",
                description: "Dive deep into cutting-edge research on how machine learning algorithms are revolutionizing climate prediction models and helping scientists understand complex environmental systems.",
                day: 'SAT',
                category: 'AI Research',
            },
            {
                id: 3,
                title: "Redefining Education in the Age of AI: Empowering Learners, Educators, and Systems",
                date: "July 19",
                time: "2:00 PM",
                type: "TECHNICAL",
                image: "/smart-grid.jpg",
                description: "Explore how artificial intelligence is transforming energy distribution systems, optimizing renewable energy integration, and creating more efficient power grids for sustainable cities.",
                day: 'SAT',
                category: 'Sustainability',
            },
            {
                id: 4,
                title: "Startup Showcase: GreenTech AI Solutions",
                date: "July 19",
                time: "1:30 PM",
                type: "SHOWCASE",
                image: "/greentech-showcase.jpg",
                description: "Meet innovative startups leveraging AI for environmental solutions. From precision agriculture to carbon capture optimization, discover the next generation of green technology.",
                day: 'SAT',
                category: 'Networking',
                location: "Innovation Lab"
            },
            {
                id: 5,
                title: "Workshop: AI Ethics in Environmental Applications",
                date: "July 19",
                time: "2:45 PM",
                type: "WORKSHOP",
                image: "/ai-ethics.jpg",
                description: "Hands-on workshop exploring the ethical implications of deploying AI systems for environmental monitoring and decision-making. Learn best practices for responsible AI development.",
                day: 'SAT',
                category: 'Workshops',
            },
            {
                id: 6,
                title: "Computer Vision for Wildlife Conservation",
                date: "July 19",
                time: "4:00 PM",
                type: "RESEARCH",
                image: "/wildlife-cv.jpg",
                description: "Discover how computer vision and deep learning are revolutionizing wildlife monitoring and conservation efforts, from tracking endangered species to preventing poaching.",
                day: 'SAT',
                category: 'AI Research',
            },
            {
                id: 7,
                title: "Panel: Corporate Sustainability and AI Strategy",
                date: "July 19",
                time: "5:15 PM",
                type: "PANEL",
                image: "/corporate-panel.jpg",
                description: "Industry leaders discuss how major corporations are integrating AI into their sustainability strategies, sharing real-world case studies and lessons learned.",
                day: 'SAT',
                category: 'Sustainability',
            },
            {
                id: 8,
                title: "Networking Reception: AI for Greater Good",
                date: "July 19",
                time: "6:30 PM",
                type: "NETWORKING",
                image: "/networking.jpg",
                description: "Connect with researchers, entrepreneurs, and industry professionals working at the intersection of AI and sustainability. Light refreshments and poster sessions included.",
                day: 'SAT',
                category: 'Networking',
            }
        ]
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (typeof onNavigate === 'function') {
            onNavigate('home');
        }
    };

    const handlePartnersClick = (e) => {
        e.preventDefault();
        if (typeof onNavigate === 'function') {
            onNavigate('partners');
        }
    };

    const filteredEvents = eventsData.events.filter(event => {
        const dayMatch = activeDay === 'ALL' || event.day === activeDay;
        const categoryMatch = activeCategory === 'All' || event.category === activeCategory;
        return dayMatch && categoryMatch;
    });

    const handleAllDaysClick = () => {
        setActiveDay('ALL');
    };

    return (
        <div className="min-h-screen bg-black text-white font-bold">
            {/* Header */}
            <header className="border-b border-gray-800 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex space-x-8">
                        <a
                            href="#"
                            className="text-white border-b-2 border-white font-bold"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            Summit Program
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white font-bold"
                            onClick={handlePartnersClick}
                        >
                            Partners
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            className="p-1 rounded-full hover:bg-gray-800 transition-colors"
                            onClick={handleHomeClick}
                        >
                            <div
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 shadow-lg">
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
                        <a href="#" className="text-gray-400 hover:text-white font-bold">Register</a>
                        <a href="#" className="text-gray-400 hover:text-white font-bold">Subscribe</a>
                    </div>
                </div>
            </header>

            <div className="flex flex-col md:flex-row min-h-[calc(100vh-76px)]">
                {/* Left Panel */}
                <div className="w-full md:w-1/3 border-r border-gray-800 p-8">
                    <h1 className="text-5xl font-bold mb-8">AI & Sustainability<br/>Summit Program</h1>

                    <div
                        className="mb-12 border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
                        <div className="text-6xl font-bold">{eventsData.totalEvents}</div>
                        <div className="text-gray-400 uppercase tracking-widest">SESSIONS</div>
                    </div>

                    {/* Date Display */}
                    <div className="relative w-full h-96 mb-12">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="w-64 h-64 rounded-full border border-green-700 bg-gradient-to-br from-green-900 to-blue-900 relative">
                                <div className="absolute w-full h-full rounded-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-green-300 mb-2">JULY</div>
                                        <div className="text-6xl font-bold text-white">19</div>
                                        <div className="text-xl text-green-300">2025</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-8">
                        <h2 className="text-2xl mb-4">Session Types</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {eventsData.categories.map(category => (
                                <button
                                    key={category}
                                    className={`py-2 px-4 rounded-md text-sm ${activeCategory === category ? 'bg-green-700' : 'border border-gray-700'}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-500 transition">
                        REGISTER FOR SUMMIT
                    </button>
                </div>

                {/* Right Panel - Sessions List */}
                <div className="w-full md:w-2/3 p-8 overflow-y-auto">
                    <h2 className="text-2xl mb-6">Summit Sessions</h2>

                    {filteredEvents.length > 0 ? (
                        <div className="space-y-6">
                            {filteredEvents.map(event => (
                                <div key={event.id} className="flex border-b border-gray-800 pb-6">
                                    <div className="w-40 h-40 flex-shrink-0 mr-6">
                                        <div
                                            className="w-full h-full bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                                            <div
                                                className="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                                                <div className="text-3xl font-bold opacity-75">
                                                    {event.category === 'Keynotes'}
                                                    {event.category === 'AI Research'}
                                                    {event.category === 'Sustainability'}
                                                    {event.category === 'Workshops'}
                                                    {event.category === 'Networking'}
                                                    {!['Keynotes', 'AI Research', 'Sustainability', 'Workshops', 'Networking'].includes(event.category) && '💡'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex items-center mb-2">
                                            <div className="text-gray-400 font-mono">{event.date}, {event.time}</div>
                                            <span className={`ml-3 px-2 py-0.5 text-xs rounded ${
                                                event.type === 'KEYNOTE' ? 'bg-purple-800' :
                                                    event.type === 'RESEARCH' ? 'bg-blue-800' :
                                                        event.type === 'WORKSHOP' ? 'bg-orange-800' :
                                                            event.type === 'SHOWCASE' ? 'bg-green-800' :
                                                                event.type === 'PANEL' ? 'bg-red-800' :
                                                                    'bg-gray-800'
                                            }`}>
                        {event.type}
                      </span>
                                            {event.category && (
                                                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-green-700">
                          {event.category}
                        </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>

                                        {event.speaker && (
                                            <div className="text-sm text-green-400 mb-1">Speaker: {event.speaker}</div>
                                        )}

                                        {event.location && (
                                            <div className="text-sm text-gray-500 mb-2">📍 {event.location}</div>
                                        )}

                                        <p className="text-gray-400 text-sm">{event.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <p className="text-xl">No sessions found for the selected filters</p>
                            <button
                                className="mt-4 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700"
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

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-800">
                <div className="max-w-7xl mx-auto text-center text-gray-400">
                    <p>© 2025 AI and Sustainability Summit. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

// Main App Component - Updated for AI and Sustainability Summit with Loading and Registration Modal
const TechWeekApp = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoading, setIsLoading] = useState(true);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    const eventData = {
        totalSessions: 8,
        date: "July 19, 2025",
        description: "Thrive in an AI World.\n" +
            "AI with strong guardrails, clear purpose, and real-world impact.",
        longDescription: "The AI and Sustainability Summit brings together leading researchers, innovators, and industry experts to explore how artificial intelligence can address climate change, environmental conservation, and sustainable development challenges. Join us for a day of groundbreaking research, innovative solutions, and meaningful connections.",
    };

    // AI and Sustainability focused upcoming sessions
    const upcomingSessions = [
        {
            id: 1,
            title: "AI and Sustainability Summit: Opening Keynote",
            date: "July 19, 1:00 PM",
            description: "Welcome to the AI and Sustainability Summit! Join us for an inspiring opening keynote exploring how artificial intelligence can address the world's most pressing environmental challenges.",
        },
        {
            id: 2,
            title: "Machine Learning for Climate Modeling",
            date: "July 19, 1:30 PM",
            description: "Dive deep into cutting-edge research on how machine learning algorithms are revolutionizing climate prediction models and helping scientists understand complex environmental systems.",
        },
        {
            id: 3,
            title: "Redefining Education in the Age of AI: Empowering Learners, Educators, and Systems",
            date: "July 19, 2:00 PM",
            description: "Explore how artificial intelligence is transforming energy distribution systems, optimizing renewable energy integration, and creating more efficient power grids for sustainable cities."
        },
        {
            id: 4,
            title: "Workshop: AI Ethics in Environmental Applications",
            date: "July 19, 2:45 PM",
            description: "Hands-on workshop exploring the ethical implications of deploying AI systems for environmental monitoring and decision-making. Learn best practices for responsible AI development.",
        }
    ];

    // Featured speakers focused on AI and sustainability
    const featuredSpeakers = [
        {
            id: 1,
            name: "Matt James",
            title: "KEYNOTE SPEAKER",
            event: "Lead the animal operations team to ensure the health, safety, and well-being of animals.",
            logo: '/MattJames.png',
            affiliation: "Chief Animal Officer at Colossal"
        },
        {
            id: 2,
            name: "Matthew Collado",
            title: "KEYNOTE SPEAKER",
            event: "A seasoned entrepreneur, executive and strategic advisor operating at the nexus of media, entertainment, and technology.",
            logo: '/MatthewCollado.png',
            affiliation: "Executive & Partner in Arcana"
        }
    ];

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
        <div className="min-h-screen bg-black text-white font-bold">
            {/* Header */}
            <header className="border-b border-gray-800 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex space-x-8">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white font-bold"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('calendar');
                            }}
                        >
                            Summit Program
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white font-bold"
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
                            className="p-1 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            <div
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 shadow-lg">
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
                        <a href="#" className="text-gray-400 hover:text-white font-bold"
                           onClick={handleRegisterClick}>Register</a>
                        <a href="#" className="text-gray-400 hover:text-white font-bold">Subscribe</a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-6 relative min-h-[600px] overflow-hidden">
                {/* Earth Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cb/An_EPIC_Eclipse.gif"
                        alt="/earth.png"
                        className="w-[600px] md:w-[800px] object-contain opacity-40"
                    />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 relative z-10">
                    {/* Left Side - Countdown */}
                    {/* ► left-hand column inside your hero grid */}
                    <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start
                space-y-6 md:space-y-8">

                        {/* heading + countdown */}
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-semibold uppercase tracking-wider text-green-400 mb-4">
                                Event Countdown
                            </h3>
                            <CountdownTimer targetDate="2025-07-19T09:00:00"/>
                        </div>

                        {/* primary CTA */}
                        <button
                            onClick={handleRegisterClick}
                            className="w-full md:w-auto bg-green-600 hover:bg-green-500 transition
               py-3 px-10 rounded-md text-xl font-black text-center"
                        >
                            REGISTER
                        </button>

                        {/* quick-role hints */}
                        <div className="text-center md:text-left text-gray-400 text-sm">
                            <p className="mb-2 font-bold uppercase">Register as:</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {['Keynote Speakers', 'Event Sponsors', 'Start-ups', 'Academia'].map(role => (
                                    <span
                                        key={role}
                                        className="px-2.5 py-1 rounded border border-gray-600 bg-gray-800
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
                            <h1 className="text-5xl font-black mb-2 text-green-400">AI and Sustainability</h1>
                            <h2 className="text-4xl font-black mb-4"> Global Summit</h2>
                            <p className="text-2xl font-bold">{eventData.date}</p>
                        </div>
                    </div>

                    {/* Right Side - Description and CTA (wider) */}
                    <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-end justify-center">
                        <div className="text-center md:text-right max-w-sm">
                            <div className="mb-4 whitespace-pre-line">
                                <p className="text-2xl font-extrabold text-white mb-1">
                                    Thrive in an AI World.
                                </p>
                                <p className="text-lg font-medium text-gray-300">
                                    AI with clear purpose, strong guardrails, and real-world impact.
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

            {/*/!* Description Section *!/*/}
            {/*<section className="py-16 px-6 border-t border-gray-800">*/}
            {/*    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">*/}
            {/*        <div className="md:col-span-1">*/}
            {/*            <p className="text-3xl leading-relaxed font-bold">*/}
            {/*                {eventData.longDescription}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="md:col-span-1 flex justify-end items-center">*/}
            {/*            <div className="grid grid-cols-1 gap-4">*/}
            {/*                <button*/}
            {/*                    className="bg-green-600 text-center py-8 px-12 rounded-md hover:bg-green-500 transition"*/}
            {/*                    onClick={handleRegisterClick}*/}
            {/*                >*/}
            {/*                    <span className="text-xl font-black">REGISTER</span>*/}
            {/*                </button>*/}

            {/*                /!* Registration Role Options *!/*/}
            {/*                <div className="text-center text-gray-400 text-sm mt-2">*/}
            {/*                    <p className="mb-2 font-bold">Register for role:</p>*/}
            {/*                    <div className="flex flex-wrap justify-center gap-2 text-xs">*/}
            {/*                        <span className="bg-gray-800 px-2 py-1 rounded border border-gray-600">Keynote Speakers</span>*/}
            {/*                        <span className="bg-gray-800 px-2 py-1 rounded border border-gray-600">Event Sponsors</span>*/}
            {/*                        <span*/}
            {/*                            className="bg-gray-800 px-2 py-1 rounded border border-gray-600">Start-ups</span>*/}
            {/*                        <span*/}
            {/*                            className="bg-gray-800 px-2 py-1 rounded border border-gray-600">Academia</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Featured Speakers Section */}
            <section className="py-16 px-6 border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center mb-12">
                        <div
                            className="w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center mr-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none"
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
                                    className="w-full h-48 bg-gray-800 rounded-md mb-4 overflow-hidden relative">
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
                                <div className="text-gray-400 text-sm">{speaker.title}</div>
                                <h3 className="text-2xl font-black mb-2">{speaker.name}</h3>
                                {speaker.affiliation && (
                                    <div className="text-green-400 text-sm mb-2">{speaker.affiliation}</div>
                                )}
                                {speaker.event && (
                                    <p className="text-xs text-gray-400">
                                        {speaker.event}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Sessions Section */}
            <section className="py-16 px-6 border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center">
                            <div
                                className="w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center mr-4">
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
                                <div className="w-32 h-32 bg-gray-800 rounded-md mr-6 flex-shrink-0 overflow-hidden">
                                    {index === 0 && (
                                        <div
                                            className="h-full w-full flex items-center justify-center bg-gradient-to-b from-purple-500 to-green-600">
                                            {/*<div className="text-white text-2xl">🎤</div>*/}
                                        </div>
                                    )}
                                    {index === 1 && (
                                        <div
                                            className="h-full w-full flex items-center justify-center bg-gradient-to-b from-blue-600 to-green-500">
                                            {/*<div className="text-white text-2xl">🌍</div>*/}
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div
                                            className="h-full w-full flex items-center justify-center bg-gradient-to-b from-green-500 to-blue-600">
                                            {/*<div className="text-white text-2xl">⚡</div>*/}
                                        </div>
                                    )}
                                    {index === 3 && (
                                        <div
                                            className="h-full w-full flex items-center justify-center bg-gradient-to-b from-orange-500 to-green-600">
                                            {/*<div className="text-white text-2xl">🔧</div>*/}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="text-gray-400 mb-1">{session.date}</div>
                                    <h3 className="text-2xl font-black mb-2">{session.title}</h3>
                                    {session.speaker && (
                                        <div className="text-green-400 text-sm mb-1">Speaker: {session.speaker}</div>
                                    )}
                                    {session.location && (
                                        <div className="text-gray-500 text-sm mb-1">📍 {session.location}</div>
                                    )}
                                    <p className="text-gray-400 font-bold text-sm">{session.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Summit Feature Section */}
            <section className="py-16 px-6 border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-2xl overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="p-8 flex items-center">
                                <div>
                                    <div className="font-black text-4xl mb-2 text-green-300">AI for Greater Good
                                        Challenges
                                    </div>
                                    <div className="font-black text-2xl mb-4 text-blue-300">Roadshow</div>

                                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                        <div>
                                            <div className="text-green-300">DATE</div>
                                            <div className="text-white">July 19, 2025</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col justify-center">
                                <div className="font-black mb-2 text-green-300">SATURDAY, JULY 19 / 1:00 PM</div>
                                {/*<h3 className="text-3xl font-black mb-4 text-white">AI and Sustainability Global*/}
                                {/*</h3>*/}
                                <p className="text-blue-200 font-bold">
                                    Our mission is to harness the transformative power of artificial intelligence to
                                    drive ethical innovation, social impact, and sustainability, fostering a future
                                    where AI serves humanity’s most pressing challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-800">
                <div className="max-w-7xl mx-auto text-center text-gray-400">
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

export default TechWeekApp