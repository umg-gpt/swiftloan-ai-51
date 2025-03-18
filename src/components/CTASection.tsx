
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="impact" className="py-24 px-6 md:px-10 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: `radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.1), transparent 40%),
                      radial-gradient(circle at 80% 30%, rgba(14, 165, 233, 0.08), transparent 30%)` 
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="p-8 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center bg-loanai-100 rounded-full px-3 py-1 mb-6 border border-loanai-200">
                <span className="text-loanai-700 text-sm font-medium">Ready to Transform Your Lending</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI-Driven Underwriting is No Longer Optional
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                As India's housing market expands, only banks that embrace AI technology will maintain 
                competitive advantage. Join leading Indian banks already transforming their lending with Loan AI.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-loanai-600 hover:bg-loanai-700 text-white font-medium px-8 py-6 rounded-full h-auto w-full sm:w-auto"
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 rounded-full h-auto w-full sm:w-auto"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Why AI-Driven Underwriting is Essential for India
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 card-hover-effect">
              <h4 className="text-xl font-medium mb-4">Booming Housing Market</h4>
              <p className="text-gray-600">
                India's housing finance market is projected to grow at a CAGR of 22% through 2026. 
                Traditional underwriting can't keep pace with this explosive demand.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 card-hover-effect">
              <h4 className="text-xl font-medium mb-4">Digital Transformation</h4>
              <p className="text-gray-600">
                India's digital infrastructure and initiatives like UPI have created an ecosystem 
                where consumers expect fast, digital-first financial services.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 card-hover-effect">
              <h4 className="text-xl font-medium mb-4">Competitive Pressure</h4>
              <p className="text-gray-600">
                Fintech disruption is forcing traditional lenders to innovate. Banks that don't 
                embrace AI risk losing market share to more agile competitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
