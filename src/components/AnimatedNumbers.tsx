
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumbersProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({
  value,
  duration = 1500,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value]);

  const startAnimation = () => {
    const animateCount = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const currentValue = Math.floor(progress * value);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    frameRef.current = requestAnimationFrame(animateCount);
  };

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {displayValue.toLocaleString('en-US', { 
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals 
      })}
      {suffix}
    </span>
  );
};

export default AnimatedNumbers;
