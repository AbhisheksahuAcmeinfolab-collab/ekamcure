'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(progress);
      }

      if (currentScroll > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Circle calculation
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-blue-100 shadow-[0_10px_25px_-5px_rgba(5,49,97,0.3)] text-blue-900 transition-all duration-300 hover:scale-110 hover:bg-blue-900 hover:text-white group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Progress Ring */}
      <svg className="absolute w-full h-full -rotate-90 p-0.5" viewBox="0 0 50 50">
        {/* Background Circle Track */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          className="stroke-slate-200/60"
          strokeWidth="3"
          fill="none"
        />
        {/* Animated Progress Stroke */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          className="stroke-blue-600 group-hover:stroke-white transition-all duration-150"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Up Arrow Icon */}
      <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
