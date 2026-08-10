import Link from "next/link";
import { cases } from "./work/cases";
import CaseArtifact from "./components/CaseArtifact";
import TypedIdentity from "./components/TypedIdentity";

const strengths = [
  ["01", "Journey architecture", "Map customer state across entry, recovery, and completion—then remove the work the system should remember."],
  ["02", "Lifecycle infrastructure", "Turn noisy events and properties into a trustworthy model for personalized action."],
  ["03", "Operating rules", "Define the awkward edges: eligibility, exclusions, ownership, support, and what happens when reality diverges."],
  ["04", "Launch readiness", "Stay close through requirements, UAT, production behavior, and the evidence that shapes the next decision."],
];

const process = [
  ["Signal", "What is actually happening?"],
  ["State", "What does the system know?"],
  ["Decision", "What should happen next?"],
  ["Operation", "Can teams build and run it?"],
  ["Evidence", "What did production teach us?"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="wordmark" href="#top">Brandon<span>.</span></Link>
        <div className="nav-links"><Link href="#work">Work</Link><Link href="#strengths">Strengths</Link><Link href="#approach">Approach</Link></div>
        <a className="nav-contact" href="https://www.linkedin.com/in/brandonclocke/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy reveal">
          <div className="hero-kicker"><span className="status-dot" /> Available for the right senior product role <i>Chicago · CT</i></div>
          <TypedIdentity />
          <h1>Turning fragmented signals into <em>reliable product systems.</em></h1>
          <div className="hero-bottom">
            <p>I work where customer behavior, operational reality, and technical constraints meet—and make the next action clearer.</p>
            <a className="button button-dark" href="#work">Explore selected work <span>↓</span></a>
          </div>
        </div>
        <aside className="current-card">
          <p className="eyebrow">Currently</p>
          <h2>Lifecycle Product Manager at CarAdvise</h2>
          <p>Building onboarding, retention, marketplace, and customer-experience systems across product and lifecycle.</p>
          <div className="current-tags"><span>0→1</span><span>Growth</span><span>Platform</span></div>
        </aside>
      </header>

      <section className="proof-strip" aria-label="Portfolio evidence at a glance">
        <div><strong>04</strong><span>connected product<br/>case studies</span></div>
        <div><strong>230</strong><span>launch-bonus orders<br/>in Rewards week one</span></div>
        <div><strong>47%</strong><span>timing insight that<br/>reshaped feedback</span></div>
        <p>Evidence is labeled honestly: released, live, evolving, or still awaiting validated outcomes.</p>
      </section>

      <section className="strengths" id="strengths">
        <header className="section-intro">
          <p className="eyebrow">Where I’m strongest</p>
          <h2>Strategic product thinking,<br/><em>built to operate.</em></h2>
          <p>The craft is not the screen. It is the chain of decisions that makes a useful experience possible—and dependable.</p>
        </header>
        <div className="strength-grid">
          {strengths.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-heading">
          <p className="eyebrow">Selected work · 2025—2026</p>
          <h2>Product stories with<br/><em>the decisions left in.</em></h2>
          <p>Four case studies about reducing ambiguity across journeys, retention, infrastructure, and feedback.</p>
        </div>
        <div className="project-list">
          {cases.map((item, index) => (
            <Link className={`project-row project-${index + 1}`} href={`/work/${item.slug}`} key={item.slug}>
              <div className="project-copy">
                <p className="project-label"><span>0{index + 1}</span>{item.category}<i>{item.status}</i></p>
                <h3>{item.shortTitle}</h3>
                <p>{item.deck}</p>
                <div className="project-meta"><span><strong>{item.proofValue}</strong><small>{item.proofLabel}</small></span><b>Read the case <i>↗</i></b></div>
              </div>
              <div className="project-artifact"><CaseArtifact index={index} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-copy"><p className="eyebrow">The throughline</p><h2>Respect the customer’s <em>actual state.</em></h2><p>Not what an ambiguous event suggests. Not what is convenient for the system to assume. Product behavior should begin with what the customer has actually done—and what they are ready to do next.</p></div>
        <div className="process" aria-label="Product approach">
          {process.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </section>

      <footer className="footer">
        <p className="eyebrow">Brandon Locke · Consumer Product Manager</p>
        <h2>Make the complicated<br/><em>feel considered.</em></h2>
        <div className="footer-row"><p>Chicago · 2026</p><div><a href="https://www.linkedin.com/in/brandonclocke/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></div></div>
      </footer>
    </main>
  );
}
