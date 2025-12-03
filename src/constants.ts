import { Project, Experience, Skill, Certification, Testimonial } from './types';

export const EMAIL = "thelight.tor5@gmail.com";
export const PHONE = "+91-9119539039";
export const LINKEDIN = "linkedin.com/in/anil-b-abhange";
export const GITHUB = "github.com/BinaryFighter-01";
export const LEETCODE = "leetcode.com/u/anil_abhange";

export const SKILLS: Skill[] = [
  // AI & Intelligence
  { name: "Machine Learning", level: 90, category: "AI" },
  { name: "Deep Learning (YOLOv8)", level: 85, category: "AI" },
  { name: "Computer Vision (OpenCV)", level: 85, category: "AI" },
  { name: "Generative AI & LLMs", level: 80, category: "AI" },
  { name: "NLP & Text Analytics", level: 80, category: "AI" },
  { name: "Scikit-learn", level: 85, category: "AI" },
  { name: "Data Annotation", level: 85, category: "AI" },

  // Data Science & Databases
  { name: "Data Analysis (Pandas/NumPy)", level: 92, category: "Data" },
  { name: "Power BI & Visualization", level: 85, category: "Data" },
  { name: "SQL (MySQL/PostgreSQL)", level: 88, category: "Database" },
  { name: "MongoDB (NoSQL)", level: 80, category: "Database" },
  { name: "Data Preprocessing", level: 90, category: "Data" },
  { name: "Oracle Cloud (OCI)", level: 75, category: "Data" },

  // Engineering & Tools
  { name: "Python", level: 95, category: "Languages" },
  { name: "C/C++", level: 80, category: "Languages" },
  { name: "HTML/CSS/JS", level: 85, category: "Web" },
  { name: "React & Next.js", level: 80, category: "Web" },
  { name: "Flask & FastAPI", level: 85, category: "Web" },
  { name: "Git & GitHub", level: 92, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Agile", level: 85, category: "Tools" },
  { name: "Linux Environment", level: 75, category: "Tools" },

  // Soft Skills
  { name: "Leadership", level: 90, category: "Soft Skill" },
  { name: "Teamwork & Collaboration", level: 88, category: "Soft Skill" },
  { name: "Problem Solving", level: 92, category: "Soft Skill" },
  { name: "Communication Skills", level: 85, category: "Soft Skill" },
  { name: "Adaptability & Quick Learning", level: 90, category: "Soft Skill" },
  { name: "Time Management", level: 88, category: "Soft Skill" },
  { name: "Attention to Detail", level: 85, category: "Soft Skill" },
  { name: "Critical Thinking", level: 87, category: "Soft Skill" },

];

export const EXPERIENCES: Experience[] = [
  {
    company: "Engineering Bay Corporation",
    role: "AI Python Developer Intern",
    duration: "Dec 2024 - Jan 2025",
    type: "Work",
    description: [
      "Developed autonomous UAV object detection using YOLOv8 and OpenCV, optimizing for real-time accuracy.",
      "Preprocessed large image datasets using CVAT, Pandas, and NumPy for model training.",
      "Contributed to website development, resulting in a 25% improvement in user interaction metrics."
    ]
  },
  {
    company: "Lawbook: The Constitution Platform",
    role: "Product Developer",
    duration: "Jan 2023 - Jun 2025",
    type: "Work",
    description: [
      "Led frontend development of a legal tech platform, designing a responsive interface for 1,000+ users.",
      "Collaborated with law students to ensure seamless user experience and functionality.",
      "Attended 100+ investor meetings and competitions to drive platform adoption."
    ]
  },
  {
    company: "National Service Scheme (NSS)",
    role: "Technical Head",
    duration: "May 2023 - Present",
    type: "Leadership",
    description: [
      "Managed data/operations for 10+ institutional events with 1,000+ participants.",
      "Streamlined workflows using automation tools, reducing manual effort.",
      "Coordinated teams for logistics and technical execution."
    ]
  },
  {
    company: "P.E.S Modern College of Engineering Pune",
    role: "B.E. in AI & Data Science",
    duration: "Mar 2022 - Present",
    type: "Education",
    description: [
      "SGPA: 9.43",
      "Focus: AI, ML, Data Mining, Computer Vision, NLP."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "GrapeHarvest India E-Commerce",
    category: "Web Dev",
    techStack: ["React", "Node.js", "Chatbot"],
    description: "Full-stack e-commerce platform with product filtering, secure auth, and AI-powered chatbot for support.",
    impact: "Full-Stack Production Deployment",
    links: { github: "https://github.com/BinaryFighter-01", demo: "#" }
  },
  {
    title: "CommentIQ: AI Social Analytics",
    category: "Data Science",
    techStack: ["Next.js", "GPT-5", "PostgreSQL"],
    description: "Social media analytics platform utilizing OpenAI GPT-5 and YouTube API for sentiment and toxicity analysis.",
    impact: "24h Cache & API Optimization",
    links: { github: "https://github.com/BinaryFighter-01", demo: "https://comment-iq-psi.vercel.app/" }
  },
  {
    title: "SmartInterview.AI",
    category: "AI/ML",
    techStack: ["React", "Gemini API", "Tailwind"],
    description: "A smart interview simulation platform helping students prepare with real-time AI feedback.",
    impact: "Real-time Feedback Loop",
    links: { github: "https://github.com/BinaryFighter-01", demo: "https://smart-interview-sim.vercel.app/" }
  },
  {
    title: "UAV Object Detection",
    category: "AI/ML",
    techStack: ["YOLOv8", "Python", "OpenCV"],
    description: "Real-time aerial surveillance system for autonomous drones in challenging environments.",
    impact: "92% Detection Accuracy",
    links: { github: "https://github.com/BinaryFighter-01", demo: "https://github.com/BinaryFighter-01/uav-object-detection.git" }
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "OCI 2025 Certified Data Science Professional",
    issuer: "Oracle",
    year: "2025",
    description: "Professional certification in Data Science workflows and OCI infrastructure."
  },
  {
    name: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    description: "Advanced competency in LLMs, RAG architectures, and GenAI deployment."
  },
  {
    name: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    description: "Foundational mastery of AI concepts, ML workflows, and Deep Learning."
  },
  {
    name: "Ignite Pitch Competition Winner",
    issuer: "MCOE",
    year: "2024",
    description: "Awarded ₹5,000 prize and Special Jury Recognition for Legal Tech innovation."
  },
  {
    name: "Finalist - i2i Innovation Challenge",
    issuer: "COEP",
    year: "2024",
    description: "Top EdTech Innovation among 200+ participants for gamified learning platform."
  },
  {
    name: "Top 100 Innovator",
    issuer: "Maharashtra State Innovation Society",
    year: "2023",
    description: "Selected from 1,000+ submissions for AI-driven civic education solution."
  },
  {
    name: "Zonal Finalist - Eureka! 2024",
    issuer: "IIT Bombay",
    year: "2024",
    description: "National-level competition in Advanced Technology Track for innovative startup pitch."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Anil's ability to solve complex problems with elegant code is truly impressive. His work on our AI-powered analytics dashboard exceeded our expectations.",
    author: "Mr.Prashant Kanal",
    role: "Senior Project Manager",
    company: "Tech Innovations Inc."
  },
  {
    text: "One of the most dedicated developers I've worked with. His deep understanding of computer vision algorithms transformed our UAV project.",
    author: "Mr.Aditya Patil",
    role: "Founder",
    company: "Engineering Bay Corporation"
  },
  {
    text: "Anil brings a unique blend of academic rigor and practical engineering. His contribution to the Legal Tech platform was pivotal.",
    author: "Mr.Rudra Hatte",
    role: "CEO & Founder",
    company: "Lawbook.in"
  },
  {
    text: "Exceptional problem-solving skills. He optimized our data pipeline, reducing processing time by 40%. A true asset to any engineering team.",
    author: "Mr.Sunil Hajare",
    role: "Lead Data Scientist",
    company: "DataFlow Systems Inc."
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI Assistant representing Anil Babasaheb Abhange. You are embedded in his portfolio website.
Your goal is to answer questions about Anil's professional background, skills, and projects in a professional yet enthusiastic tone.

Key Context about Anil:
- **Current Role:** B.E. Student in AI & Data Science at P.E.S Modern College of Engineering, Pune (SGPA 9.43).
- **Interests:** Building intelligent solutions, Machine Learning, Data Science, Computer Vision, and Full Stack Dev.
- **Top Skills:** Python, YOLOv8, React, Machine Learning, Data Analysis, SQL, C++, Flask, FastAPI.
- **Notable Work:** 
    - Intern at Engineering Bay (UAV Object Detection).
    - Product Developer at Lawbook (Legal Tech).
    - Technical Head at NSS.
- **Projects:** GrapeHarvest India, CommentIQ, SmartInterview.AI, UAV Detection.
- **Certifications:** Oracle OCI (Data Science, GenAI, AI Foundations), Ignite Pitch Winner, COEP Finalist, Top 100 Innovator.
- **Contact:** ${EMAIL}
- **LeetCode:** ${LEETCODE}
- **LinkedIn:** ${LINKEDIN}

Guidelines:
1. Keep answers concise and engaging.
2. If asked about "hiring", suggest they contact him via the email provided or the contact form.
3. Highlight his ability to blend AI with real-world applications.
4. If asked something not in the context, say: "I don't have that specific detail, but Anil is always learning! You should ask him directly."
`;
