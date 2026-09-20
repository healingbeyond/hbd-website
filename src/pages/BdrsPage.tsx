import { ExternalLink, LogIn } from "lucide-react";

const bdrsWebsite = "https://bdrs-platform-one.vercel.app";
const bdrsLogin = `${bdrsWebsite}/login`;

export function BdrsPage() {
  return (
    <div>
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">Beyond Diagnosis Recovery System™</p>
            <h1 className="text-4xl font-bold leading-tight text-navy md:text-5xl">A person-centred system for the emotional side of recovery.</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-navy/70">BDRS is HBDI’s recovery system for people living beyond a major injury, illness, disability, diagnosis or medical event. It brings together intake, stage-specific assessment, plain-language results, reflection and optional connections to practical supports.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={bdrsWebsite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-teal-light">
                Open BDRS <ExternalLink className="size-4" />
              </a>
              <a href={bdrsLogin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/20 bg-white px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-gray-50">
                Member Login <LogIn className="size-4" />
              </a>
              <a href="/resources" className="inline-flex items-center justify-center rounded-xl border border-navy/20 bg-white px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-gray-50">Explore public resources</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-navy/10 bg-white p-7">
              <h2 className="text-2xl font-bold text-navy">The BDRA pathway</h2>
              <p className="mt-3 leading-relaxed text-navy/70">The five-part BDRA flow is Intake → Stage 1 Beyond Diagnosis Recovery Assessment → Stage 2 Integration → Stage 3 Transformation → Follow-Up.</p>
            </article>
            <article className="rounded-2xl border border-navy/10 bg-white p-7">
              <h2 className="text-2xl font-bold text-navy">Separate BDRS tools</h2>
              <p className="mt-3 leading-relaxed text-navy/70">The Five Pillars and Caregiver Assessment are separate from the five-part BDRA flow. Each keeps its own purpose, questions and interpretation.</p>
            </article>
            <article className="rounded-2xl border border-navy/10 bg-white p-7">
              <h2 className="text-2xl font-bold text-navy">What happens after an assessment?</h2>
              <p className="mt-3 leading-relaxed text-navy/70">Participants can review a plain-language summary, see areas that may be worth exploring further and choose whether to open relevant Resource Navigator support categories.</p>
            </article>
            <article className="rounded-2xl border border-navy/10 bg-white p-7">
              <h2 className="text-2xl font-bold text-navy">What it is not</h2>
              <p className="mt-3 leading-relaxed text-navy/70">BDRS is not a diagnostic test and does not tell a person which service they must use. It organizes reflection, identifies possible support areas and keeps the individual in control of what happens next.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
