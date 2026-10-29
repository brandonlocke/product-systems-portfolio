import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseArtifact from "../../components/CaseArtifact";
import CaseVisual from "../../components/CaseVisual";
import { cases, findCase } from "../cases";

export function generateStaticParams() { return cases.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = findCase(slug);
  if (!item) return { title: "Case study not found | Brandon Locke" };
  return { title: `${item.shortTitle.replace(/\.$/, "")} | Brandon Locke`, description: item.deck, alternates: { canonical: `/work/${slug}` }, openGraph: { title: `${item.shortTitle} | Brandon Locke`, description: item.deck, url: `https://brandonlocke.co/work/${slug}` } };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = findCase(slug);
  if (!item) notFound();
  const nextCase = cases[(cases.indexOf(item) + 1) % cases.length];
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="site-nav wrap" aria-label="Primary navigation"><Link className="wordmark" href="/">Brandon Locke<span>.</span></Link><div className="nav-links"><Link href="/#work">All work</Link><Link href="/#contact">Contact <span aria-hidden="true">↗</span></Link></div></nav>
      <main id="main" className={`case-page case-${item.slug}`}>
        <header className="case-hero wrap">
          <Link className="back-link" href="/#work"><span aria-hidden="true">←</span> Selected work</Link>
          <div className="case-kicker"><p className="eyebrow">{item.category}</p><span className={`status status-${item.statusTone}`}>{item.status}</span></div>
          <h1>{item.shortTitle}</h1>
          <p className="case-deck">{item.title}</p>
          <div className="case-feature">
            <div className="case-contribution"><p className="eyebrow">My contribution</p><p>{item.contribution}</p><dl><div><dt>Alongside</dt><dd>{item.collaborators}</dd></div><div><dt>Status</dt><dd>{item.period}</dd></div></dl></div>
            <div className="case-visual"><CaseVisual slug={item.slug}/><p className="visual-caption">Portfolio reconstruction of the product rules and workflow. My contribution and delivery status are described alongside.</p></div>
            <aside className="result-summary" aria-labelledby="result-title"><p className="eyebrow" id="result-title">What happened</p><p>{item.result}</p><div className="evidence-boundary"><span className="boundary-label">Evidence note</span><p>{item.evidenceLimit}</p></div></aside>
          </div>
        </header>
        <div className="case-content wrap">
          <nav className="case-contents" aria-label="On this page"><span>In this case</span><a href="#problem">The problem</a><a href="#decisions">The decisions</a><a href="#evidence">The evidence</a></nav>
          <article className="case-body">
            <section className="case-section" id="problem"><p className="eyebrow">The problem</p><h2>{item.challengeHeading}</h2>{item.challenge.map(p => <p key={p}>{p}</p>)}</section>
            <section className="case-section" id="decisions"><p className="eyebrow">The decisions</p><h2>Where I focused the work.</h2><ol className="decision-list">{item.decisions.map((decision, index) => <li key={decision.title}><span className="decision-number" aria-hidden="true">0{index + 1}</span><div><h3>{decision.title}</h3><p className="decision-constraint">{decision.constraint}</p><p>{decision.choice}</p></div></li>)}</ol></section>
            <section className="case-section outcome-section" id="evidence"><p className="eyebrow">The evidence</p><h2>{item.outcome}</h2><p>{item.outcomeDetail}</p><details className="artifact-details"><summary>{item.detailLabel}</summary><div className="artifact-container"><CaseArtifact slug={item.slug}/><p className="artifact-caption">Reconstructed for this portfolio. Customer details and internal records are omitted.</p></div></details></section>
          </article>
        </div>
        <footer className="case-footer wrap"><div><p className="eyebrow">Continue exploring</p><Link className="next-case-link" href={`/work/${nextCase.slug}`}>{nextCase.shortTitle}<span aria-hidden="true">→</span></Link></div><div className="case-footer-links"><Link href="/#work">All selected work</Link><a href="https://www.linkedin.com/in/brandonclocke/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a></div></footer>
      </main>
    </>
  );
}
