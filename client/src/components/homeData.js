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
            name: "Rudy R. Rodriguez",
            avatar: '/speakers/RudyRRodriguez.png'
        },
        panelSpeakers: [

            {name: "Zach Krall", avatar: '/speakers/ZackKrall.png'},
            {name: "Cornelia Dai", avatar: '/speakers/corn.png'},
            {name: "Jiajian Min", avatar: '/speakers/JiajianMin.png'},
            {name: "Joshue Ott", avatar: '/speakers/JoshueOtt.png'},
            {name: "Aimee Yang", avatar: '/speakers/Aimee.jpeg'},
        ],
        description: "Igniting Every Artist’s Dream with AI: Unlock Opportunities and Make High-quality Art Accessible to All",
    },
    {
        id: 5,
        title: "Lunch and Learn: MCP - New Operating System",
        date: "July 18, 12:30 PM - 1:30 PM",
        category: 'Security',
        format: 'workshop',
        keynoteSpeaker: {
            name: "Justin Cappos",
            avatar: '/speakers/JustinCappos.png'
        },
        panelSpeakers: [],
        description: "Build and Integrate Intelligent Agents to Seamlessly Connect with Development Workflow and Tools.",
    },
    {
        id: 6,
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
            {name: "David Baum", avatar: '/speakers/DavidBaum.jpg'},
            {name: "Karen Farah", avatar: '/speakers/KarenFarah.png'},
            {name: "Richard Lu", avatar: '/speakers/RichardLu.png'},
        
        ],
        description: "From Trade-Offs to Win-Wins, From Cost-Saving to Revenue Growth: AI as the Engine of Business Growth",
    },
    {
        id: 7,
        title: "AI and Finance and Investment",
        date: "July 18, 2:30 PM - 3:30 PM",
        category: 'Finance',
        format: 'panel',
        keynoteSpeaker: {
            name: "Shahryar Shaghaghi",
            avatar: '/speakers/ShahryarShaghaghi.png'
        },
        panelSpeakers: [
            {name: "WendyDiamond", avatar: '/speakers/WendyDiamond.png'},

    
           
            {name: "Echo Zhong", avatar: '/speakers/EchoZhong.png'},
       
           

        ],
        description: "Redefining Finance: Precision, Speed, and Insight for Smarter, Data-Driven Decisions",
    },
    {
        id: 8,
        title: "Responsible AI",
        date: "July 18, 3:30 PM - 4:30 PM",
        category: 'Ethics',
        format: 'panel',
        keynoteSpeaker: {
            name: "Maryam Ashoori",
            avatar: '/speakers/Maryam.jpg'
        },
        panelSpeakers: [
            
         
            {name: "Courtney Greer", avatar: '/speakers/CourtneyGreer.png'},
            {name: "Kiran Bhujle", avatar: '/speakers/Kiran.png'},
            {name: "Manhar Arora", avatar: '/speakers/manhar.jpg'},
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
  
     { id: 4,
        name: "Rudy R. Rodriguez",
        title: "KEYNOTE SPEAKER",
        event: "AI with Audio and Sound Engineering, Augmented Reality, Virtual Reality, Mixed Reality",
        logo: '/speakers/RudyRRodriguez.png',
        affiliation: "Technical Director at Lincoln Center"},
    
     {
        id: 5,
        name: "Justin Cappos",
        title: "PANEL SPEAKER",
        event: "Improve Real-world Systems through Practical Deployments. 5 Linux Foundation Projects and Key Contributor to Python and Git",
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
        name: "Maryam Ashoori",
        title: "KEYNOTE SPEAKER",
        event: "Bringing trusted generative AI to enterprise and building watsonx.ai and watsonx Foundation Models",
        logo: '/speakers/Maryam.jpg',
        affiliation: "Head of Product at IBM watsonx.ai"
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
        name: "Cornelia Dai",
        title: "PANEL SPEAKER",
        event: "AI-powered Storyteller with 200 M+ Campaign Views and 400 K+ Cross-platform Followers",
        logo: '/speakers/corn.png',
        affiliation: "Content Creator | Influencer | Digital Marketing Strategist"
    },
 
    {
        id: 11,
        name: "Matt Ford",
        title: "PANEL SPEAKER",
        event: "Strategic Innovation at Scale: Leading R&D and Go-to-Market Initiatives for Sustainable Technology Solutions",
        logo: '/speakers/MattFord.png',
        affiliation: "IBM Business Strategy"
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
        name: "Xiaoran Cai",
        title: "PANEL SPEAKER",
        event: "AI for Good: Building Sustainable Technology Platforms and Global Communities for Positive Impact",
        logo: '/speakers/XiaoranCai.jpg',
        affiliation: "Founder at GEMI.AI"
    },
   
        {
        id: 14,
        name: "David Baum",
        title: "PANEL SPEAKER",
        event: "Human-Centered AI Design: Research-Driven Approaches to Sustainable User Experience Innovation",
        logo: '/speakers/DavidBaum.jpg',
        affiliation: "Design Strategist at Amazon"
    },
    {
        id: 15,
        name: "Kiran Bhujle ",
        title: "PANEL SPEAKER",
        event: "As Global Head of Cyber at SVAM and a Columbia Faculty Member. Bridge Practice and Theory to Help Organizations Navigate Complex Cybersecurity Challenges with Confidence.",
        logo: '/speakers/Kiran.png',
        affiliation: "Global Head of Cyber @ SVAM International Inc."
    },
      {
        id: 16,
        name: "Manhar Arora",
        title: "PANEL SPEAKER",
        event: "+10 Years Experience at Data Protection & Privacy, Responsible AI. Industry Leaders at Emerging Technologies",
        logo: '/speakers/manhar.jpg',
        affiliation: "Senior Manager at EY"
    },
    
    {
        id: 16,
        name: "Karen Farah",
        title: "PANEL SPEAKER",
        event: "Digital Transformation for Sustainability: AI, Cloud, and Cybersecurity Solutions for Future-Ready Organizations",
        logo: '/speakers/KarenFarah.png',
        affiliation: "CEO at The Melting Pot Studio"
    },
 
    {
        id: 17,
        name: "Joshue Ott",
        title: "PANEL SPEAKER",
        event: "Creating Interactive Visual and Audio Experiences for Mobile Devices and Concert Halls",
        logo: '/speakers/JoshueOtt.png',
        affiliation: "Technical Director and Creative Technologist at Interval Studio Inc"
    },
       {
        id: 18,
        name: "Vivian Zhang",
        title: "PANEL SPEAKER",
        event: "Forbes Education, Best of 2024. Trained +1,000 for Data Science job winners",
        logo: '/speakers/VivianZhang.png',
        affiliation: "CTO at NYC Data Science Academy"
    },

  
     {
        id: 21,
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
        event: "AI Art, Immersive Media, and Interactive Technology. Featured at Venice Biennale, Ars Electronica, NEW INC, CVPR, SIGGRAPH Asia, New York Times, ForbesChina.",
        logo: '/speakers/JiajianMin.png',
        affiliation: "Media Artist | Chair of MIT AI Film Hack, Co-founder of HarvardXR"
    },
     {
        id: 23,
        name: "Olga Usyk",
        title: "PANEL SPEAKER",
        event: "Material Safty and Leading a Strategy Team Embedded into the 3,000+ R&D Group ",
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
        event: "Games for Learning, Audio Emotional Design and Generative Artificial Intelligence for Education",
        logo: '/speakers/AIOlsen.png',
        affiliation: "NYU Professor"
    },
    {
        id: 27,
        name: "Phil Ahn",
        title: "PANEL SPEAKER",
        event: "Energetic Leader with Deep Expertise in Data, AI, and Business Strategy, Driving AI Experimentation and Scaling Within the Babson Community.",
        logo: '/speakers/PhilAhn.png',
        affiliation: "Senior Director, Data Analytics and AI at Babson College"
    },
     {
        id: 25,
        name: "Uvika Sharma",
        title: "PANEL SPEAKER",
        event: "20+ years of Experience Helping Organizations Across Sectors Harness AI Responsibly and Effectively to Drive Business Transformation, Ethical Adoption, and Measurable Impact",
        logo: '/speakers/UvikaSharma.png',
        affiliation: "Founder and Managing Partner at INTLDA"
    },
     {
        id: 25,
        name: "Aimee Yang",
        title: "PANEL SPEAKER",
        event: "GTM and Branding Expert, Specializing in Transforming Global Industries through AI Innovation While Building Sustainable Growth Frameworks Across Global Markets.",
        logo: '/speakers/Aimee.jpeg',
        affiliation: "Co-founder of Lovart"
    },
    {
        id: 28,
        name: "Ben Jakob Zulechner",
        title: "PANEL SPEAKER",
        event: "Experts in M&A, Venture Capital, and Scaling Transformative Projects to Empower Businesses in the Digital Economy",
        logo: '/speakers/BenJakobZulechner.png',
        affiliation: "Management Consultant at Consileon Frankfurt GmbH"
    },
    {
        id: 29,
        name: "Echo Zhong",
        title: "PANEL SPEAKER",
        event: "Founding Product SME of Kick.co (backed by OpenAI and General Catalyst), 15+ Years of Domain Expertise in Accounting and Tax Compliance",
        logo: '/speakers/EchoZhong.png',
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
        title: "Responsible AI: Education and Learning Tool - ourBuddyAI",
        topic: "",
        date: "July 18, 2025",
        time: "3:30 PM – 4:00 PM EST",
        TimeZone: "Toronto",
        format: "Live Virtual Panel",
        platform: "Zoom Webinar",
        zoomLink: "https://meet.google.com/pnb-rvqh-mac",
        category: "Ethics and Education Tool",
        description: "Purpose-built Autonomous Agents with Deep Vertical Expertise to Solve Real Business Challenges",
        speakers: [
            {
                name: "Himanshu Joshi",
                title: "Co-founder at ourBuddyAI",
                avatar: "/speakers/HimashuJoshi.png",
                expertise: "AI Engineer"
            },
          
        ],
       
    },
        
     {  id: 2,
        title: "Enhancing Portfolio Performance with Crypto Token: a Correlation Network Analysis",
        topic: "",
        date: "July 18, 2025",
        time: "9:00 AM - 9:30 AM EST",
        TimeZone: "Singapore",
        format: "Live Virtual Panel",
        platform: "Zoom Webinar",
        zoomLink: "https://ntu-sg.zoom.us/j/2156529197?pwd=bnE3TjZuSU1qeGIzb1BJRVlUL1ZFQT09",
        category: "Finance",
        description: "Purpose-built Autonomous Agents with Deep Vertical Expertise to Solve Real Business Challenges",
        speakers: [
            {
                name: "Dr Zhongmeng Ma",
                title: "Co-founder at ourBuddyAI",
                avatar: "/speakers/DrZhongmengMa.jpg",
                expertise: "AI Engineer, Blockchain, BitCoin"
            },
          
        ],
      
    },
     {   id: 3,
        title: "Asia Jam: Cooperation in Conversation",
        topic: "",
        date: "July 18, 2025",
        time: "10:00 AM - 11:00 AM EST",
        TimeZone: "Malaysia",
        format: "Live Virtual Panel",
        platform: "Zoom Webinar",
        zoomLink: "https://us04web.zoom.us/j/75804097822?pwd=vBoRupb1pvDqRTccXRsuHG84Ah5GES.1",
        category: "Ethics and Education Tool",
        description: "Purpose-built Autonomous Agents with Deep Vertical Expertise to Solve Real Business Challenges",
        speakers: [
            {
                name: "Himanshu Joshi",
                title: "Co-founder at ourBuddyAI",
                avatar: "/speakers/allen.JPG",
                expertise: "AI Engineer"
            },
          
        ],
        registrationLink: "#register",
        isLive: true,
        attendeeCount: 250,
        maxCapacity: 500
    },
     {  id: 4,
        title: "Integrating AI into sustainable development in the era of climate change",
        topic: "",
        date: "July 18, 2025",
        time: "11:00 AM - 11:30 EST",
        TimeZone: "China",
        format: "Live Virtual Panel",
        platform: "Wechat Webinar",
        zoomLink: "https://meeting.tencent.com/dm/P5uDOB67Erwr",
        category: "Ethics and Education Tool",
        description: "Purpose-built Autonomous Agents with Deep Vertical Expertise to Solve Real Business Challenges",
        speakers: [
            {
                name: "Vitumbiko Ng’oma",
                title: "Co-founder at ourBuddyAI",
                avatar: "/speakers/v.png",
                expertise: "AI Engineer"
            },
          
        ],
        registrationLink: "#register",
        isLive: true,
        attendeeCount: 250,
        maxCapacity: 500
    },

    {  id: 4,
        title: "Transforming Education - Babson College",
        topic: "",
        date: "July 18, 2025",
        time: "11:00 AM - 11:30 EST",
        TimeZone: "Boston",
        format: "Live Virtual Panel",
        platform: "Google Meet",
        zoomLink: "https://drive.google.com/file/d/1bLOA0zxwbShqPfkTTTDm0iXkux7q4qG-/view",
        category: "Ethics and Education Tool",
        description: "Purpose-built Autonomous Agents with Deep Vertical Expertise to Solve Real Business Challenges",
        speakers: [
            {
                name: "Phil Ahn",
                title: "Co-founder at ourBuddyAI",
                avatar: "/speakers/PhilAhn.png",
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
