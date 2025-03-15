
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        'glass-card card-hover-effect rounded-2xl p-6 md:p-8 h-full',
        className
      )}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        animation: isVisible ? `fadeIn 0.5s ease-out ${delay}s forwards, slideUp 0.5s ease-out ${delay}s forwards` : 'none',
      }}
    >
      <div className="flex flex-col h-full">
        <div className="rounded-full bg-refresh-50 p-3 w-12 h-12 flex items-center justify-center text-refresh-600 mb-5">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FeatureCard;
