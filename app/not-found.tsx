import Link from "next/link";

export default function NotFound() {
  return <><nav className="site-nav wrap" aria-label="Primary navigation"><Link className="wordmark" href="/">Brandon Locke<span>.</span></Link><Link href="/#work">Selected work</Link></nav><main className="not-found wrap"><p className="eyebrow">Page not found</p><h1>Let's get you back to the work.</h1><p>This address doesn't lead to a case study. You can explore the selected projects from the homepage.</p><Link className="primary-link" href="/#work">Explore selected work <span aria-hidden="true">→</span></Link></main></>;
}
