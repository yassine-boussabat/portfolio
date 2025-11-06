import { useInView } from '../hooks/useInView';
import { Calendar } from 'lucide-react';
import aventouraLogo from '../assets/aventoura-logo.jpg';

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Aventoura - Travel Technology Startup',
      period: 'Sept. 2025 - Present',
      type: 'Part-time',
      logo: aventouraLogo,
      description: 'Maintaining and improving the Aventoura platform based on user feedback.',
      responsibilities: [
        'Delivered 15+ improvements: equipment management fixes, i18next FR-EN integration, ... ',
        'Stabilized Stripe payment flows',
        'Enhanced platform reliability through continuous maintenance and optimization',
        'Collaborated with team to implement user-requested features',
      ],
      technologies: ['Next.js 13', 'React 18', 'Express.js', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Full-Stack Developer Intern',
      company: 'Aventoura - Travel Technology Startup',
      period: 'June 2025 - Aug. 2025',
      type: 'Internship',
      logo: aventouraLogo,
      description: 'Implemented 8 missing features identified during beta phase of a production MERN platform.',
      responsibilities: [
        'Built JWT authentication, password recovery, Stripe integration, email verification, and booking workflow',
        'Integrated Axios, asynchronous state management, and multi-role access control (admin, vendor, customer)',
        'Collaborated with 2 senior developers via GitHub pull requests and code reviews',
        'Documented API endpoints with Postman collections for team reference',
      ],
      technologies: ['Next.js 13', 'React 18', 'Express.js', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <section id="experience" className="relative min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2 leading-relaxed">
            Experience
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-600" />
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-transparent animate-pulse" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div
                    className={`relative transition-all duration-700 ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`md:flex ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      } items-center gap-8`}
                    >
                      <div className="md:w-1/2" />

                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full items-center justify-center z-10 shadow-lg shadow-blue-500/50 p-2 border-4 border-slate-800">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="md:w-1/2">
                        <div className="group relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all" />
                          <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-blue-500/20 group-hover:border-blue-400/50 transition-all backdrop-blur-sm">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="md:hidden bg-white p-2 rounded-lg flex-shrink-0 shadow-lg shadow-blue-500/50 w-14 h-14 flex items-center justify-center">
                                <img 
                                  src={exp.logo} 
                                  alt={`${exp.company} logo`}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="flex-grow">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <h3 className="text-xl font-bold text-cyan-300">
                                    {exp.title}
                                  </h3>
                                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-cyan-300 rounded-full border border-blue-400/30">
                                    {exp.type}
                                  </span>
                                </div>
                                <p className="text-lg text-cyan-100 mb-2">{exp.company}</p>
                                <div className="flex items-center text-cyan-200 mb-3">
                                  <Calendar size={16} className="mr-2" />
                                  <span className="text-sm">{exp.period}</span>
                                </div>
                              </div>
                            </div>

                            <p className="text-cyan-100/80 mb-4">{exp.description}</p>

                            <ul className="space-y-2 mb-4">
                              {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="text-cyan-100/80 text-sm flex">
                                  <span className="mr-2 text-cyan-400">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="bg-blue-500/20 px-3 py-1 rounded-full text-xs text-cyan-300 border border-blue-400/30 hover:bg-blue-500/30 hover:scale-105 transition-all cursor-default"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < experiences.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
