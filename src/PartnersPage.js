import React from 'react';

const PartnersPage = ({ onNavigate }) => {
  // Partner categories for organization
  const partnerCategories = [
    {
      id: 'premier',
      title: 'Premier Partners',
      partners: [
        { id: 1, name: 'ADA', logo: '/ada-logo.png' },
        { id: 2, name: 'Apex Innovative Investments Ventures', logo: '/apex-logo.png' },
        { id: 3, name: 'BDC', logo: '/bdc-logo.png' },
        { id: 4, name: 'Black Entrepreneurship Alliance', logo: '/bea-logo.png' },
      ]
    },
    {
      id: 'supporting',
      title: 'Supporting Partners',
      partners: [
        { id: 5, name: 'DMZ', logo: '/dmz-logo.png' },
        { id: 6, name: 'Elevate', logo: '/elevate-logo.png' },
        { id: 7, name: 'MaRS', logo: '/mars-logo.png' },
        { id: 8, name: 'Communitech', logo: '/communitech-logo.png' },
      ]
    },
    {
      id: 'community',
      title: 'Community Partners',
      partners: [
        { id: 9, name: 'TechTO', logo: '/techto-logo.png' },
        { id: 10, name: 'CIX', logo: '/cix-logo.png' },
        { id: 11, name: 'Venture Lab', logo: '/venturelab-logo.png' },
        { id: 12, name: 'StartUp Here', logo: '/startuphere-logo.png' },
      ]
    }
  ];

  // Function to handle navigation back to home
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (typeof onNavigate === 'function') {
      onNavigate('home');
    }
  };

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
                if (typeof onNavigate === 'function') {
                  onNavigate('calendar');
                }
              }}
            >
              Events Calendar
            </a>
            <a
              href="#"
              className="text-white border-b-2 border-white"
              onClick={(e) => {
                e.preventDefault();
                // Already on partners page, no navigation needed
              }}
            >
              Partners
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleHomeClick}
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

      {/* Page Title */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Event Partners List</h1>
        </div>
      </section>

      {/* Partners Grid */}
      {partnerCategories.slice(0, 1).map(category => (
        <section key={category.id} className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.partners.map((partner, index) => (
                <div key={partner.id} className={`border border-gray-800 rounded-md p-8 flex items-center justify-center bg-gray-900 aspect-[4/3] ${index === 1 ? 'border-red-500 border-2' : ''}`}>
                  {/* Replace text placeholder with partner logo images */}
                  <div className="w-full h-full flex items-center justify-center">
                    {partner.name === 'ADA' && (
                      <div className="w-full flex items-center justify-center">
                        <svg viewBox="0 0 200 80" className="w-3/4 h-auto">
                          <text x="50" y="50" fontFamily="Arial" fontSize="40" fill="#9ca3af">ada</text>
                          <circle cx="30" cy="40" r="20" fill="none" stroke="#9ca3af" strokeWidth="3" />
                        </svg>
                      </div>
                    )}
                    {partner.name === 'Apex Innovative Investments Ventures' && (
                      <div className="w-full flex items-center justify-center text-center">
                        <div className="flex flex-col items-center">
                          <svg viewBox="0 0 100 100" className="w-16 h-16 mb-2">
                            <text x="35" y="55" fontFamily="Arial" fontSize="50" fill="#9ca3af">A</text>
                            <line x1="50" y1="65" x2="50" y2="95" stroke="#9ca3af" strokeWidth="2" />
                            <circle cx="50" cy="20" r="5" fill="#9ca3af" />
                          </svg>
                          <div className="text-xs text-gray-400">
                            <div>INNOVATIVE</div>
                            <div>INVESTMENTS</div>
                            <div>VENTURES</div>
                            <div>Ltd.</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {partner.name === 'BDC' && (
                      <div className="w-full flex items-center justify-center">
                        <svg viewBox="0 0 200 80" className="w-3/4 h-auto">
                          <text x="20" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="#9ca3af">bdc</text>
                          <text x="120" y="40" fontFamily="Arial" fontSize="30" fill="#9ca3af">*</text>
                        </svg>
                      </div>
                    )}
                    {partner.name === 'Black Entrepreneurship Alliance' && (
                      <div className="w-full flex items-center justify-center">
                        <svg viewBox="0 0 300 100" className="w-3/4 h-auto">
                          <text x="10" y="40" fontFamily="monospace" fontSize="20" fill="#9ca3af">Black</text>
                          <text x="10" y="60" fontFamily="monospace" fontSize="20" fill="#9ca3af">Entrepreneurship</text>
                          <text x="10" y="80" fontFamily="monospace" fontSize="20" fill="#9ca3af">Alliance.</text>
                          <rect x="220" y="35" width="40" height="40" stroke="#9ca3af" strokeWidth="2" fill="none" />
                          <text x="230" y="65" fontFamily="monospace" fontSize="25" fill="#9ca3af">B</text>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Toronto Tech Week. All rights reserved.</p>
        </div>
      </footer>

      {/* Debug element - can be removed in production */}
      <div style={{ position: 'fixed', bottom: '10px', right: '10px', background: '#333', padding: '5px', borderRadius: '3px', fontSize: '10px', opacity: 0.7 }}>
        onNavigate available: {typeof onNavigate === 'function' ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

export default PartnersPage;