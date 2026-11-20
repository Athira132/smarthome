import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4 bg-[#FAF8F5]">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-white border border-[#E2DDD3] shadow-lg">
        <span className="font-serif text-6xl font-bold text-[#B38E46] block mb-2">
          404
        </span>
        <h1 className="font-display text-2xl font-bold text-[#14171A] mb-3">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#57606A] font-normal mb-8 leading-relaxed">
          The architectural plan or page you are looking for has been moved or does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#B38E46] hover:bg-[#96722E] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
