import React, { useState } from 'react';

const EventsCalendarPage = ({ onNavigate }) => {
  const [activeDay, setActiveDay] = useState('MON');
  const [activeCategory, setActiveCategory] = useState('All');

  // Mock data for events
  const eventsData = {
    totalEvents: 196,
    categories: ['All', 'Tech Talks', 'Workshops', 'Networking', 'Panels', 'Entertainment'],
    days: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
    events: [
      {
        id: 1,
        title: "Brunch in the Park",
        date: "June 22",
        time: "10:00 AM",
        type: "PUBLIC",
        image: "/brunch.jpg",
        description: "Calling all brunch enthusiasts, techies, and frisbee fanatics! 🌈 Join us for a delightfully whacky morning on the Toronto Islands, where the grass is green, the vibes are high, and the snacks are unlimited.",
        day: 'SUN'
      },
      {
        id: 2,
        title: "Women in Sports & Tech: Strength, Resilience, and Innovation",
        date: "June 22",
        time: "11:00 AM",
        type: "PUBLIC",
        image: "/women-tech.jpg",
        description: "Join us for an empowering morning spotlighting women who are shaping the intersection of sports and technology. From athletes leveraging data to enhance performance to engineers building the next generation of sports tech.",
        day: 'SUN'
      },
      {
        id: 3,
        title: "PORCH x CSA Picnic",
        date: "June 22",
        time: "1:00 PM",
        type: "PUBLIC",
        image: "/picnic.jpg",
        description: "Kick off your Toronto Tech Week and summer with the PORCH x CSA Picnic! Join us on Sunday, June 22nd, at the lovely Woodbine Park for an afternoon of food, games, and community building.",
        day: 'SUN'
      },
      {
        id: 4,
        title: "Toronto Tech Week: Homecoming",
        date: "June 24",
        time: "9:00 AM",
        type: "FEATURED",
        image: "/homecoming.jpg",
        description: "Homecoming is the official mainstage of Toronto Tech Week 2025. More than an event — it's a declaration. A celebration. A return. For the roots that built us. And the future we're building together.",
        day: 'MON'
      },
      {
        id: 5,
        title: "BetaKit Town Hall: Most Ambitious",
        date: "June 23",
        time: "1:00 PM",
        type: "PUBLIC",
        image: "/betakit.jpg",
        description: "Step inside for an afternoon of ambitious conversations with the most forward-thinking minds in Toronto tech. BetaKit hosts a town hall focused on the most ambitious projects reshaping our digital landscape.",
        day: 'MON'
      },
      {
        id: 6,
        title: "University of Toronto Frontiers of AI Keynote",
        date: "June 25",
        time: "3:00 PM",
        type: "FEATURED",
        image: "/uoft.jpg",
        description: "Visit the epicentre of AI innovation — Toronto's Discovery District — where modern artificial intelligence was pioneered and continues to evolve. Join Nobel Laureate Geoffrey Hinton for a keynote on the future of AI.",
        day: 'WED'
      },
      {
        id: 7,
        title: "Shopify Tech Talks",
        date: "June 26",
        time: "9:00 AM",
        type: "PUBLIC",
        image: "/shopify.jpg",
        description: "Step inside Shopify for a day made for engineers, by engineers! We'll kick off with a Fireside Chat featuring our Head of Engineering, Farhan Thawar, as he dives deep with industry leaders.",
        day: 'THU'
      },
      {
        id: 8,
        title: "Startup Showcase & Demo Day",
        date: "June 27",
        time: "2:00 PM",
        type: "PUBLIC",
        image: "/startup.jpg",
        description: "Discover the next generation of Toronto tech! Our showcase features 20+ of the most promising startups from across the city's vibrant ecosystem. Come for the demos, stay for the networking.",
        day: 'FRI'
      }
    ]
  };

  // Function to handle navigation back to home
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (typeof onNavigate === 'function') {
      onNavigate('home');
    }
  };

  // Function to handle navigation to partners
  const handlePartnersClick = (e) => {
    e.preventDefault();
    if (typeof onNavigate === 'function') {
      onNavigate('partners');
    }
  };

  // Filter events based on active day and category
  const filteredEvents = eventsData.events.filter(event => {
    // First filter by day
    const dayMatch = activeDay === 'ALL' || event.day === activeDay;

    // Then filter by category if not 'All'
    const categoryMatch = activeCategory === 'All' || event.category === activeCategory;

    return dayMatch && categoryMatch;
  });

  // Add "ALL" option to days for showing all events
  const handleAllDaysClick = () => {
    setActiveDay('ALL');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-800 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-white border-b-2 border-white"
              onClick={(e) => {
                e.preventDefault();
                // Already on calendar page, no navigation needed
              }}
            >
              Events Calendar
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              onClick={handlePartnersClick}
            >
              Partners
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full"
              onClick={handleHomeClick}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600">
                <span className="text-2xl font-bold">T</span>
              </div>
            </button>
          </div>

          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-white">Host</a>
            <a href="#" className="text-gray-400 hover:text-white">Subscribe</a>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-76px)]">
        {/* Left Panel */}
        <div className="w-full md:w-1/3 border-r border-gray-800 p-8">
          <h1 className="text-5xl font-bold mb-8">2025 Events<br />Calendar</h1>

          <div className="mb-12 border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="text-6xl font-bold">{eventsData.totalEvents}</div>
            <div className="text-gray-400 uppercase tracking-widest">EVENTS</div>
          </div>

          {/* Day Wheel */}
          <div className="relative w-full h-96 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-gray-700 relative">
                <div className="absolute w-full h-full rounded-full flex items-center justify-center">
                  <div
                    className="w-12 h-12 bg-gray-900 rounded-full border border-gray-700 z-10 cursor-pointer flex items-center justify-center hover:bg-gray-800"
                    onClick={handleAllDaysClick}
                  >
                    <span className="text-xs font-bold">ALL</span>
                  </div>
                </div>

                {/* Day buttons */}
                {eventsData.days.map((day, index) => {
                  // Calculate position around the circle
                  const angle = (index * 72) - 90; // 360 / 5 = 72 degrees per item, -90 to start at top
                  const radius = 120; // Distance from center
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;

                  return (
                    <button
                      key={day}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-md ${activeDay === day ? 'bg-red-600' : 'border border-gray-600'}`}
                      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                      onClick={() => setActiveDay(day)}
                    >
                      {day}
                    </button>
                  );
                })}

                {/* Rays */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {eventsData.days.map((_, index) => {
                    const angle = (index * 72) - 90;
                    return (
                      <div
                        key={`ray-${index}`}
                        className="absolute h-0.5 bg-gray-700"
                        style={{
                          width: '100%',
                          transform: `rotate(${angle}deg)`,
                          transformOrigin: 'center',
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-2xl mb-4">Categories</h2>
            <div className="grid grid-cols-2 gap-2">
              {eventsData.categories.map(category => (
                <button
                  key={category}
                  className={`py-2 px-4 rounded-md text-sm ${activeCategory === category ? 'bg-gray-700' : 'border border-gray-700'}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-gray-100 text-black py-3 rounded-md hover:bg-white transition">
            VIEW LUMA CALENDAR
          </button>
        </div>

        {/* Right Panel - Events List */}
        <div className="w-full md:w-2/3 p-8 overflow-y-auto">
          <h2 className="text-2xl mb-6">Events</h2>

          {filteredEvents.length > 0 ? (
            <div className="space-y-6">
              {filteredEvents.map(event => (
                <div key={event.id} className="flex border-b border-gray-800 pb-6">
                  <div className="w-40 h-40 flex-shrink-0 mr-6">
                    <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                      {/* This would be an image in a real app */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-3xl font-bold opacity-50">{event.title.charAt(0)}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <div className="text-gray-400 font-mono">{event.date}, {event.time}</div>
                      <span className={`ml-3 px-2 py-0.5 text-xs rounded ${event.type === 'PUBLIC' ? 'bg-green-800' : 'bg-purple-800'}`}>
                        {event.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>

                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xl">No events found for the selected filters</p>
              <button
                className="mt-4 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700"
                onClick={() => {
                  setActiveDay('ALL');
                  setActiveCategory('All');
                }}
              >
                Show all events
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Toronto Tech Week. All rights reserved.</p>
        </div>
      </footer>

      {/* Debug element */}
      <div style={{ position: 'fixed', bottom: '10px', right: '10px', background: '#333', padding: '5px', borderRadius: '3px', fontSize: '10px', opacity: 0.7 }}>
        onNavigate available: {typeof onNavigate === 'function' ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

export default EventsCalendarPage;