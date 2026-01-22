'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Briefcase, Code2, GraduationCap, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

interface Achievement {
  title: string;
  award: string;
  detail: string;
  images: string[];
  link?: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  highlights: string[];
  images: string[];
  video?: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  tech: string[];
  certificateLink?: string;
}

interface SkillCategory {
  [category: string]: string[];
}

interface VisibilityState {
  [key: string]: boolean;
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [projectImageIndexes, setProjectImageIndexes] = useState<{ [key: number]: number }>({});
  const [achievementImageIndexes, setAchievementImageIndexes] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectImageIndexes(prev => {
        const newIndexes = { ...prev };
        projects.forEach((_, idx) => {
          if (projects[idx].images.length > 1) {
            newIndexes[idx] = ((prev[idx] || 0) + 1) % projects[idx].images.length;
          }
        });
        return newIndexes;
      });

      setAchievementImageIndexes(prev => {
        const newIndexes = { ...prev };
        achievements.forEach((_, idx) => {
          if (achievements[idx].images.length > 1) {
            newIndexes[idx] = ((prev[idx] || 0) + 1) % achievements[idx].images.length;
          }
        });
        return newIndexes;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleProjectImagePrev = (projectIdx: number, imagesLength: number) => {
    setProjectImageIndexes(prev => ({
      ...prev,
      [projectIdx]: ((prev[projectIdx] || 0) - 1 + imagesLength) % imagesLength
    }));
  };

  const handleProjectImageNext = (projectIdx: number, imagesLength: number) => {
    setProjectImageIndexes(prev => ({
      ...prev,
      [projectIdx]: ((prev[projectIdx] || 0) + 1) % imagesLength
    }));
  };

  const handleAchievementImagePrev = (achievementIdx: number, imagesLength: number) => {
    setAchievementImageIndexes(prev => ({
      ...prev,
      [achievementIdx]: ((prev[achievementIdx] || 0) - 1 + imagesLength) % imagesLength
    }));
  };

  const handleAchievementImageNext = (achievementIdx: number, imagesLength: number) => {
    setAchievementImageIndexes(prev => ({
      ...prev,
      [achievementIdx]: ((prev[achievementIdx] || 0) + 1) % imagesLength
    }));
  };

  const projects: Project[] = [
    {
      title: "EarthAlly",
      description: "End-to-end deep learning and IoT-based environment monitoring system using AWS cloud infrastructure (SageMaker, Lambda, S3, DynamoDB) for real-time predictions.",
      tech: ["AWS", "PyTorch", "React", "Flutter", "IoT"],
      github: "https://github.com/nishit3/EarthAlly",
      highlights: ["Real-time data processing", "Multiple IoT sensors integration", "Predictive analytics"],
      images: [
        "/images/projects/earthally-1.png",
        "/images/projects/earthally-2.png",
        "/images/projects/earthally-3.png",
        "/images/projects/earthally-4.png",
        "/images/projects/earthally-5.png",
        "/images/projects/earthally-6.png",
        "/images/projects/earthally-7.png",
        "/images/projects/earthally-8.jpg",
        "/images/projects/earthally-9.jpg"
      ]
    },
    {
      title: "Advance Public Bus Transport Management System",
      description: "Computer vision and IoT-based smart platform for public bus passenger management using AWS Rekognition for facial recognition and Google Maps API.",
      tech: ["AWS Rekognition", "React", "Flutter", "IoT", "Google Maps API"],
      github: "https://ieeexplore.ieee.org/document/10444144",
      highlights: ["IEEE ICCE 2024 Publication", "Live tracking system", "Passenger management dashboard"],
      images: [
        "/images/projects/bus-transport-1.jpg",
        "/images/projects/bus-transport-2.jpg"
      ]
    },
    {
      title: "Kisan-Sevak",
      description: "Deep Learning and IoT-based farming assistance and monitoring system for precision agriculture.",
      tech: ["Deep Learning", "React", "Flutter", "IoT", "Python"],
      github: "https://github.com/nishit3/Kisan-Sevak",
      highlights: ["Farming assistance AI", "Remote monitoring", "Data-driven insights"],
      images: [
        "/images/projects/kisan-sevak-1.png",
        "/images/projects/kisan-sevak-2.jpg",
        "/images/projects/kisan-sevak-3.png"
      ]
    },
    {
      title: "ProStaff",
      description: "Enterprise-grade Human Resource Management System with microservices architecture. Features employee management, leave tracking, Razorpay salary payments, attendance system, and role-based access control with JWT authentication.",
      tech: ["Java", "Spring Boot", "Angular", "MySQL", "Razorpay", "Spring Cloud"],
      github: "https://github.com/nishit3/ProStaff",
      highlights: ["14+ microservices with Eureka discovery", "Razorpay payment integration", "AWS-ready cloud architecture"],
      images: [
        "/images/projects/prostaff-1.png",
        "/images/projects/prostaff-2.png",
        "/images/projects/prostaff-3.png"
      ]
    },
    {
      title: "Neuronify",
      description: "Train Feed-Forward Artificial Neural Networks remotely with NO CODE! Democratizing ML model training.",
      tech: ["Flutter", "Python", "Neural Networks"],
      github: "https://github.com/nishit3/Neuronify",
      highlights: ["No-code ML training", "Remote accessibility", "User-friendly interface"],
      images: [
        "/images/projects/neuronify-1.jpg",
        "/images/projects/neuronify-2.jpg",
        "/images/projects/neuronify-3.jpg"
      ],
      video: "/videos/neuronify-demo.mp4"
    }
  ];

  const experience: Experience[] = [
    {
      company: "OPLinnovate",
      role: "Software Development Engineer Intern",
      period: "Jan 2025 - Jun 2025",
      location: "Ahmedabad, India",
      achievements: [
        "Developed RESTful APIs using Java and Spring Boot for a fintech payment processing system handling 50,000+ daily transactions",
        "Reduced system latency by 30% through microservices architecture optimization and database query improvements",
        "Implemented design patterns (Factory, Singleton, Strategy) and unit testing achieving 85% code coverage",
        "Built monitoring dashboards and circuit breaker patterns to improve system reliability across microservices"
      ],
      tech: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "REST APIs"],
      certificateLink: "https://www.linkedin.com/in/nishit-chaudhary-4ab0701b4/overlay/1750319143259/single-media-viewer/?type=DOCUMENT&profileId=ACoAADHXucMBNz-ve-JFbNfZKlalqxt2kajRRJE"
    },
    {
      company: "Jio Haptik (Reliance Jio)",
      role: "Deep Learning Intern",
      period: "May 2024 - July 2024",
      location: "Mumbai, India (Remote)",
      achievements: [
        "Optimized CNN models using PyTorch for a conversational AI platform serving 5M+ daily users, improving accuracy from 84% to 92%",
        "Reduced model inference time by 40% through quantization and pruning techniques, improving response performance",
        "Experimented with neural network architectures and hyperparameter tuning to enhance intent classification performance",
        "Developed automated ML pipelines for efficient data preprocessing and model training workflows"
      ],
      tech: ["PyTorch", "CNN", "Python", "Deep Learning", "MLOps"],
      certificateLink: "https://www.linkedin.com/in/nishit-chaudhary-4ab0701b4/overlay/1720351488422/single-media-viewer/?type=DOCUMENT&profileId=ACoAADHXucMBNz-ve-JFbNfZKlalqxt2kajRRJE"
    }
  ];

  const achievements: Achievement[] = [
    {
      title: "SAP-GTU Code Unnati Innovation Marathon 2024",
      award: "1st Place",
      detail: "500+ participants",
      images: [
        "/images/achievements/sap-gtu-1.jpg",
        "/images/achievements/sap-gtu-2.jpg",
        "/images/achievements/sap-gtu-3.jpg",
        "/images/achievements/sap-gtu-4.jpg"
      ]
    },
    {
      title: "NASSCOM's The Maverick Effect AI Challenge 2024",
      award: "1st Place",
      detail: "National Level",
      images: [
        "/images/achievements/nasscom-1.jpg",
        "/images/achievements/nasscom-2.jpg",
        "/images/achievements/nasscom-3.jpg",
        "/images/achievements/nasscom-4.jpg"
      ]
    },
    {
      title: "Hackout 2023 - DAIICT",
      award: "1st Place",
      detail: "DA-IICT Gandhinagar",
      images: [
        "/images/achievements/hackout-1.jpg",
        "/images/achievements/hackout-2.jpg",
        "/images/achievements/hackout-3.jpg"
      ]
    },
    {
      title: "IEEE ICCE 2024 - Las Vegas",
      award: "Published",
      detail: "Smart Bus Transport System",
      link: "https://ieeexplore.ieee.org/document/10444144",
      images: [
        "/images/achievements/ieee-icce-1.png"
      ]
    },
    {
      title: "IEEE ICCCNT 2023 - Delhi",
      award: "Published",
      detail: "Air Pollution Monitoring System",
      link: "https://ieeexplore.ieee.org/document/10306465",
      images: [
        "/images/achievements/ieee-icccnt-1.jpg"
      ]
    }
  ];

  const skills: SkillCategory = {
    "Languages": ["Java", "Python", "JavaScript", "C++", "Kotlin"],
    "Backend": ["Spring Boot", "Node.js", "RESTful APIs", "Microservices"],
    "Frontend": ["React", "Flutter"],
    "ML/DL": ["PyTorch", "CNN", "FFANN", "GAN", "RNN", "AutoEncoders", "Neural Networks"],
    "Cloud & DevOps": ["AWS (SageMaker, Lambda, S3, DynamoDB, Rekognition)", "Docker", "Git"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className={`max-w-4xl text-center z-10 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Nishit Chaudhary
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          </div>
          
          <p className="text-2xl md:text-3xl mb-4 text-gray-300">Software Development Engineer</p>
          <p className="text-xl mb-6 text-gray-400">MS Computer Science @ Northeastern University</p>
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
            Building scalable systems | Deep Learning | Cloud Architecture | 4x Hackathon Winner
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/nishit3" target="_blank" rel="noopener noreferrer" 
               className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/nishit-chaudhary-4ab0701b4/" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="https://leetcode.com/u/Nishit_Chaudhary/" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110">
              <Code2 size={28} />
            </a>
            <a href="mailto:nishitchaudhary71@gmail.com"
               className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110">
              <Mail size={28} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
              <p className="text-sm text-gray-400">Available</p>
              <p className="font-bold">Summer 2026</p>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-bold">Boston, MA</p>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
              <p className="text-sm text-gray-400">IEEE Publications</p>
              <p className="font-bold">2 Published</p>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
              <p className="text-sm text-gray-400">DSA Problems</p>
              <p className="font-bold">500+ Solved</p>
              <p className="text-xs text-gray-500">LeetCode + GFG</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-blue-400" size={36} />
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-xl text-gray-300 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right flex items-start gap-3">
                    <div>
                      <p className="text-gray-400">{exp.period}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="View Certificate"
                      >
                        <Award size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Code2 className="text-purple-400" size={36} />
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => {
              const currentImageIndex = projectImageIndexes[idx] || 0;
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all hover:scale-105">
                  {project.video ? (
                    <div className="relative group aspect-video bg-black">
                      <video 
                        src={project.video}
                        className="w-full h-full object-contain"
                        controls
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  ) : (
                    <div className="relative group aspect-video bg-white">
                      <img 
                        src={project.images[currentImageIndex]} 
                        alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                        className="w-full h-full object-contain transition-opacity duration-500"
                        onError={(e) => {
                          e.currentTarget.src = `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=80`;
                        }}
                      />
                      
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={() => handleProjectImagePrev(idx, project.images.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={() => handleProjectImageNext(idx, project.images.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Next image"
                          >
                            <ChevronRight size={20} />
                          </button>
                          
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {project.images.map((_, imgIdx) => (
                              <div
                                key={imgIdx}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  imgIdx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2">Key Highlights:</p>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-purple-400">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-black/20">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Trophy className="text-yellow-400" size={36} />
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => {
              const currentImageIndex = achievementImageIndexes[idx] || 0;
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all hover:scale-105">
                  <div className="relative group aspect-video bg-white">
                    <img 
                      src={achievement.images[currentImageIndex]} 
                      alt={`${achievement.title} - Image ${currentImageIndex + 1}`} 
                      className="w-full h-full object-contain transition-opacity duration-500"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80`;
                      }}
                    />
                    
                    {achievement.images.length > 1 && (
                      <>
                        <button
                          onClick={() => handleAchievementImagePrev(idx, achievement.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={() => handleAchievementImageNext(idx, achievement.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {achievement.images.map((_, imgIdx) => (
                            <div
                              key={imgIdx}
                              className={`w-2 h-2 rounded-full transition-all ${
                                imgIdx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2">{achievement.title}</h3>
                        <p className="text-yellow-400 font-semibold mb-1">{achievement.award}</p>
                        <p className="text-gray-400 text-sm mb-2">{achievement.detail}</p>
                        {achievement.link && (
                          <a 
                            href={achievement.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                          >
                            View Publication <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-green-400" size={36} />
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-green-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-black/20">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-orange-400" size={36} />
            Education
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-orange-400">Northeastern University</h3>
                  <p className="text-xl text-gray-300 mt-1">Master of Science in Computer Science</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Sept 2025 - Dec 2027</p>
                  <p className="font-semibold text-orange-300">GPA: 3.67/4.0</p>
                </div>
              </div>
              <p className="text-gray-400">Khoury College of Computer Sciences, Boston, MA</p>
              <p className="text-gray-500 mt-2">Relevant Courses: Programming Design Paradigm, Algorithms, Web Development</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-orange-400">Karnavati University</h3>
                  <p className="text-xl text-gray-300 mt-1">Bachelor of Technology in Computer Science Engineering</p>
                  <p className="text-gray-400 mt-1">Specialization in AI/ML</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Graduated May 2025</p>
                  <p className="font-semibold text-orange-300">GPA: 8.61/10.0</p>
                </div>
              </div>
              <p className="text-gray-400">Gujarat, India</p>
              <p className="text-gray-500 mt-2">Relevant Courses: OOP, Data Structures, Databases, Software Engineering</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-8">
            I&apos;m actively seeking Summer 2026 SDE internship opportunities. Let&apos;s connect!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:nishitchaudhary71@gmail.com" 
               className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/nishit-chaudhary-4ab0701b4/" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 border border-white/20">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/nishit3" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 border border-white/20">
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-white/10 text-center text-gray-400">
        <p>© 2026 Nishit Chaudhary. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
