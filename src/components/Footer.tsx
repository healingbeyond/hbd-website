import { Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-navy text-cream/80">
      {/* Main Footer */}
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Healing Beyond Diagnosis Initiative" className="h-14 w-14 rounded-full" />
              <div>
                <div className="text-cream text-lg font-semibold leading-tight">Healing Beyond Diagnosis</div>
                <div className="text-teal text-xs tracking-widest uppercase">Initiative</div>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Support. Healing. Hope.
            </p>
            <p className="text-cream/50 text-sm">
              Ottawa Valley · Renfrew County · Ontario
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-teal font-semibold text-sm tracking-widest uppercase">Navigate</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-cream/60 hover:text-teal transition-colors text-sm">Home</Link>
              <Link to="/podcast" className="text-cream/60 hover:text-teal transition-colors text-sm">Podcast</Link>
              <Link to="/about" className="text-cream/60 hover:text-teal transition-colors text-sm">About</Link>
              <Link to="/bdrs" className="text-cream/60 hover:text-teal transition-colors text-sm">BDRS</Link>
              <Link to="/resources" className="text-cream/60 hover:text-teal transition-colors text-sm">Resources & Tools</Link>
              <Link to="/contact" className="text-cream/60 hover:text-teal transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-teal font-semibold text-sm tracking-widest uppercase">Contact</h3>
            <div className="space-y-2">
              <p className="text-cream/60 text-sm">Corey Furnival, Founder</p>
              <a
                href="mailto:corey@healingbeyonddiagnosis.ca"
                className="text-teal hover:text-teal-light transition-colors text-sm"
              >
                corey@healingbeyonddiagnosis.ca
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-teal font-semibold text-sm tracking-widest uppercase">Follow HBDI</h3>
            <div className="flex flex-col gap-3">
              <a href="https://ca.linkedin.com/in/corey-furnival-257204414" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-cream/60 transition-colors hover:text-teal">
                <span className="flex size-9 items-center justify-center rounded-lg bg-white/10"><Linkedin className="size-4" aria-hidden="true" /></span>
                LinkedIn updates
              </a>
              <a href="https://www.facebook.com/HealingBeyondDiagnosis/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-cream/60 transition-colors hover:text-teal">
                <span className="flex size-9 items-center justify-center rounded-lg bg-white/10"><Facebook className="size-4" aria-hidden="true" /></span>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6">
          <p className="text-cream/40 text-xs leading-relaxed text-center max-w-3xl mx-auto">
            The Healing Beyond Diagnosis Initiative provides educational, reflective, and recovery-focused resources.
            These tools are not intended to diagnose, treat, or replace professional medical, psychological, legal,
            or rehabilitation services. If you are experiencing a medical emergency or crisis, contact emergency
            services or a qualified healthcare professional immediately.
          </p>
          <p className="text-cream/30 text-xs text-center mt-4">
            © {new Date().getFullYear()} Healing Beyond Diagnosis Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
