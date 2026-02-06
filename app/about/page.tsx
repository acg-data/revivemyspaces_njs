import { ArrowLeft, Sparkles, Mail } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white text-black antialiased min-h-screen">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              About Revive My Spaces
            </h1>
            <p className="text-gray-600 text-lg">
              Transforming homes and lives through the power of organization
            </p>
          </div>

          <div className="mb-20">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-black mb-4">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Revive My Spaces was founded with a simple mission: to help homeowners in Newton and the surrounding areas reclaim their spaces and their peace of mind. We believe that an organized home leads to an organized life.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                What started as a passion for creating beautiful, functional spaces has grown into a trusted home organization service. We've helped hundreds of families transform chaotic closets, overwhelming kitchens, and cluttered homes into organized havens.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-black rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To provide personalized, professional organization solutions that transform houses into homes. We don't just organize your belongings—we create systems that work for your lifestyle, making it easy to maintain order long after we've left.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">100+</h3>
              <p className="text-gray-600">Spaces Transformed</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">5.0</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Newton</h3>
              <p className="text-gray-600">Based & Serving</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-8">Ready to Transform Your Space?</h2>
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all">
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
