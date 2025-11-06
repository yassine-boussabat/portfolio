import { Github, Linkedin, Mail, ArrowDown, Download, Code2, Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';
import profilePhoto from '../assets/profile.jpg';
import resumePDF from '../assets/Yassine_Boussabat_Resume.pdf';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @keyframes neon-pulse {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(6, 182, 212, 0.5),
              0 0 40px rgba(6, 182, 212, 0.3),
              0 0 60px rgba(6, 182, 212, 0.2),
              inset 0 0 20px rgba(6, 182, 212, 0.1);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 0.6),
              0 0 60px rgba(59, 130, 246, 0.4),
              0 0 90px rgba(59, 130, 246, 0.3),
              inset 0 0 30px rgba(59, 130, 246, 0.2);
          }
        }
        
        .neon-border {
          animation: neon-pulse 3s ease-in-out infinite;
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-10 animate-float" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-10 animate-float-slow" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-3xl opacity-10 animate-float" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-center lg:text-left text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 lg:mb-6 leading-tight">
                I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">Yassine Boussabat</span>
              </h1>

              <div className="mb-6 lg:mb-8">
                <p className="text-center lg:text-left text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 mb-4 lg:mb-5">
                  Developer • Designer • Leader
                </p>

                <p className="text-center lg:text-left text-sm md:text-base lg:text-lg text-slate-400 leading-relaxed mb-5 lg:mb-6 max-w-xl mx-auto lg:mx-0 transition-all duration-300 hover:text-slate-100 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] cursor-default">
                  Junior Web Developer with 6 months of experience and an active open-source contributor. Passionate about collaborative web development, integrating AI into projects, and building scalable solutions for startups.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
                    <GraduationCap size={18} className="text-blue-400" />
                    <span className="text-xs lg:text-sm text-slate-300 font-medium">CS Student</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
                    <Code2 size={18} className="text-cyan-400" />
                    <span className="text-xs lg:text-sm text-slate-300 font-medium">MERN Developer</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
                    <Briefcase size={18} className="text-purple-400" />
                    <span className="text-xs lg:text-sm text-slate-300 font-medium">Club Leader</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <Rocket size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>Let's Work Together</span>
                </button>
                <a
                  href={resumePDF}
                  download="Yassine_Boussabat_Resume.pdf"
                  className="w-full sm:w-auto px-6 py-3 border-2 border-blue-500 text-cyan-300 rounded-lg font-semibold hover:bg-blue-500/10 hover:border-cyan-400 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  <span>Download Resume</span>
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <a
                  href="https://github.com/yassine-boussabat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 lg:p-2 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-125 hover:-translate-y-1 group"
                >
                  <Github size={24} className="lg:w-7 lg:h-7 group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yassine-boussabat-291157298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 lg:p-2 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-125 hover:-translate-y-1 group"
                >
                  <Linkedin size={24} className="lg:w-7 lg:h-7 group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="mailto:yassineboussabat21@gmail.com"
                  className="p-3 lg:p-2 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-125 hover:-translate-y-1 group"
                >
                  <Mail size={24} className="lg:w-7 lg:h-7 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute -top-6 -right-6 w-24 h-24 lg:w-32 lg:h-32 bg-cyan-400 rounded-full blur-xl opacity-20 animate-float pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 lg:w-40 lg:h-40 bg-blue-500 rounded-full blur-xl opacity-20 animate-float-slow pointer-events-none" />
                <div className="absolute top-1/2 -right-12 w-20 h-20 lg:w-28 lg:h-28 bg-purple-400 rounded-full blur-xl opacity-15 animate-float pointer-events-none" />
                
                <div className="neon-border w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[460px] xl:h-[460px] rounded-full overflow-hidden border-4 lg:border-[5px] border-cyan-400 transition-all duration-500 hover:scale-110 group relative">
                  <img
                    src={profilePhoto}
                    alt="Yassine Boussabat"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToProjects}
              className="animate-bounce p-3 text-cyan-400 hover:text-blue-300 transition-colors"
              aria-label="Scroll to projects section"
            >
              <ArrowDown size={40} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
