import { Link } from "react-router-dom";

interface ToolCard {
  id: string;
  title: string;
  audience?: string;
  description: string;
  icon: string;
}

const tools: ToolCard[] = [
  {
    id: "five-pillars",
    title: "Five Pillars Assessment",
    audience: "For Individuals",
    description:
      "Evaluate emotional rebuilding, identity alignment, and support structures.",
    icon: "🏛️",
  },
  {
    id: "caregiver",
    title: "Caregiver Assessment",
    audience: "For Caregivers",
    description:
      "Measure caregiver strain, invisible grief, and personal well-being while supporting someone you love.",
    icon: "🤝",
  },
  {
    id: "recovery-companion",
    title: "Recovery Companion",
    description:
      "Daily check-ins, guided reflection, companion lessons, and emotional recovery support.",
    icon: "🧭",
  },
  {
    id: "bcw-journal",
    title: "Black Coffee & Wisdom Journal",
    description: "Daily reflection. Purpose. Growth. Meaning.",
    icon: "☕",
  },
  {
    id: "resource-navigator",
    title: "Resource Navigator",
    description:
      "Canadian resource search. Funding finder. Caregiver supports. Recovery resources. Crisis pathways.",
    icon: "🗺️",
  },
];

function AssessmentCard({ tool }: { tool: ToolCard }) {
  return (
    <Link
      to={`/assessments/${tool.id}`}
      className="block rounded-2xl border border-navy/10 bg-white hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 group"
    >
      <div className="p-6 md:p-8 flex items-center gap-5">
        <div className="text-4xl shrink-0 transition-transform duration-300 group-hover:scale-110">
          {tool.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-navy group-hover:text-teal-dark transition-colors">
            {tool.title}
          </h3>
          {tool.audience && (
            <span className="inline-block mt-1 px-3 py-0.5 bg-teal/10 text-teal text-xs font-semibold rounded-full">
              {tool.audience}
            </span>
          )}
          <p className="text-navy/60 mt-2 leading-relaxed">
            {tool.description}
          </p>
        </div>
        <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-teal/10 text-teal group-hover:bg-teal group-hover:text-navy transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export function AssessmentsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-cream leading-tight">
              Assessments &amp; Tools
            </h1>
            <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
            <p className="text-cream/60 text-lg leading-relaxed">
              Free, anonymous self-reflection tools grounded in Beyond Diagnosis
              Theory™. Select a tool below to begin.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-4">
            {tools.map((tool) => (
              <AssessmentCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-warm-gray">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-lg font-bold text-navy">Disclaimer</h3>
            <p className="text-navy/50 text-sm leading-relaxed">
              The Healing Beyond Diagnosis Initiative provides educational,
              reflective, and recovery-focused resources. These tools are not
              intended to diagnose, treat, or replace professional medical,
              psychological, legal, or rehabilitation services. If you are
              experiencing a medical emergency or crisis, contact emergency
              services or a qualified healthcare professional immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
