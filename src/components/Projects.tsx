import { useInView } from '../hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';

// Import your project images
import pferksImage from '../assets/pferks-project.png';
import clubintiImage from '../assets/clubinti-project.png';
import batri9Image from '../assets/batri9-project.png';
import pythonImage from '../assets/python-project.png';

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      title: 'PFErks - Document Management Platform',
      description: 'The development of a MERN-based platform integrating the Google Drive API to manage more than 300 PDF documents. The platform incorporates Ollama TinyLlama model to provide intelligent summarization and semantic search',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript','Ollama'],
      github: 'https://github.com/yassine-boussabat/pfe-library-project',
      demo: 'https://pfe-library-project.vercel.app/',
      image: pferksImage,
      period: 'Oct. 2025 - Nov. 2025',
    },
    {
      title: 'CLUBINTI - Student Club Management',
      description: 'The development of a web platform that allows students to discover and interact with clubs, while also making it easier for clubs to manage their members and activities',
      technologies: ['NestJS', 'TypeScript', 'MongoDB', 'REST API', 'Node.js'],
      github: 'https://github.com/yassine-boussabat/CLUBINTI/tree/main',
      demo: null,
      image: clubintiImage,
      period: 'Mar. 2025 - Sept. 2025',
    },
    {
      title: 'BATRI9 CHAT - Discord AI Bot',
      description: 'The development of a Discord bot that doesn’t just reply with static responses, but actually learns from the information provided by users. This bot can store that information in a MySQL database and retrieve it when the user later',
      technologies: ['Python', 'Discord.py', 'MySQL', 'Flask'],
      github: 'https://github.com/yassine-boussabat/Discord-chatbot-BATRI9',
      demo: null,
      image: batri9Image,
      period: 'June 2024 - July 2024',
    },
    {
      title: 'Python games',
      description: 'Collection including: Pygame SHUMP game with OOP, collision system and animations. Sudoku Solver using backtracking algorithm for optimized resolution.',
      technologies: ['Python', 'Pygame', 'Backtracking Algorithm', 'OOP'],
      github: 'https://github.com/yassine-boussabat/AI_Sudoku',
      demo: null,
      image: pythonImage,
      period: 'July 2024 - Aug 2024',
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2 leading-relaxed">
            Projects
          </h2>


          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 h-full ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-all" />
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/50 transition-all backdrop-blur-sm h-full flex flex-col">
                  <div className="relative overflow-hidden h-48 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/60 group-hover:to-slate-900/80 transition-colors" />
                    {project.period && (
                      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-400/30">
                        <span className="text-xs text-cyan-300">{project.period}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-cyan-100/80 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-500/20 px-3 py-1 rounded-full text-sm text-cyan-300 border border-blue-400/30 hover:bg-blue-500/30 hover:scale-105 transition-all cursor-default h-fit"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-300 hover:text-blue-300 transition-all hover:scale-110"
                      >
                        <Github size={20} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cyan-300 hover:text-blue-300 transition-all hover:scale-110"
                        >
                          <ExternalLink size={20} />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
