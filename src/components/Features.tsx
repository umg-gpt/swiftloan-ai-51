
import React from 'react';
import FeatureCard from './FeatureCard';
import { FileCheck, Clock, Database, Brain, Shield, IndianRupee } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-refresh-50 rounded-full px-3 py-1 mb-5 border border-refresh-100">
            <span className="text-refresh-700 text-sm font-medium">Our Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reimagine Loan Underwriting with <span className="text-refresh-600">AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Refresh combines advanced Document AI and Decision AI to transform how Indian banks evaluate and approve home loans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileCheck className="h-6 w-6" />}
            title="Smart Document Analysis"
            description="Automatically extract, validate and analyze information from loan applications, pay slips, bank statements, tax documents and more with 99% accuracy."
            delay={0.1}
          />
          
          <FeatureCard
            icon={<Brain className="h-6 w-6" />}
            title="Decision AI Engine"
            description="Our advanced risk assessment algorithms evaluate creditworthiness using thousands of data points, leading to faster, more accurate lending decisions."
            delay={0.2}
          />
          
          <FeatureCard
            icon={<Clock className="h-6 w-6" />}
            title="24-48 Hour Approvals"
            description="Reduce loan processing time from 3-4 weeks to just 1-2 days, dramatically improving customer experience and operational efficiency."
            delay={0.3}
          />
          
          <FeatureCard
            icon={<IndianRupee className="h-6 w-6" />}
            title="80% Cost Reduction"
            description="Slash operational costs by automating manual tasks, reducing paperwork, and streamlining the entire underwriting workflow."
            delay={0.4}
          />
          
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Compliance Assurance"
            description="Stay compliant with automated checks against RBI guidelines and regulations, reducing legal risks and ensuring proper documentation."
            delay={0.5}
          />
          
          <FeatureCard
            icon={<Database className="h-6 w-6" />}
            title="Reduced NPAs"
            description="Make better lending decisions with AI-powered risk assessment that significantly reduces non-performing assets and improves portfolio quality."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
