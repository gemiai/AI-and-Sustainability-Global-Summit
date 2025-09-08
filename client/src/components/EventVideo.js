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
            title: 'Opening Remark (Part 1)',
            url: 'https://www.youtube.com/embed/iV86y4HIpkw',
            speakerName: 'Steven Cohen',
            speakerAffiliation: 'Senior Vice Dean, Columbia University',
            speakerAvatar: '/speakers/DeanCohen.png',
            description:
                'New York, a hub of AI and technological innovation, brings together unmatched talent, creativity, and purpose-driven collaboration. As sustainability faces enduring challenges, the convergence of AI and human ingenuity opens new possibilities for meaningful change. To realize this potential, we must ensure strong guardrails and embrace diverse voices, fostering solutions that are both inclusive and impactful. May this summit mark not just an event, but the beginning of honest dialogue, deeper understanding, and lasting collaboration.'
        },
        {
            title: 'Opening Remark (Part 2)',
            url: 'https://www.youtube.com/embed/ez1sHUBoCLQ',
            speakerName: 'Kathleen Noreau',
            speakerAffiliation: 'Head of Strategic Partnerships & Head of Professional Services Industry',
            speakerAvatar: '/speakers/kathleen1.png',
            description:
                'The society is navigating an era of rapid technological change, where AI is deeply embedded in daily life. This transformation brings both excitement and unease, raising critical questions of access, benefit, and accountability. Meaningful progress requires broad participation—engineers, policymakers, educators, artists, and communities all shaping AI together. Real-world examples show the power of inclusive approaches: Rwanda’s co-designed AI health policies, India’s AI literacy programs reaching rural schools, global governance alliances setting guardrails, and local initiatives like New York’s task force sparking public debate. Recent developments, from AI-enabled power grids to massive new data centers, demonstrate that AI is not only reshaping digital systems but also physical infrastructure, energy, and sustainability. The central message is clear: building AI with purpose, strong guardrails, and real-world impact depends on collective responsibility, trust, and inclusion—ensuring technology supports more resilient, human-centered systems.'
        }
    ],
    'morning-sessions': [
        {
            title: 'AI and Education',
            url: 'https://www.youtube.com/embed/njQeWzrP9_M',
            speakerName: 'Katja Schroeder',
            speakerAffiliation: 'Senior Lecturer, Associate Program Director, Technology Management, School of Professional Studies',
            speakerAvatar: '/speakers/KatjaSchroeder.png',
            slidesHref: '/slide/2.%20Katja%20Slide.pptx-2.pdf',
            slidesLabel: 'Download slides (PDF)'
        },
        {
            title: 'Education Panel Discusssion',
            url: 'https://www.youtube.com/embed/73A610Z66oA',
            speakers: [
                { name: 'Karen Farah', avatar: '/speakers/KarenFarah.png' },
                { name: 'Katja Schroeder', avatar: '/speakers/KatjaSchroeder.png' },
                { name: 'Al Olsen', avatar: '/speakers/AIOlsen.png' },
                { name: 'Tia Kumar', avatar: '/speakers/TiaKumar.jpg' },
                { name: 'Santino Luis Lopez Uy', avatar: '/speakers/SantinoLopez.png' }
            ]
        },
        {
            title: 'AI and Planet',
            url: 'https://www.youtube.com/embed/d6NPvVKe-l8',
            speakerName: 'Matt James',
            speakerAffiliation: 'Chief Animal Officer, Colossal Biosciences',
            speakerAvatar: '/speakers/MattJames.png'
        },
        {
            title: 'AI and Planet – Panel Discussion',
            url: 'https://www.youtube.com/embed/Fu1qzPvASXg',
            speakers: [
                { name: 'Xiaoran Cai (Moderator)', avatar: '/speakers/XiaoranCai.jpg' },
                { name: 'Matt James', avatar: '/speakers/MattJames.png' },
                { name: 'Di Wu', avatar: '/speakers/DiWu.png' }
            ]
        },
        {
            title: 'AI and Art',
            url: 'https://www.youtube.com/embed/b4TvMVugoFw',
            speakerName: 'Rudy R. Rodriguez',
            speakerAffiliation: 'Technical Director at Lincoln Center',
            speakerAvatar: '/speakers/RudyRRodriguez.png',
            slidesHref: '/slide/%20between%203%20and%204_%20AI_Arts_Keynote_Rodriguez_2025.pdf',
            slidesLabel: 'Download slides (PDF)'
        },
        {
            title: 'AI and Art – Panel Discussion',
            url: 'https://www.youtube.com/embed/XI-BwUFTipk',
            speakers: [
                { name: 'Rudy R. Rodriguez', avatar: '/speakers/RudyRRodriguez.png' },
                { name: 'Joshue Ott', avatar: '/speakers/JoshueOtt.png' },
                { name: 'Cornelia Dai', avatar: '/speakers/corn.png' },
                { name: 'Zack Krall', avatar: '/speakers/ZackKrall.png' },
                { name: 'Jiajian Min', avatar: '/speakers/JiajianMin.png' },
                { name: 'Aimee Yang', avatar: '/speakers/Aimee.jpeg' }
            ]
        }
    ],
    'noon-learning': [
        {
            title: 'Lunch & Learn: MCP - New Operating System',
            url: 'https://www.youtube.com/embed/Wqea_2BoEVo',
            speakerName: 'Justin Cappos',
            speakerAffiliation: 'Professor, NYU Center for Cybersecurity',
            speakerAvatar: '/speakers/JustinCappos.png'
        }
    ],
    'afternoon-session': [
        {
            title: 'AI and Technology',
            url: 'https://www.youtube.com/embed/ugbmSP74g9o',
            speakerName: 'Sumeet Agrawal',
            speakerAffiliation: 'VP of Product at Informatica',
            speakerAvatar: '/speakers/SumeetAgrawal.png'
        },
        {
            title: 'AI and Technology – Panel Discussion',
            url: 'https://www.youtube.com/embed/4l-jfjdUl4Y',
            speakers: [
                { name: 'Matt Ford', avatar: '/speakers/MattFord.png' },
                { name: 'David Baum', avatar: '/speakers/DavidBaum.jpg' },
                { name: 'Karen Farah', avatar: '/speakers/KarenFarah.png' },
                { name: 'Richard Lu', avatar: '/speakers/RichardLu.png' }
            ]
        },
        {
            title: 'AI and Finance & Investment',
            url: 'https://www.youtube.com/embed/hrYxBHSF5z4',
            speakerName: 'Shahryar Shaghaghi',
            speakerAffiliation: 'Program Director at Columbia University | Ex Deloitte Partner',
            speakerAvatar: '/speakers/ShahryarShaghaghi.png',
            slidesHref: '/slide/5.%20Shahryar%20Slide.pdf',
            slidesLabel: 'Download slides (PDF)'
        },
        {
            title: 'AI and Finance & Investment – Panel Discussion',
            url: 'https://www.youtube.com/embed/I3gHatEuRJE',
            speakers: [
                { name: 'Shahryar Shaghaghi', avatar: '/speakers/ShahryarShaghaghi.png' },
                { name: 'Wendy Diamond', avatar: '/speakers/WendyDiamond.png' },
                { name: 'Echo Zhong', avatar: '/speakers/EchoZhong.png' }
            ]
        },
        {
            title: 'Responsible AI',
            url: 'https://www.youtube.com/embed/FL8gkR0gKRM',
            speakerName: 'Maryam Ashoori',
            speakerAffiliation: 'Head of Product at IBM watsonx.ai',
            speakerAvatar: '/speakers/Maryam.jpg'
        },
        {
            title: 'Responsible AI – Panel Discussion',
            url: 'https://www.youtube.com/embed/wuPEHcyUJK0',
            speakers: [
                { name: 'Ben Jakob Zulechner', avatar: '/speakers/BenJakobZulechner.png' },
                { name: 'Kiran Bhujle', avatar: '/speakers/Kiran.png' },
                { name: 'Uvika Sharma', avatar: '/speakers/UvikaSharma.png' },
                { name: 'Courtney Greer', avatar: '/speakers/CourtneyGreer.png' },
                { name: 'Manhar Arora', avatar: '/speakers/manhar.jpg' }
            ]
        }
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
                        {v.url && (
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
                        )}
                        <h2 className="text-base font-semibold text-gray-800">{v.title}</h2>
                        {(v.speakerName || (v.speakers && v.speakers.length)) && (
                            <div className="mt-2 flex items-center gap-3 flex-wrap">
                                {/* Single speaker support */}
                                {v.speakerName && (
                                    <div className="flex items-center gap-3">
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

                                {/* Multiple speakers support */}
                                {v.speakers && v.speakers.length > 0 && (
                                    <div className="flex items-center gap-2">
                                        {v.speakers.map((s, sIdx) => (
                                            <img
                                                key={sIdx}
                                                src={s.avatar}
                                                alt={s.name}
                                                title={s.name}
                                                className="w-9 h-9 rounded-full object-cover border border-gray-200"
                                                onError={(e) => { e.target.style.display = 'none'; }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                        {v.description && (
                            <p className="mt-3 text-gray-700 text-sm leading-relaxed">{v.description}</p>
                        )}
                        {v.slidesHref && (
                            <div className="mt-3">
                                <a
                                    href={v.slidesHref}
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-3 py-1.5 rounded-md transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M3 3.75A.75.75 0 013.75 3h8.25a.75.75 0 010 1.5H4.5v15h15v-7.5a.75.75 0 011.5 0v8.25a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V3.75z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M21 3.75a.75.75 0 00-.75-.75h-5.25a.75.75 0 000 1.5h3.69l-7.72 7.72a.75.75 0 101.06 1.06l7.72-7.72v3.69a.75.75 0 001.5 0V3.75z" clipRule="evenodd" />
                                    </svg>
                                    {v.slidesLabel || 'Download slides'}
                                </a>
                            </div>
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


