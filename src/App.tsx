import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Database, 
  Terminal,
  Download,
  Briefcase,
  GraduationCap,
  Trophy,
  Cpu,
  Globe,
  Menu,
  X,
  Award,
  Quote,
  User
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import InteractiveBackground from './components/InteractiveBackground';
import ChatAssistant from './components/ChatAssistant';
import { EXPERIENCES, PROJECTS, SKILLS, EMAIL, GITHUB, LINKEDIN, LEETCODE, CERTIFICATIONS, TESTIMONIALS } from './constants';

const LeetCodeIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} role="img" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [roleIndex, setRoleIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const roles = [
    "Software Engineer",
    "AI Engineer",
    "Data Engineer",
    "ML Engineer",
    "Data Analyst"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const skillCategories = {
    'AI & Intelligence': SKILLS.filter(s => s.category === 'AI'),
    'Data Science & Databases': SKILLS.filter(s => s.category === 'Data' || s.category === 'Database'),
    'Engineering & Tools': SKILLS.filter(s => s.category === 'Languages' || s.category === 'Web' || s.category === 'Tools'),
    'Soft Skills': SKILLS.filter(s => s.category === 'Soft Skill'),
  };

  return (
    <div className="min-h-screen font-sans selection:bg-orange-500 selection:text-white relative bg-[#050505] text-white overflow-x-hidden">
      <InteractiveBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* CEO Level Monogram Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollTo('home')}
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-600 to-red-700 rounded-lg shadow-lg shadow-orange-900/20 group-hover:shadow-orange-600/40 transition-all duration-300 shrink-0">
                <span className="font-display font-bold text-xl text-white tracking-tighter">AA</span>
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none tracking-wide">ANIL ABHANGE</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] group-hover:text-orange-500 transition-colors mt-1">Software Engineer</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
             <a
                href="/resume.pdf"
                download="Anil_Abhange_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/50 transition-all text-xs uppercase tracking-widest font-bold backdrop-blur-sm shadow-lg hover:shadow-orange-500/10 cursor-pointer z-50"
             >
                <Download className="w-4 h-4" />
                Resume
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-black border-b border-white/10"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                            <button 
                                key={item}
                                onClick={() => scrollTo(item.toLowerCase())}
                                className="text-left text-lg font-medium text-gray-300 hover:text-orange-500 py-2"
                            >
                                {item}
                            </button>
                        ))}
                         <a
                            href="/resume.pdf"
                            download="Anil_Abhange_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-orange-500 py-2"
                         >
                            Download Resume
                         </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-orange-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-red-600/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 md:mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-orange-500/5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-widest">Available for Innovation</span>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-display mb-6 md:mb-8 leading-[0.9] tracking-tight"
              >
                ENGINEERING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600">INTELLIGENCE</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-light px-2"
              >
                I architect scalable AI systems and data-driven applications. 
                Transforming complex raw data into <span className="text-white font-medium">executive-level insights</span> and <span className="text-white font-medium">autonomous solutions</span>.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-6"
              >
                <button 
                  onClick={() => scrollTo('projects')}
                  className="px-8 py-4 bg-white text-black rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg hover:shadow-white/20"
                >
                  Explore Case Studies
                </button>
                <a 
                  href={`https://${LINKEDIN}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white transition-all w-full sm:w-auto hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  Connect on LinkedIn
                </a>
              </motion.div>
          </div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 hidden sm:block"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Profile Image Area */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
            >
               <motion.div 
                className="relative z-10 aspect-[4/5] w-full max-w-sm lg:max-w-md mx-auto rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 50px -10px rgba(255, 94, 0, 0.2)" }}
                transition={{ duration: 0.5 }}
               >
                  {/* Grayscale Filter that removes on hover */}
                  <div className="absolute inset-0 bg-black/50 mix-blend-saturation group-hover:bg-transparent transition-all duration-700 z-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  <img 
                    src="/profile.png" 
                    alt="Anil Abhange" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-30">
                    <div className="inline-flex mb-3 bg-orange-600/90 backdrop-blur text-white rounded overflow-hidden">
                        <motion.div 
                            key={roleIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest"
                        >
                            {roles[roleIndex]}
                        </motion.div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">Anil Abhange</h3>
                    <p className="text-gray-400 text-xs md:text-sm font-mono">Pune, India • EST/IST Available</p>
                  </div>
               </motion.div>
               
               {/* Tech Decoration */}
               <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-white/5 rounded-2xl hidden md:block"></div>
               <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full border border-white/5 rounded-2xl hidden md:block"></div>
            </motion.div>

            {/* Content Area */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 md:mb-8 leading-tight">
                Solving <span className="text-orange-500">Complex</span> Problems with <span className="text-white">Elegant</span> Code.
              </h2>
              <div className="space-y-6 text-base md:text-lg text-gray-400 font-light leading-relaxed">
                <p>
                    I am a Software Engineer driven by the challenge of replicating human intelligence through code. 
                    My approach combines rigorous academic theory with aggressive practical application.
                </p>
                <p>
                    Currently, I am architecting next-generation solutions in <span className="text-white">Computer Vision</span> and <span className="text-white">Natural Language Processing</span>. 
                    My work has been recognized at national levels, including Hackathons and Innovation Challenges.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                 <motion.div whileHover={{ x: 5 }} className="border-l-2 border-orange-500 pl-4 md:pl-6 transition-all">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">9.43</div>
                    <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">SGPA (Top 5%)</div>
                 </motion.div>
                 <motion.div whileHover={{ x: 5 }} className="border-l-2 border-white/20 pl-4 md:pl-6 transition-all">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Deployed Systems</div>
                 </motion.div>
                 <motion.div whileHover={{ x: 5 }} className="border-l-2 border-white/20 pl-4 md:pl-6 transition-all">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">3+</div>
                    <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Years Experience</div>
                 </motion.div>
                 <motion.div whileHover={{ x: 5 }} className="border-l-2 border-white/20 pl-4 md:pl-6 transition-all">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">3</div>
                    <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Awards Won</div>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-neutral-900/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:mb-20">
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Core Competencies</h2>
             <p className="text-gray-400 max-w-2xl">
                A curated stack of technologies mastered to build scalable, production-grade applications. 
                No fluff, just tools that drive results.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
             {Object.entries(skillCategories).map(([category, skills], idx) => (
                <motion.div 
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                        {category.includes('AI') && <BrainCircuit className="w-6 h-6 text-orange-500" />}
                        {category.includes('Data') && <Database className="w-6 h-6 text-blue-500" />}
                        {category.includes('Engineering') && <Cpu className="w-6 h-6 text-emerald-500" />}
                        {category.includes('Soft') && <User className="w-6 h-6 text-purple-500" />}
                        <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase">{category}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <motion.div 
                                key={skill.name}
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -2,
                                    boxShadow: "0 0 15px rgba(255, 94, 0, 0.3)"
                                }}
                                className="group relative px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 rounded-lg cursor-default"
                            >
                                <span className="relative z-10 text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
             <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Case Studies</h2>
                <p className="text-gray-400 max-w-xl text-sm md:text-base">
                    High-impact engineering challenges solved with modern technology.
                </p>
             </div>
             <a 
                href={`https://${GITHUB}`} 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider w-full md:w-auto justify-center shadow-lg hover:shadow-white/20"
             >
                <Github className="w-4 h-4" />
                ACCESS GITHUB
             </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -10px rgba(255, 94, 0, 0.15)"
                }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="group flex flex-col h-full bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-500"
              >
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2">{project.category}</span>
                            <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">{project.title}</h3>
                        </div>
                    </div>

                    <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/5 group-hover:border-orange-500/20 transition-colors">
                         <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Key Impact</span>
                         <span className="text-lg font-bold text-white">{project.impact}</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>
                    
                    <div className="pt-6 border-t border-white/5 mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map(tech => (
                                <span key={tech} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-neutral-800 text-gray-400 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex gap-4">
                            <a href={project.links?.demo} className="flex-1 py-2 bg-white text-black text-center text-xs font-bold uppercase tracking-wider rounded hover:bg-gray-200 transition-colors hover:shadow-lg">
                                View Project
                            </a>
                            <a href={project.links?.github} className="flex-1 py-2 bg-transparent border border-white/20 text-white text-center text-xs font-bold uppercase tracking-wider rounded hover:bg-white/5 transition-colors hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-20 md:py-32 bg-neutral-900/20 border-y border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16">
                 <Trophy className="w-10 h-10 text-orange-500 mb-6" />
                 <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Certifications & Awards</h2>
                 <p className="text-gray-400 max-w-2xl">
                    Recognition for excellence in technology innovation and competitive programming.
                 </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {CERTIFICATIONS.map((cert, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ 
                            scale: 1.02, 
                            backgroundColor: "rgba(255,255,255,0.03)",
                            boxShadow: "0 0 20px rgba(255, 94, 0, 0.1)"
                        }}
                        viewport={{ once: true }}
                        className="flex gap-4 p-6 bg-black/50 border border-white/10 rounded-xl hover:border-orange-500/50 transition-all duration-300 items-start"
                    >
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                            <Award className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                            <div className="flex items-center gap-2 text-xs text-orange-500 font-mono mb-2">
                                <span>{cert.issuer}</span>
                                <span>•</span>
                                <span>{cert.year}</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {cert.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Professional Trajectory</h2>

            <div className="max-w-4xl mx-auto">
                {EXPERIENCES.map((exp, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0 py-8 group"
                    >
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 group-hover:bg-orange-500/50 transition-colors"></div>
                        
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-[50%] top-12 w-3 h-3 -translate-x-[5px] md:-translate-x-[6px] rounded-full bg-neutral-800 border border-white/30 group-hover:border-orange-500 group-hover:bg-orange-500 transition-all z-10"></div>

                        <motion.div 
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 0 20px rgba(255, 94, 0, 0.1)"
                            }}
                            className={`md:flex justify-between items-start gap-8 md:gap-16 p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div className={`md:w-1/2 ${idx % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                                <div className="inline-block mb-2">
                                    <span className="text-sm font-mono text-orange-500">{exp.duration}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-base md:text-lg text-gray-400 mb-4">{exp.company}</h4>
                            </div>
                            
                            <div className="md:w-1/2 mt-4 md:mt-0">
                                <ul className="space-y-2">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-sm text-gray-400 leading-relaxed flex gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-neutral-900/10">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">Ready to Scale?</h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    I am currently open to opportunities where I can contribute to aggressive growth and technological innovation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
                <motion.a 
                    href={`mailto:${EMAIL}`}
                    whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        boxShadow: "0 20px 40px -10px rgba(255, 94, 0, 0.3)"
                    }}
                    className="group p-8 bg-neutral-900 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-500 text-center"
                >
                    <Mail className="w-8 h-8 mx-auto mb-4 text-orange-500 group-hover:text-black transition-colors" />
                    <h3 className="text-lg md:text-xl font-bold mb-2">Email Inquiry</h3>
                    <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-600 truncate">{EMAIL}</p>
                </motion.a>

                <motion.a 
                    href={`https://${LINKEDIN}`}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        boxShadow: "0 20px 40px -10px rgba(0, 119, 181, 0.4)"
                    }}
                    className="group p-8 bg-neutral-900 border border-white/10 rounded-2xl hover:bg-[#0077b5] hover:text-white transition-all duration-500 text-center"
                >
                    <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-500 group-hover:text-white transition-colors" />
                    <h3 className="text-lg md:text-xl font-bold mb-2">LinkedIn</h3>
                    <p className="text-xs md:text-sm text-gray-500 group-hover:text-white/80">Connect Professionally</p>
                </motion.a>
            </div>
        </div>
      </section>
      
      {/* Testimonials Infinite Scroll Section */}
      <section className="py-24 border-t border-white/5 bg-[#050505] overflow-hidden relative">
         {/* Gradient Masks */}
         <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>

         <div className="container mx-auto px-6 relative z-10">
             <div className="mb-12 flex items-center justify-between">
                 <h2 className="text-2xl md:text-4xl font-display font-bold">Endorsements</h2>
                 <div className="flex gap-2 text-orange-500">
                     <Quote className="w-6 h-6" />
                 </div>
             </div>
         </div>
         
         {/* Infinite Marquee */}
         <div className="flex w-full overflow-hidden">
             <motion.div 
                className="flex gap-6 md:gap-8 px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                style={{ width: "max-content" }}
             >
                 {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
                     <motion.div 
                        key={idx}
                        whileHover={{ 
                            scale: 1.02, 
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            boxShadow: "0 0 20px rgba(255, 94, 0, 0.1)"
                        }}
                        className="shrink-0 w-[320px] md:w-[450px] p-8 md:p-10 rounded-3xl bg-neutral-900/50 border border-white/5 backdrop-blur-md hover:border-orange-500/50 transition-all duration-300 group relative overflow-hidden"
                     >
                         {/* Decor */}
                         <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none"></div>
                         
                         <Quote className="w-8 h-8 text-orange-500/50 mb-6 group-hover:text-orange-500 transition-colors" />
                         
                         <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed mb-8">
                            "{testimonial.text}"
                         </p>
                         
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-sm font-bold shadow-lg">
                                 {testimonial.author.charAt(0)}
                             </div>
                             <div>
                                 <h4 className="text-sm md:text-base font-bold text-white">{testimonial.author}</h4>
                                 <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                             </div>
                         </div>
                     </motion.div>
                 ))}
             </motion.div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-black text-center relative overflow-hidden">
        {/* Footer glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-orange-600/5 blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center">
                {/* Big Stylish AA Box */}
                <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl shadow-2xl shadow-orange-900/50 mb-8 group hover:scale-110 transition-transform duration-300 ring-1 ring-white/20">
                     <span className="font-display font-bold text-4xl text-white tracking-tighter">AA</span>
                     <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>

                <p className="text-gray-400 text-sm mb-2 font-medium">
                    Engineered with ❤️ by Anil Abhange
                </p>
                 <p className="text-gray-600 text-xs mb-8">
                    © {new Date().getFullYear()} Anil Abhange. All rights reserved.
                </p>

                <div className="flex gap-8 items-center">
                    <a href={`https://${GITHUB}`} target="_blank" rel="noreferrer" aria-label="GitHub" className="transform hover:scale-125 transition-transform duration-300">
                        <Github className="w-6 h-6 text-gray-600 hover:text-white transition-colors" />
                    </a>
                    <a href={`https://${LINKEDIN}`} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transform hover:scale-125 transition-transform duration-300">
                        <Linkedin className="w-6 h-6 text-gray-600 hover:text-white transition-colors" />
                    </a>
                    <a href={`mailto:${EMAIL}`} aria-label="Email" className="transform hover:scale-125 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-gray-600 hover:text-white transition-colors" />
                    </a>
                    <a href={`https://${LEETCODE}`} target="_blank" rel="noreferrer" aria-label="LeetCode" className="transform hover:scale-125 transition-transform duration-300">
                        <LeetCodeIcon className="w-6 h-6 text-gray-600 hover:text-white transition-colors" />
                    </a>
                </div>
            </div>
        </div>
      </footer>

      {/* Chat Assistant Widget */}
      <ChatAssistant />
    </div>
  );
};

export default App;
