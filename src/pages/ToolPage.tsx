import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ClipboardCheck, Coffee, Compass, ExternalLink, HeartHandshake, Map, ShieldCheck, type LucideIcon } from "lucide-react";

interface ToolInfo {
  id: string;
  title: string;
  audience?: string;
  description: string;
  iframeSrc: string;
  icon: LucideIcon;
}

const toolsMap: Record<string, ToolInfo> = {
  "five-pillars": {
    id: "five-pillars",
    title: "BDRA — Beyond Diagnosis Recovery Assessment",
    audience: "For Individuals",
    description:
      "Evaluate emotional rebuilding, identity alignment, and support structures.",
    iframeSrc: "https://five-pillars-assessment-c9231a24.viktor.space/",
    icon: ClipboardCheck,
  },
  caregiver: {
    id: "caregiver",
    title: "Caregiver Assessment",
    audience: "For Caregivers",
    description:
      "Measure caregiver strain, invisible grief, and personal well-being while supporting someone you love.",
    iframeSrc: "https://caregiver-assessment-263c6cf5.viktor.space/",
    icon: HeartHandshake,
  },
  "recovery-companion": {
    id: "recovery-companion",
    title: "Recovery Companion",
    description:
      "Daily check-ins, guided reflection, companion lessons, and emotional recovery support.",
    iframeSrc: "https://recovery-companion-2ba78368.viktor.space/",
    icon: Compass,
  },
  "bcw-journal": {
    id: "bcw-journal",
    title: "Black Coffee & Wisdom Journal",
    description: "Daily reflection. Purpose. Growth. Meaning.",
    iframeSrc: "https://wisdom-journal-1e8e75e7.viktor.space/",
    icon: Coffee,
  },
  "resource-navigator": {
    id: "resource-navigator",
    title: "Resource Navigator",
    description:
      "Canadian resource search. Funding finder. Caregiver supports. Recovery resources. Crisis pathways.",
    iframeSrc: "https://resource-navigator-9b053b90.viktor.space/",
    icon: Map,
  },
};

export function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [loadTimedOut, setLoadTimedOut] = useState(false);

  const resolvedToolId = toolId === "bdra" ? "five-pillars" : toolId;
  const tool = resolvedToolId ? toolsMap[resolvedToolId] : undefined;

  useEffect(() => {
    setIframeLoaded(false);
    setLoadTimedOut(false);
    const timeout = window.setTimeout(() => setLoadTimedOut(true), 10000);
    return () => window.clearTimeout(timeout);
  }, [resolvedToolId]);

  useEffect(() => {
    if (iframeLoaded) setLoadTimedOut(false);
  }, [iframeLoaded]);

  if (!tool) {
    return <Navigate to="/resources" replace />;
  }

  const ToolIcon = tool.icon;
  const isBdra = tool.id === "five-pillars";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header bar */}
      <section className="bg-gray-100 py-8 md:py-12 border-b border-navy/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-navy/60 hover:text-teal-dark transition-colors mb-6 group"
            >
              <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
              Back to Resources &amp; Tools
            </Link>
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white text-teal-dark shadow-sm">
                <ToolIcon className="size-7" />
              </span>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-navy leading-tight">
                  {tool.title}
                </h1>
                {tool.audience && (
                  <span className="inline-block mt-1 px-3 py-0.5 bg-teal/20 text-teal text-xs font-semibold rounded-full">
                    {tool.audience}
                  </span>
                )}
                <p className="text-navy/60 mt-2 text-sm md:text-base leading-relaxed max-w-xl">
                  {tool.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isBdra ? (
        <section className="bg-cream py-12 md:py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-5xl space-y-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                  <h2 className="text-2xl font-bold text-navy">What BDRA is</h2>
                  <p className="mt-3 leading-relaxed text-navy/70">
                    BDRA is HBDI’s self-reflection assessment. It provides a structured way to consider recovery beyond physical symptoms without diagnosing or treating a condition.
                  </p>
                </div>
                <div className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                  <h2 className="text-2xl font-bold text-navy">Who it is for</h2>
                  <p className="mt-3 leading-relaxed text-navy/70">
                    It is designed for individuals reflecting on life after brain injury, chronic illness, disability, trauma or another life-changing diagnosis.
                  </p>
                </div>
                <div className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                  <h2 className="text-2xl font-bold text-navy">What it explores</h2>
                  <p className="mt-3 leading-relaxed text-navy/70">
                    The assessment uses five pillars to explore emotional rebuilding, identity alignment and the support structures around you.
                  </p>
                </div>
                <div className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                  <h2 className="text-2xl font-bold text-navy">What you receive</h2>
                  <p className="mt-3 leading-relaxed text-navy/70">
                    You receive a guided set of prompts and an opportunity to review your responses within the assessment experience.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl border border-teal/25 bg-teal/5 p-7 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 size-7 shrink-0 text-teal-dark" />
                  <div>
                    <h2 className="text-xl font-bold text-navy">Privacy and data use</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-navy/65">
                      This HBDI page does not ask for your name or contact details and does not store assessment responses in the website code. The assessment itself is loaded from an external Viktor Space service, which may handle information separately.
                    </p>
                  </div>
                </div>
                <a href={tool.iframeSrc} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 font-semibold text-navy transition-colors hover:bg-teal-light">
                  Start Assessment
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Iframe area — fill remaining height */}
      <section className="flex-1 bg-cream py-6 md:py-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-navy">{isBdra ? "Start BDRA" : `Open ${tool.title}`}</h2>
                <p className="text-sm text-navy/70">The tool loads below from its external service.</p>
              </div>
              <a href={tool.iframeSrc} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy/15 bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-teal/40 hover:text-teal-dark">
                Open tool
                <ExternalLink className="size-4" />
              </a>
            </div>
            <div className="relative min-h-[70vh] overflow-hidden rounded-2xl bg-white border border-navy/10 shadow-lg">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-navy/5 z-10">
                  {loadTimedOut ? (
                    <div className="max-w-md space-y-4 px-6 text-center">
                      <h3 className="text-xl font-bold text-navy">The embedded tool is taking longer than expected.</h3>
                      <p className="text-sm leading-relaxed text-navy/60">You can open it directly in a new browser tab and continue there.</p>
                      <a href={tool.iframeSrc} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-5 py-3 font-semibold text-navy transition-colors hover:bg-teal-light">
                        Open tool
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 border-4 border-teal/30 border-t-teal rounded-full animate-spin" />
                      <p className="text-navy/70 text-sm font-medium">Loading {tool.title}...</p>
                    </div>
                  )}
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
                onError={() => setLoadTimedOut(true)}
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
            <p className="text-navy/65 text-xs leading-relaxed">
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
