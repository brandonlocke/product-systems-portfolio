import Link from "next/link";
import PortfolioNavigation from "./components/PortfolioNavigation";

export default function NotFound() {
  return (
    <>
      <PortfolioNavigation />
      <main id="main" className="not-found wrap" tabIndex={-1}>
        <p className="eyebrow">Page not found</p>
        <h1>Let's get you back to the work.</h1>
        <p>This address doesn't lead to a case study. You can explore the selected projects from the homepage.</p>
        <Link className="primary-link" href="/#work">Explore selected work <span aria-hidden="true">→</span></Link>
      </main>
    </>
  );
}
