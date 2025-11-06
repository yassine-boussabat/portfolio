import { useInView } from '../hooks/useInView';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const educationData = [
    {
      degree: 'Bachelor\'s Degree in Computer Science',
      institution: 'Faculty of Sciences of Tunis (FST)',
      location: 'Tunis, Tunisia',
      period: '2023 - Present',
      description: 'Expected Graduation: June 2026',
    },
    {
      degree: 'Baccalaureate in Experimental Sciences',
      institution: 'Lycée Sadiki',
      location: 'Tunis, Tunisia',
      period: '2019 - 2023',
      description: 'Graduated with "Mention Bien" (Good Honors)',
    },
  ];

  return (
    <section id="education" className="relative min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all" />
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-blue-500/20 group-hover:border-blue-400/50 transition-all backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                      <GraduationCap size={32} className="text-white" />
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-cyan-100 mb-3">{edu.institution}</p>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-cyan-200">
                          <Calendar size={18} className="mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center text-cyan-200">
                          <MapPin size={18} className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="text-cyan-100/80">{edu.description}</p>
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

export default Education;
