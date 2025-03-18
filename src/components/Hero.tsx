
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 md:pt-0"
      style={{ 
        background: `radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(56, 189, 248, 0.1), transparent 40%),
                     radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.05), transparent 25%),
                     radial-gradient(circle at 0% 100%, rgba(14, 165, 233, 0.05), transparent 25%)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 w-full">
        <div className="max-w-4xl mx-auto text-center staggered-fade-in">
          <div className="inline-flex items-center bg-loanai-50 rounded-full px-3 py-1 mb-8 border border-loanai-100">
            <span className="text-loanai-700 text-sm font-medium">Revolutionizing Home Loans for Indian Banks</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AI-Powered Home Loan Underwriting for the 
            <span className="text-loanai-600"> Modern Bank</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Loan AI transforms slow, manual loan processing into seamless digital journeys. 
            Cut approval times from weeks to hours, reduce costs, and make smarter lending decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-loanai-600 hover:bg-loanai-700 text-white font-medium px-8 py-6 rounded-full h-auto"
              onClick={() => scrollToSection('contact')}
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 rounded-full h-auto"
              onClick={() => scrollToSection('features')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-6 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background z-10"></div>
    </div>
  );
};

export default Hero;
