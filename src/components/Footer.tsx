
import React from 'react';
import { cn } from '@/lib/utils';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="/" className="text-2xl font-bold text-loanai-700 mb-6 inline-block">
              Loan AI
            </a>
            <p className="text-gray-600 mb-6">
              AI-powered loan underwriting for Indian banks and financial institutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/umangg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-loanai-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-600 hover:text-loanai-600 transition-colors">Features</a></li>
                <li><a href="#benefits" className="text-gray-600 hover:text-loanai-600 transition-colors">Benefits</a></li>
                <li><a href="#impact" className="text-gray-600 hover:text-loanai-600 transition-colors">Impact</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-loanai-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li><a href="#impact" className="text-gray-600 hover:text-loanai-600 transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-loanai-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-loanai-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-loanai-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 Loan AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-loanai-600 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-loanai-600 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
