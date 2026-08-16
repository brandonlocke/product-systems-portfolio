const bookingStages = ["Vehicle", "Service", "Shop", "Time", "Payment", "Confirm"];

export default function CaseArtifact({ slug }: { slug: string }) {
  if (slug === "booking-journey") {
    return (
      <figure className="case-artifact artifact-booking" aria-label="Sanitized booking journey model showing six connected stages and a recovery rule">
        <figcaption><span>Journey model</span><strong>Context survives failure</strong></figcaption>
        <div className="journey-stages">
          {bookingStages.map((stage, stageIndex) => <div className={stageIndex === 5 ? "stage-alert" : ""} key={stage}><small>0{stageIndex + 1}</small><b>{stage}</b>{stageIndex < 5 && <i>→</i>}</div>)}
        </div>
        <div className="artifact-rule"><span>↶</span><p><b>Recovery rule</b>Return to the affected step. Preserve every valid choice.</p></div>
      </figure>
    );
  }

  if (slug === "rewards") {
    return (
      <figure className="case-artifact artifact-rewards" aria-label="Sanitized Rewards evidence showing customers supported, ledger events, redeemed value, and redemption by engagement cohort">
        <figcaption><span>Measured behavior · First 12 weeks</span><strong>Scale revealed the next loop</strong></figcaption>
        <div className="rewards-metrics">
          <article><strong>71.4K</strong><span>Customers</span></article>
          <article><strong>100.7K</strong><span>Ledger events</span></article>
          <article><strong>7.3K</strong><span>Redeemers</span></article>
          <article><strong>$37.5K</strong><span>Value redeemed</span></article>
        </div>
        <div className="cohort-panel">
          <div className="cohort-heading"><span>Redemption by observed behavior</span><small>Association, not causal lift</small></div>
          <div className="cohort-row"><span>Earned beyond grant</span><i><b style={{ width: "100%" }} /></i><strong>32.6%</strong></div>
          <div className="cohort-row"><span>Grant only</span><i><b style={{ width: "1.1%" }} /></i><strong>0.35%</strong></div>
        </div>
        <p className="rewards-learning"><b>Roadmap signal</b> Move from broad issuance toward repeat earning, visible value, and timely redemption prompts.</p>
      </figure>
    );
  }

  if (slug === "lifecycle-systems") {
    const states = [
      ["Walk-in submitted", "Intent", "Appointment support"],
      ["Order Paid", "Complete", "Rewards + NPS"],
      ["Service declined", "Unresolved", "Recovery journey"],
    ];
    return (
      <figure className="case-artifact artifact-lifecycle" aria-label="Sanitized lifecycle state model separating intent, completion, and unresolved need">
        <figcaption><span>State model</span><strong>Signal ≠ customer state</strong></figcaption>
        <div className="state-head"><span>Observed signal</span><span>Verified state</span><span>Next action</span></div>
        <div className="state-rows">{states.map((state) => <div key={state[0]}><span>{state[0]}</span><b>{state[1]}</b><span>{state[2]}</span></div>)}</div>
        <p className="state-note">Only verified completion unlocks service history, Rewards, and feedback.</p>
      </figure>
    );
  }

  return (
    <figure className="case-artifact artifact-feedback" aria-label="Sanitized closed-loop feedback operating model">
      <figcaption><span>Closed-loop model</span><strong>Feedback becomes action</strong></figcaption>
      <div className="feedback-flow"><div><small>01</small><b>Interim anchor</b></div><i>→</i><div><small>02</small><b>Survey sent</b></div><i>→</i><div><small>03</small><b>Classify</b></div><i>→</i><div><small>04</small><b>Route + follow up</b></div></div>
      <div className="feedback-branches"><span>Promoter <b>Advocacy</b></span><span>Passive <b>CX follow-up</b></span><span>Detractor <b>Alert + ticket</b></span></div>
      <p className="target-note"><b>Target refinement</b> Anchor delivery to a true Paid / completion timestamp.</p>
    </figure>
  );
}
