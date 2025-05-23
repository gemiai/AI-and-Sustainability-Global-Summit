
import React, { useState } from 'react';
import PartnersPage from './PartnersPage';
import EventsCalendarPage from './EventsCalendarPage';

// Home Page Component
const TechWeekApp = ({ onNavigate }) => {
  const eventData = {
    totalEvents: 187,
    dates: "June 23 – 27, 2025",
    description: "A citywide collection of events to celebrate the builders.",
    longDescription: "Toronto Tech Week is a weeklong, citywide collection of events to connect and celebrate the tech community. It's an open platform for anyone to join or host events to showcase Toronto globally as a city where anything is possible.",
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Toronto Tech Week: Homecoming",
      date: "June 24, 9:00 AM",
      location: "Evergreen Brick Works",
      description: "Homecoming is the official mainstage of Toronto Tech Week 2025. More than an event — it's a declaration. A celebration. A return. For the roots that built us. And the future we're building together."
    },
    {
      id: 2,
      title: "BetaKit Town Hall: Most Ambitious",
      date: "June 23, 1:00 PM",
      description: "Step inside Shopify for a day made for engineers, by engineers! We'll kick off with a Fireside Chat featuring our Head of Engineering, Farhan Thawar, as he dives deep with industry leaders."
    },
    {
      id: 3,
      title: "University of Toronto Frontiers of AI Keynote",
      date: "June 25, 3:00 PM",
      description: "Visit the epicentre of AI innovation — Toronto's Discovery District — where modern artificial intelligence was pioneered and continues to evolve."
    },
    {
      id: 4,
      title: "Shopify Tech Talks",
      date: "June 26, 9:00 AM",
      description: "Step inside Shopify for a day made for engineers, by engineers! We'll kick off with a Fireside Chat featuring our Head of Engineering, Farhan Thawar, as he dives deep with industry leaders."
    }
  ];

  const featuredSpeakers = [
    {
      id: 1,
      name: "Tobi Lütke",
      title: "CEO, SHOPIFY",
      event: "HOMECOMING"
    },
    {
      id: 2,
      name: "Chamath Palihapitiya",
      title: "CEO, SOCIAL CAPITAL",
      event: "HOMECOMING"
    },
    {
      id: 3,
      name: "Geoffrey Hinton",
      title: "NOBEL LAUREATE",
      event: "U OF T FRONTIERS OF AI KEYNOTE"
    },
    {
      id: 4,
      name: "Harley Finkelstein",
      title: "PRESIDENT, SHOPIFY",
      event: "HOMECOMING"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-800 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('calendar');
              }}
            >
              Events Calendar
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('partners');
              }}
            >
              Partners
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('home')}
              className="p-2 rounded-full"
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

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="text-6xl font-bold">{eventData.totalEvents}</div>
            <div className="text-gray-400 uppercase tracking-widest">EVENTS</div>
            <button
              className="mt-8 bg-gray-100 text-black font-mono py-3 px-6 rounded-md hover:bg-white transition"
              onClick={() => onNavigate('calendar')}
            >
              VIEW FULL CALENDAR
            </button>
          </div>

          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-2">Toronto</h1>
              <h1 className="text-5xl font-bold mb-4">Tech Week</h1>
              <p className="text-xl">{eventData.dates}</p>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col items-center md:items-end">
            <p className="text-xl text-right max-w-xs">{eventData.description}</p>
            <button className="mt-8 border border-white py-3 px-6 rounded-md hover:bg-white hover:text-black transition">
              GET UPDATES
            </button>
          </div>
        </div>

        {/* Toronto Skyline */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="w-full h-48 relative">
            <div className="absolute bottom-0 w-full border-t border-gray-800 p-4">
              <div className="h-8 flex items-center justify-center">
                <div className="w-20 h-4 border border-gray-600 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <p className="text-3xl leading-relaxed">
              {eventData.longDescription}
            </p>
          </div>
          <div className="md:col-span-1 flex justify-end items-center">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-red-500 text-center py-8 px-12 rounded-md">
                <span className="text-xl font-bold">SUBSCRIBE</span>
              </div>
              <div className="bg-teal-600 text-center py-8 px-12 rounded-md">
                <span className="text-xl font-bold">HOST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center">
              <div className="w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center mr-4">
                <div className="w-12 h-12 border border-blue-500 rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
            </div>
            <button
              className="bg-white text-black font-mono py-2 px-4 rounded-md hover:bg-gray-200 transition"
              onClick={() => onNavigate('calendar')}
            >
              VIEW FULL SCHEDULE
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="flex mb-8">
                <div className="w-32 h-32 bg-gray-800 rounded-md mr-6 flex-shrink-0 overflow-hidden">
                  {index === 0 && (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-b from-blue-500 to-purple-700">
                      <div className="w-8 h-16 bg-white"></div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-gray-400 mb-1">{event.date}</div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 font-mono text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center mr-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold">Featured Speakers</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSpeakers.map(speaker => (
              <div key={speaker.id} className="mb-8">
                <div className="w-full h-48 bg-gray-800 rounded-md mb-4 overflow-hidden"></div>
                <div className="text-gray-400 text-sm">{speaker.title}</div>
                <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
                <div className="inline-flex items-center bg-black border border-gray-700 px-3 py-1 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs tracking-wider">{speaker.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homecoming Feature Section */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 flex items-center">
                <div>
                  <div className="font-mono text-5xl mb-2">Homecoming</div>
                  <div className="inline-block border border-gray-700 rounded px-2 py-1 text-sm mb-6">Toronto Tech Week</div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <div className="text-gray-400">LOCATION</div>
                      <div>Evergreen<br />Brick Works</div>
                    </div>
                    <div>
                      <div className="text-gray-400">DATE</div>
                      <div>June 24,<br />2025</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-center">
                <div className="font-mono mb-2 text-gray-400">MONDAY, JUNE 24 / 9:00 AM</div>
                <h3 className="text-3xl font-bold mb-4">Toronto Tech Week:<br/>Homecoming</h3>
                <p className="text-gray-400 font-mono">
                  Homecoming is the official mainstage of Toronto Tech Week 2025.
                  More than an event — it's a declaration. A celebration. A return.
                  For the roots that built us. And the future we're building together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Toronto Tech Week. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TechWeekApp;