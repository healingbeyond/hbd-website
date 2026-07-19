import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/80 to-navy" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal/5 via-transparent to-orange/5" />
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Healing Beyond Diagnosis Initiative" className="h-28 w-28 md:h-36 md:w-36 rounded-full shadow-2xl" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight tracking-tight">
            Healing Beyond Diagnosis
            <span className="block text-teal mt-2">Initiative</span>
          </h1>
          <div className="space-y-3">
            <p className="text-xl md:text-2xl lg:text-3xl text-cream/90 font-light leading-relaxed italic">
              Recovery isn't about returning to who you were.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-orange font-light leading-relaxed italic">
              It's about discovering who you're becoming.
            </p>
          </div>
          <p className="text-cream/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Supporting emotional recovery after brain injury, chronic illness, disability, trauma, and life-changing diagnoses. Because when clinical treatment ends, emotional recovery often begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/assessments"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal text-navy font-semibold rounded-xl text-lg hover:bg-teal-light transition-all shadow-lg shadow-teal/20 hover:shadow-teal/30"
            >
              Explore Assessments &amp; Tools
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-cream/30 text-cream font-semibold rounded-xl text-lg hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function GapSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            What Happens After the Diagnosis?
          </h2>
          <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
          <div className="space-y-6 text-navy/70 text-lg leading-relaxed">
            <p>
              After a brain injury, stroke, chronic illness, or life-changing diagnosis, the medical system focuses on stabilizing the body. And then — treatment ends.
            </p>
            <p>
              You're sent home with paperwork and told to "give it time." But no one talks about the grief you feel for the life you lost. No one addresses the identity crisis. No one prepares caregivers for the emotional weight they're about to carry alone.
            </p>
            <p className="text-navy font-medium text-xl">
              The gap between clinical treatment and emotional recovery is where people get lost.
            </p>
            <p>
              Healing Beyond Diagnosis exists to close that gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheoryIntroSection() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <p className="text-teal text-sm font-semibold tracking-widest uppercase">The Foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-cream">
              Beyond Diagnosis Theory™
            </h2>
            <div className="w-16 h-1 bg-orange mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <p className="text-cream/80 text-lg leading-relaxed">
                Beyond Diagnosis Theory™ is the framework behind everything we do. It was born from lived experience — from the understanding that recovery is not about returning to who you were before.
              </p>
              <p className="text-cream/80 text-lg leading-relaxed">
                Recovery is about learning who you are now. It's about rebuilding identity, acknowledging invisible grief, finding purpose again, and recognizing that emotional recovery is just as important as physical recovery.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-cream/80 text-lg leading-relaxed">
                The theory addresses what the medical system overlooks: that a diagnosis changes more than your body. It changes how you see yourself, how others see you, and how you move through the world.
              </p>
              <p className="text-cream/80 text-lg leading-relaxed">
                Caregivers carry their own invisible grief — losing the person they knew, while fighting to support the person who remains. The theory recognizes them too.
              </p>
              <blockquote className="border-l-4 border-orange pl-6 py-2">
                <p className="text-orange text-xl italic font-light">
                  "When the world sees a diagnosis, we see a person fighting to be seen."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusAreasSection() {
  const areas = [
    {
      icon: "💔",
      title: "Invisible Grief",
      description: "The grief that comes after diagnosis — mourning a life, identity, or future that changed in an instant. It's real, and it deserves recognition.",
    },
    {
      icon: "🪞",
      title: "Identity Rebuilding",
      description: "When a diagnosis changes everything, the question becomes: who am I now? Rebuilding identity is central to true recovery.",
    },
    {
      icon: "🌊",
      title: "Emotional Recovery",
      description: "Clinical treatment addresses the body. Emotional recovery addresses the person. Both matter. Both deserve support.",
    },
    {
      icon: "🤝",
      title: "Caregiver Support",
      description: "Over 8 million Canadians provide unpaid care. They carry invisible grief of their own — and they deserve support too.",
    },
    {
      icon: "🧭",
      title: "Purpose & Meaning",
      description: "Purpose doesn't disappear after diagnosis. It changes shape. Finding meaning again is a critical part of the healing journey.",
    },
    {
      icon: "🌅",
      title: "Life After Diagnosis",
      description: "There is life beyond the diagnosis, beyond the injury, beyond the label. It looks different — and that's not a lesser life.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            What We Focus On
          </h2>
          <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-navy/5"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{area.title}</h3>
              <p className="text-navy/60 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoIsThisForSection() {
  const audiences = [
    "Brain injury survivors (ABI/TBI)",
    "Stroke survivors",
    "People living with chronic illness",
    "People living with disability",
    "Trauma survivors",
    "Caregivers",
    "Anyone navigating a life-changing diagnosis or transition",
  ];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Who This Is For
            </h2>
            <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
            <p className="text-navy/70 text-lg">
              If you've been through something that changed your life — or you're supporting someone who has — this initiative was built for you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-navy/5"
              >
                <span className="text-teal mt-0.5 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.707 8.707l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 111.414 1.414z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="text-navy/80 font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesPreviewSection() {
  const features = [
    {
      title: "Assessments & Tools",
      description: "Free self-reflection assessments for individuals and caregivers. Understand where you are in your recovery journey.",
      link: "/assessments",
      color: "teal",
    },
    {
      title: "Resource Navigator",
      description: "A Canadian resource search engine. Find funding, support groups, crisis pathways, and caregiver resources by province.",
      link: "/assessments",
      color: "orange",
    },
    {
      title: "Podcast",
      description: "Healing Beyond Diagnosis — real conversations about brain injury, invisible grief, identity, caregiving, and recovery.",
      link: "/podcast",
      color: "teal",
    },
    {
      title: "Resources",
      description: "Books, worksheets, guides, recovery tools, and caregiver resources — all grounded in Beyond Diagnosis Theory™.",
      link: "/resources",
      color: "orange",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-light">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cream">
            Tools &amp; Resources
          </h2>
          <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Everything built to support healing beyond the diagnosis.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-teal/30"
            >
              <div className={`w-12 h-1 rounded-full mb-6 ${feature.color === "teal" ? "bg-teal" : "bg-orange"}`} />
              <h3 className="text-xl font-bold text-cream mb-3 group-hover:text-teal transition-colors">
                {feature.title}
              </h3>
              <p className="text-cream/60 leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <blockquote className="text-3xl md:text-4xl font-bold text-navy leading-tight italic">
            "Healing was never meant to be faced alone."
          </blockquote>
          <div className="flex items-center justify-center gap-2 text-orange">
            <span className="text-2xl">♥</span>
          </div>
          <p className="text-navy/50 text-lg tracking-wide">
            Support. Healing. Hope.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy text-cream font-semibold rounded-xl text-lg hover:bg-navy-light transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <GapSection />
      <FocusAreasSection />
      <TheoryIntroSection />
      <WhoIsThisForSection />
      <FeaturesPreviewSection />
      <ClosingSection />
    </div>
  );
}
