const bookingStages = ["Vehicle", "Service", "Shop", "Time", "Payment", "Confirm"];

export default function CaseArtifact({ index }: { index: number }) {
  if (index === 0) {
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

  if (index === 1) {
    return (
      <figure className="case-artifact artifact-rewards" aria-label="Sanitized Rewards state model showing earning, available balance, reservation, and redemption">
        <figcaption><span>Rewards ledger</span><strong>Value with explicit rules</strong></figcaption>
        <div className="earn-list"><p>Earn</p><span>Add vehicle <b>+500</b></span><span>First request <b>+150</b></span><span>First Paid service <b>+500</b></span></div>
        <div className="balance-card"><span>Available</span><strong>1,150 pts</strong><small>$11.50 service credit</small></div>
        <div className="ledger-path"><span>Reserve</span><i>→</i><span>Redeem</span></div>
        <p className="edge-rule"><b>Edge rule</b> Cancellation releases the reservation.</p>
      </figure>
    );
  }

  if (index === 2) {
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
