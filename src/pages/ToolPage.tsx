import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

interface ToolInfo {
  id: string;
  title: string;
  audience?: string;
  description: string;
  iframeSrc: string;
  icon: string;
}

const toolsMap: Record<string, ToolInfo> = {
  "five-pillars": {
    id: "five-pillars",
    title: "Five Pillars Assessment",
    audience: "For Individuals",
    description:
      "Evaluate emotional rebuilding, identity alignment, and support structures.",
    iframeSrc: "https://five-pillars-assessment-c9231a24.viktor.space/",
    icon: "🏛️",
  },
  caregiver: {
    id: "caregiver",
    title: "Caregiver Assessment",
    audience: "For Caregivers",
    description:
      "Measure caregiver strain, invisible grief, and personal well-being while supporting someone you love.",
    iframeSrc: "https://caregiver-assessment-263c6cf5.viktor.space/",
    icon: "🤝",
  },
  "recovery-companion": {
    id: "recovery-companion",
    title: "Recovery Companion",
    description:
      "Daily check-ins, guided reflection, companion lessons, and emotional recovery support.",
    iframeSrc: "https://recovery-companion-2ba78368.viktor.space/",
    icon: "🧭",
  },
  "bcw-journal": {
    id: "bcw-journal",
    title: "Black Coffee & Wisdom Journal",
    description: "Daily reflection. Purpose. Growth. Meaning.",
    iframeSrc: "https://wisdom-journal-1e8e75e7.viktor.space/",
    icon: "☕",
  },
  "resource-navigator": {
    id: "resource-navigator",
    title: "Resource Navigator",
    description:
      "Canadian resource search. Funding finder. Caregiver supports. Recovery resources. Crisis pathways.",
    iframeSrc: "https://resource-navigator-9b053b90.viktor.space/",
    icon: "🗺️",
  },
};

export function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const tool = toolId ? toolsMap[toolId] : undefined;

  if (!tool) {
    return <Navigate to="/assessments" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header bar */}
      <section className="bg-navy py-8 md:py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/assessments"
              className="inline-flex items-center gap-2 text-cream/60 hover:text-teal transition-colors mb-6 group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform group-hover:-translate-x-1"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Assessments &amp; Tools
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-4xl md:text-5xl">{tool.icon}</span>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-cream leading-tight">
                  {tool.title}
                </h1>
                {tool.audience && (
                  <span className="inline-block mt-1 px-3 py-0.5 bg-teal/20 text-teal text-xs font-semibold rounded-full">
                    {tool.audience}
                  </span>
                )}
                <p className="text-cream/60 mt-2 text-sm md:text-base leading-relaxed max-w-xl">
                  {tool.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iframe area — fill remaining height */}
      <section className="flex-1 bg-cream py-6 md:py-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-navy/10 shadow-lg">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-navy/5 z-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-teal/30 border-t-teal rounded-full animate-spin" />
                    <p className="text-navy/50 text-sm font-medium">
                      Loading {tool.title}...
                    </p>
                  </div>
                </div>
              )}
              <iframe
                src={tool.iframeSrc}
                width="100%"
                style={{
                  border: 0,
                  borderRadius: "16px",
                  minHeight: "85vh",
                  height: "1800px",
                }}
                loading="eager"
                title={tool.title}
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-warm-gray">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h3 className="text-sm font-bold text-navy/70">Disclaimer</h3>
            <p className="text-navy/40 text-xs leading-relaxed">
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
