import { sponsorsData } from './sponsorsData.js';
// Main application data
export const eventData = {
    totalSessions: 11,
    date: "Friday, July 18th, 2025",
    description: "Thrive in the AI World.\n" +
        "AI with a clear purpose, strong guardrails and real-world impact.",
    longDescription: "The AI and Sustainability Global Summit brings together leaders from academia, industry, government, and entrepreneurship to explore how artificial intelligence can be leveraged to accelerate sustainable development. The summit focuses on three core themes: AI for Climate and Environmental Solutions – Highlighting innovations in energy, agriculture, waste, and biodiversity driven by AI technologies. AI in Education for Sustainable Futures – Exploring how AI can enhance sustainability education, empower the next generation of impact entrepreneurs, and bridge global knowledge gaps. Ethical and Inclusive AI for People and Planet – Addressing governance, transparency, and the importance of ensuring AI serves all communities equitably.",
    sponsors: sponsorsData
};

// AI and Sustainability focused upcoming sessions
// Updated upcoming sessions with complete speaker information
export const upcomingSessions = [
    {
        id: 1,
        title: "Opening Remark",
        date: "July 18, 9:00 AM",
        category: 'Opening',
        format: 'keynote',
        keynoteSpeaker: {
            name: "Steven Cohen",
            avatar: '/speakers/DeanCohen.png'
        },
        panelSpeakers: [
            {name: "Xiaoran Cai", avatar: '/XiaoranCai.jpg'}
        ],
        description: "The AI and Sustainability Global Summit brings together leaders from academia, industry, government, and entrepreneurship to explore how artificial intelligence can be leveraged to accelerate sustainable development.",
    },
    {
        id: 2,
        title: "AI and Education",
        date: "July 18, 9:30 AM",
        category: 'Education',
        format: 'panel',
        keynoteSpeaker: {
            name: "Steven Cohen",
            avatar: '/speakers/DeanCohen.png'
        },
        panelSpeakers: [
            {name: "Katja Schroeder", avatar: '/speakers/KatjaSchroeder.png'},
            {name: "Ben Jakob Zulechner", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Dr. Dong Guo", avatar: '/speakers/DongGuo.png'},
            {name: "Al Olsen", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Tia Kumar", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Vivan Zhang", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Phil Ahn", avatar: '/speakers/placeholder-avatar.png'}
        ],
        description: "This session explores how education can harness the power of AI to cultivate a new wave of entrepreneurs committed to sustainability. As institutions rethink how they prepare students for the green economy, AI offers tools to personalize learning, simulate real-world challenges, and support venture creation.",
    },
    {
        id: 3,
        title: "AI and the Planet",
        date: "July 18, 10:30 AM",
        category: 'Planet',
        format: 'panel',
        keynoteSpeaker: {
            name: "Matt James",
            avatar: '/speakers/MattJames.png'
        },
        panelSpeakers: [
            {name: "Matt James", avatar: '/speakers/MattJames.png'},
            {name: "Erik Solheim", avatar: '/speakers/ErikSolheim.png'},
            {name: "Di Wu", avatar: '/speakers/DiWu.png'},
            {name: "Andrew Dumit", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Anthony Leiserowitz", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Anna Lerner Nesbitt", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Maria Mähl", avatar: '/speakers/placeholder-avatar.png'}
        ],
        description: "From tracking endangered species DNA to optimizing conservation efforts and network, AI gives us tools to respond faster, smarter, and at scale."
    },
    {
        id: 4,
        title: "AI and Art",
        date: "July 18, 11:30 AM",
        category: 'Art',
        format: 'panel',
        keynoteSpeaker: {
            name: "Johnathan",
            avatar: '/speakers/Johnathan.png'
        },
        panelSpeakers: [
            {name: "Johnathan", avatar: '/speakers/Johnathan.png'},
            {name: "Zach Krall", avatar: '/speakers/ZachKrall.png'},
            {name: "Matthew Collado", avatar: '/speakers/MatthewCollado.png'},
            {name: "Joshua", avatar: '/speakers/placeholder-avatar.png'}
        ],
        description: "AI is making every artistic dream feel possible and important. By keeping humans at the center, it brings more joy and meaning to the creative process. Accessibility doesn't mean compromise, but rather, better quality and new possibilities for everyone.",
    },
    {
        id: 5,
        title: "AI and Technology",
        date: "July 18, 1:30 PM",
        category: 'Technology',
        format: 'panel',
        keynoteSpeaker: {
            name: "Renee Yao",
            avatar: '/speakers/placeholder-avatar.png'
        },
        panelSpeakers: [
            {name: "Oussama Elachqar", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Justin Cappos", avatar: '/speakers/JustinCappos.png'},
            {name: "David Baum", avatar: '/speakers/DavidBaum.png'},
            {name: "Karen Farah", avatar: '/speakers/KarenFarah.png'},
            {name: "Arthy Krishnamurthy", avatar: '/speakers/ArthyKrishnamurthy.png'},
            {name: "Lakshminarayanan Subramanian", avatar: '/speakers/placeholder-avatar.png'}
        ],
        description: "Artificial intelligence is transforming the traditional cost-performance trade-off in business and technology. Rather than sacrificing quality or speed for savings, leading experts will share how AI enables organizations to simultaneously reduce operational costs and enhance capabilities.",
    },
    {
        id: 6,
        title: "AI and Finance, Compliance",
        date: "July 18, 2:30 PM",
        category: 'Finance',
        format: 'panel',
        keynoteSpeaker: {
            name: "Veeral Shah",
            avatar: '/speakers/VeeralShah.png'
        },
        panelSpeakers: [
            {name: "Anand Chaturvedi", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Miguel CuUnjieng", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Jared Haite", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Bao Te", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Taylor Meadows", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Talha Khan", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Phil Brady", avatar: '/speakers/placeholder-avatar.png'}
        ],
        description: "AI is redefining the future of finance by powering smarter investment strategies, real-time risk detection, and automated compliance. This panel explores how financial institutions, regulators, and investors are leveraging AI to enhance decision-making.",
    },
    {
        id: 7,
        title: "Responsible AI",
        date: "July 18, 3:30 PM",
        category: 'Ethics',
        format: 'panel',
        keynoteSpeaker: {
            name: "Eric Horvitz",
            avatar: '/speakers/EricHorvitz.png'
        },
        panelSpeakers: [
            {name: "Matt Ford", avatar: '/speakers/MattFord.png'},
            {name: "Xiaoran Cai", avatar: '/speakers/XiaoranCai.jpg'},
            {name: "Courtney Greer", avatar: '/speakers/CourtneyGreer.png'},
            {name: "Himanshu Joshi", avatar: '/speakers/placeholder-avatar.png'},
            {name: "Dan Reich", avatar: '/speakers/placeholder-avatar.png'}
        ],
        description: "AI is advancing rapidly, but with great power comes greater responsibility. This panel dives into how researchers, policymakers, and technologists are working together to build AI systems that are transparent, fair, and aligned with human values.",
    }
];

// Featured speakers focused on AI and sustainability
export const featuredSpeakers = [
    {
        id: 1,
        name: "Steven Cohen",
        title: "SPEAKER",
        event: "Sustainability Management and Environmental Policy: Leading the Green Transformation in Business and Academia",
        logo: '/speakers/DeanCohen.png',
        affiliation: "Senior Vice Dean at Columbia University School of Professional Studies & Director of Sustainability Management Program"
    },
    {
        id: 2,
        name: "Eric Horvitz",
        title: "KEYNOTE SPEAKER",
        event: "AI at the Intersection of Science and Society: Navigating Technology's Role in Sustainable Innovation",
        logo: '/speakers/EricHorvitz.png',
        affiliation: "Chief Scientific Officer at Microsoft"
    },
    {
        id: 3,
        name: "Veeral Shah",
        title: "SPEAKER",
        event: "Building Impactful Technology: 20+ Years of Innovation in Product Strategy and Sustainable Business Solutions",
        logo: '/speakers/VeeralShah.png',
        affiliation: "Managing Director in Kroll"
    },
    {
        id: 4,
        name: "Matt James",
        title: "SPEAKER",
        event: "Planetary Resilience: Strengthening Ecosystems, Fostering Biodiversity, and Enabling All Life to Thrive with AI.",
        logo: '/speakers/MattJames.png',
        affiliation: "Chief Animal Officer at Colossal"
    },
    {
        id: 5,
        name: "Katja Schroeder",
        title: "SPEAKER",
        event: "Technology-Enabled Sustainability: Leadership Communications and Entrepreneurial Innovation for Global Impact",
        logo: '/speakers/KatjaSchroeder.png',
        affiliation: "Senior Lecturer, Columbia University Technology Management Program & Founder of Expedition PR"
    },
    {
        id: 6,
        name: "Justin Cappos",
        title: "SPEAKER",
        event: "Cybersecurity for Sustainable Systems: Real-World Solutions from Cloud Computing to Automotive Innovation",
        logo: '/speakers/JustinCappos.png',
        affiliation: "Professor of Computer Science & Engineering, NYU & Director, NYU Center for Cybersecurity"
    },
    {
        id: 7,
        name: "Matt Ford",
        title: "SPEAKER",
        event: "Strategic Innovation at Scale: Leading R&D and Go-to-Market Initiatives for Sustainable Technology Solutions",
        logo: '/speakers/MattFord.png',
        affiliation: "Senior Engagement Manager, IBM Strategic Business Initiatives"
    },
    {
        id: 8,
        name: "Arthy Krishnamurthy",
        title: "SPEAKER",
        event: "AI Literacy and Business Transformation: Bridging the Gap Between Technology and Human Capital",
        logo: '/speakers/ArthyKrishnamurthy.png',
        affiliation: "Senior Director of Business Transformation at Dataiku"
    },
    {
        id: 9,
        name: "Xiaoran Cai",
        title: "KEYNOTE SPEAKER",
        event: "AI for Good: Building Sustainable Technology Platforms and Global Communities for Positive Impact",
        logo: '/speakers/XiaoranCai.jpg',
        affiliation: "Founder & Product Lead at GEMI.AI"
    },
    {
        id: 10,
        name: "Courtney Greer",
        title: "SPEAKER",
        event: "From Chaos to Connection: Building AI-Powered Solutions That Simplify Human Experiences",
        logo: '/speakers/CourtneyGreer.png',
        affiliation: "Founder & CEO of Voxxy AI & Former Senior Technical Program Manager at Microsoft"
    },
    {
        id: 11,
        name: "David Baum",
        title: "SPEAKER",
        event: "Human-Centered AI Design: Research-Driven Approaches to Sustainable User Experience Innovation",
        logo: '/speakers/DavidBaum.jpg',
        affiliation: "UX Research Lead at Amazon Ads & Service Design Strategist"
    },
    {
        id: 12,
        name: "Karen Farah",
        title: "SPEAKER",
        event: "Digital Transformation for Sustainability: AI, Cloud, and Cybersecurity Solutions for Future-Ready Organizations",
        logo: '/speakers/KarenFarah.png',
        affiliation: "CEO at The Melting Pot Studio & AI & Cloud Solutions Leader"
    },
  
];
