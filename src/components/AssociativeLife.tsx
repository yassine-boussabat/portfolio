import { useInView } from '../hooks/useInView';
import { Users, Code2, Trophy, ExternalLink } from 'lucide-react';

import cllPhoto2 from '../assets/cll-photo2.jpg';
import genesisPhoto from '../assets/genesis-photo.jpg';
import workshopPhoto from '../assets/workshop-photo.jpg';

const AssociativeLife = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const activities = [
    {
      icon: Users,
      title: 'Leader',
      organization: 'CLL - Free Software Club (FST)',
      period: 'Oct. 2024 - Oct. 2025',
      image: cllPhoto2,
      description: 'From a passionate member to media manager, and finally a leader—upgraded by taking initiative and creating impact. Led a growing community of 70+ members and organized 20+ technical workshops and events including GENESIS and JPO FST. Beyond events, fostered a culture of collaboration where members felt empowered to contribute and grow together.',
      stats: '70+ Members',
      facebookUrl: 'https://www.facebook.com/CLL.club.fst',
    },
    {
      icon: Trophy,
      title: 'Founder & Project Lead',
      organization: 'GENESIS 1.0 & 2.0',
      period: 'Mar. 2024 - Feb. 2025',
      image: genesisPhoto,
      description: 'From a vision to a movement—GENESIS was founded as a competitive programming event attracting 200+ cumulative participants. The initiative featured algorithmic challenges, expert execution, and partnerships that elevated the tech community and inspired developers.',
      stats: '200+ Participants',
      facebookUrl: 'https://www.facebook.com/genesis.event',
    },
    {
      icon: Code2,
      title: 'Open Source Contributor',
      organization: 'Workshops & GitHub',
      period: '2024 - Present',
      image: workshopPhoto,
      description: 'Three years at CLL taught the power of sharing knowledge. That is why workshops were created on Git, GitHub, and competitive programming for 200+ developers. Through active GitHub work (150+ contributions), learning happens best when we teach and code together.',
      stats: '200+ Learners + 150+ Contributions',
      facebookUrl: 'https://github.com/YassineBoussabat',
    },
  ];

  return (
    <section id="associative" className="relative min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-20 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2 leading-relaxed">
            Leadership & Community
          </h2>
          <p className="text-lg text-cyan-100 text-center mb-12 max-w-2xl mx-auto">
            Beyond coding, passionate about building communities and empowering fellow developers.
          </p>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                
                <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/50 transition-all md:h-[400px]">
                  <div className="grid md:grid-cols-2 md:h-full">
                    
                    <div className={`relative overflow-hidden order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} h-64 md:h-full`}>
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-r from-transparent via-blue-900/40 to-slate-800' : 'bg-gradient-to-l from-transparent via-blue-900/40 to-slate-800'}`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-30 mix-blend-overlay" />
                    </div>

                    <div className={`relative p-8 md:p-10 flex flex-col justify-center order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="inline-flex items-center gap-2 mb-4 flex-wrap">
                        <span className="px-3 py-1 bg-blue-500/20 text-cyan-300 rounded-full text-xs font-semibold border border-blue-400/30">
                          {activity.period}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                        {activity.title}
                      </h3>
                      
                      <p className="text-lg text-cyan-300 font-semibold mb-4">
                        {activity.organization}
                      </p>

                      <p className="text-base text-slate-300 leading-relaxed mb-6">
                        {activity.description}
                      </p>

                      <div className="inline-flex items-center gap-3">
                        <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow-lg">
                          <span className="text-white font-bold text-sm">{activity.stats}</span>
                        </div>
                        <a
                          href={activity.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-400/30 hover:bg-blue-500/30 transition-all hover:scale-110 flex items-center justify-center"
                          aria-label="Visit Facebook page"
                        >
                          <ExternalLink size={20} className="text-cyan-300" />
                        </a>
                      </div>
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

export default AssociativeLife;
