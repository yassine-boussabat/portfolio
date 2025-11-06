import { useInView } from '../hooks/useInView';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Building robust and scalable applications with modern technologies',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful and intuitive user experiences',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing boundaries',
    },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="relative group mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all" />
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 border border-blue-500/20 backdrop-blur-sm">
              <p className="text-lg text-cyan-100 leading-relaxed mb-6">
                I'm a passionate developer with a love for creating elegant solutions to complex problems.
                My journey in technology has been driven by curiosity and a desire to make a positive impact
                through code.
              </p>
              <p className="text-lg text-cyan-100 leading-relaxed">
                With a strong foundation in both frontend and backend development, I enjoy building
                full-stack applications that are not only functional but also beautiful and user-friendly.
                I believe in continuous learning and staying up-to-date with the latest industry trends.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-all" />
                <div className="relative bg-slate-800 rounded-xl p-8 border border-blue-500/20 group-hover:border-blue-400/50 transition-all backdrop-blur-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <skill.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-cyan-100/80">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
