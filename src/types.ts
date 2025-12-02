export interface Project {
  title: string;
  description: string;
  techStack: string[];
  category: 'AI/ML' | 'Web Dev' | 'Data Science' | 'Soft Skills';
  impact: string; // Key metric for case study
  links: {
    github: string;
    demo: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: 'Work' | 'Education' | 'Leadership';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}
