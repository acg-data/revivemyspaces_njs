import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Image
        src="/hero-bg.png"
        alt="Beautifully organized closet"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4" />
            <span>Serving Newton & Surrounding Areas</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Transform Your <span className="text-gray-300">Space</span>, Transform Your <span className="text-gray-300">Life</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-lg mx-auto">
            Professional home organization services that bring order, beauty, and peace to your home. From cluttered to curated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
              View Our Work
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-300 justify-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
            </div>
            <p>Trusted by 100+ happy homeowners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
