import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Yukarı çık"
      className="fixed bottom-24 right-5 z-[60] w-12 h-12 rounded-full bg-white text-mist-800 shadow-card border border-white flex items-center justify-center hover:bg-soft-50 hover:text-soft-700 transition-colors"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
