import { Project, TimelineItem, SkillGroup, AchievementItem, ResumeData } from './types';

export const personalInfo = {
  name: "Khushi Kumari",
  title: "Aspiring Software Developer",
  tagline: "BCA Graduate | Aspiring Software Developer",
  location: "Patna, Bihar, India",
  email: "khushijai841221@gmail.com",
  github: "https://github.com/khushijai20",
  linkedin: "https://www.linkedin.com/in/khushijaiswal20/",
  aboutSummary: "I am a BCA graduate with strong foundations in Python and Object-Oriented Programming (OOP). I have experience building AI-driven applications involving Machine Learning, Generative AI, and SQL-based DBMS. Proficient in REST API integration and technical problem solving, I am focused on developing scalable software solutions for AI and Data Science with an emphasis on code efficiency.",
  careerGoal: "To secure a challenging role as a Software Developer or Full Stack Developer where I can apply my technical knowledge in Web Applications, AI integration, and core principles to solve real-world problems while continuously evolving as an engineer."
};

export const skillsData: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    category: "Core Computer Science",
    skills: ["Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks", "Problem Solving"]
  },
  {
    category: "AI & Data Science",
    skills: ["Generative AI", "Machine Learning (ML)", "Natural Language Processing (NLP)", "Prompt Engineering", "Data Visualization"]
  },
  {
    category: "Tools & Platforms",
    skills: ["REST APIs", "Git", "GitHub", "Google Cloud Platform (GCP)", "VS Code", "IBM Developer Tools"]
  }
];

export const educationTimeline: TimelineItem[] = [
  {
    id: "mca-future",
    title: "Master of Computer Applications (MCA)",
    institution: "Upcoming program focus on Advanced Software Architecture and AI Systems",
    period: "Pursuing MCA in 2026",
    status: "Pursuing",
    description: "Academic goal to specialize in advanced Software Architecture and AI Systems, pushing boundaries in machine learning deployments and production scale.",
    details: [
      "To specialize in Advanced Software Architecture & AI Systems",
      "Goal starting in 2026",
      "Deeper dive into scale development and artificial intelligence pipelines"
    ]
  },
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Babasaheb Bhimrao Ambedkar Bihar University, Muzaffarpur, India",
    period: "Aug 2022 - June 2025",
    status: "Completed",
    description: "Honored computer studies course teaching OOP foundations, data structure implementations, systems schema, and production workflows.",
    details: [
      "Graduand with specialization in Computer Science (Aug 2022 - June 2025)",
      "Relevant Coursework: DBMS, Web Development, Software Engineering, Python Programming",
      "Gained comprehensive grasp in database normalization, SQL schemas, and web interactions"
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "snap-calorie-ai",
    title: "Snap Calorie AI - Health Tech",
    tagline: "AI-driven automated calorie detection via image recognition & computer vision",
    description: "A health-tech solution leveraging computer vision and image processing workflows in Python. Implements automated food item classification and volume multipliers to calculate instant nutritional insights.",
    features: [
      "Developed an AI-driven model for automated calorie detection using image recognition and computer vision.",
      "Implemented food classification logic and volume estimation to provide real-time nutritional insights.",
      "Optimized visual data processing workflows using Python libraries to ensure low-latency analysis."
    ],
    techStack: ["Python", "Computer Vision", "Machine Learning", "Generative AI", "REST APIs"],
    githubUrl: "https://github.com/khushijai20",
    liveUrl: "https://github.com/khushijai20"
  },
  {
    id: "personal-ai-chatbot",
    title: "Personal AI Chatbot",
    tagline: "NLP-integrated conversational chatbot utilizing large language models",
    description: "A context-aware terminal and conversational UI dashboard translating standard user queries into structured LLM API formats. Utilizes advanced prompt engineering to ensure responsive and natural dialog flow.",
    features: [
      "Designed and deployed a context-aware chatbot utilizing Large Language Models (LLMs) via API endpoints.",
      "Integrated REST APIs to facilitate natural language interactions and real-time query responses.",
      "Applied prompt engineering techniques to improve model accuracy and user engagement metrics."
    ],
    techStack: ["Python", "Generative AI", "REST APIs", "NLP", "Prompt Engineering"],
    githubUrl: "https://github.com/khushijai20",
    liveUrl: "https://github.com/khushijai20"
  },
  {
    id: "weather-app",
    title: "Weather Web Application",
    tagline: "API-driven climate dashboard retrieving live global meteorology",
    description: "A responsive dashboard consuming OpenWeather API records. Harnesses asynchronous queries in modern JavaScript to render metrics like humidity levels, cloud conditions, wind speed, and general visual outlook indexes.",
    features: [
      "Built a responsive dashboard that fetches live global weather data through the OpenWeather REST API.",
      "Optimized frontend performance using asynchronous JavaScript for non-blocking data retrieval.",
      "Implemented clean responsive interfaces with responsive CSS templates."
    ],
    techStack: ["JavaScript", "REST APIs", "HTML5", "CSS3", "Asynchronous Programming"],
    githubUrl: "https://github.com/khushijai20",
    liveUrl: "https://github.com/khushijai20"
  },
  {
    id: "browser-game",
    title: "Interactive Browser Game",
    tagline: "Vanilla JS arcade engine mapping state to coordinates & dynamic events",
    description: "A lightweight, pixel-perfect classic browser arcade game built purely on structural DOM manipulations. Employs mathematically optimal scoring checks and real-time feedback elements.",
    features: [
      "Implemented game logic and dynamic state management using vanilla JavaScript and DOM event listeners.",
      "Designed an efficient scoring algorithm to handle real-time user input and game-state transitions.",
      "Created sleek modern responsive styling for the canvas control panel."
    ],
    techStack: ["JavaScript", "DOM Manipulation", "HTML5", "CSS3", "State Management"],
    githubUrl: "https://github.com/khushijai20",
    liveUrl: "https://github.com/khushijai20"
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "GenAI Powered Data Analytics",
    description: "Completed comprehensive certification from Tata Group | IBM Developer Skills Network."
  },
  {
    id: "ach-2",
    title: "Google Cloud DevFest Attendee",
    description: "Participated in regional technical dev circles, cloud optimization seminars, and AI workspace panels."
  },
  {
    id: "ach-3",
    title: "Graduate Employability Enhancement Training (GEET)",
    description: "Received advanced certification in active soft skill methodologies, engineering readiness, and structural problem solving."
  },
  {
    id: "ach-4",
    title: "Active Open-Source Builder",
    description: "Consistently developing a portfolio of open-source projects focused on Python automation and Generative AI implementation."
  }
];

export const resumeData: ResumeData = {
  name: "KHUSHI KUMARI",
  title: "BCA Graduate | Aspiring Software Developer",
  email: "khushijai841221@gmail.com",
  location: "Patna, Bihar, India",
  github: "github.com/khushijai20",
  linkedin: "linkedin.com/in/khushijaiswal20/",
  summary: "BCA candidate with strong foundations in Python and Object-Oriented Programming (OOP). Experienced in building AI-driven applications involving Machine Learning, Generative AI, and SQL-based DBMS. Proficient in REST API integration and technical problem solving. Focused on developing scalable software solutions for AI and Data Science with an emphasis on code efficiency.",
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA), Computer Science",
      institution: "Babasaheb Bhimrao Ambedkar Bihar University, Muzaffarpur, India",
      duration: "Aug 2022 – June 2025",
      score: "BCA Graduate",
      details: [
        "Relevant Coursework: DBMS, Web Development, Software Engineering, Python Programming.",
        "Academic Goal: Pursuing MCA in 2026 to specialize in advanced Software Architecture and AI Systems."
      ]
    }
  ],
  skillsList: [
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      category: "Core CS, AI & Databases",
      items: ["Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks", "Generative AI", "Machine Learning (ML)", "Natural Language Processing (NLP)", "Prompt Engineering"]
    },
    {
      category: "Tools & Platforms",
      items: ["REST APIs", "Git", "GitHub", "Google Cloud Platform (GCP)", "VS Code", "IBM Developer Tools"]
    }
  ],
  projects: [
    {
      name: "Snap Calorie AI – Health Tech Solution",
      role: "Developer",
      duration: "2024 - Present",
      tech: "Python, Computer Vision, AI",
      highlights: [
        "Developed an AI-driven model for automated calorie detection using image recognition and computer vision.",
        "Implemented food classification logic and volume estimation to provide real-time nutritional insights.",
        "Optimized visual data processing workflows using Python libraries to ensure low-latency analysis."
      ]
    },
    {
      name: "Personal AI Chatbot – NLP Integration",
      role: "Developer",
      duration: "2024",
      tech: "Python, Generative AI, REST APIs",
      highlights: [
        "Designed and deployed a context-aware chatbot utilizing Large Language Models (LLMs) via API endpoints.",
        "Integrated REST APIs to facilitate natural language interactions and real-time query responses.",
        "Applied prompt engineering techniques to improve model accuracy and user engagement metrics."
      ]
    },
    {
      name: "Weather Web Application – API Dashboard",
      role: "Developer",
      duration: "2024",
      tech: "JavaScript, REST APIs, HTML/CSS",
      highlights: [
        "Built a responsive dashboard that fetches live global weather data through the OpenWeather REST API.",
        "Optimized frontend performance using asynchronous JavaScript for non-blocking data retrieval."
      ]
    },
    {
      name: "Interactive Browser Game",
      role: "Developer",
      duration: "2024",
      tech: "JavaScript, DOM Manipulation",
      highlights: [
        "Implemented game logic and dynamic state management using vanilla JavaScript and DOM event listeners.",
        "Designed an efficient scoring algorithm to handle real-time user input and game-state transitions."
      ]
    }
  ],
  certifications: [
    "GenAI Powered Data Analytics – Tata Group | IBM Developer Skills Network",
    "Google Cloud DevFest Attendee",
    "Graduate Employability Enhancement Training (GEET)"
  ]
};

