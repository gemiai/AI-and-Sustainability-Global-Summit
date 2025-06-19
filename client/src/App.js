// import React, { useState } from 'react';
// import './App.css';
// import Navbar from "./components/Navbar.js";
// import Footer from "./components/Footer.js";
// import Registration from './components/Registration.js'; 
// import Home from './components/Home.js';
// // import FeaturedSpeaker from "./components/FeaturedSpeaker.js";
// // import Partners from "./components/Partners.js";
// import Schedule from "./components/Schedule.js";
// import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
// import LoadingScreen from './components/LoadingScreen.js'; 
// import Sponsors from './components/Sponsors.js';



// const App = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isLoading, setIsLoading] = useState(true);
//   const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);


  

//   if (isLoading) {
//     return <LoadingScreen onLoadingComplete={() => {setIsLoading(false);}} />;
//   }


//    const handleRegisterClick = () => {
//     setIsRegistrationModalOpen(true);
//   };

//   const handleCloseRegistrationModal = () => {
//     setIsRegistrationModalOpen(false);
//   };

// return (
//      <Router>
//     <div className="flex flex-col min-h-screen">
//      <div>
//            <Navbar
//            onRegisterClick={handleRegisterClick}/>
//          </div>

//       <main className="flex-grow">
//       <Routes>
//         <Route path="/loading" element={<LoadingScreen />} />
//         <Route path="/schedule" element={<Schedule />} />
//         <Route path="/sponsors" element={<Sponsors />} />
//         <Route path="/registration" element={<Registration />} />
//         <Route path="/" element={<Home />} />
//         {/* other routes if any */}
//       </Routes>
//       </main>
      
//       <div>
//           <Footer/ >
//       </div>
//     </div>
       
//     <div> <Registration 
//         isOpen={isRegistrationModalOpen}
//         onClose={handleCloseRegistrationModal}
//       />
//     </div>

//      </Router>
 
//   );
// };


// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Navbar from "./components/Navbar.js";
// import Footer from "./components/Footer.js";
// import Registration from './components/Registration.js'; 
// import Home from './components/Home.js';
// import Schedule from "./components/Schedule.js";
// import Sponsors from './components/Sponsors.js';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import LoadingScreen from './components/LoadingScreen.js'; 

// const AppContent = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
//   const [hasNavigatedAfterLoad, setHasNavigatedAfterLoad] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoading && !hasNavigatedAfterLoad) {
//       navigate('/home');
//       setHasNavigatedAfterLoad(true);  // ✅ ensure we navigate only once
//     }
//   }, [isLoading, hasNavigatedAfterLoad, navigate]);

//   if (isLoading) {
//     return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
//   }

//   const handleRegisterClick = () => {
//     setIsRegistrationModalOpen(true);
//   };

//   const handleCloseRegistrationModal = () => {
//     setIsRegistrationModalOpen(false);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar onRegisterClick={handleRegisterClick} />

//       <main className="flex-grow">
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/schedule" element={<Schedule />} />
//           <Route path="/sponsors" element={<Sponsors />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </main>

//       <Footer />

//       <Registration
//         isOpen={isRegistrationModalOpen}
//         onClose={handleCloseRegistrationModal}
//       />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// };

// export default App;
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Registration from './components/Registration.js'; 
import Home from './components/Home.js';
import Schedule from "./components/Schedule.js";
import Sponsors from './components/Sponsors.js';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen.js'; 

const AppContent = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoading && location.pathname !== '/loading') {
      navigate('/loading', { replace: true });
    }
  }, [isLoading, location.pathname, navigate]);

  useEffect(() => {
    if (!isLoading && location.pathname === '/loading') {
      navigate('/home', { replace: true });
    }
  }, [isLoading, location.pathname, navigate]);

  const handleRegisterClick = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const isOnLoadingPage = location.pathname === '/loading';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show Navbar + Footer only if not on loading page */}
      {!isOnLoadingPage && <Navbar onRegisterClick={handleRegisterClick} />}

      <main className="flex-grow">
        <Routes>
          <Route path="/loading" element={<LoadingScreen onLoadingComplete={() => setIsLoading(false)} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {!isOnLoadingPage && <Footer />}

      <Registration
        isOpen={isRegistrationModalOpen}
        onClose={handleCloseRegistrationModal}
      />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
