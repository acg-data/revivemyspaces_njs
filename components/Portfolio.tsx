import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Master Closet Transformation',
      location: 'Newton, MA',
      description: 'Complete closet overhaul with custom shelving and organization systems.',
    },
    {
      title: 'Kitchen & Pantry Revamp',
      location: 'Brookline, MA',
      description: 'Zone-based organization creating an efficient cooking and storage space.',
    },
    {
      title: 'Home Office Setup',
      location: 'Chestnut Hill, MA',
      description: 'Productive workspace design with cable management and filing systems.',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4">Our Portfolio</h2>
          <p className="text-gray-600 text-lg">See how we've transformed cluttered spaces into organized havens</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl h-64 mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <span className="text-gray-400 font-medium">Before/After Photo</span>
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
