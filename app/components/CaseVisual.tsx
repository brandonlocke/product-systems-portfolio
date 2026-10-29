type IconName = "points" | "check" | "shop" | "reserve" | "service";

function ModelIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    points: <><circle cx="12" cy="12" r="8"/><path d="m12 7 1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5L12 7Z"/></>,
    check: <><circle cx="12" cy="12" r="8"/><path d="m8 12 2.5 2.5L16 9"/></>,
    shop: <><path d="M5 10v10h14V10M3 10l2-6h14l2 6M3 10c0 3 4 3 4 0 0 3 5 3 5 0 0 3 5 3 5 0 0 3 4 3 4 0M10 20v-6h4v6"/></>,
    reserve: <><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M8 3v6M16 3v6M4 11h16m-12 5 2 2 5-4"/></>,
    service: <><path d="m8 6 2 3-2 3-4 1 8 8 4-4-8-8 1-4 3-2 3 2a6 6 0 0 1-7 7"/></>,
  };
  return <svg className="model-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}

const headings: Record<string, [string, string]> = {
  rewards: ["Rewards · MVP rules", "A clear path from earning to using."],
  "declined-services": ["Recovery · Customer choice", "A useful decision to revisit."],
  "booking-journey": ["Booking · Failure recovery", "Keep the choices. Retry the step."],
  "lifecycle-systems": ["Lifecycle · Customer state", "Know what the signal establishes."],
  "feedback-system": ["Feedback · Operating model", "Give every response a way forward."],
};

export default function CaseVisual({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const [label, title] = headings[slug] ?? headings["feedback-system"];
  return (
    <figure className={`case-visual-model visual-${slug}${compact ? " visual-compact" : ""}`} aria-label={`${title} Simplified product model.`}>
      <figcaption><span>{label}</span><strong>{title}</strong></figcaption>

      {slug === "rewards" && <>
        <div className="rewards-currency"><div className="point-token"><span>100</span><small>points</small></div><span className="currency-equals" aria-label="equals">=</span><div className="credit-token"><span>$1</span><small>service credit</small></div></div>
        <ol className="reward-path">
          <li><ModelIcon name="points"/><b>Earn</b><span>Eligible spend<br/>and actions</span></li>
          <li><ModelIcon name="reserve"/><b>Reserve</b><span>During<br/>checkout</span></li>
          <li><ModelIcon name="check"/><b>Redeem</b><span>Apply value<br/>to service</span></li>
        </ol>
        <p className="visual-footnote">Order changes and cancellations have explicit rules.</p>
      </>}

      {slug === "declined-services" && <>
        <div className="recovery-recommendation"><span className="recommendation-icon"><ModelIcon name="service"/></span><div><small>Declined recommendation</small><b>Service, explained.</b><span>Prior visit + why it matters</span></div></div>
        <div className="shop-connection"><span>Compare available options</span></div>
        <ol className="recovery-shops">{["A", "B", "C"].map(letter => <li key={letter}><ModelIcon name="shop"/><b>Shop {letter}</b></li>)}</ol>
        <div className="recovery-offer"><span>Offer</span><b>Code entered at checkout</b></div>
        <p className="visual-footnote">Eligibility checked before sending. Shop names are schematic.</p>
      </>}

      {slug === "booking-journey" && <>
        <div className="saved-choices"><div className="saved-choices-title"><ModelIcon name="check"/><b>Choices saved</b></div><ul>{["Vehicle", "Services", "Shop", "Time"].map(choice => <li key={choice}>{choice}</li>)}</ul></div>
        <ol className="confirmation-path"><li><span className="confirmation-mark"><ModelIcon name="check"/></span><b>Payment setup</b><span>Preserved</span></li><li className="retry-step"><span className="retry-mark" aria-hidden="true">↻</span><b>Confirmation</b><span>Retry this step</span></li></ol>
        <p className="visual-footnote">A confirmation retry preserves valid progress and payment setup.</p>
      </>}

      {slug === "lifecycle-systems" && <>
        <dl className="state-model"><div><dt>Walk-in request</dt><dd><span>Intent</span>Verify service separately.</dd></div><div><dt>Paid order</dt><dd><span>Payment recorded</span>Check downstream rules.</dd></div><div><dt>Declined service</dt><dd><span>Unresolved need</span>Recheck recovery eligibility.</dd></div></dl>
        <p className="visual-footnote">Each signal supports a different decision. Integration work remains ongoing.</p>
      </>}

      {slug === "feedback-system" && <>
        <ol className="feedback-model"><li><span>01</span><div><b>Qualify the service event.</b><p>Current timing anchor + suppression</p></div></li><li><span>02</span><div><b>Capture the response.</b><p>Keep customer and order context</p></div></li><li><span>03</span><div><b>Route to an owner.</b><p>CX follow-up + operational QA</p></div></li></ol>
        <p className="visual-footnote">Timing refinement: true payment and completion timestamps.</p>
      </>}
    </figure>
  );
}
