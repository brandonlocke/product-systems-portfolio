import Link from "next/link";
import { featuredCases, supportingCases, type CaseStudy } from "../work/cases";
import PageOutline, { type OutlineItem } from "./PageOutline";

const homeOutline: readonly OutlineItem[] = [
  { id: "overview", label: "Introduction" },
  { id: "work", label: "Work overview" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];

export const caseOutline: readonly OutlineItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The problem" },
  { id: "decisions", label: "The decisions" },
  { id: "evidence", label: "The evidence" },
];

function CaseLinks({ items, start, activeCase }: { items: CaseStudy[]; start: number; activeCase?: string }) {
  return (
    <ol className="sidebar-links" role="list" start={start}>
      {items.map((item, index) => (
        <li key={item.slug}>
          <Link href={`/work/${item.slug}`} aria-current={activeCase === item.slug ? "page" : undefined}>
            <span className="sidebar-index mono" aria-hidden="true">{String(start + index).padStart(2, "0")}</span>
            {item.navTitle}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function PortfolioNavigation({ home = false, activeCase }: { home?: boolean; activeCase?: string }) {
  const outline = home ? homeOutline : activeCase ? caseOutline : null;
  const supportingCaseActive = supportingCases.some(item => item.slug === activeCase);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="site-nav wrap" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Brandon Locke, home">Brandon Locke<span>.</span></Link>
        <div className="nav-links">
          <a href={home ? "#work" : "/#work"}>{activeCase ? "All work" : "Work"}</a>
          {home && <a href="#approach">Approach</a>}
          <a href={home ? "#contact" : "/#contact"}>Contact <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
      <aside className="site-sidebar" aria-label="Portfolio sidebar">
        <div className="sidebar-brand">
          <Link className="wordmark" href="/" aria-label="Brandon Locke, home">Brandon Locke<span>.</span></Link>
          <p>Growth &amp; lifecycle<br />product management</p>
        </div>
        <nav className="sidebar-navigation" aria-label="Portfolio navigation">
          <div>
            <h2 className="sidebar-label mono">Case studies</h2>
            <CaseLinks items={featuredCases} start={1} activeCase={activeCase} />
            <details className="sidebar-more" open={supportingCaseActive || undefined}>
              <summary>More work</summary>
              <CaseLinks items={supportingCases} start={featuredCases.length + 1} activeCase={activeCase} />
            </details>
          </div>
          {outline && (
            <div>
              <h2 className="sidebar-label mono">{home ? "On this page" : "In this case"}</h2>
              <PageOutline key={activeCase ?? "home"} items={outline} />
            </div>
          )}
        </nav>
        <div className="sidebar-footer">
          <a href="https://www.linkedin.com/in/brandonclocke/" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </aside>
    </>
  );
}
