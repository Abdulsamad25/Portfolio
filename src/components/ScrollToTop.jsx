import React from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ showScrollTop }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="right-8 bottom-8 z-50 fixed bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;