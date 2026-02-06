import { Check } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Closet Organization',
      description: 'Transform chaotic closets into beautifully organized spaces with custom systems that maximize every inch.',
      benefits: ['Custom shelving & storage', 'Seasonal rotation systems', 'Accessory organization'],
    },
    {
      title: 'Kitchen & Pantry',
      description: 'Create efficient, beautiful kitchens where everything has its place and meal prep becomes a joy.',
      benefits: ['Zone-based organization', 'Container systems', 'Expiration date management'],
    },
    {
      title: 'Home Office',
      description: 'Design productive workspaces that inspire focus and creativity while keeping clutter at bay.',
      benefits: ['File organization', 'Tech cable management', 'Ergonomic setup'],
    },
    {
      title: 'Whole Home',
      description: 'Comprehensive home transformation from attic to basement, creating cohesive organization throughout.',
      benefits: ['Room-by-room strategy', 'Family-friendly systems', 'Maintenance plans'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">Comprehensive organization solutions for every space in your home</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-black flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
