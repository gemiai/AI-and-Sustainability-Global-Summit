import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Registration Modal Component
const Registration = ({isOpen, onClose, navigateHome}) => {
    // Defines the roles available for registration
    const registrationRoles = [
        {
            id: 'early-bird',
            title: 'Early Bird Ticket',
            description: 'Get your discounted ticket now!',
            icon: '🎟️',
            link: 'https://www.eventbrite.com/e/1403279870869?aff=oddtdtcreator'
        },
        {
            id: 'keynote',
            title: 'Keynote Speakers',
            description: 'Leading experts presenting groundbreaking research',
            icon: '🎤',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSeM_XWIrg5qi7ECvk6LM2AFUKmu-lNeTiGg4SjWDvJUerddlA/viewform?usp=header   '
        },
        {
            id: 'sponsors',
            title: 'Event Sponsors',
            description: 'Organizations supporting the summit',
            icon: '🏢',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSeg6lMKN5m77zl6Ae0L-4bt4CnZr795JKCsJJLLDPoczGa8uA/viewform?usp=header   '
        },
        {
            id: 'startups',
            title: 'Start-ups',
            description: 'Innovative companies in AI and sustainability',
            icon: '🚀',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSd9PNOxNz3G4cZylWIznBAGonVv-4DvviFVRRUKuOTtuKtzEQ/viewform?usp=header'
        },
        {
            id: 'academic',
            title: 'Academia',
            description: 'Researchers and academic institutions',
            icon: '🎓',
            link: 'https://surveymars.com/q/TQhQUKbz3\n'
        }
    ];

   
    const navigate = useNavigate()

    const handleRoleSelect = (role) => {
        // Mock link navigation - in a real app, this would use proper routing
        window.open(role.link, '_blank', 'noopener,noreferrer');
        handleClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };
    
    const handleClose = () => {
    onClose();
    navigate('/home', { replace: true });
  };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
        >
            <div
                className="bg-white rounded-lg border border-gray-300 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="border-b border-gray-300 p-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-black">Register for Summit</h2>
                        <p className="text-gray-600 mt-1">Select your role to continue registration</p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-gray-600 hover:text-black text-2xl font-bold w-8 h-8 flex items-center justify-center transition-colors"
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
                                className="w-full p-4 border border-gray-300 rounded-lg hover:border-green-500 hover:bg-gray-50 transition-all duration-200 text-left group"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-3xl">{role.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-black group-hover:text-green-600 transition-colors">
                                            {role.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mt-1">{role.description}</p>
                                    </div>
                                    <div className="text-gray-600 group-hover:text-green-600 transition-colors">
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
                <div className="border-t border-gray-300 p-6 bg-gray-100 rounded-b-lg">
                    <div className="text-center text-gray-600 text-sm">
                        <p>Questions about registration? Contact us at <span
                            className="text-green-600">people@londonesganalytics.co.uk</span></p>
                    </div>
                </div>
            </div>
            
     
        </div>
    );
};

export default Registration;