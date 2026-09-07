import { Link } from "react-router-dom";
import { ArrowRight, Building2, ClipboardCheck, HeartHandshake, Search, Users } from "lucide-react";

const steps = [
  { number: "01", title: "Listen to the person", text: "Begin with lived experience, priorities and the changes that may be difficult to name." },
  { number: "02", title: "Understand the picture", text: "Use structured reflection to explore identity, energy, emotional resilience, planning and support." },
  { number: "03", title: "Shape the next conversation", text: "Turn what is learned into clearer questions, priorities and connections to appropriate support." },
];

export function BdrsPage() {
  return <div>
    <section className="relative overflow-hidden bg-gray-100 py-16 md:py-24">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-teal/10 to-transparent" />
      <div className="container relative mx-auto">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy/70">Beyond Diagnosis Recovery System™</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-navy md:text-6xl">A person-centred system for the emotional side of recovery.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-navy/70">BDRS is a developing framework designed to help people and caregivers make sense of identity change, invisible grief, emotional recovery and life after a life-changing diagnosis.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-teal-light">Partner with HBDI <ArrowRight className="size-4" aria-hidden="true" /></Link>
            <Link to="/resources" className="inline-flex items-center justify-center rounded-xl border-2 border-navy/15 px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-white">Explore public resources</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-14 md:py-20">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div><p className="text-sm font-semibold uppercase tracking-widest text-navy/70">Why BDRS</p><h2 className="mt-3 text-3xl font-bold leading-tight text-navy md:text-4xl">Recovery changes more than the body.</h2></div>
        <div className="space-y-5 text-lg leading-relaxed text-navy/70">
          <p>Clinical care can address injury, illness and immediate rehabilitation needs while grief, identity, relationships, purpose and caregiver strain remain less visible.</p>
          <p>BDRS creates a structured way to recognize those experiences and support better conversations. It is educational and reflective; it does not diagnose, treat or replace professional care.</p>
        </div>
      </div>
    </section>

    <section className="bg-gray-100 py-14 md:py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-widest text-navy/70">How it works</p><h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">From experience to a clearer next step.</h2></div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{steps.map(step => <article key={step.number} className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm"><span className="text-sm font-bold text-orange-dark">{step.number}</span><h3 className="mt-4 text-xl font-bold text-navy">{step.title}</h3><p className="mt-3 leading-relaxed text-navy/65">{step.text}</p></article>)}</div>
      </div>
    </section>

    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-widest text-navy/70">The developing system</p><h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Different tools. Different purposes.</h2><p className="mt-4 text-lg leading-relaxed text-navy/65">The Five Pillars Assessment and the Beyond Diagnosis Recovery Assessment (BDRA) are separate tools within the wider work.</p></div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="border-t-4 border-teal bg-gray-50 p-7"><ClipboardCheck className="size-7 text-teal-dark" aria-hidden="true" /><h3 className="mt-4 text-xl font-bold text-navy">Five Pillars Assessment</h3><p className="mt-3 leading-relaxed text-navy/65">A public self-reflection tool that helps individuals consider key parts of emotional rebuilding.</p><Link to="/resources/five-pillars" className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-dark">Open the public assessment <ArrowRight className="size-4" aria-hidden="true" /></Link></article>
          <article className="border-t-4 border-navy bg-gray-50 p-7"><Search className="size-7 text-navy" aria-hidden="true" /><h3 className="mt-4 text-xl font-bold text-navy">BDRA</h3><p className="mt-3 leading-relaxed text-navy/65">A separate assessment being developed and evaluated within the secured BDRS pilot environment. Its questions, scoring and participant information are not published here.</p></article>
        </div>
      </div>
    </section>

    <section className="bg-cream py-14 md:py-20">
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-7"><HeartHandshake className="size-7 text-teal-dark" aria-hidden="true" /><h3 className="mt-4 text-xl font-bold text-navy">Recovery Partners</h3><p className="mt-3 text-navy/65">The system recognizes supportive people and caregivers as part of the recovery picture while keeping the individual at the centre.</p></article>
          <article className="rounded-2xl bg-white p-7"><Building2 className="size-7 text-orange-dark" aria-hidden="true" /><h3 className="mt-4 text-xl font-bold text-navy">For Organizations</h3><p className="mt-3 text-navy/65">HBDI is exploring how BDRS may complement community, rehabilitation and caregiver-support conversations.</p></article>
          <article className="rounded-2xl bg-white p-7"><Users className="size-7 text-navy" aria-hidden="true" /><h3 className="mt-4 text-xl font-bold text-navy">Research &amp; Evaluation</h3><p className="mt-3 text-navy/65">BDRS remains in development. HBDI is seeking independent collaboration to examine its tools and strengthen the evidence behind them.</p></article>
        </div>
        <div className="mt-12 text-center"><h2 className="text-3xl font-bold text-navy">Interested in the work?</h2><p className="mx-auto mt-4 max-w-2xl text-navy/65">Connect with HBDI about research, evaluation, community use or partnership opportunities.</p><Link to="/contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-7 py-3.5 font-semibold text-cream hover:bg-navy-light">Contact HBDI <ArrowRight className="size-4" aria-hidden="true" /></Link></div>
      </div>
    </section>
  </div>;
}
