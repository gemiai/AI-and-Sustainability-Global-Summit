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

// Summit Highlights Photos Data
export const summitHighlights = [
      {
        id: 1,
        src: "/summithighlights/dean.png",
        link: "https://sps.columbia.edu/person/steven-cohen-phd",
        title: "cohen"
    },
    {
        id: 2,
        src: "/summithighlights/Times100.png",
        link: "https://time.com/collections/time100-companies-2025/7289644/colossal-biosciences/",
        title: "Time 100 AI"
    },
    {
        id: 3,
        src: "/summithighlights/WorldEconomic.png",
        link: "https://www.realitydefender.com/insights/reality-defender-named-2025-world-economic-forum-technology-pioneer",
        title: "worldecomonic"
    },
    {
        id: 4,
        src: "/summithighlights/fors.png",
        link: "https://www.forbes.com/sites/charliefink/2025/06/23/three-new-ai-platforms-for-cinematic-ai-productions/",
        title: "Acarna"
    },
   
   
];

// AI and Sustainability focused upcoming sessions
// Updated upcoming sessions with complete speaker information
export const upcomingSessions = [
    {
        id: 1,
        title: "Opening Remark",
        date: "July 18, 9:00 AM - 9:30 AM",
        category: 'Opening',
        format: 'keynote',
        keynoteSpeaker: {
            name: "Steven Cohen",
            avatar: '/speakers/DeanCohen.png'
        },
        panelSpeakers: [
            {name: "Xiaoran Cai", avatar: '/XiaoranCai.jpg'}
        ],
        description: "Thrive in the AI World: Unlocking innovation, inclusion, and impact in the age of AI",
    },
    {
        id: 2,
        title: "AI and Education",
        date: "July 18, 9:30 AM",
        category: 'Education',
        format: 'panel',
        keynoteSpeaker: {
            name: "Katja Schroeder",
            avatar: '/speakers/KatjaSchroeder.png'
        },
        panelSpeakers: [
            {name: "Katja Schroeder", avatar: '/speakers/KatjaSchroeder.png'},
            {name: "Santino Luis Lopez Uy", avatar: '/speakers/SantinoLopez.png'},
            {name: "Al Olsen", avatar: 'speakers/AIOlsen.png'},
            {name: "Tia Kumar", avatar: '/speakers/TiaKumar.jpg'},
            {name: "Vivan Zhang", avatar: '/speakers/VivianZhang.png'},
            {name: "Phil Ahn", avatar: '/speakers/PhilAhn.png'},
         
        ],
        description: "Educating the Next Generation of Changemakers and Impact Leaders: AI is Transforming Education",
    },
    {
        id: 3,
        title: "AI and the Planet",
        date: "July 18, 10:30 AM - 11:30 AM",
        category: 'Planet',
        format: 'panel',
        keynoteSpeaker: {
            name: "Matt James",
            avatar: '/speakers/MattJames.png'
        },
        panelSpeakers: [
            {name: "Matt James", avatar: '/speakers/MattJames.png'},
            {name: "Olga Usyk", avatar: '/speakers/OlgaUsyk.jpg'},
            {name: "Di Wu", avatar: '/speakers/DiWu.png'},
             {name: "Nathan Francis", avatar: '/speakers/NathanFrancis.png'}
            
        ],
        description: "Planetary Resilience: Advancing Ecosystem Integrity, Climate Actions, and Space Sustainability with AI"
    },
    {
        id: 4,
        title: "AI and Art",
        date: "July 18, 11:30 AM - 12:30 PM",
        category: 'Art',
        format: 'panel',
        keynoteSpeaker: {
            name: "Johnathan",
            avatar: '/speakers/Johnathan.jpg'
        },
        panelSpeakers: [

            {name: "Zach Krall", avatar: '/speakers/ZackKrall.png'},
            {name: "Rudy R. Rodriguez", avatar: '/speakers/RudyRRodriguez.png'},
            {name: "Jiajian Min", avatar: '/speakers/JiajianMin.png'},
              {name: "Joshue Ott", avatar: '/speakers/JoshueOtt.png'},
        ],
        description: "Igniting Every Artist’s Dream with AI: Unlock Opportunities and make high-quality art accessible to all",
    },
    {
        id: 5,
        title: "AI and Technology",
        date: "July 18, 1:30 PM - 2:30 PM",
        category: 'Technology',
        format: 'panel',
        keynoteSpeaker: {
          name: "Sumeet Agrawal.", 
          avatar: '/speakers/SumeetAgrawal.png'
        },
        panelSpeakers: [
            {name: "Matt Ford", avatar: '/speakers/MattFord.png'},
            {name: "Honglei Liu", avatar: '/speakers/Honglei.png'},
            {name: "David Baum", avatar: '/speakers/DavidBaum.jpg'},
            {name: "Karen Farah", avatar: '/speakers/KarenFarah.png'},
            {name: "Richard Lu", avatar: '/speakers/RichardLu.png'},
        
        ],
        description: "From Trade-Offs to Win-Wins, From Cost-Saving to Revenue Growth: AI as the Engine of Business Growth",
    },
    {
        id: 6,
        title: "AI and Finance, Investment and Security",
        date: "July 18, 2:30 PM - 3:30 PM",
        category: 'Finance',
        format: 'panel',
        keynoteSpeaker: {
            name: "Shahryar Shaghaghi",
            avatar: '/speakers/ShahryarShaghaghi.png'
        },
        panelSpeakers: [
              {name: "Justin Cappos", avatar: '/speakers/JustinCappos.png'},
            {name: "Miguel CuUnjieng", avatar: '/speakers/placeholder-avatar.png'},
             {name: "WendyDiamond", avatar: '/speakers/WendyDiamond.png'},
              {name: "Echo Zhong", avatar: '/speakers/EchoZhang.png'},
            {name: "Aoran Yang", avatar: '/speakers/AoranYang.png'},
           

        ],
        description: "Redefining Finance: Precision, Speed, and Insight for Smarter, Data-Driven Decisions",
    },
    {
        id: 7,
        title: "Responsible AI",
        date: "July 18, 3:30 PM - 4:30 PM",
        category: 'Ethics',
        format: 'panel',
        keynoteSpeaker: {
            name: "Ben Colmon",
            avatar: '/speakers/BenColmon.jpg'
        },
        panelSpeakers: [
            
            {name: "Xiaoran Cai", avatar: '/speakers/XiaoranCai.jpg'},
            {name: "Courtney Greer", avatar: '/speakers/CourtneyGreer.png'},
            {name: "Himashu Joshi", avatar: '/speakers/HimashuJoshi.png'},
            {name: "Uvika Sharma", avatar: '/speakers/UvikaSharma.png'},
             {name: "Ben Jakob Zulechner", avatar: '/speakers/BenJakobZulechner.png'}
        ],
        description: "AI for Humanity: Driving Innovation with Ethics, Guardrails, and a Deep Commitment to Humanity’s Well-Being",
    }
];

// Featured speakers focused on AI and sustainability
export const keynoteSpeakers = [
    {
        id: 1,
        name: "Steven Cohen",
        title: "KEYNOTE SPEAKER",
        event: "Sustainability Management and Environmental Policy: Leading the Green Transformation in Business and Academia",
        logo: '/speakers/DeanCohen.png',
        affiliation: "Senior Vice Dean at Columbia University SPS"
    },
  
   {
        id: 2,
        name: "Katja Schroeder",
        title: "PANEL SPEAKER",
        event: "Technology-Enabled Sustainability: Leadership Communications and Entrepreneurial Innovation for Global Impact",
        logo: '/speakers/KatjaSchroeder.png',
        affiliation: "Professor at Columba University & Founder of Expedition PR"
    },
    {
        id: 3,
        name: "Matt James",
        title: "KEYNOTE SPEAKER",
        event: "Planetary Resilience: Strengthening Ecosystems, Fostering Biodiversity, and Enabling All Life to Thrive with AI.",
        logo: '/speakers/MattJames.png',
        affiliation: "Chief Animal Officer at Colossal"
    },
    {
        id: 4,
        name: "Jonathan Yunger",
        title: "KEYNOTE SPEAKER",
        event: "AI Movie and Art: Enable High-quality and Human Centric AI Movie",
        logo: '/speakers/Johnathan.jpg',
        affiliation: "Chief Executive Officer at Arcana"
    },
    
     {
        id: 5,
        name: "Justin Cappos",
        title: "PANEL SPEAKER",
        event: "Computer Science professor at NYU. Improve Real-world Systems through Practical Deployments. 5 Linux Foundation Projects and Key Contributor to Python and Git",
        logo: '/speakers/JustinCappos.png',
        affiliation: "Professor, NYU Center for Cybersecurity"
    },
      {
        id: 6,
        name: "Sumeet Agrawal",
        title: "KEYNOTE SPEAKER",
        event: "Building Impactful AI Agents: 15+ Years of Innovation in Product Strategy and Sustainable Business Solutions",
        logo: '/speakers/SumeetAgrawal.png',
        affiliation: "VP of Product at Informatica"
    },
      {
        id: 7,
        name: "Shahryar Shaghaghi",
        title: "KEYNOTE SPEAKER",
        event: "Cybersecurity and Risk Management Leader for Global Programs and Industry Standards",
        logo: '/speakers/ShahryarShaghaghi.png',
        affiliation: "Program Director at Columbia University | Ex Deloitte Partner"
    },

     {
        id: 8,
        name: "Ben Colman",
        title: "KEYNOTE SPEAKER",
        event: "Responsible AI for Identifying Deepfaked Audio, Video, Images and Text",
        logo: '/speakers/BenColmon.jpg',
        affiliation: "Co-founder | CEO"
    },
   
    
   
];

export const panelSpeakers = [
    
  
    {
        id: 7,
        name: "Wendy Diamond",
        title: "PANEL SPEAKER",
        event: "Serial Entrepreneur, Impact Investor and Bestselling Author. Champion for Social Innovation and Animal Welfare",
        logo: '/speakers/WendyDiamond.png',
        affiliation: "Founder of WEDO and LDP Ventures"
    },
     {
        id: 8,
        name: "Zach Krall",
        title: "PANEL SPEAKER",
        event: "Empathic AI research lab building multimodal AI with emotional intelligence.",
        logo: '/speakers/ZackKrall.png',
        affiliation: "Head of Design at Hume AI"
    },
     {
        id: 9,
        name: "Aoran Yang",
        title: "PANEL SPEAKER",
        event: "COO Team. +10 experience in equities technology",
        logo: '/speakers/AoranYang.png',
        affiliation: "Product at Citadel"
    },
    {
        id: 10,
        name: "Matt Ford",
        title: "PANEL SPEAKER",
        event: "Strategic Innovation at Scale: Leading R&D and Go-to-Market Initiatives for Sustainable Technology Solutions",
        logo: '/speakers/MattFord.png',
        affiliation: "IBM Business Strategy"
    },
   
    {
        id: 11,
        name: "Xiaoran Cai",
        title: "PANEL SPEAKER",
        event: "AI for Good: Building Sustainable Technology Platforms and Global Communities for Positive Impact",
        logo: '/speakers/XiaoranCai.jpg',
        affiliation: "Founder at GEMI.AI"
    },
    {
        id: 12,
        name: "Courtney Greer",
        title: "PANEL SPEAKER",
        event: "From Chaos to Connection: Building AI-Powered Solutions That Simplify Human Experiences",
        logo: '/speakers/CourtneyGreer.png',
        affiliation: "Founder at Voxxy AI | Microsoft"
    },
        {
        id: 13,
        name: "David Baum",
        title: "PANEL SPEAKER",
        event: "Human-Centered AI Design: Research-Driven Approaches to Sustainable User Experience Innovation",
        logo: '/speakers/DavidBaum.jpg',
        affiliation: "Design Strategist at Amazon"
    },
    {
        id: 14,
        name: "Himanshu Joshi",
        title: "PANEL SPEAKER",
        event: "Applied AI strategy leader. Advisor for Fortune 500 companies—driving $170M in business value through Generative AI, ethical AI adoption, and executive upskilling programs.",
        logo: '/speakers/HimashuJoshi.png',
        affiliation: "AI Adoption at Vector Institute"
    },
    
    {
        id: 15,
        name: "Karen Farah",
        title: "PANEL SPEAKER",
        event: "Digital Transformation for Sustainability: AI, Cloud, and Cybersecurity Solutions for Future-Ready Organizations",
        logo: '/speakers/KarenFarah.png',
        affiliation: "CEO at The Melting Pot Studio"
    },
 
    {
        id: 16,
        name: "Joshue Ott",
        title: "PANEL SPEAKER",
        event: "Creating Interactive Visual and Audio Experiences for Mobile Devices and Concert Halls",
        logo: '/speakers/JoshueOtt.png',
        affiliation: "Technical Director and Creative Technologist at Interval Studio Inc"
    },
       {
        id: 17,
        name: "Vivian Zhang",
        title: "PANEL SPEAKER",
        event: "Forbes Education, Best of 2024. Trained +1,000 for Data Science job winners",
        logo: '/speakers/VivianZhang.png',
        affiliation: "CTO at NYC Data Science Academy"
    },
       {
        id: 18,
        name: "Hongelei",
        title: "PANEL SPEAKER",
        event: "Personalized omni-channel marketing campaigns for B2B go-to-market teams with Series A at 12M",
        logo: '/speakers/Honglei.png',
        affiliation: "CTO at Tofu"
    },
     {
        id: 19,
        name: "Rudy R. Rodriguez",
        title: "PANEL SPEAKER",
        event: "AI with Audio and Sound Engineering, Augmented Reality, Virtual Reality, Mixed Reality",
        logo: '/speakers/RudyRRodriguez.png',
        affiliation: "Technical Director at Lincoln Center"
    },
     {
        id: 20,
        name: "Di Wu",
        title: "PANEL SPEAKER",
        event: "AI for Space and Space Sustainability",
        logo: '/speakers/DiWu.png',
        affiliation: "Assistant Professor at Embry-Riddle Aeronautical University"
    },
   
    
     {
        id: 22,
        name: "Jiajian Min",
        title: "PANEL SPEAKER",
        event: "Human Centric Art, 2023 Forbes 100 Most Influential Artist",
        logo: '/speakers/JiajianMin.png',
        affiliation: "MIT Media Lab | Co-founder of HavardXR"
    },
     {
        id: 23,
        name: "Olga Usyk",
        title: "PANEL SPEAKER",
        event: "Material safty and leading a strategy team embedded into the 3,000+ R&D group ",
        logo: '/speakers/OlgaUsyk.jpg',
        affiliation: "Business Strategy@IBM"
    },
       {
        id: 24,
        name: "Richard Lu",
        title: "PANEL SPEAKER",
        event: "AI Workers for Short Video Marketing & Multi-Channel Sales Conversion",
        logo: '/speakers/RichardLu.png',
        affiliation: "COO at Spotlize"
    },
    
    {
        id: 26,
        name: "Al Olsen",
        title: "PANEL SPEAKER",
        event: "Games for Learning, Audio Emotional Design and Generative Artificial Intelligence for education",
        logo: '/speakers/AIOlsen.png',
        affiliation: "NYU Professor"
    },
    {
        id: 27,
        name: "Phil Ahn",
        title: "PANEL SPEAKER",
        event: "Energetic leader with deep expertise in data, AI, and business strategy, driving AI experimentation and scaling within the Babson community.",
        logo: '/speakers/PhilAhn.png',
        affiliation: "Senior Director, Data Analytics and AI at Babson College"
    },
     {
        id: 25,
        name: "Uvika Sharma",
        title: "PANEL SPEAKER",
        event: "20+ years of experience helping organizations across sectors harness AI responsibly and effectively to drive business transformation, ethical adoption, and measurable impact",
        logo: '/speakers/UvikaSharma.png',
        affiliation: "Founder and Managing Partner at INTLDA"
    },
    {
        id: 28,
        name: "Ben Jakob Zulechner",
        title: "PANEL SPEAKER",
        event: "Experts in M&A, venture capital, and scaling transformative projects to empower businesses in the digital economy",
        logo: '/speakers/BenJakobZulechner.png',
        affiliation: "Management Consultant at Consileon Frankfurt GmbH"
    },
    {
        id: 29,
        name: "Echo Zhong",
        title: "PANEL SPEAKER",
        event: "Founding Product SME of Kick.co (backed by OpenAI and General Catalyst), 15+ years of domain expertise in Accounting and Tax compliance",
        logo: '/speakers/EchoZhang.png',
        affiliation: "Co-founder at Zhong & Sanchez"
    },
     {
        id: 30 ,
        name: "Santino Luis Lopez Uy",
        title: "PANEL SPEAKER",
        event: "Student Leader at Columbia University, Technology in Business Association (TIBA) - Vice President",
        logo: '/speakers/SantinoLopez.png',
        affiliation: "Product Strategy at GEMI.AI"
    },

   
];

// Online Panels Data - Specific panel sessions for the online format
export const onlinePanels = [
    {
        id: 1,
        title: "A Dynamic Community of Entrepreneurs and Investors",
        topic: "EntreConnect ",
        date: "July 18, 2025",
        time: "10:00 AM - 11:00 AM EST",
        format: "Live Virtual Panel",
        platform: "Zoom Webinar",
        category: "Ethics",
        description: "Exploring the critical importance of ethical AI development, governance frameworks, and responsible implementation strategies for sustainable AI systems.",
        speakers: [
            {
                name: "Hongyu Song",
                title: "Co-founder at EntreConnect",
                avatar: "/speakers/HongyuSong.png",
                expertise: "AI Engineer"
            },
          
        ],
        registrationLink: "#register",
        isLive: true,
        attendeeCount: 250,
        maxCapacity: 500
    },
    
               
        
    
              
        
  
];

// Keep the original featuredSpeakers for backward compatibility
export const featuredSpeakers = [...keynoteSpeakers, ...panelSpeakers];
