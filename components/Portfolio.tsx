import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Master Closet Transformation',
      location: 'Newton, MA',
      description: 'Complete closet overhaul with custom shelving and organization systems.',
      beforeImage: '/portfolio/closet-before.jpg',
      afterImage: '/portfolio/closet-after.jpg',
    },
    {
      title: 'Kitchen & Pantry Revamp',
      location: 'Brookline, MA',
      description: 'Zone-based organization creating an efficient cooking and storage space.',
      beforeImage: '/portfolio/kitchen-before.jpg',
      afterImage: '/portfolio/kitchen-after.jpg',
    },
    {
      title: 'Home Office Setup',
      location: 'Chestnut Hill, MA',
      description: 'Productive workspace design with cable management and filing systems.',
      beforeImage: '/portfolio/office-before.jpg',
      afterImage: '/portfolio/office-after.jpg',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4">Before & After Gallery</h2>
          <p className="text-gray-600 text-lg mb-8">See how we've transformed cluttered spaces into organized havens</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all">
            Start Your Transformation <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Before/After Container */}
              <div className="glass-card rounded-2xl overflow-hidden mb-6 hover:shadow-xl transition-all">
                <div className="grid grid-cols-2 h-64">
                  {/* Before */}
                  <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border-r border-white/20">
                    <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</span>
                    <span className="text-gray-500 text-sm font-medium">Before Photo</span>
                  </div>
                  {/* After */}
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">After</span>
                    <span className="text-gray-500 text-sm font-medium">After Photo</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-black">{project.title}</h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </div>
              <p className="text-sm text-gray-500 mb-2">{project.location}</p>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
