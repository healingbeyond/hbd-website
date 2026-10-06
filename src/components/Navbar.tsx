import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/bdrs", label: "BDRS" },
  { to: "/steph-sara", label: "STEPH / SARA" },
  { to: "/resources", label: "Resources & Tools" },
  { to: "/podcast", label: "Podcast" },
  { to: "/contact", label: "Contact" },
];

const COLIB_BOOKING_URL = "https://www.colib.io/Booking/healing-beyond-diagnosis-initiative";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/95 backdrop-blur-md border-b border-navy/10 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 gap-3">
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="Healing Beyond Diagnosis Initiative" className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
            <div className="hidden sm:block">
              <div className="text-navy text-sm md:text-base font-semibold leading-tight tracking-wide">Healing Beyond Diagnosis</div>
              <div className="text-teal text-xs tracking-widest uppercase">Initiative</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to || (link.to === "/resources" && (location.pathname.startsWith("/resources/") || location.pathname.startsWith("/assessments")))
                    ? "text-teal-dark bg-teal/10"
                    : "text-navy/75 hover:text-teal-dark hover:bg-warm-gray"
                }`}
                aria-current={location.pathname === link.to ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={COLIB_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-lg bg-teal text-white text-sm font-semibold hover:bg-teal-dark transition-colors shadow-sm"
            >
              Book Appointment
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2 ml-auto">
            <a
              href={COLIB_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-teal text-white text-sm font-semibold shadow-sm hover:bg-teal-dark transition-colors whitespace-nowrap"
              aria-label="Book an appointment with Healing Beyond Diagnosis"
            >
              Book
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-warm-gray transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <span className={`block w-6 h-0.5 bg-navy transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-navy transition-opacity ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-navy transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden pb-4 border-t border-navy/10 mt-1">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.to || (link.to === "/resources" && (location.pathname.startsWith("/resources/") || location.pathname.startsWith("/assessments")))
                      ? "text-teal-dark bg-teal/10"
                      : "text-navy/75 hover:text-teal-dark hover:bg-warm-gray"
                  }`}
                  aria-current={location.pathname === link.to ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={COLIB_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mx-2 mt-2 px-4 py-3 rounded-lg bg-teal text-white text-base font-semibold hover:bg-teal-dark transition-colors shadow-sm text-center"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
