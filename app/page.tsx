import Link from "next/link";
import { featuredCases } from "./work/cases";
import CaseArtifact from "./components/CaseArtifact";
import TypedIdentity from "./components/TypedIdentity";

const strengths = [
  ["01", "Product strategy", "Frame ambiguous customer and business problems, weigh competing paths, and translate the strongest answer into a roadmap."],
  ["02", "Lifecycle growth", "Connect activation, retention, and recovery to the customer state the product can actually verify."],
  ["03", "Cross-functional alignment", "Create agreement across product, design, engineering, lifecycle, operations, and CX when each sees a different part of the problem."],
  ["04", "Launch ownership", "Stay close through requirements, UAT, production behavior, and the evidence that should reshape the next decision."],
];

const process = [
  ["Frame", "What is the customer and business cost?"],
  ["Interrogate", "Which assumptions could change the answer?"],
  ["Decide", "Which path creates the strongest leverage?"],
  ["Align", "Can every discipline see its role?"],
  ["Learn", "What should production change next?"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="wordmark" href="#top">Brandon<span>.</span></Link>
        <div className="nav-links"><Link href="#work">Work</Link><Link href="#strengths">Strengths</Link><Link href="#approach">Approach</Link></div>
        <a className="nav-contact" href="#contact">Connect ↓</a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy reveal">
          <div className="hero-kicker"><span className="status-dot" /> Lifecycle product manager · Growth strategy</div>
          <TypedIdentity />
          <h1>Growth strategy for products that have to <em>work in the real world.</em></h1>
          <div className="hero-bottom">
            <p>I turn customer behavior and operational complexity into product roadmaps—and align teams around the decisions that reduce friction, protect revenue, and compound.</p>
            <a className="button button-dark" href="#work">See the proof <span>↓</span></a>
          </div>
        </div>
        <aside className="current-card">
          <p className="eyebrow">Currently</p>
          <h2>Lifecycle Product Manager at CarAdvise</h2>
          <p>Shaping onboarding, retention, marketplace, and customer-feedback strategy—and staying close enough to launch to learn from production.</p>
          <div className="current-tags"><span>Strategy</span><span>Growth</span><span>Execution</span></div>
        </aside>
      </header>

      <section className="proof-strip" aria-label="Portfolio evidence at a glance">
        <div><strong>04</strong><span>connected product<br/>case studies</span></div>
        <div><strong>71K+</strong><span>customers supported<br/>by Rewards</span></div>
        <div><strong>47%</strong><span>timing insight that<br/>reshaped feedback</span></div>
        <p>Evidence is labeled honestly: released, live, evolving, or still awaiting validated outcomes.</p>
      </section>

      <section className="strengths" id="strengths">
        <header className="section-intro">
          <p className="eyebrow">Where I’m strongest</p>
          <h2>Strategy with enough range<br/><em>to survive reality.</em></h2>
          <p>I lead from the bird’s-eye view, then go deep where evidence, edge cases, and execution threaten the outcome.</p>
        </header>
        <div className="strength-grid">
          {strengths.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Four ways strategy<br/><em>became behavior.</em></h2>
          <p>Each one-minute case isolates the problem, the decision, the organizational work, and the evidence that shaped what came next.</p>
        </div>
        <div className="project-list">
          {featuredCases.map((item, index) => (
            <Link className={`project-row project-${index + 1}`} href={`/work/${item.slug}`} key={item.slug}>
              <div className="project-copy">
                <p className="project-label"><span>0{index + 1}</span>{item.category}<i>{item.status}</i></p>
                <h3>{item.shortTitle}</h3>
                <p>{item.deck}</p>
                <div className="project-meta"><span><strong>{item.proofValue}</strong><small>{item.proofLabel}</small></span><b>Read the case <i>↗</i></b></div>
              </div>
              <div className="project-artifact"><CaseArtifact slug={item.slug} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-copy"><p className="eyebrow">The throughline</p><h2>Interrogate the problem.<br/><em>Align the path.</em></h2><p>The strongest roadmap is not the one with the cleanest slide. It is the one that accounts for how customers behave, how the business makes money, how the system works, and what teams can responsibly deliver.</p></div>
        <div className="process" aria-label="Product approach">
          {process.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </section>

      <footer className="footer" id="contact">
        <p className="eyebrow">Brandon Locke · Lifecycle + Growth Product</p>
        <h2>Bring me the problem that resists the <em>obvious answer.</em></h2>
        <a className="footer-cta" href="https://www.linkedin.com/in/brandonclocke/" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a>
        <div className="footer-row"><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
