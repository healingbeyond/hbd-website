import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/assessments", label: "Assessments & Tools" },
  { to: "/podcast", label: "Podcast" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="Healing Beyond Diagnosis Initiative" className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
            <div className="hidden sm:block">
              <div className="text-cream text-sm md:text-base font-semibold leading-tight tracking-wide">Healing Beyond Diagnosis</div>
              <div className="text-teal text-xs tracking-widest uppercase">Initiative</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-teal bg-white/10"
                    : "text-cream/80 hover:text-teal hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-cream transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-cream transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-cream transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-1">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-teal bg-white/10"
                      : "text-cream/80 hover:text-teal hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
