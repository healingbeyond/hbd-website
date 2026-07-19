import { Link } from "react-router-dom";

interface ResourceSection {
  icon: string;
  title: string;
  description: string;
  items: { title: string; description: string; type: string }[];
}

const sections: ResourceSection[] = [
  {
    icon: "📚",
    title: "Books",
    description: "Written resources grounded in Beyond Diagnosis Theory™.",
    items: [
      {
        title: "More Than Your Diagnosis",
        description: "The foundational guide to understanding life after a life-changing diagnosis — identity, grief, purpose, and recovery.",
        type: "Book",
      },
    ],
  },
  {
    icon: "📝",
    title: "Worksheets",
    description: "Guided self-reflection exercises for individuals and caregivers.",
    items: [
      {
        title: "The Invisible Grief Worksheet",
        description: "Explore the grief nobody talks about — the grief that comes after diagnosis, injury, or life-changing events.",
        type: "Worksheet",
      },
      {
        title: "The Old You vs The New You",
        description: "A guided reflection on identity change — who you were, who you are now, and who you're becoming.",
        type: "Worksheet",
      },
    ],
  },
  {
    icon: "🧭",
    title: "Recovery Tools",
    description: "Interactive tools built to support emotional recovery and self-reflection.",
    items: [
      {
        title: "Five Pillars Assessment",
        description: "Evaluate emotional rebuilding, identity alignment, and support structures across five core dimensions.",
        type: "Assessment",
      },
      {
        title: "Caregiver Assessment",
        description: "Measure caregiver strain, invisible grief, and personal well-being.",
        type: "Assessment",
      },
      {
        title: "Recovery Companion",
        description: "Daily check-ins, guided reflection, companion lessons, and emotional recovery support.",
        type: "App",
      },
      {
        title: "Black Coffee & Wisdom Journal",
        description: "Daily reflection journal focused on purpose, growth, and meaning.",
        type: "App",
      },
    ],
  },
  {
    icon: "🤝",
    title: "Caregiver Resources",
    description: "Dedicated resources for caregivers navigating their own invisible journey.",
    items: [
      {
        title: "Caregiver Assessment",
        description: "A self-reflection tool specifically for caregivers — measuring strain, burnout, and well-being.",
        type: "Assessment",
      },
      {
        title: "Resource Navigator — Caregiver Hub",
        description: "Canadian caregiver-specific resources including respite programs, support groups, and mental health services.",
        type: "Tool",
      },
    ],
  },
  {
    icon: "🗺️",
    title: "Guides",
    description: "Navigating the systems and supports available after diagnosis.",
    items: [
      {
        title: "Resource Navigator",
        description: "Search Canadian resources by province and condition — funding, support groups, crisis pathways, and more.",
        type: "Tool",
      },
    ],
  },
  {
    icon: "🎙️",
    title: "Podcast Resources",
    description: "Episodes and conversations about brain injury, grief, identity, and caregiving.",
    items: [
      {
        title: "Healing Beyond Diagnosis Podcast",
        description: "Real conversations about brain injury, invisible grief, identity rebuilding, caregiving, and recovery stories.",
        type: "Podcast",
      },
    ],
  },
  {
    icon: "📰",
    title: "Articles",
    description: "Written explorations of the topics that matter most to recovery.",
    items: [
      {
        title: "The Weight Nobody Sees: Caregiver Burnout and Invisible Grief",
        description: "Exploring the grief caregivers carry — the identity erosion, the burnout, and the permission to need support.",
        type: "Article",
      },
      {
        title: "Surviving vs. Truly Living",
        description: "What real recovery looks like beyond clinical treatment — moving from surviving to truly living.",
        type: "Article",
      },
    ],
  },
];

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Book: "bg-orange/10 text-orange-dark",
    Worksheet: "bg-teal/10 text-teal-dark",
    Assessment: "bg-navy/10 text-navy",
    App: "bg-teal/10 text-teal-dark",
    Tool: "bg-orange/10 text-orange-dark",
    Podcast: "bg-navy/10 text-navy",
    Article: "bg-warm-gray text-navy/60",
  };

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[type] || "bg-navy/5 text-navy/60"}`}>
      {type}
    </span>
  );
}

export function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-teal text-sm font-semibold tracking-widest uppercase">Resource Library</p>
            <h1 className="text-4xl md:text-5xl font-bold text-cream leading-tight">
              Resources
            </h1>
            <div className="w-16 h-1 bg-orange mx-auto rounded-full" />
            <p className="text-cream/60 text-lg leading-relaxed">
              Books, worksheets, guides, recovery tools, caregiver resources, and more — all grounded in Beyond Diagnosis Theory™. This library grows over time.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Sections */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section) => (
              <div key={section.title} className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{section.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-navy">{section.title}</h2>
                    <p className="text-navy/50 text-sm">{section.description}</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-xl p-6 border border-navy/5 hover:border-teal/20 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                          <p className="text-navy/60 leading-relaxed">{item.description}</p>
                        </div>
                        <TypeBadge type={item.type} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              Looking for Something Specific?
            </h2>
            <p className="text-cream/60 text-lg">
              This library is always growing. If you're looking for a specific resource or want to suggest something, reach out.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal text-navy font-semibold rounded-xl text-lg hover:bg-teal-light transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
