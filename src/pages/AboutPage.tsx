import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, Compass, Headphones, Lightbulb, Map, Network, NotebookPen, Quote, Search, Users } from "lucide-react";

const initiatives = [
  { icon: ClipboardCheck, title: "BDRA", text: "HBDI’s recovery assessment for structured self-reflection beyond physical symptoms." },
  { icon: Compass, title: "PALE", text: "Immediate support shaped around pacing, adaptation, learning and engagement." },
  { icon: Map, title: "HBDI Resource Navigator", text: "A practical way to find services, programs and community support." },
  { icon: Headphones, title: "Podcast", text: "The Healing Beyond Diagnosis Podcast brings lived experience and recovery conversations into the open." },
  { icon: BookOpen, title: "Books and written resources", text: "Published books and educational writing explore identity, grief, purpose and life after diagnosis." },
  { icon: NotebookPen, title: "Reflection materials", text: "Journals, worksheets and caregiver materials turn the initiative’s ideas into practical reflection." },
];

const dimensions = [
  { title: "Identity", text: "Making sense of who you are after life changes." },
  { title: "Grief", text: "Recognizing losses that may be real even when they are invisible." },
  { title: "Purpose", text: "Finding meaning and direction as life takes a different shape." },
  { title: "Connection", text: "Rebuilding relationships and reducing isolation." },
  { title: "Resilience", text: "Adapting and rebuilding without reducing recovery to simply pushing through." },
];

const credentials = [
  { title: "Social Service Worker (SSW) Diploma — Canadore College", needsConfirmation: false },
  { title: "Certified Grief Coach", needsConfirmation: true },
  { title: "Certified in Neurodivergence", needsConfirmation: true },
  { title: "Certified in Cognitive Behavioral Therapy (CBT)", needsConfirmation: true },
  { title: "Advanced Grief Counseling Certification", needsConfirmation: true },
  { title: "Certified Clinical Trauma Professional (CCTP)", needsConfirmation: true },
  { title: "Grief Work in Virtual Settings Certification", needsConfirmation: true },
  { title: "Complex Trauma Training — Dr. Janina Fisher", needsConfirmation: true },
  { title: "Trauma Defined — Bessel van der Kolk, MD", needsConfirmation: true },
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-navy md:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-navy/65">{intro}</p> : null}
    </div>
  );
}

export function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gray-100 py-16 md:py-24">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-teal/10 to-transparent" />
        <div className="container relative mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">About HBDI</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy md:text-6xl">Recovery includes the person, not only the diagnosis.</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-navy/65">Healing Beyond Diagnosis Initiative is a developing Canadian community initiative focused on the emotional side of recovery—and on the people and caregivers living through it.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeading eyebrow="1 · What HBDI Is Today" title="A growing community initiative for life beyond diagnosis" intro="HBDI develops practical, public-facing resources for people navigating brain injury, chronic illness, disability, trauma and other life-changing diagnoses. Caregiver experience is part of that picture, not an afterthought." />
          <blockquote className="border-l-4 border-orange bg-gray-50 px-7 py-6">
            <Quote className="size-7 text-orange-dark" aria-hidden="true" />
            <p className="mt-4 text-2xl font-semibold leading-snug text-navy">“When the world sees a diagnosis, we see a person fighting to be seen.”</p>
          </blockquote>
        </div>
      </section>

      <section className="bg-gray-100 py-14 md:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow="2 · Why It Exists" title="The emotional work often begins after clinical care ends" />
          <div className="space-y-5 text-lg leading-relaxed text-navy/70">
            <p>Medical care may stabilize the body while grief, identity change, isolation and uncertainty remain. Families and caregivers can carry their own invisible losses at the same time.</p>
            <p>HBDI exists to make that part of recovery easier to name, explore and discuss—without presenting its resources as diagnosis, treatment or a replacement for professional care.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container mx-auto">
          <SectionHeading eyebrow="3 · What We’re Building" title="An accessible collection of ways to reflect, learn and connect" />
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <article key={initiative.title} className="border-t border-navy/15 pt-6">
                  <Icon className="size-6 text-teal-dark" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-navy">{initiative.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{initiative.text}</p>
                </article>
              );
            })}
          </div>
          <Link to="/resources" className="mt-10 inline-flex items-center gap-2 font-semibold text-teal-dark hover:text-navy">Explore Resources &amp; Tools <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading eyebrow="4 · Community Connection and Growing Recognition" title="Built through conversations across the Ottawa Valley" intro="HBDI’s development includes community and municipal outreach across Renfrew County, including Pembroke." />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-t-2 border-teal pt-5">
              <Network className="size-6 text-teal-dark" aria-hidden="true" />
              <h3 className="mt-3 font-bold text-navy">Health and community discussions</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">HBDI has been involved with Ottawa Valley health-system and caregiver/community-support discussions and has engaged in conversations with Ontario 211.</p>
            </div>
            <div className="border-t-2 border-orange pt-5">
              <Users className="size-6 text-orange-dark" aria-hidden="true" />
              <h3 className="mt-3 font-bold text-navy">Local outreach</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">Outreach has included community organizations, municipal services, military-family and veteran-support organizations, seniors’ services and caregiver organizations.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10"><p className="border-l-4 border-navy/15 pl-5 text-sm italic leading-relaxed text-navy/55">These connections are described as engagement and exploration. They do not imply endorsement, funding, affiliation or formal partnership.</p></div>
      </section>

      <section className="bg-gray-100 py-14 md:py-20">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="5 · Beyond Diagnosis Theory" title="A framework for the parts of recovery that can be hard to see" />
              <p className="mt-5 leading-relaxed text-navy/65">Developed from lived experience, the theory recognizes the person and caregiver within a wider recovery ecosystem.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3">
              {dimensions.map((dimension, index) => (
                <div key={dimension.title} className={index === dimensions.length - 1 ? "col-span-2 sm:col-span-1" : ""}>
                  <p className="text-xs font-bold text-orange-dark">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-bold text-navy">{dimension.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{dimension.text}</p>
                </div>
              ))}
            </div>
          </div>
          <blockquote className="mt-12 border-l-4 border-teal bg-white px-7 py-6 text-xl font-semibold italic text-navy">“Recovery is not returning to who you were. Recovery is learning who you are now.”</blockquote>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">6 · Founder and Lived Experience</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">Corey Furnival</h2>
            <p className="mt-2 font-semibold text-orange-dark">Founder, Healing Beyond Diagnosis Initiative</p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-navy/70">
            <p>Corey’s experience of brain injury, invisible symptoms, identity change and gaps in emotional recovery support became the lived-experience foundation for HBDI.</p>
            <p>That experience supports the initiative’s work; HBDI’s focus is the broader community of individuals, caregivers and organizations trying to improve what recovery can include.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container mx-auto">
          <SectionHeading eyebrow="7 · Credentials and Training" title="Training that informs the work" intro="The titles below are retained exactly as documented in the existing HBDI repository." />
          <div className="mt-9 divide-y divide-navy/10 border-y border-navy/10 md:grid md:grid-cols-2 md:divide-y-0">
            {credentials.map((credential) => (
              <div key={credential.title} className="flex items-start gap-3 py-4 md:border-b md:border-navy/10 md:pr-8 even:md:border-l even:md:pl-8">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-navy">{credential.title}</p>
                  {credential.needsConfirmation ? <p className="mt-1 text-xs text-orange-dark">Exact official title and awarding body require confirmation.</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-14 md:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <SectionHeading eyebrow="8 · Where HBDI Is Going" title="Growing carefully, with community relevance and independent learning" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <p className="flex gap-3 leading-relaxed text-navy/65"><Search className="mt-1 size-5 shrink-0 text-teal-dark" aria-hidden="true" />HBDI is seeking opportunities for independent research and evaluation of its developing ideas and resources.</p>
              <p className="flex gap-3 leading-relaxed text-navy/65"><Lightbulb className="mt-1 size-5 shrink-0 text-orange-dark" aria-hidden="true" />The initiative is exploring collaboration and wider community access while keeping claims proportionate to available evidence.</p>
            </div>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-teal-light">Connect with HBDI <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
}
