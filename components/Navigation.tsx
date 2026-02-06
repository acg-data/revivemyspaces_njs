'use client';

import { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 nav-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-black p-2 rounded-lg shadow-lg group-hover:shadow-xl transition-all">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-black">
              Revive My <span className="text-gray-600">Spaces</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              Portfolio
            </button>
            <Link 
              href="/blog" 
              className="text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
            <a href={isHomePage ? "#contact" : "/#contact"} className="bg-black text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-800 hover:shadow-lg transition-all">
              Free Consultation
            </a>
          </div>

          <button 
            className="md:hidden text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="block w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              Portfolio
            </button>
            <Link 
              href="/blog" 
              onClick={closeMobileMenu}
              className="block w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className="block w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              About
            </Link>
            <a 
              href={isHomePage ? "#contact" : "/#contact"} 
              onClick={closeMobileMenu}
              className="block w-full text-center bg-black text-white px-5 py-3 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all mt-4"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
