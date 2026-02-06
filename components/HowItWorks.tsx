import { Search, ClipboardCheck, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Free Consultation',
      description: 'We visit your home to understand your space, lifestyle, and organizational goals. No obligation, just solutions.',
    },
    {
      icon: ClipboardCheck,
      title: 'Custom Design',
      description: 'We create a personalized organization plan tailored to your space, budget, and aesthetic preferences.',
    },
    {
      icon: Sparkles,
      title: 'Transformation',
      description: 'Our team works efficiently to transform your space while you relax. We handle everything from start to finish.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Simple, stress-free process to transform your home</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-black mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
