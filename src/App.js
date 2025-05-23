import React, { useState } from 'react';
import TechWeekApp from './TechWeekApp';
import EventsCalendarPage from './EventsCalendarPage';
import PartnersPage from './PartnersPage';

const App = () => {
  // Start with the home page
  const [currentPage, setCurrentPage] = useState('home');

  // Function to handle navigation between pages
  const navigateTo = (page) => {
    console.log('Navigating to:', page); // Add logging to debug
    setCurrentPage(page);
  };

  // Render the appropriate component based on currentPage
  return (
    <div className="app-container">
      {currentPage === 'home' && <TechWeekApp onNavigate={navigateTo} />}
      {currentPage === 'calendar' && <EventsCalendarPage onNavigate={navigateTo} />}
      {currentPage === 'partners' && <PartnersPage onNavigate={navigateTo} />}
    </div>
  );
};

export default App;