import { Check, ArrowRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Closet Organization',
      description: 'Transform chaotic closets into beautifully organized spaces with custom systems that maximize every inch.',
      benefits: ['Custom shelving & storage', 'Seasonal rotation systems', 'Accessory organization'],
      image: '/closet-organization.jpg',
    },
    {
      title: 'Kitchen & Pantry',
      description: 'Create efficient, beautiful kitchens where everything has its place and meal prep becomes a joy.',
      benefits: ['Zone-based organization', 'Container systems', 'Expiration date management'],
      image: '/kitchen-organization.jpg',
    },
    {
      title: 'Home Office',
      description: 'Design productive workspaces that inspire focus and creativity while keeping clutter at bay.',
      benefits: ['File organization', 'Tech cable management', 'Ergonomic setup'],
      image: '/office-organization.jpg',
    },
    {
      title: 'Whole Home',
      description: 'Comprehensive home transformation from attic to basement, creating cohesive organization throughout.',
      benefits: ['Room-by-room strategy', 'Family-friendly systems', 'Maintenance plans'],
      image: '/whole-home-organization.jpg',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg mb-8">Comprehensive organization solutions for every space in your home</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all">
            Get Started <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all group">
              {/* Placeholder for service image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-gray-400 font-medium">{feature.title} Image</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-black flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all group-hover:text-gray-600"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
