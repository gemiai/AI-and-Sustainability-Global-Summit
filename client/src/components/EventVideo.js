import React, { useState } from 'react';

const categories = [
    { key: 'opening-remark', label: 'Opening Remark' },
    { key: 'morning-sessions', label: 'Morning Sessions' },
    { key: 'noon-learning', label: 'Noon Learning' },
    { key: 'afternoon-session', label: 'Afternoon Session' }
];

const videosByCategory = {
    'opening-remark': [
        {
            title: 'Opening Remark',
            url: 'https://www.youtube.com/embed/iV86y4HIpkw',
            speakerName: 'Steven Cohen',
            speakerAffiliation: 'Senior Vice Dean, Columbia University',
            speakerAvatar: '/speakers/DeanCohen.png',
            description:
                'New York, a hub of AI and technological innovation, brings together unmatched talent, creativity, and purpose-driven collaboration. As sustainability faces enduring challenges, the convergence of AI and human ingenuity opens new possibilities for meaningful change. To realize this potential, we must ensure strong guardrails and embrace diverse voices, fostering solutions that are both inclusive and impactful. May this summit mark not just an event, but the beginning of honest dialogue, deeper understanding, and lasting collaboration.'
        }
    ],
    'morning-sessions': [
        { title: 'Session A', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { title: 'Session B', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ],
    'noon-learning': [
        { title: 'Lunch & Learn', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ],
    'afternoon-session': [
        { title: 'Panel Discussion', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
};

const EventVideo = () => {
    const [active, setActive] = useState('opening-remark');

    const videos = videosByCategory[active] || [];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Event Videos</h1>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                {categories.map((c) => (
                    <button
                        key={c.key}
                        onClick={() => setActive(c.key)}
                        className={`px-3 py-1.5 rounded-md text-sm font-semibold border transition-colors ${
                            active === c.key
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                        aria-pressed={active === c.key}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videos.map((v, idx) => (
                    <div key={`${active}-${idx}`} className="w-full">
                        <div className="relative mb-2" style={{ paddingTop: '56.25%' }}>
                            <iframe
                                title={v.title}
                                src={v.url}
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                        <h2 className="text-base font-semibold text-gray-800">{v.title}</h2>
                        {v.speakerName && (
                            <div className="mt-2 flex items-center gap-3">
                                {v.speakerAvatar && (
                                    <img
                                        src={v.speakerAvatar}
                                        alt={v.speakerName}
                                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                )}
                                <div>
                                    <div className="text-sm font-bold text-gray-900">{v.speakerName}</div>
                                    {v.speakerAffiliation && (
                                        <div className="text-xs text-gray-600">{v.speakerAffiliation}</div>
                                    )}
                                </div>
                            </div>
                        )}
                        {v.description && (
                            <p className="mt-3 text-gray-700 text-sm leading-relaxed">{v.description}</p>
                        )}
                    </div>
                ))}
                {videos.length === 0 && (
                    <p className="text-gray-600">No videos available in this category yet.</p>
                )}
            </div>
        </div>
    );
};

export default EventVideo;


