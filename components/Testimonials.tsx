import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Newton, MA',
      rating: 5,
      text: 'Revive My Spaces completely transformed our chaotic closet into an organized dream. I can actually find my clothes now! The team was professional, efficient, and thoughtful throughout the entire process.',
      service: 'Closet Organization',
    },
    {
      name: 'Michael R.',
      location: 'Brookline, MA',
      rating: 5,
      text: 'Our kitchen went from cluttered mess to organized oasis. Meal prep is actually enjoyable now. Worth every penny for the peace of mind and time saved.',
      service: 'Kitchen & Pantry',
    },
    {
      name: 'Jennifer K.',
      location: 'Chestnut Hill, MA',
      rating: 5,
      text: 'I was skeptical at first, but the results speak for themselves. My home office is now a productive workspace instead of a dumping ground. Highly recommend!',
      service: 'Home Office',
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg">Real stories from real homeowners in Newton and beyond</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card-dark rounded-2xl p-8 hover:shadow-2xl transition-all">
              <Quote className="w-8 h-8 text-gray-500 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-white fill-white" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-700 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-xs text-gray-600 mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-400">
            <Star className="w-5 h-5" />
            <span className="text-sm font-semibold">5-Star Rated</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm font-semibold">100+ Homes Organized</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm font-semibold">Serving Newton Since 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}
