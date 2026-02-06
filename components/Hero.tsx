import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              <span>Serving Newton & Surrounding Areas</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-6 leading-tight">
              Transform Your <span className="text-gray-500">Space</span>, Transform Your <span className="text-gray-500">Life</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Professional home organization services that bring order, beauty, and peace to your home. From cluttered to curated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all">
                View Our Work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <p>Trusted by 100+ happy homeowners</p>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-black">Spaces Organized</p>
                      <p className="text-sm text-gray-500">This month</p>
                    </div>
                  </div>
                  <p className="text-4xl font-extrabold text-black">24</p>
                </div>
                <div className="bg-black rounded-xl p-6 shadow-lg text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-bold">Client Satisfaction</p>
                      <p className="text-sm text-gray-400">Average rating</p>
                    </div>
                  </div>
                  <p className="text-4xl font-extrabold">5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
