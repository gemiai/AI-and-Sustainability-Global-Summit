import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

// Import Components
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Registration from './components/Registration.js'; 
import Home from './components/Home.js';
import Schedule from "./components/Schedule.js";
import Sponsors from './components/Sponsors.js';
import LoadingScreen from './components/LoadingScreen.js'; 

// This component handles the main app logic including the loading state
const AppContent = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const handleRegisterClick = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  // Render loading screen or the main app
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }
  
  // Don't show header/footer on certain routes if needed in the future
  const showHeaderFooter = !['/some-other-full-page-route'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {showHeaderFooter && <Navbar onRegisterClick={handleRegisterClick} />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>

      {showHeaderFooter && <Footer />}

      <Registration 
        isOpen={isRegistrationModalOpen}
        onClose={handleCloseRegistrationModal}
      />
    </div>
  );
};

// App Wrapper with Router
const AppWrapper = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default AppWrapper;
