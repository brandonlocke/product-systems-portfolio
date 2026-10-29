import Link from "next/link";
import { featuredCases, supportingCases } from "./work/cases";
import ProductDemo from "./components/ProductDemo";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="site-nav wrap" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Brandon Locke, home">Brandon Locke<span>.</span></Link>
        <div className="nav-links"><a href="#work">Work</a><a href="#approach">Approach</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></div>
      </nav>
      <main id="main">
        <header className="hero wrap">
          <div className="hero-main">
            <p className="eyebrow">Product management · Growth & lifecycle</p>
            <h1>Hi, I'm Brandon.<br/><em>I make the complex clear.</em></h1>
            <p className="hero-description">I turn complicated customer journeys into clear product decisions, then work with design, engineering, and operations to get them into customers' hands.</p>
            <a className="primary-link" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
          </div>
          <aside className="hero-context" aria-label="Current role">
            <span className="context-rule" aria-hidden="true" />
            <p className="eyebrow">Currently</p>
            <p className="context-role">Lifecycle Product Manager<br/><span>at CarAdvise</span></p>
            <p>Connecting customer needs, marketplace rules, and the teams that make a product work.</p>
          </aside>
        </header>
        <section className="selected-work wrap" id="work" aria-labelledby="work-title">
          <header className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2 id="work-title">Decisions, put into practice.</h2></div>
            <p>What I owned. Why I chose it. <br/>What happened next.</p>
          </header>
          <div className="project-list">
            {featuredCases.map((item, index) => (
              <article className={`project project-${item.slug}`} key={item.slug}>
                <div className="project-copy">
                  <div className="project-kicker"><span className="project-index" aria-hidden="true">0{index + 1}</span><span>{item.category}</span><span className={`status status-${item.statusTone}`}>{item.status}</span></div>
                  <h3><Link className="project-link" href={`/work/${item.slug}`}>{item.shortTitle}<span className="project-arrow" aria-hidden="true">↗</span></Link></h3>
                  <p>{item.deck}</p>
                  <div className="project-proof"><strong>{item.proofValue}</strong><div><span>{item.proofLabel}</span><small>{item.proofContext}</small></div></div>
                  <Link className="read-case" href={`/work/${item.slug}`}>Read the case <span aria-hidden="true">→</span></Link>
                </div>
                <div className="project-cover"><ProductDemo slug={item.slug} compact/></div>
              </article>
            ))}
          </div>
          <details className="more-work">
            <summary>More work <span>Lifecycle infrastructure & customer feedback</span></summary>
            <div className="supporting-work">
              {supportingCases.map(item => <Link href={`/work/${item.slug}`} key={item.slug}><span className="eyebrow">{item.category}</span><h3>{item.shortTitle} <span aria-hidden="true">↗</span></h3><p>{item.deck}</p><span className={`status status-${item.statusTone}`}>{item.status}</span></Link>)}
            </div>
          </details>
        </section>
        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="approach wrap">
            <div className="approach-intro"><p className="eyebrow">How I work</p><h2 id="approach-title">Stay close to<br/><em>the real problem.</em></h2><p>My work sits between customer experience, business rules, and operational reality. I connect those perspectives so teams can make a clear decision and carry it through to launch.</p></div>
            <ol className="principles">
              <li><h3>Find the point of friction.</h3><p>Follow the customer journey, listen to the people supporting it, and test what the data actually tells us.</p></li>
              <li><h3>Make the tradeoff explicit.</h3><p>Define the customer behavior we want to support, the constraints we have, and the smallest useful change.</p></li>
              <li><h3>Own the follow-through.</h3><p>Connect requirements, UAT, launch readiness, and production evidence. Let what happens next inform the next decision.</p></li>
            </ol>
          </div>
        </section>
        <footer className="site-footer wrap" id="contact">
          <div><p className="eyebrow">Let's connect</p><h2>Have a complex<br/>product problem?</h2><a className="primary-link" href="https://www.linkedin.com/in/brandonclocke/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a></div>
          <div className="footer-note"><p>Brandon Locke<br/><span>Product management, with follow-through.</span></p><a href="#main">Back to top <span aria-hidden="true">↑</span></a></div>
        </footer>
      </main>
    </>
  );
}
