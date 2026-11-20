import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 bg-[#080A0C]">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-[#12161C] border border-[#C5A059]/30 shadow-2xl">
        <span className="font-serif text-6xl font-bold text-[#C5A059] block mb-2">
          404
        </span>
        <h1 className="font-display text-2xl font-bold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#A6A29A] font-light mb-8 leading-relaxed">
          The architectural plan or page you are looking for has been moved or does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D10] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
