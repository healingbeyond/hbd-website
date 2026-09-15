import { ExternalLink } from "lucide-react";

const bdrsHost = ["bdrs-platform-git-fi-f34982-coreyscoachingcorner-7642s-projects", "vercel", "app"].join(".");
const bdrsWebsite = `https://${bdrsHost}`;

export function BdrsPage() {
  return (
    <div>
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">Beyond Diagnosis Recovery System™</p>
            <h1 className="text-4xl font-bold leading-tight text-navy md:text-5xl">A person-centred system for the emotional side of recovery.</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-navy/70">BDRS is HBDI’s private member-based recovery system. It brings together structured assessments, plain-language results, guided reflection and optional connections to practical supports.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={bdrsWebsite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-teal-light">
                Open BDRS Website <ExternalLink className="size-4" />
              </a>
              <a href="/resources" className="inline-flex items-center justify-center rounded-xl border border-navy/20 bg-white px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-gray-50">Explore public resources</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-navy/10 bg-white p-7"><h2 className="text-2xl font-bold text-navy">What is inside BDRS?</h2><p className="mt-3 leading-relaxed text-navy/70">Member access can include BDRA Orientation, BDRA Integration, BDRA Transformation and the Caregiver Assessment. Each assessment keeps its own purpose and scoring logic.</p></article>
            <article className="rounded-2xl border border-navy/10 bg-white p-7"><h2 className="text-2xl font-bold text-navy">What happens after an assessment?</h2><p className="mt-3 leading-relaxed text-navy/70">Members can review a plain-language summary of their results, see areas that may be worth exploring further, and choose whether to open relevant Resource Navigator support categories.</p></article>
            <article className="rounded-2xl border border-navy/10 bg-white p-7"><h2 className="text-2xl font-bold text-navy">How is it used?</h2><p className="mt-3 leading-relaxed text-navy/70">A member can complete an assessment independently, work through it remotely with support, or use it as part of an in-person conversation.</p></article>
            <article className="rounded-2xl border border-navy/10 bg-white p-7"><h2 className="text-2xl font-bold text-navy">What it is not</h2><p className="mt-3 leading-relaxed text-navy/70">BDRS is not a diagnostic test and does not tell a person which service they must use. The purpose is to organize reflection, identify possible support areas and keep the individual in control of what happens next.</p></article>
          </div>
        </div>
      </section>
    </div>
  );
}
