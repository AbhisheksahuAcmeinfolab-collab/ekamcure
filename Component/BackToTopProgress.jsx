'use client';

import { useEffect } from 'react';


export default function BackToTopProgress() {
  useEffect(() => {
    const progressWrap = document.querySelector('.progress-wrap');
    const progressPath = document.querySelector('.progress-wrap path');

    if (!progressWrap || !progressPath) return;

    const pathLength = progressPath.getTotalLength();

    // Initialize path
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        pathLength - (scroll * pathLength) / height;

      progressPath.style.strokeDashoffset = progress;

      if (scroll > 150) {
        progressWrap.classList.add('active-progress');
      } else {
        progressWrap.classList.remove('active-progress');
      }
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    progressWrap.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <>
      {/* Back to Top Progress Circle */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
    </>
  );
}
