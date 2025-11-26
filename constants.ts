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
  { name: "Generative AI & LLMs", level: 85, category: "AI" },
  { name: "NLP & Text Analytics", level: 80, category: "AI" },
  { name: "Scikit-learn", level: 85, category: "AI" },
  { name: "Model Training & Eval", level: 85, category: "AI" },

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
  { name: "Flask & FastAPI", level: 85, category: "Web" },
  { name: "React & Next.js", level: 80, category: "Web" },
  { name: "HTML5/CSS3/JavaScript", level: 85, category: "Web" },
  { name: "REST APIs", level: 82, category: "Web" },
  { name: "Git & GitHub", level: 92, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "Linux Environment", level: 75, category: "Tools" },
  { name: "Agile & Scrum", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Engineering Bay Corporation",
    role: "AI Python Developer Intern",
    duration: "Dec 2024 - Jan 2025",
    type: "Work",
    description: [
      "Developed autonomous UAV object detection using YOLOv8 and OpenCV.",
      "Optimized real-time detection on embedded systems.",
      "Preprocessed large datasets using CVAT, Pandas, and NumPy."
    ]
  },
  {
    company: "Lawbook",
    role: "Product Developer",
    duration: "Jan 2023 - Jun 2025",
    type: "Work",
    description: [
      "Led frontend development of a legal tech platform for 1,000+ users.",
      "Designed responsive interfaces improving usability.",
      "Conducted market research and investor meetings."
    ]
  },
  {
    company: "National Service Scheme (NSS)",
    role: "Technical Head",
    duration: "May 2023 - Present",
    type: "Leadership",
    description: [
      "Managed data/operations for 10+ events with 1,000+ participants.",
      "Streamlined workflows using automation tools.",
      "Led teams for logistics and technical execution."
    ]
  },
  {
    company: "P.E.S Modern College of Engineering",
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
    title: "SmartInterview.AI",
    category: "AI/ML",
    techStack: ["React", "Gemini API", "Tailwind"],
    description: "A smart interview simulation platform helping students prepare with real-time AI feedback.",
    impact: "Real-time Feedback Loop",
    links: { github: "https://github.com/BinaryFighter-01", demo: "#" }
  },
  {
    title: "UAV Object Detection",
    category: "AI/ML",
    techStack: ["YOLOv8", "Python", "OpenCV"],
    description: "Real-time aerial surveillance system for autonomous drones in challenging environments.",
    impact: "92% Detection Accuracy",
    links: { github: "https://github.com/BinaryFighter-01", demo: "#" }
  },
  {
    title: "CommentIQ Analytics",
    category: "Data Science",
    techStack: ["Next.js", "GPT-5", "PostgreSQL"],
    description: "Social media analytics platform analyzing sentiment, toxicity, and engagement.",
    impact: "24h Cache Optimization",
    links: { github: "https://github.com/BinaryFighter-01", demo: "#" }
  },
  {
    title: "GrapeHarvest India",
    category: "Web Dev",
    techStack: ["React", "Node.js", "Chatbot"],
    description: "Full-stack e-commerce platform for agricultural products with AI chatbot integration.",
    impact: "Full-Stack Deployment",
    links: { github: "https://github.com/BinaryFighter-01", demo: "#" }
  },
  {
    title: "Interactive Constitution",
    category: "Web Dev",
    techStack: ["Flask", "PHP", "SQL"],
    description: "Educational platform gamifying the Indian Constitution. Best Educational Tool award.",
    impact: "Award Winning Tool",
    links: { github: "https://github.com/BinaryFighter-01", demo: "#" }
  },
  {
    title: "Medicine Chatbot",
    category: "AI/ML",
    techStack: ["Flask", "NLP", "OpenFDA"],
    description: "Medical assistant providing drug details and usage instructions using TF-IDF similarity.",
    impact: "Instant Drug Info",
    links: { github: "https://github.com/BinaryFighter-01", demo: "#" }
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    description: "Expert certification in LLMs, RAG architectures, and Generative AI deployment on Cloud."
  },
  {
    name: "OCI 2025 Certified Data Science Professional",
    issuer: "Oracle",
    year: "2025",
    description: "Validation of building, training, and deploying ML models at scale using OCI."
  },
  {
    name: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    description: "Foundational mastery of AI concepts, ML workflows, and Deep Learning."
  },
  {
    name: "Top 100 Innovator - Innovation Challenge",
    issuer: "Govt. of Maharashtra",
    year: "2023",
    description: "State-level recognition for innovative entrepreneurship among 1,000+ submissions."
  },
  {
    name: "RDBMS PostgreSQL (Score: 92.5%)",
    issuer: "IIT Bombay",
    year: "2025",
    description: "Advanced training in Relational Database Management Systems and SQL optimization."
  },
  {
    name: "Ignite Pitch Competition Winner",
    issuer: "MCOE",
    year: "2024",
    description: "Awarded ₹5,000 prize and Special Jury Recognition for Legal Tech innovation."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Anil's ability to solve complex problems with elegant code is truly impressive. His work on our AI-powered analytics dashboard exceeded our expectations.",
    author: "Dr.Prof.Mr.P.M.Kene",
    role: "Programme officer",
    company: "NSS PESMCOE"
  },
  {
    text: "One of the most dedicated developers I've worked with. His deep understanding of computer vision algorithms transformed our UAV project.",
    author: "Er.Mr.Aditya Patil",
    role: "Founder & CEO",
    company: "Engineering Bay Corporation"
  },
  {
    text: "Anil brings a unique blend of academic rigor and practical engineering. His contribution to the Legal Tech platform was pivotal.",
    author: "Dr.Prof.Mrs.S.V Pandit",
    role: "H.O.D",
    company: "PESMCOE PUNE"
  },
  {
    text: "Exceptional problem-solving skills. He optimized our data pipeline, reducing processing time by 40%. A true asset to any engineering team.",
    author: "Er.Mr.Rudra Hatte",
    role: "Founder & CEO",
    company: "Lawbook.in"
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
- **Projects:** SmartInterview.AI, UAV Detection, GrapeHarvest India, CommentIQ.
- **Certifications:** OCI Certified Data Science Professional, Generative AI Professional, AI Foundations Associate.
- **Achievements:** Top 100 Innovator (Maharashtra Govt), Winner of Ignite Pitch Competition 2024.
- **Contact:** ${EMAIL}
- **LeetCode:** ${LEETCODE}
- **LinkedIn:** ${LINKEDIN}

Guidelines:
1. Keep answers concise and engaging.
2. If asked about "hiring", suggest they contact him via the email provided or the contact form.
3. Highlight his ability to blend AI with real-world applications (e.g., Agriculture, Law, Defense).
4. If asked something not in the context, say: "I don't have that specific detail, but Anil is always learning! You should ask him directly."
5. Act as a bridge between the recruiter and Anil.
`;