import { BookOpen, ClipboardCheck, Coffee, Compass, Headphones, HeartHandshake, Map as MapIcon, Search, X } from "lucide-react";
import { type ComponentType, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

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
      { title: "From Stuck to Grounded", description: "A guided journal for moving from overwhelm toward steadier ground through reflection and practical prompts.", status: "Free printable PDF", action: "Open journal", to: "/resources/from-stuck-to-grounded-journal.pdf", external: true },
      { title: "Invisible Grief Worksheets", description: "Guided reflection on grief after diagnosis, injury or a life-changing event.", status: "Free printable PDF", action: "Open worksheets", to: "/resources/invisible-grief-worksheets.pdf", external: true },
      { title: "Caregiver Reflection Sheets", description: "Reflection prompts created for caregivers navigating change, strain and their own emotional well-being.", status: "Free printable PDF", action: "Open reflection sheets", to: "/resources/caregiver-reflection-sheets.pdf", external: true },
      { title: "Recovery Planning Tools", description: "Practical worksheets for identifying needs, priorities, supports and next steps in recovery.", status: "Free printable PDF", action: "Open planning tools", to: "/resources/recovery-planning-tools.pdf", external: true },
      { title: "The Old You vs The New You", description: "A guided reflection on identity change - who you were, who you are now, and who you are becoming.", status: "Free printable PDF", action: "Open worksheet", to: "/resources/the-old-you-vs-the-new-you-worksheet.pdf", external: true },
    ],
  },
  {
    id: "caregiver-support",
    title: "Caregiver Support",
    description: "Free practical tools for people supporting a loved one after illness, injury or diagnosis.",
    icon: HeartHandshake,
    items: [
      { title: "HBDI Caregiver Support Toolkit", description: "A free 13-page guide covering caregiver well-being, preparing for discharge, changing roles, communication, support circles and finding help.", status: "Free downloadable PDF", action: "Open caregiver toolkit", to: "/HBDI_Caregiver_Support_Toolkit_2026.pdf", external: true },
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


type Pathway = "individual" | "caregiver" | "services" | "learning";
const pathways = [
  { id: "individual" as const, title: "Living With a Diagnosis or Injury", description: "Explore identity, grief, adjustment and recovery.", icon: Compass },
  { id: "caregiver" as const, title: "Caregiver & Family Support", description: "Support for those caring for someone else.", icon: HeartHandshake },
  { id: "services" as const, title: "Find Community Support", description: "Connect with services and practical help.", icon: MapIcon },
  { id: "learning" as const, title: "Learning, Journals & Education", description: "Books, worksheets, podcasts and reflection.", icon: BookOpen },
];

const additionalResources: (ResourceItem & { categories: Pathway[] })[] = [
  { title: "HBDI Resource Navigator", description: "Find services and supports based on your location and needs.", status: "Free online tool", action: "Find support", to: "/resources/resource-navigator", categories: ["services", "caregiver", "individual"] },
  { title: "Beyond Diagnosis Recovery System (BDRS)", description: "HBDI’s structured recovery system brings together survivor and caregiver assessment tools, reflection, and support planning in a secure member environment. Login is required.", status: "Member login required", action: "Open BDRS", to: "https://bdrs.healingbeyonddiagnosis.ca/login", external: true, categories: ["individual", "caregiver"] },
  { title: "Young Caregivers Association", description: "Find specialist support for young people in caregiving roles.", status: "External organization", action: "Visit organization", to: "https://youngcaregivers.ca/", external: true, categories: ["caregiver", "services"] },
];

function getCategories(title: string): Pathway[] {
  if (title === "HBDI Caregiver Support Toolkit" || title.includes("Caregiver")) return ["caregiver", "individual"];
  if (title === "Recovery Companion" || title === "Recovery Planning Tools" || title === "The Old You vs The New You" || title === "Invisible Grief Worksheets") return ["individual", "learning"];
  if (title === "From Stuck to Grounded" || title === "Black Coffee & Wisdom Journal") return ["individual", "learning"];
  return ["learning", "individual"];
}
const catalog = [
  ...sections.flatMap(section => section.items.map(item => ({ ...item, categories: getCategories(item.title) }))),
  ...additionalResources,
];

export function ResourcesPage() {
  const [params, setParams] = useSearchParams();
  const selected = params.get("path") as Pathway | null;
  const activePath = pathways.some(path => path.id === selected) ? selected : null;
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState("all");
  const resourceTypes = ["all", "free", "assessments", "reading"];
  const filtered = catalog.filter(item => {
    if (activePath && !item.categories.includes(activePath)) return false;
    const text = (item.title + " " + item.description + " " + item.status).toLowerCase();
    if (search.trim() && !text.includes(search.trim().toLowerCase())) return false;
    if (kind === "free" && !(/free|available now/i.test(item.status))) return false;
    if (kind === "assessments" && !(/assessment|recovery companion/i.test(item.title))) return false;
    if (kind === "reading" && !(/pdf|amazon|podcast|journal/i.test(item.status + " " + item.title))) return false;
    return true;
  });
  const navigate = (value: Pathway | null) => {
    setParams(value ? { path: value } : {});
    setKind("all");
    setSearch("");
    document.getElementById("resource-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy/70">HBDI Resource Library</p>
          <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Find the support you need</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/70">Explore free guides, tools, assessments, and trusted resources for life beyond diagnosis.</p>
        </div>
      </section>

      <section className="bg-cream py-10 md:py-14">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-5 text-2xl font-bold text-navy">What brings you here today?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pathways.map(path => {
              const Icon = path.icon;
              return (
                <button key={path.id} type="button" onClick={() => navigate(path.id)}
                  aria-pressed={activePath === path.id}
                  className={`flex min-h-32 items-start gap-4 rounded-2xl border-2 p-5 text-left shadow-sm transition hover:border-teal ${activePath === path.id ? "border-teal bg-teal/10" : "border-navy/10 bg-white"}`}>
                  <span className="rounded-xl bg-teal/10 p-3 text-navy"><Icon className="size-6" /></span>
                  <span><span className="block text-lg font-bold text-navy">{path.title}</span><span className="mt-1 block text-sm text-navy/65">{path.description}</span></span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 md:py-16" id="resource-results">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-navy/65">Browse and search</p>
              <h2 className="text-3xl font-bold text-navy">{activePath ? pathways.find(p => p.id === activePath)?.title : "All resources"}</h2>
            </div>
            {activePath && <button onClick={() => navigate(null)} className="inline-flex items-center gap-2 rounded-lg border border-navy/20 bg-white px-4 py-2 font-semibold text-navy"><X className="size-4" /> View all pathways</button>}
          </div>
          <label className="flex items-center gap-3 rounded-xl border border-navy/20 bg-white px-4 py-3">
            <Search className="size-5 text-navy/60" />
            <span className="sr-only">Search all resources</span>
            <input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search caregiver burnout, grief, stroke recovery..." className="w-full bg-transparent text-navy outline-none placeholder:text-navy/45" />
          </label>
          <div className="my-5 flex flex-wrap gap-2" aria-label="Filter resource types">
            {resourceTypes.map(type => (
              <button key={type} type="button" onClick={() => setKind(type)} aria-pressed={kind === type}
                className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize ${kind === type ? "border-navy bg-navy text-cream" : "border-navy/15 bg-white text-navy hover:border-teal"}`}>
                {type === "all" ? "All types" : type === "free" ? "Free resources" : type === "assessments" ? "Assessments & tools" : "Reading & listening"}
              </button>
            ))}
          </div>
          <p aria-live="polite" className="mb-4 text-sm text-navy/65">{filtered.length} resource{filtered.length === 1 ? "" : "s"} found</p>
          <div className="grid gap-3">
            {filtered.map(item => <ResourceRow key={item.title + item.to} item={item} />)}
            {filtered.length === 0 && <div className="rounded-xl bg-white p-8 text-center text-navy/70">No resources match those filters. Try another search or view all resources.</div>}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-t-4 border-teal bg-white p-6">
              <h2 className="text-xl font-bold text-navy">Featured: Caregiver Support Toolkit</h2>
              <p className="mt-2 text-navy/65">Free practical worksheets to help caregivers plan, communicate, and protect their own well-being.</p>
              <a href="/HBDI_Caregiver_Support_Toolkit_2026.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-lg bg-navy px-5 py-3 font-semibold text-cream">Open free toolkit</a>
            </div>
            <div className="rounded-2xl border-t-4 border-teal bg-white p-6">
              <h2 className="text-xl font-bold text-navy">Need help finding services?</h2>
              <p className="mt-2 text-navy/65">Use HBDI’s public Resource Navigator for support programs and community connections.</p>
              <Link to="/resources/resource-navigator" className="mt-4 inline-flex rounded-lg bg-navy px-5 py-3 font-semibold text-cream">Open Resource Navigator</Link>
            </div>
          </div>
          <div className="mt-10 text-center">
            <HeartHandshake className="mx-auto size-8 text-teal-dark" />
            <h2 className="mt-3 text-2xl font-bold text-navy">Still not sure where to start?</h2>
            <p className="mt-2 text-navy/65">Contact HBDI with your question.</p>
            <Link to="/contact" className="mt-4 inline-flex rounded-xl bg-teal px-6 py-3 font-semibold text-navy">Get in touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
