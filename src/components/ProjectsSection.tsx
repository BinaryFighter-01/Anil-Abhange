import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  technologies: string[];
  description: string;
  github?: string;
  demo?: string;
  image?: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const projects: Project[] = [
    {
      title: "SmartInterview.AI ",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite", "Vercel"],
      description: "Developed a smart interview simulation platform to help students and job seekers prepare for real-time interviews. Features include question generation, UI-based mock interview flow, instant feedback system, and realistic user experience.",
      github: "https://github.com/BinaryFighter-01/smart-interview-sim.git",
      demo: "https://smart-interview-sim.vercel.app/"
    },
    {
      title: "UAV Object Detection System",
      technologies: ["YOLOv8", "Python", "Computer Vision"],
      description: "Designed and developed a UAV-based object detection system using YOLOv8 for real-time aerial surveillance. Deployed and tested the system in both simulated and real-world environments with accurate object recognition.",
      github: "https://github.com/BinaryFighter-01/uav-object-detection.git",
      demo: "https://demo-link.com/uav-demo/not-deployed"
    },
    {
      title: "XKCD Comic Subscription System",
      technologies: ["PHP 8.3", "HTML", "CSS", "JavaScript", "MailHog", "XAMPP", "Task Scheduler (Windows)"],
      description: "A PHP-based web app that lets users subscribe to daily XKCD comics via email. Features include email registration with verification, unsubscription, and daily comic delivery using Windows Task Scheduler. Uses MailHog for local email testing and stores subscribers in a flat file system (no database).",
      github: "https://github.com/BinaryFighter-01/XKCD-Comic-Subscription-System.git",
      demo: "https://demo-link.com/not-deployed"
    },
    {
      title: "Interactive Constitution Platform",
      technologies: ["Flask", "PHP", "SQL"],
      description: "Led development of a platform simplifying the Indian Constitution using educational tools and legal simulations. Built core features like Moot Court Simulator and Constitution Game to support practical legal learning.",
      github: "https://github.com/yourusername/constitution-platform",
      demo: "https://demo-link.com/not-deployed"
    },
    {
      title: "GrapeHarvest India",
      technologies: ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn-ui", "Chatbot (NLP)"],
      description: "A fully responsive e-commerce platform for grape products in India. Features include dynamic product filters, secure user login, cart management, search, chatbot assistance, and multiple payment options. Designed for smooth checkout and real-time user interaction.",
      github: "https://github.com/BinaryFighter-01/grape-harvest-india-shop",
      demo: "https://grape-harvest-india-shop-v9ui.vercel.app/"
    },
    {
      title: "NM - Farmers' App",
      technologies: ["Flutter", "Dart", "Firebase Auth", "URL Launcher", "Fluttertoast"],
      description: "A bilingual agricultural service app built with Flutter to support farmers in English and Marathi. Features include government scheme listings (PM-Kisan, Fasal Bima, etc.), user authentication, profile management, soil health info, and smooth navigation with a custom UI. Designed to empower Indian farmers through accessible digital tools.",
      github: "https://github.com/BinaryFighter-01/NM-Farmers-App.git",
      demo: "https://demo-link.com/not-deployed"
    },
    {
      title: "Car Detection using YOLOv8",
      technologies: ["Python", "YOLOv8", "Ultralytics", "OpenCV", "Jupyter Notebook"],
      description: "Implemented real-time car detection using the YOLOv8 object detection model. The project processes video streams and images to identify and track vehicles accurately. Built with Ultralytics' YOLOv8 framework and OpenCV for image processing and visualization.",
      github: "https://github.com/BinaryFighter-01/carDetectYolov8Model.git",
      demo: "https://demo-link.com/not-deployed"
    },
    {
      title: "Medicine Chatbot",
      technologies: ["Python", "Flask", "Pandas", "Scikit-learn", "HTML", "CSS", "JavaScript", "OpenFDA API"],
      description: "A Flask-based chatbot that provides detailed medicine information using TF-IDF similarity and OpenFDA API. It includes a clean web interface, structured chatbot responses, and handles queries like uses, side effects, and storage instructions.",
      github: "https://github.com/BinaryFighter-01/Medicine-Chatbot.git",
      demo: "https://demo-link.com/not-deployed"
    },
    {
      title: "Object Detection in Images/Videos",
      technologies: ["Python", "YOLOv8", "TensorFlow", "OpenCV"],
      description: "Created a system to detect and classify objects in images and videos, such as cars and pedestrians, with real-time processing capabilities and high accuracy metrics.",
      github: "https://github.com/yourusername/object-detection",
      demo: "https://demo-link.com/not-deployed"
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-container">
      <h2 className="section-title animate-on-scroll opacity-0">Projects</h2>
      <div className="w-24 h-px bg-ai-cyan/10 mx-auto mb-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="animate-on-scroll opacity-0 project-card group hover:scale-105 transition-all duration-300 flex flex-col"
            style={{
              animationDelay: `${0.2 + index * 0.2}s`
            }}
          >
            <div className="h-full flex flex-col">
              <div className="bg-gradient-to-r from-ai-purple/20 to-ai-cyan/20 rounded-t-xl h-40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-ai-dark/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {index % 4 === 0 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-cyan">
                      <path d="M14.5 9.5 9 15" /><path d="M3 21s2.5-5 9-5 9 5 9 5" />
                      <circle cx="12" cy="12" r="3" /><path d="M3 4s2.5 5 9 5 9-5 9-5" />
                    </svg>
                  ) : index % 4 === 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-purple">
                      <path d="M10 16.5v-9l8 4-8 5" />
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                    </svg>
                  ) : index % 4 === 2 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-cyan">
                      <path d="M2 10h2" /><path d="M6 5v14" /><path d="M18 10h2" />
                      <rect width="8" height="14" x="10" y="5" rx="1" /><path d="M6 10h4" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-green">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                    </svg>
                  )}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-ai-cyan mb-2">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-ai-purple/20 text-ai-purple px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-ai-light/70 text-sm mb-2 line-clamp-4">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-ai-dark/70 hover:bg-ai-purple/80 text-white px-3 py-1 rounded-md transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-ai-dark/70 hover:bg-ai-cyan/80 text-white px-3 py-1 rounded-md transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note: "More Projects" button removed as requested */}
      {/* To add more projects in the future, simply add them to the projects array above */}
    </section>
  );
};

export default ProjectsSection;
