import { Sparkles, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded-lg">
                <Sparkles className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white">
                Revive My <span className="text-gray-400">Spaces</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Professional home organization services in Newton, MA. We transform cluttered spaces into organized, functional, and beautiful homes.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@revivemyspaces.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#services" className="hover:text-white transition-colors">Closet Organization</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Kitchen & Pantry</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Home Office</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Whole Home</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="/#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; 2025 Revive My Spaces. All rights reserved. Serving Newton, MA and surrounding areas.
        </div>
      </div>
    </footer>
  );
}
