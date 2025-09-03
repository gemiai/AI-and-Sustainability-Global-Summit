import React from 'react';

const FeaturedSpeakers = () => {
    // Example speaker data (you can replace this with real data or props)
    const speakers = [
        {
            name: "Dr. Jane Smith",
            title: "AI Researcher, Tech University",
            bio: "Dr. Smith focuses on ethical AI and sustainability.",
            image: "/images/jane-smith.jpg"
        },
        {
            name: "John Doe",
            title: "CTO, FutureTech",
            bio: "John leads AI-driven product innovation at scale.",
            image: "/images/john-doe.jpg"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto py-8 px-4">
            <h2 className="text-3xl font-bold mb-6">Featured Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {speakers.map((speaker, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
                        <img 
                            src={speaker.image} 
                            alt={speaker.name} 
                            className="w-full h-48 object-cover rounded mb-4"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                        <h3 className="text-xl font-semibold">{speaker.name}</h3>
                        <p className="text-gray-600">{speaker.title}</p>
                        <p className="mt-2">{speaker.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedSpeakers;