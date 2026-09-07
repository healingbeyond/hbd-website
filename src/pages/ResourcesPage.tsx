import { useState, type ComponentType } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ChevronDown, ClipboardCheck, Coffee, Compass, Headphones, HeartHandshake, Map } from "lucide-react";

interface ResourceItem {
  title: string;
  description: string;
  status: string;
  action?: string;
  to?: string;
  external?: boolean;
}

interface ResourceSection {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  items: ResourceItem[];
  emptyMessage?: string;
}

const featuredResources = [
  {
    title: "Five Pillars Assessment",
    eyebrow: "For Individuals",
    description: "Evaluate emotional rebuilding, identity alignment, and support structures.",
    status: "Available now",
    action: "Start Assessment",
    to: "/resources/five-pillars",
    icon: ClipboardCheck,
    accent: "border-teal bg-teal/5",
    badge: "bg-teal/15 text-teal-dark",
  },
  {
    title: "HBDI Resource Navigator",
    eyebrow: "Services and community support",
    description: "Search Canadian services, programs, funding pathways and community support by province and need.",
    status: "Available now",
    action: "Find Support",
    to: "/resources/resource-navigator",
    icon: Map,
    accent: "border-navy bg-navy/5",
    badge: "bg-navy/10 text-navy",
  },
];

const sections: ResourceSection[] = [
  {
    id: "assessments",
    title: "Assessments & Quizzes",
    description: "Structured self-reflection for individuals and caregivers.",
    icon: ClipboardCheck,
    items: [{ title: "Caregiver Pillar Path Assessment", description: "A public self-reflection tool for exploring caregiver strain, invisible grief and personal well-being. Responses are not saved or recorded.", status: "Available now", action: "Start", to: "/resources/caregiver" }],
    emptyMessage: "Additional self-reflection quizzes will be added when they are available.",
  },
  {
    id: "interactive-tools",
    title: "Interactive Tools",
    description: "Digital tools that support reflection and day-to-day recovery.",
    icon: Compass,
    items: [{ title: "Recovery Companion", description: "Daily check-ins, guided reflection, companion lessons and emotional recovery support.", status: "Available now", action: "Open", to: "/resources/recovery-companion" }],
  },
  {
    id: "journals-worksheets",
    title: "Journals & Worksheets",
    description: "Prompts and exercises for personal reflection.",
    icon: Coffee,
    items: [
      { title: "Black Coffee & Wisdom Journal", description: "A digital journal for daily reflection on purpose, growth and meaning.", status: "Available now", action: "Open", to: "/resources/bcw-journal" },
      { title: "From Stuck to Grounded", description: "A guided reflection resource named in HBDI’s resource collection.", status: "No online destination currently published" },
      { title: "The Invisible Grief Worksheet", description: "A guided reflection on grief after diagnosis, injury or a life-changing event.", status: "Not currently available online" },
      { title: "The Old You vs The New You", description: "A guided reflection on identity change - who you were, who you are now, and who you are becoming.", status: "Free printable PDF", action: "Open worksheet", to: "/resources/the-old-you-vs-the-new-you-worksheet.pdf", external: true },
    ],
  },
  {
    id: "books-guides",
    title: "Books & Guides",
    description: "Long-form resources and practical guidance.",
    icon: BookOpen,
    items: [
      { title: "More Than Your Diagnosis", description: "A guide to identity, grief, purpose and recovery after a life-changing diagnosis.", status: "Available on Amazon", action: "View on Amazon", to: "https://a.co/d/05byUF5F", external: true },
      { title: "Invisible Grief", description: "An HBDI book resource about grief following life-changing diagnosis or injury.", status: "Available on Amazon", action: "View on Amazon", to: "https://a.co/d/01okbKOQ", external: true },
      { title: "Carry Your Past: Some Assembly Required", description: "A title in HBDI’s book and guide collection.", status: "Available on Amazon", action: "View on Amazon", to: "https://a.co/d/0aOThnfX", external: true },
    ],
  },
  {
    id: "podcast-learning",
    title: "Podcast & Learning",
    description: "Conversations and educational content about life beyond diagnosis.",
    icon: Headphones,
    items: [{ title: "Healing Beyond Diagnosis Podcast", description: "Conversations about brain injury, invisible grief, identity, caregiving and recovery.", status: "Available now", action: "Listen", to: "/podcast" }],
  },
];

function ResourceRow({ item }: { item: ResourceItem }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-navy/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <h3 className="font-bold text-navy">{item.title}</h3>
        <p className="max-w-2xl text-sm leading-relaxed text-navy/65">{item.description}</p>
        <p className="text-xs font-semibold uppercase tracking-wide text-navy/65">{item.status}</p>
      </div>
      {item.to && item.action ? (
        item.external ? (
          <a href={item.to} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-light">
            {item.action}
          </a>
        ) : (
          <Link to={item.to} className="inline-flex shrink-0 items-center justify-center rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-light">
            {item.action}
          </Link>
        )
      ) : null}
    </div>
  );
}

function ResourceAccordion({ section }: { section: ResourceSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = section.icon;
  const panelId = `${section.id}-panel`;
  const buttonId = `${section.id}-button`;

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
      <h2>
        <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setIsOpen((open) => !open)} className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-gray-50 sm:px-7">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-navy"><Icon className="size-5" aria-hidden="true" /></span>
          <span className="min-w-0 flex-1">
            <span className="block text-lg font-bold text-navy">{section.title}</span>
            <span className="mt-1 block text-sm text-navy/70">{section.description}</span>
          </span>
          <ChevronDown aria-hidden="true" className={`size-5 shrink-0 text-navy/65 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </h2>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="border-t border-navy/10 bg-gray-50 p-4 sm:p-6">
        <div className="space-y-3">
          {section.items.map((item) => <ResourceRow key={item.title} item={item} />)}
          {section.emptyMessage ? <p className="rounded-xl border border-dashed border-navy/15 bg-white px-5 py-4 text-sm text-navy/70">{section.emptyMessage}</p> : null}
        </div>
      </div>
    </div>
  );
}

export function ResourcesPage() {
  return (
    <div>
      <section className="bg-gray-100 py-14 md:py-20">
        <div className="container mx-auto"><div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy/70">HBDI Library</p>
          <h1 className="text-4xl font-bold leading-tight text-navy md:text-5xl">Resources &amp; Tools</h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-orange" />
          <p className="text-lg leading-relaxed text-navy/65">Explore assessments, interactive tools and learning resources designed to support reflection and recovery.</p>
        </div></div>
      </section>

      <section className="bg-cream py-14 md:py-20" aria-labelledby="featured-resources-heading">
        <div className="container mx-auto"><div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy/70">Start here</p>
            <h2 id="featured-resources-heading" className="mt-2 text-3xl font-bold text-navy">Featured Assessments &amp; Tools</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <article key={resource.title} className={`flex flex-col rounded-2xl border-t-4 p-7 shadow-sm ${resource.accent}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-white text-navy shadow-sm"><Icon className="size-6" aria-hidden="true" /></span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${resource.badge}`}>{resource.status}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-navy">{resource.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-navy/70">{resource.eyebrow}</p>
                  <p className="mt-4 flex-1 leading-relaxed text-navy/70">{resource.description}</p>
                  {resource.to ? (
                    <Link to={resource.to} className="mt-6 inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 font-semibold text-cream transition-colors hover:bg-navy-light">{resource.action}</Link>
                  ) : (
                    <button type="button" disabled className="mt-6 cursor-not-allowed rounded-xl bg-navy/10 px-5 py-3 font-semibold text-navy/65">{resource.action}</button>
                  )}
                </article>
              );
            })}
          </div>
        </div></div>
      </section>

      <section className="bg-gray-100 py-14 md:py-20" aria-labelledby="browse-resources-heading">
        <div className="container mx-auto"><div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy/70">Browse by category</p>
            <h2 id="browse-resources-heading" className="mt-2 text-3xl font-bold text-navy">Free Resources</h2>
          </div>
          <div className="space-y-4">{sections.map((section) => <ResourceAccordion key={section.id} section={section} />)}</div>
        </div></div>
      </section>

      <section className="bg-cream py-14">
        <div className="container mx-auto"><div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <HeartHandshake className="size-8 text-teal-dark" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-navy">Need help finding the right starting point?</h2>
          <p className="text-navy/60">Contact HBDI with a question about the resources currently available.</p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-teal px-6 py-3 font-semibold text-navy transition-colors hover:bg-teal-light">Get In Touch</Link>
        </div></div>
      </section>
    </div>
  );
}
