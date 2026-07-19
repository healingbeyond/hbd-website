import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const submitContact = useAction(api.contact.submitContact);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setError(false);
    try {
      await submitContact({ name: name.trim(), email: email.trim(), message: message.trim() });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-cream leading-tight">
              Contact
            </h1>
            <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
            <p className="text-cream/60 text-lg leading-relaxed">
              Have a question, want to connect, or interested in the initiative? Reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-navy">Get In Touch</h2>
                <div className="w-12 h-1 bg-teal rounded-full" />
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-navy/40 text-sm font-semibold uppercase tracking-wider">Founder</p>
                  <p className="text-navy text-lg font-medium">Corey Furnival</p>
                </div>

                <div className="space-y-2">
                  <p className="text-navy/40 text-sm font-semibold uppercase tracking-wider">Organization</p>
                  <p className="text-navy text-lg font-medium">Healing Beyond Diagnosis Initiative</p>
                </div>

                <div className="space-y-2">
                  <p className="text-navy/40 text-sm font-semibold uppercase tracking-wider">Email</p>
                  <a
                    href="mailto:corey@healingbeyonddiagnosis.ca"
                    className="text-teal text-lg font-medium hover:text-teal-dark transition-colors"
                  >
                    corey@healingbeyonddiagnosis.ca
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-navy/5">
                <p className="text-navy/60 text-sm leading-relaxed italic">
                  "Healing was never meant to be faced alone."
                </p>
                <p className="text-navy/40 text-xs mt-3">
                  Ottawa Valley · Renfrew County · Ontario
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 border border-teal/20 text-center space-y-4">
                  <div className="text-5xl">🧡</div>
                  <h3 className="text-2xl font-bold text-navy">Message Sent</h3>
                  <p className="text-navy/60 text-lg">
                    Thank you for reaching out. Corey will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-teal font-medium hover:text-teal-dark transition-colors mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-navy/5 shadow-sm space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                      Something went wrong. Please try again or email us directly at{" "}
                      <a href="mailto:corey@healingbeyonddiagnosis.ca" className="font-semibold underline">
                        corey@healingbeyonddiagnosis.ca
                      </a>
                    </div>
                  )}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-navy">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-navy">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-navy">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-xl text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-teal text-navy font-semibold rounded-xl text-lg hover:bg-teal-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-center text-navy/40 text-sm">
                    Or email us directly at{" "}
                    <a
                      href="mailto:corey@healingbeyonddiagnosis.ca"
                      className="text-teal font-medium hover:text-teal-dark transition-colors"
                    >
                      corey@healingbeyonddiagnosis.ca
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-warm-gray">
        <div className="container mx-auto">
          <p className="text-navy/40 text-xs leading-relaxed text-center max-w-3xl mx-auto">
            The Healing Beyond Diagnosis Initiative provides educational, reflective, and recovery-focused
            resources. These tools are not intended to diagnose, treat, or replace professional medical,
            psychological, legal, or rehabilitation services.
          </p>
        </div>
      </section>
    </div>
  );
}
