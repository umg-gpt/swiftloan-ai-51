
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
      isScrolled ? 'glass-card' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-loanai-700">
            Loan AI
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            className="text-sm text-gray-700 hover:text-loanai-600 transition-colors"
          >
            Features
          </a>
          <a 
            href="#benefits" 
            onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
            className="text-sm text-gray-700 hover:text-loanai-600 transition-colors"
          >
            Benefits
          </a>
          <a 
            href="#impact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('impact'); }}
            className="text-sm text-gray-700 hover:text-loanai-600 transition-colors"
          >
            Impact
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="text-sm text-gray-700 hover:text-loanai-600 transition-colors"
          >
            Contact
          </a>
          <Button 
            className="text-sm bg-loanai-600 hover:bg-loanai-700"
            onClick={() => scrollToSection('contact')}
          >
            Request Demo
          </Button>
        </nav>
        
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? 
            <X className="h-6 w-6 text-gray-700" /> : 
            <Menu className="h-6 w-6 text-gray-700" />
          }
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              className="text-gray-700 hover:text-loanai-600 transition-colors"
            >
              Features
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
              className="text-gray-700 hover:text-loanai-600 transition-colors"
            >
              Benefits
            </a>
            <a 
              href="#impact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('impact'); }}
              className="text-gray-700 hover:text-loanai-600 transition-colors"
            >
              Impact
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="text-gray-700 hover:text-loanai-600 transition-colors"
            >
              Contact
            </a>
            <Button 
              className="w-full justify-center bg-loanai-600 hover:bg-loanai-700"
              onClick={() => scrollToSection('contact')}
            >
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
