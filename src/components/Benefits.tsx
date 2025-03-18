
import React, { useRef, useEffect, useState } from 'react';
import AnimatedNumbers from './AnimatedNumbers';
import { ArrowRight } from 'lucide-react';

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-gradient-to-b from-white to-loanai-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <div className="sticky top-32">
              <div className="inline-flex items-center bg-white rounded-full px-3 py-1 mb-5 border border-loanai-100">
                <span className="text-loanai-700 text-sm font-medium">Real World Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Lending with Measurable Results
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Loan AI doesn't just promise efficiency—we deliver quantifiable benefits that transform how Indian banks approach home loan underwriting.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-loanai-100 p-1 mr-4">
                    <ArrowRight className="h-5 w-5 text-loanai-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Faster Time-to-Decision</h3>
                    <p className="text-gray-600">Cut approval times from weeks to days, delighting customers and reducing dropout rates.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-loanai-100 p-1 mr-4">
                    <ArrowRight className="h-5 w-5 text-loanai-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Dramatic Cost Savings</h3>
                    <p className="text-gray-600">Reduce operational expenses by eliminating manual reviews and paperwork handling.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-loanai-100 p-1 mr-4">
                    <ArrowRight className="h-5 w-5 text-loanai-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Higher Loan Quality</h3>
                    <p className="text-gray-600">Make better-informed decisions that reduce NPA rates and improve portfolio performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-8">
              <div className="glass-card rounded-2xl p-8 card-hover-effect">
                <p className="text-gray-600 mb-4">From Weeks to Days</p>
                <div className="flex items-baseline mb-1">
                  <h3 className="text-5xl font-bold text-loanai-700">
                    {isVisible && <AnimatedNumbers value={10} suffix="x" />}
                  </h3>
                  <span className="ml-2 text-xl">Faster</span>
                </div>
                <p className="text-gray-600">Approve loans in 24-48 hours instead of 3-4 weeks</p>
              </div>
              
              <div className="glass-card rounded-2xl p-8 card-hover-effect">
                <p className="text-gray-600 mb-4">Operational Savings</p>
                <div className="flex items-baseline mb-1">
                  <h3 className="text-5xl font-bold text-loanai-700">
                    {isVisible && <AnimatedNumbers value={80} suffix="%" />}
                  </h3>
                  <span className="ml-2 text-xl">Cost Reduction</span>
                </div>
                <p className="text-gray-600">Lower processing costs through automation</p>
              </div>
              
              <div className="glass-card rounded-2xl p-8 card-hover-effect">
                <p className="text-gray-600 mb-4">Improved Portfolio Quality</p>
                <div className="flex items-baseline mb-1">
                  <h3 className="text-5xl font-bold text-loanai-700">
                    {isVisible && <AnimatedNumbers value={40} suffix="%" />}
                  </h3>
                  <span className="ml-2 text-xl">NPA Reduction</span>
                </div>
                <p className="text-gray-600">Make smarter lending decisions</p>
              </div>
              
              <div className="glass-card rounded-2xl p-8 card-hover-effect">
                <p className="text-gray-600 mb-4">Compliance Confidence</p>
                <div className="flex items-baseline mb-1">
                  <h3 className="text-5xl font-bold text-loanai-700">
                    {isVisible && <AnimatedNumbers value={99} suffix="%" />}
                  </h3>
                  <span className="ml-2 text-xl">Accuracy</span>
                </div>
                <p className="text-gray-600">In regulatory adherence and documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
