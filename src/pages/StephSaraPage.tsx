import { ExternalLink } from "lucide-react";

export function StephSaraPage() {
  return (
    <div>
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">S.T.E.P.H.™ &amp; SARA™</p>
            <h1 className="text-4xl font-bold leading-tight text-navy md:text-5xl">Person-centred aging support that starts with the person.</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-navy/70">STEPH is HBDI’s person-centred aging support framework. SARA — the Senior Aging Resource Assessment — is the assessment built from that framework.</p>
            <a href="https://steph.floot.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-teal-light">
              Open STEPH &amp; SARA <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-navy/10 bg-white p-7"><h2 className="text-2xl font-bold text-navy">STEPH</h2><p className="mt-3 leading-relaxed text-navy/70">STEPH provides the framework for understanding aging, independence, support needs, changing roles, caregiver sustainability and access to resources while preserving autonomy, dignity and choice.</p></article>
            <article className="rounded-2xl border border-navy/10 bg-white p-7"><h2 className="text-2xl font-bold text-navy">SARA</h2><p className="mt-3 leading-relaxed text-navy/70">SARA turns the STEPH framework into practical questions that look at what is working, what has changed and what kinds of support may actually be useful to the person.</p></article>
            <article className="rounded-2xl border border-navy/10 bg-white p-7"><h2 className="text-2xl font-bold text-navy">No single score</h2><p className="mt-3 leading-relaxed text-navy/70">SARA is designed to organize a better conversation rather than reduce a person’s experience to one number or use the assessment as a competency test.</p></article>
            <article className="rounded-2xl border border-navy/10 bg-white p-7"><h2 className="text-2xl font-bold text-navy">Resource connection</h2><p className="mt-3 leading-relaxed text-navy/70">After SARA is completed, the person can choose to explore Resource Navigator support categories connected to the areas highlighted by their responses.</p></article>
          </div>
        </div>
      </section>
    </div>
  );
}
