    import user_image from './user-image.png';
    import code_icon from './code-icon.png';
    import code_icon_dark from './code-icon-dark.png';
    import edu_icon from './edu-icon.png';
    import edu_icon_dark from './edu-icon-dark.png';
    import project_icon from './project-icon.png';
    import project_icon_dark from './project-icon-dark.png';
    import vscode from './vscode.png';
    import firebase from './firebase.png';
    import figma from './figma.png';
    import git from './git.png';
    import mongodb from './mongodb.png';
    import right_arrow_white from './right-arrow-white.png';
    import logo from './logo.png';
    import logo_dark from './logo_dark.png';
    import mail_icon from './mail_icon.png';
    import mail_icon_dark from './mail_icon_dark.png';
    import profile_img from './profile-img1.png';
    import download_icon from './download-icon.png';
    import header_bg_color from './header-bg-color.png';
    import moon_icon from './moon_icon.png';
    import sun_icon from './sun_icon.png';
    import arrow_icon from './arrow-icon.png';
    import arrow_icon_dark from './arrow-icon-dark.png';
    import menu_black from './menu-black.png';
    import menu_white from './menu-white.png';
    import close_black from './close-black.png';
    import close_white from './close-white.png';
    import web_icon from './web-icon.png';
    import mobile_icon from './mobile-icon.png';
    import ui_icon from './ui-icon.png';
    import graphics_icon from './graphics-icon.png';
    import right_arrow from './right-arrow.png';
    import send_icon from './send-icon.png';
    import right_arrow_bold from './right-arrow-bold.png';
    import right_arrow_bold_dark from './right-arrow-bold-dark.png';
    import postman from './postman.png';
    import uplifty from './Uplifty-icon.jpeg'
    import ghi from './GHI-icon.png'
    import optum from './optum-icon.jpeg'
    import bing from './Bing-icon.jpeg'
    import linkedin from './linkedin_icon.png'
    import github from './github-icon.png'
    import swetha from './profile-img1.png'
    import android from './android.png'
    import springboot from './springboot.png'
    import flask from './flask.png'
    import xampp from './xampp.png'

    export const assets = {
        user_image,
        code_icon,
        code_icon_dark,
        edu_icon,
        edu_icon_dark,
        project_icon,
        project_icon_dark,
        vscode,
        firebase,
        figma,
        git,
        postman,
        mongodb,
        right_arrow_white,
        logo,
        logo_dark,
        mail_icon,
        mail_icon_dark,
        profile_img,
        download_icon,
        header_bg_color,
        moon_icon,
        sun_icon,
        arrow_icon,
        arrow_icon_dark,
        menu_black,
        menu_white,
        close_black,
        close_white,
        web_icon,
        mobile_icon,
        ui_icon,
        graphics_icon,
        right_arrow,
        send_icon,
        right_arrow_bold,
        right_arrow_bold_dark,
        uplifty,
        ghi,
        optum,
        bing,
        linkedin,
        github,
        swetha,
        android,
        flask,
        springboot,
        xampp,
    };

    export const workData = [
        {
            title: 'Inventory Management',
            category: 'Full-stack',
            description: 'A role-based inventory system with JWT auth, a stock movement ledger, and a Next.js UI that shows only what each role can do.',
            bgImage: 'work-1.png',
            link:'https://github.com/swetha-021/Inventory-Management',
            tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Next.js'],
            features: [
                'Staff, Manager, and Admin permissions on the API',
                'Stock in/out recorded in the same transaction',
                'Low-stock reports and an admin audit log',
                'Search, filters, and pagination on the catalog',
            ],
        },
        {
            title: 'Depression Detection',
            category: 'ML',
            description: 'An NLP and machine-learning pipeline that studies social media language, sentiment, and network signals to flag users who may be at risk of depression.',
            bgImage: 'work-2.png',
            link:'https://github.com/swetha-021/Depression-Detection-in-Social-Media-Users',
            tech: ['Python', 'NLP', 'Machine Learning'],
            features: [
                'Preprocessing and sentiment analysis on posts',
                'Speech-act and intention classification',
                'User-level features plus social influence signals',
                'Model benchmarking and evaluation visuals',
            ],
        },
        {
            title: 'Quantum Canvas',
            category: 'Generative',
            description: 'Quantum Entropy Art Generator using CURBy API. True quantum randomness drives each composition, so every piece is unique and cannot be replayed from a classic seed.',
            bgImage: 'work-3.png',
            link:'https://github.com/swetha-021/Quantum-art-generator',
            tech: ['Python', 'CURBy API', 'JavaScript'],
            features: [
                'Entropy sampled from the CURBy quantum source',
                'Procedural visuals from non-classical randomness',
                'Exportable generated artwork',
                'Lightweight generator workflow',
            ],
        },
        {
            title: 'Hangman',
            category: 'Game',
            description: 'A classic Hangman word game built with JavaScript. Guess letters, watch the puzzle fill in, and see remaining lives update as you play.',
            bgImage: 'work-4.png',
            link:'https://github.com/swetha-021/Hangman',
            tech: ['JavaScript', 'HTML', 'CSS'],
            features: [
                'Letter-by-letter guessing',
                'Lives and wrong-guess tracking',
                'Word puzzle state on the page',
                'Playable in the browser',
            ],
        },
    ]

    export const experienceData = [
        {
            icon: assets.uplifty,
            company: 'Uplifty AI',
            position: 'Software Engineer',
            kind: 'Experience',
            year: '2025',
            dates: 'Aug 2025 – Dec 2025',
            duration: '5 months',
            location: 'Austin, TX · Remote',
            bullets: [
                'Shipped 17 features, including authentication flows, community feeds, and personalized dashboards, for an AI-driven student community platform using React Native.',
                'Led product engineering on the event feed redesign, using user testing to refine location- and interest-based personalization that improved content relevance and engagement.',
                'Integrated Python RESTful APIs with Supabase PostgreSQL using async request handling, error handling, and client-server synchronization in a CI/CD agile environment.',
            ],
            skills: ['React Native', 'Python', 'Supabase', 'PostgreSQL', 'CI/CD'],
        },
        {
            icon: assets.ghi,
            company: 'Global Health Impact Project',
            position: 'Software Engineer',
            kind: 'Experience',
            year: '2025',
            dates: 'Jan 2025 – Aug 2025',
            duration: '8 months',
            location: 'New York, United States · Remote',
            bullets: [
                'Built data pipelines and geospatial visualization tools for a WHO-linked global health analytics platform, mapping 20,000+ medicine access records across 50+ countries — Asia (71%), Africa (23%), and South America (6%) — for pharma stakeholders.',
                'Owned end-to-end implementation of interactive geospatial maps using React Leaflet, translating raw coordinate data into regional health insight dashboards with third-party API integrations and Tailwind CSS.',
                'Collaborated with a global team of 20+ developers on system design and distributed query optimization, building scalable RESTful APIs for high-performance analytics on a fault-tolerant data infrastructure.',
            ],
            skills: ['React.js', 'React Leaflet', 'Tailwind CSS', 'SQL', 'REST APIs'],
        },
        {
            icon: assets.bing,
            company: 'Binghamton University',
            position: 'Teaching Assistant',
            kind: 'Experience',
            year: '2024',
            dates: 'Jan 2024 – Jul 2025',
            duration: '1 yr 7 months',
            location: 'New York, United States · On-site',
            bullets: [
                'Provided instructional support, grading, curriculum design, and office hours for a Python programming course with 300+ students, reinforcing core concepts including data structures, packaging, and data visualization with Matplotlib, Pandas, and Tableau.',
            ],
            skills: ['Python', 'NumPy', 'Matplotlib', 'Pandas', 'Tableau'],
        },
        {
            icon: assets.optum,
            company: 'Optum',
            position: 'Java Backend Developer',
            kind: 'Experience',
            year: '2023',
            dates: 'Jun 2023 – Aug 2023',
            duration: '3 months',
            location: 'Hyderabad, India · On-site',
            bullets: [
                'Designed Spring Boot microservices for a healthcare reimbursement platform, keeping financial transaction workflows consistent and reliable while handling sensitive patient and payer data.',
                'Built and optimized high-throughput RESTful APIs for reimbursement processing pipelines, improving system performance and delivery accuracy with comprehensive unit test coverage.',
                'Implemented fault-tolerant logging, monitoring, and telemetry using Aspect-Oriented Programming (AOP), reducing Mean Time to Resolution (MTTR) by 78% and improving distributed-system observability.',
            ],
            skills: ['Java', 'Spring Boot', 'AOP', 'REST APIs'],
        },
    ]

    export const education = [
        {
            degree: 'M.S. in Computer Science',
            school: 'Binghamton University',
        },
        {
            degree: 'B.Tech in Computer Science',
            school: 'SASTRA University',
        },
    ];

    export const skillCategories = [
        {
            title: 'AI & LLM',
            skills: ['Prompt Engineering', 'Chain-of-Thought', 'Few-Shot Prompting', 'Structured Outputs', 'Tool Calling', 'RAG', 'Multi-Agent Workflows', 'LLM Evaluation', 'LangGraph', 'LangChain', 'MCP'],
        },
        {
            title: 'Languages',
            skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C++'],
        },
        {
            title: 'Backend & Integrations',
            skills: ['FastAPI', 'Flask', 'Django', 'Spring Boot', 'Node.js', 'REST APIs', 'Webhooks', 'Async Python'],
        },
        {
            title: 'Databases',
            skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Neo4j', 'MSSQL'],
        },
        {
            title: 'Cloud & DevOps',
            skills: ['AWS', 'Azure', 'Docker', 'Git', 'CI/CD', 'Postman'],
        },
        {
            title: 'ML',
            skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas'],
        },
    ];

    export const extrasData = [
        {
            id: 'api-world-2026',
            type: 'hackathon',
            name: 'API World Hackathon',
            date: 'September 2026',
            sortDate: '2026-09',
            location: 'Virtual',
            organizer: 'DevNetwork',
            project: 'Look, For You',
            description: 'A complexion-aware makeup look translator that copies liner exactly and shade-matches foundation, blush, and lipstick to your skin.',
            link: 'https://github.com/swetha-021/Look-for-you',
        },
        {
            id: 'video-agent-context-graph-2026',
            type: 'hackathon',
            name: 'Hack the Video Agent Context Graph',
            date: 'July 2026',
            sortDate: '2026-07',
            location: 'San Francisco, CA',
            organizer: 'HackerSquad + AWS Builder Loft',
            result: 'Participant',
            description: 'A one-day build of a video agent that turns raw footage into a Neo4j context graph with OpenAI, AWS Strands, and TwelveLabs.',
            link: 'https://luma.com/hack-video-agent-context-graph-jul30-2026',
        },
        {
            id: 'mongodb-build-fest-2026',
            type: 'hackathon',
            name: 'MongoDB.local Build Fest',
            date: 'August 2026',
            sortDate: '2026-08',
            location: 'Pier 48, San Francisco, CA',
            organizer: 'MongoDB',
            result: 'Participant',
            project: 'Successor',
            description: 'A voice-based knowledge transfer system for semiconductor fab operations that captures departing expertise through conversation instead of PDFs.',
            link: 'https://www.mongodb.com/events/mongodb-local/build-fest',
        },
        {
            id: 'ai-wave-2026',
            type: 'conference',
            name: 'Career Connect in AI WAVE 2026',
            date: 'June 2026',
            sortDate: '2026-06',
            location: 'Mountain View, CA',
            organizer: 'KOTRA Silicon Valley',
            result: 'Attendee',
            description: 'Met recruiters, founders, and engineers across AI, robotics, healthcare, and automation, and left with a clearer view of the skills that matter now.',
            link: 'https://www.linkedin.com/posts/swethaprakash21_last-week-i-had-the-opportunity-to-attend-activity-7477069997077385216-v5Tt',
        },
        {
            id: 'snowflake-world-tour-2025',
            type: 'conference',
            name: 'Snowflake World Tour',
            date: 'October 2025',
            sortDate: '2025-10',
            location: 'New York, NY',
            organizer: 'Snowflake',
            result: 'Attendee',
            description: 'A first conference day of Snowflake AI Data Cloud keynotes, a SQL and Python analytics lab, and a Women in Data panel.',
            link: 'https://www.linkedin.com/posts/swethaprakash21_i-had-the-opportunity-to-attend-the-snowflake-activity-7380424532685344768-v7Zs',
        },
        {
            id: 'colorstack-codefest-2024',
            type: 'hackathon',
            name: 'ColorStackBU CodeFest',
            date: 'September 2024',
            sortDate: '2024-09',
            location: 'Binghamton, NY',
            organizer: 'ColorStack at Binghamton University',
            result: 'Best UI',
            project: 'B-Happening',
            description: 'A campus event discovery platform designed to make it easier for students to find and engage with events in real time.',
            link: 'https://devpost.com/software/b-happening',
        },
    ];