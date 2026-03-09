/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  FileText, 
  Trophy, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  ChevronRight,
  Cpu,
  Microscope,
  Stethoscope,
  Award as AwardIcon,
  Menu,
  X,
  Phone
} from 'lucide-react';
import { PROJECTS, PUBLICATIONS, EXPERIENCES, AWARDS } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Microscope },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'awards', label: 'Awards', icon: Trophy },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">Khair Ul Wara</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    activeSection === item.id ? 'text-emerald-600' : 'text-zinc-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="flex items-center gap-3 w-full text-left text-zinc-600 font-medium"
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Available for Research & Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
              Khair <span className="text-emerald-600">Ul Wara</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed max-w-lg">
              Biomedical Engineer & AI Researcher specializing in multi-modal diagnostic devices and AI-powered medical technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('projects')}
                className="bg-zinc-900 text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center gap-2"
              >
                View Projects <ChevronRight size={18} />
              </button>
              <div className="flex items-center gap-4">
                <a href="mailto:KhairUlWaraaa@gmail.com" className="p-3 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition-all" title="Email">
                  <Mail size={20} />
                </a>
                <a href="https://pk.linkedin.com/in/khair-ul-wara-460063162" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition-all" title="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://scholar.google.com/citations?user=ScRuPmwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition-all" title="Google Scholar">
                  <GraduationCap size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl flex items-center justify-center">
              <img 
                src="projects/photo profile.jpg" 
                alt="Khair Ul Wara" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-emerald-600">3.89</div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">CGPA (B.Sc. BME)</div>
            </div>
            <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-zinc-900">5+</div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Publications</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title"><User className="text-emerald-600" /> About Me</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-100 mb-8 border border-zinc-200 flex items-center justify-center">
                <img 
                  src="projects/working in lab.jpg" 
                  alt="Working in Lab" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-lg text-zinc-600 leading-relaxed">
                I am a Biomedical Engineering graduate with deep interdisciplinary expertise in AI-powered medical technologies. 
                My experience spans designing and developing multi-modal diagnostic devices with integrated machine learning (ML) and deep learning (DL).
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                I am skilled in conducting high-impact research, building real-time embedded systems, and optimizing AI models for low-power microcontrollers. 
                My goal is to advance global healthcare through AI-driven innovation, wearable technologies, and accessible diagnostics.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <GraduationCap className="text-emerald-600 mb-4" />
                  <h3 className="font-bold mb-2">Education</h3>
                  <p className="text-sm text-zinc-600">B.Sc. in Biomedical Engineering</p>
                  <p className="text-sm font-medium">Riphah International University</p>
                  <p className="text-xs text-zinc-500">2021 - 2025</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <Stethoscope className="text-emerald-600 mb-4" />
                  <h3 className="font-bold mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Signal Processing', 'Wearables', 'Medical Imaging', 'Edge AI'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 bg-white border border-zinc-200 rounded-md">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-zinc-900 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-emerald-400" />
                    <a href="mailto:KhairUlWaraaa@gmail.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity">KhairUlWaraaa@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-emerald-400" />
                    <span className="text-sm opacity-80">+92 341 4716998</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin size={18} className="text-emerald-400" />
                    <a href="https://pk.linkedin.com/in/khair-ul-wara-460063162" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity">LinkedIn Profile</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap size={18} className="text-emerald-400" />
                    <a href="https://scholar.google.com/citations?user=ScRuPmwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Google Scholar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title"><Code2 className="text-emerald-600" /> Skills & Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-zinc-500 uppercase text-xs tracking-widest mb-4">Laboratory & Hardware</h3>
              {[
                'Ultrasound Imaging', 'Signal Processing', 'PCB Design', 
                'Microcontroller Programming', 'Sensor Integration', 'AI Model Optimization'
              ].map(skill => (
                <div key={skill} className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                  <span className="text-sm font-medium">{skill}</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-zinc-500 uppercase text-xs tracking-widest mb-4">Software & Tools</h3>
              {[
                'Python (TensorFlow/PyTorch)', 'MATLAB / Simulink', 'Arduino IDE', 
                'SolidWorks / AutoCAD', 'Multisim', 'LabVIEW'
              ].map(skill => (
                <div key={skill} className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                  <span className="text-sm font-medium">{skill}</span>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-zinc-500 uppercase text-xs tracking-widest mb-4">Core Competencies</h3>
              {[
                'Deep Learning (CNN/Transformer)', 'Medical Image Analysis', 'Embedded Systems', 
                'Data Acquisition', 'Regulatory Compliance', 'Research Methodology'
              ].map(skill => (
                <div key={skill} className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                  <span className="text-sm font-medium">{skill}</span>
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-zinc-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-white"><Microscope className="text-emerald-400" /> Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-700/50 flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative bg-zinc-900/50 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title"><FileText className="text-emerald-600" /> Publications</h2>
          <div className="space-y-6">
            {PUBLICATIONS.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-bold rounded uppercase">{pub.year}</span>
                      <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">{pub.journal}</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">{pub.title}</h3>
                    <p className="text-sm text-zinc-500">{pub.authors}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {pub.doi && (
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors">
                        DOI: {pub.doi} <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title"><Briefcase className="text-emerald-600" /> Industrial Experience</h2>
          <div className="relative border-l-2 border-zinc-100 ml-4 pl-10 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[51px] top-0 w-5 h-5 rounded-full bg-emerald-600 border-4 border-white shadow-sm"></div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-zinc-900">{exp.role}</h3>
                  <p className="text-lg font-medium text-zinc-500 mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title"><Trophy className="text-emerald-600" /> Awards & Honors</h2>
          <div className="mb-12 rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
            <img 
              src="projects/excelence award overall 2021-2025.jpg" 
              alt="Excellence Award" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AWARDS.map((award, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:border-emerald-200 transition-all group">
                <AwardIcon className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bold text-zinc-900 mb-2 leading-tight">{award.title}</h3>
                <p className="text-xs text-zinc-500 font-medium mb-4">{award.organization} • {award.year}</p>
                {award.description && (
                  <p className="text-xs text-zinc-400 leading-relaxed italic">
                    "{award.description}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-zinc-900 text-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-8">K</div>
          <h2 className="text-3xl font-bold mb-4">Let's connect and innovate together</h2>
          <p className="text-zinc-400 mb-12 max-w-lg mx-auto">
            I'm always open to discussing new research opportunities, collaborative projects, or innovations in medical technology.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:KhairUlWaraaa@gmail.com" className="p-4 rounded-2xl bg-zinc-800 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all" title="Email">
              <Mail size={24} />
            </a>
            <a href="https://pk.linkedin.com/in/khair-ul-wara-460063162" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-zinc-800 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://scholar.google.com/citations?user=ScRuPmwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-zinc-800 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all" title="Google Scholar">
              <GraduationCap size={24} />
            </a>
          </div>
          <div className="pt-8 border-t border-zinc-800 text-zinc-500 text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Khair Ul Wara • Biomedical Engineer
          </div>
        </div>
      </footer>
    </div>
  );
}
