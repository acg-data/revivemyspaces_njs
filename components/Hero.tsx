import { ArrowRight, Star, Sparkles } from 'lucide-react';
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
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              <span>Serving Newton & Surrounding Areas</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Transform Your <span className="text-gray-300">Space</span>, Transform Your <span className="text-gray-300">Life</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0">
              Professional home organization services that bring order, beauty, and peace to your home. From cluttered to curated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 glass-dark text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                View Our Work
              </a>
            </div>
          </div>

          {/* Right Stats - Floating Glass Cards */}
          <div className="hidden lg:block relative">
            {/* Stats Card 1 */}
            <div className="glass-card-dark rounded-2xl p-6 mb-4 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Spaces Organized</p>
                  <p className="text-3xl font-extrabold text-white">100+</p>
                </div>
              </div>
            </div>

            {/* Stats Card 2 */}
            <div className="glass-card rounded-2xl p-6 ml-8 animate-float animation-delay-1000">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Client Rating</p>
                  <p className="text-3xl font-extrabold text-black">5.0</p>
                </div>
              </div>
            </div>

            {/* Stats Card 3 */}
            <div className="glass-card-dark rounded-2xl p-6 mt-4 animate-float animation-delay-2000">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">MA</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Serving</p>
                  <p className="text-xl font-extrabold text-white">Newton, MA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats Row */}
        <div className="lg:hidden mt-12 grid grid-cols-3 gap-4">
          <div className="glass-card-dark rounded-xl p-4 text-center">
            <p className="text-2xl font-extrabold text-white">100+</p>
            <p className="text-gray-400 text-xs">Spaces</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-2xl font-extrabold text-black">5.0</p>
            <p className="text-gray-600 text-xs">Rating</p>
          </div>
          <div className="glass-card-dark rounded-xl p-4 text-center">
            <p className="text-lg font-extrabold text-white">Newton</p>
            <p className="text-gray-400 text-xs">MA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
