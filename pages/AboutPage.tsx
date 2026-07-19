import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase">About the Initiative</p>
          <h1 className="text-4xl md:text-5xl font-bold text-cream leading-tight">
            When Treatment Ends, Emotional Recovery Often Begins
          </h1>
          <div className="w-16 h-1 bg-orange mx-auto rounded-full" />
          <p className="text-cream/60 text-lg leading-relaxed">
            Healing Beyond Diagnosis was built by someone who lived the gap — and decided to close it.
          </p>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Corey Furnival
            </h2>
            <p className="text-teal font-semibold">Founder, Healing Beyond Diagnosis Initiative</p>
          </div>

          <div className="space-y-6 text-navy/70 text-lg leading-relaxed">
            <p>
              Corey Furnival understands the gap in recovery services — because he's lived it.
            </p>
            <p>
              After sustaining injuries that would later be understood as brain injury, Corey experienced
              what millions of people face every year: the medical system treated the visible damage, but
              nobody addressed what happened to the person inside. The grief for a life that changed in an instant.
              The identity crisis that followed. The isolation. The frustration of being told he looked fine
              when nothing felt fine.
            </p>
            <p>
              Years of navigating invisible injury, misunderstanding, and a system that wasn't designed
              for the kind of recovery he needed led Corey to a critical realization: the gap between
              clinical treatment and emotional recovery is where people fall through the cracks.
            </p>
            <p>
              And caregivers — the people holding everything together — are falling through those same cracks,
              carrying their own invisible grief that nobody acknowledges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GapSection() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-cream">
              The Problem
            </h2>
            <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-cream/80 text-lg leading-relaxed">
            <p>
              When someone receives a life-changing diagnosis — brain injury, stroke, chronic illness,
              disability, or trauma — the medical system focuses on stabilizing the body. And then, almost
              overnight, treatment ends.
            </p>
            <p>
              The person is sent home with paperwork, a list of medications, and a well-meaning "give it time."
              But nobody sits them down and says:
            </p>
            <div className="bg-white/5 rounded-2xl p-8 space-y-4 border border-white/10">
              <p className="text-cream italic">"You're going to grieve for who you used to be."</p>
              <p className="text-cream italic">"You're going to question your identity."</p>
              <p className="text-cream italic">"The people around you are going to struggle too."</p>
              <p className="text-cream italic">"None of that makes you broken. It makes you human."</p>
            </div>
            <p>
              Invisible grief — the grief that comes after diagnosis — is one of the most common and least
              recognized forms of suffering. It affects individuals, caregivers, families, and entire communities.
              And it doesn't have a clinical treatment protocol.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheorySection() {
  return (
    <section className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-6">
            <p className="text-teal text-sm font-semibold tracking-widest uppercase">The Framework</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Beyond Diagnosis Theory™
            </h2>
            <div className="w-16 h-1 bg-orange mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-navy/70 text-lg leading-relaxed">
            <p>
              Beyond Diagnosis Theory™ is the theoretical framework Corey developed to address
              what the medical system overlooks. It is the foundation of the entire Healing Beyond
              Diagnosis Initiative.
            </p>
            <p>
              The theory is built on a core truth:
            </p>
            <blockquote className="border-l-4 border-orange pl-6 py-4 bg-white rounded-r-xl">
              <p className="text-navy text-xl md:text-2xl italic font-medium">
                "Recovery is not returning to who you were. Recovery is learning who you are now."
              </p>
            </blockquote>
            <p>
              The theory addresses five interconnected dimensions of recovery that are typically
              left unaddressed after diagnosis:
            </p>
            <div className="space-y-4">
              {[
                { title: "Identity", desc: "Who am I after this happened? The old you isn't gone — they became the foundation for who you're becoming." },
                { title: "Grief", desc: "The invisible grief that comes from losing a life, an identity, a future — even when you're still alive. It's real. It counts." },
                { title: "Purpose", desc: "Purpose doesn't disappear after diagnosis. It changes shape. Finding meaning again is a critical part of healing." },
                { title: "Connection", desc: "Isolation after diagnosis is one of the most destructive forces in recovery. Rebuilding connection is essential." },
                { title: "Resilience", desc: "Not the toxic kind that tells you to push through. The real kind — the ability to rebuild, adapt, and keep going." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-navy/5">
                  <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                  <p className="text-navy/60">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              The theory also recognizes caregivers as integral to the recovery ecosystem. They carry
              their own invisible grief — watching someone they love change while losing parts of
              their own identity in the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              The Vision
            </h2>
            <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-navy/70 text-lg leading-relaxed">
            <p>
              Healing Beyond Diagnosis is working toward a future where emotional recovery is recognized
              as essential — not optional. Where invisible grief is acknowledged. Where caregivers receive
              the support they deserve. Where identity rebuilding is part of every recovery plan.
            </p>
            <p>
              The initiative builds free, accessible tools grounded in Beyond Diagnosis Theory™ — assessments,
              journals, resource navigators, and educational content — so that anyone navigating life after
              diagnosis can find support, regardless of where they live or what they can afford.
            </p>
            <blockquote className="border-l-4 border-teal pl-6 py-2">
              <p className="text-navy text-xl italic">
                "When the world sees a diagnosis, we see a person fighting to be seen."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialsSection() {
  const credentials = [
    "Social Service Worker (SSW) Diploma — Canadore College",
    "Certified Grief Coach",
    "Certified in Neurodivergence",
    "Certified in Cognitive Behavioral Therapy (CBT)",
    "Advanced Grief Counseling Certification",
    "Certified Clinical Trauma Professional (CCTP)",
    "Grief Work in Virtual Settings Certification",
    "Complex Trauma Training — Dr. Janina Fisher",
    "Trauma Defined — Bessel van der Kolk, MD",
  ];

  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-cream">
              Credentials &amp; Training
            </h2>
            <div className="w-16 h-1 bg-orange mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {credentials.map((credential) => (
              <div
                key={credential}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <span className="text-teal mt-1 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.766 6.966l-4 4a.75.75 0 01-1.06 0l-1.6-1.6a.75.75 0 111.06-1.06L7.266 9.4l3.44-3.44a.75.75 0 111.06 1.06z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="text-cream/80 text-sm">{credential}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal text-navy font-semibold rounded-xl text-lg hover:bg-teal-light transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div>
      <AboutHero />
      <FounderSection />
      <GapSection />
      <TheorySection />
      <VisionSection />
      <CredentialsSection />
    </div>
  );
}
