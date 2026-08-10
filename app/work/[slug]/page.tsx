import Link from "next/link";
import { notFound } from "next/navigation";
import CaseArtifact from "../../components/CaseArtifact";
import { cases, findCase } from "../cases";

export function generateStaticParams() { return cases.map(({ slug }) => ({ slug })); }

function EvidenceField({ index, value, label }: { index: number; value: string; label: string }) {
  return (
    <div className="evidence-field" aria-label={`${value} ${label}`}>
      <div className="evidence-copy"><p>Evidence point</p><strong>{value}</strong><span>{label}</span></div>
      <div className="evidence-artifact"><CaseArtifact index={index} /></div>
    </div>
  );
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = findCase(slug);
  if (!item) notFound();
  const index = cases.findIndex((entry) => entry.slug === slug);
  const nextCase = findCase(item.next)!;
  const nextIndex = cases.findIndex((entry) => entry.slug === item.next);

  return (
    <main className={`case-page case-${index + 1}`}>
      <nav className="nav-shell case-nav" aria-label="Case study navigation">
        <Link className="wordmark" href="/">Brandon<span>.</span></Link>
        <div className="case-jump"><a href="#challenge">Challenge</a><a href="#role">Role</a><a href="#decisions">Decisions</a><a href="#outcome">Outcome</a></div>
        <Link className="nav-contact" href="/#work">All work ↗</Link>
      </nav>

      <header className="case-hero">
        <div className="case-hero-top"><p className="eyebrow">Case study 0{index + 1} · {item.category}</p><span>{item.status}</span></div>
        <div className="case-title"><div className="case-number">0{index + 1}</div><div className="case-hero-copy"><h1>{item.shortTitle}</h1><p>{item.title}</p></div></div>
        <div className="case-frame">{item.frame.map((entry) => <div key={entry.label}><span>{entry.label}</span><p>{entry.value}</p></div>)}</div>
      </header>

      <EvidenceField index={index} value={item.proofValue} label={item.proofLabel} />

      <article className="case-body">
        <section className="case-section section-challenge" id="challenge">
          <p className="case-section-number">01 / The challenge</p>
          <div><h2>The system was asking customers—and teams—to carry too much ambiguity.</h2>{item.challenge.map((p) => <p key={p}>{p}</p>)}</div>
        </section>
        <section className="case-section section-role" id="role">
          <p className="case-section-number">02 / My role</p>
          <div><h2>Turn the strategy into behavior the organization could build and operate.</h2>{item.role.map((p) => <p key={p}>{p}</p>)}</div>
        </section>
        <section className="case-section decisions-section" id="decisions">
          <p className="case-section-number">03 / Product decisions</p>
          <div className="decisions">{item.decisions.map((decision, decisionIndex) => <article key={decision.title}><span>0{decisionIndex + 1}</span><h3>{decision.title}</h3><p>{decision.copy}</p></article>)}</div>
        </section>
        <section className="outcome-panel" id="outcome"><p className="case-section-number">04 / Outcome</p><h2>{item.outcome}</h2><p>{item.outcomeDetail}</p></section>
      </article>

      <Link className={`next-case next-${nextIndex + 1}`} href={`/work/${nextCase.slug}`}><p>Next case · 0{nextIndex + 1}</p><h2>{nextCase.shortTitle}</h2><span>→</span></Link>
    </main>
  );
}
