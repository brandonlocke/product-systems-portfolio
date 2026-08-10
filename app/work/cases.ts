export type CaseStudy = {
  slug: string;
  shortTitle: string;
  title: string;
  category: string;
  status: string;
  deck: string;
  proofValue: string;
  proofLabel: string;
  frame: { label: string; value: string }[];
  challenge: string[];
  role: string[];
  decisions: { title: string; copy: string }[];
  outcome: string;
  outcomeDetail: string;
  next: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "booking-journey",
    shortTitle: "A booking journey that remembers",
    title: "Rebuilding a fragile booking journey around recovery",
    category: "Consumer journey",
    status: "Released",
    deck: "A multi-step experience that recognizes returning customers, preserves progress, and makes late-stage failure recoverable.",
    proofValue: "6",
    proofLabel: "connected booking stages",
    frame: [
      { label: "Scope", value: "Web + mobile" },
      { label: "Role", value: "Product strategy, requirements, UAT" },
      { label: "Partners", value: "Design, engineering, operations" },
      { label: "Market", value: "US + Canada" },
    ],
    challenge: [
      "CarAdvise’s booking experience combined vehicle entry, service selection, shop choice, scheduling, payment, and confirmation. When confirmation failed late in the journey, customers could lose context, repeat completed steps, or encounter ambiguous payment behavior.",
      "Returning customers were also asked for information the platform already knew. The experience treated every visit like a blank slate—even when the customer, vehicle, and service intent were already clear.",
    ],
    role: [
      "I defined customer and system behavior across first-time, returning-user, and failure states, then translated that model into implementation-ready requirements.",
      "The work covered state preservation, payment and confirmation, conditional steps, saved customer data, service discovery, mileage recommendations, location behavior, and responsive experiences.",
    ],
    decisions: [
      { title: "Separate payment from confirmation", copy: "A late-stage failure should not repeat a payment action or erase otherwise valid progress." },
      { title: "Recover at the point of failure", copy: "Return the customer to the relevant step with their vehicle, shop, services, and payment state intact." },
      { title: "Treat known customers as known", copy: "Preselect saved data, ask only for missing information, and remove redundant steps from repeat visits." },
      { title: "Harden the whole journey", copy: "Extend the same logic across partner benefits, walk-ins, Canada, desktop, and responsive mobile." },
    ],
    outcome: "Failure became a recoverable state—not a dead end.",
    outcomeDetail: "The redesigned flow reached production alongside improvements to dashboard entry, vehicle switching, service search, responsive behavior, and mileage recommendations. Conversion claims remain withheld until the comparison periods and underlying analytics are validated.",
    next: "rewards",
  },
  {
    slug: "rewards",
    shortTitle: "Rewards with rules people can trust",
    title: "Launching a points product across customer and operational surfaces",
    category: "Retention",
    status: "Launched May 2026",
    deck: "A points-based MVP with understandable value, explicit earn-and-burn rules, and a support model built for real volume.",
    proofValue: "230",
    proofLabel: "bonus orders in week one",
    frame: [
      { label: "Scope", value: "Cross-platform MVP" },
      { label: "Role", value: "Rules, experience, measurement, launch" },
      { label: "Partners", value: "Engineering, CX, support" },
      { label: "Surfaces", value: "Product, checkout, admin, lifecycle" },
    ],
    challenge: [
      "The previous miles-based concept was hard to understand and weakly connected to the behaviors CarAdvise wanted to encourage.",
      "A credible replacement needed to create recognizable value, support redemption, work across customer and operational surfaces, and remain explainable to customers and frontline teams.",
    ],
    role: [
      "I translated the retention goal into operating rules, customer experience, lifecycle data, measurement, launch readiness, and post-launch support.",
      "That meant defining audiences, earn and burn behavior, reservation states, exclusions, retroactive eligibility, rounding, success measures, and the boundary of the MVP.",
    ],
    decisions: [
      { title: "Use a simple currency", copy: "100 points equals $1 in service credit, with value connected to eligible spend and selected maintenance behaviors." },
      { title: "Reward meaningful milestones", copy: "Vehicle addition, first booking, first completed service, and mileage updates create an activation path—not random gamification." },
      { title: "Define the awkward edges", copy: "Cancellation, discounts, partner benefits, tires, taxes, fees, and reservation all received explicit behavior." },
      { title: "Launch with an operating model", copy: "Training and a 30-day support channel turned real customer patterns and ledger anomalies into prioritized fixes." },
    ],
    outcome: "The program operated at meaningful volume in its first week.",
    outcomeDetail: "Roughly 230 orders received the 500-point launch bonus, providing early evidence that eligibility and issuance were working. Longer-term retention, redemption, visit-frequency, and average-order effects remain measurement priorities rather than claimed outcomes.",
    next: "lifecycle-systems",
  },
  {
    slug: "lifecycle-systems",
    shortTitle: "Lifecycle that respects customer state",
    title: "Designing lifecycle infrastructure around verified behavior",
    category: "Lifecycle infrastructure",
    status: "Live + evolving",
    deck: "A state model that distinguishes intent, completion, and unresolved need—creating safer foundations for recovery, rewards, history, and feedback.",
    proofValue: "3",
    proofLabel: "states that could no longer blur",
    frame: [
      { label: "Scope", value: "Events, properties, journeys" },
      { label: "Role", value: "State model, data contracts, orchestration" },
      { label: "Partners", value: "Engineering, lifecycle, CX" },
      { label: "Platform", value: "Product data + Klaviyo" },
    ],
    challenge: [
      "Lifecycle programs were reacting to ambiguous events instead of what customers had actually done—or were ready to do next.",
      "Walk-in intent could be mistaken for completed service. Declined work could be flattened into generic churn. A duplicated event and property environment made those distinctions harder to trust at scale.",
    ],
    role: [
      "I treated lifecycle messaging as a product-infrastructure problem: document the event environment, define canonical states, and connect each downstream action to defensible evidence.",
      "The same model shaped recovery journeys, rewards, service history, NPS, and post-service communication.",
    ],
    decisions: [
      { title: "Intent is not completion", copy: "A walk-in request means the customer selected a shop and intended to visit. Rewards, NPS, and history wait for verified paid service." },
      { title: "Declined is not disengaged", copy: "A customer who declined work has an unresolved need. Preserve the service, shop, quote, and alternatives so the journey can reopen with context." },
      { title: "Canonicalize the signals", copy: "Define stable events for vehicle addition, app entry, signup, order completion, and Rewards activity; consolidate overlapping properties." },
      { title: "Show evidence status honestly", copy: "Separate what is live, in development, and still in backlog instead of presenting an evolving platform as a finished campaign." },
    ],
    outcome: "Verified state now determines what happens next.",
    outcomeDetail: "Declined-services data reached production, event and property consolidation moved into development, and reliable walk-in completion remains in backlog. The result is a safer foundation for personalized journeys without overstating unfinished work.",
    next: "feedback-system",
  },
  {
    slug: "feedback-system",
    shortTitle: "Feedback as an operating system",
    title: "Turning a survey migration into a closed-loop product system",
    category: "Voice of customer",
    status: "Live foundation",
    deck: "A reliable feedback model connecting the service moment to survey delivery, response routing, operational QA, and follow-up.",
    proofValue: "47%",
    proofLabel: "served 3+ days after order creation",
    frame: [
      { label: "Scope", value: "Post-service NPS" },
      { label: "Role", value: "Operating model, data, QA" },
      { label: "Partners", value: "CX, engineering, operations" },
      { label: "Systems", value: "Zendesk + Qualtrics" },
    ],
    challenge: [
      "Replacing one survey platform with another would not solve unreliable timing, thin transaction context, unclear ownership, or inconsistent follow-up.",
      "Early analysis showed that ticket-update time was a poor proxy for the service moment: roughly 47% of orders were serviced three or more days after creation.",
    ],
    role: [
      "I designed the operating model connecting qualification, survey delivery, directory and transaction data, alerts, QA dashboards, and CX follow-up.",
      "Production findings also became backend requirements for reliable Paid and completion timestamps so feedback could eventually anchor to the customer’s actual experience.",
    ],
    decisions: [
      { title: "Connect the full loop", copy: "Map qualification and delivery through response classification, alert routing, dashboard visibility, and accountable follow-up." },
      { title: "Carry transaction context", copy: "Link feedback to customer, order, partner, environment, source ticket, and service timing—not an isolated survey response." },
      { title: "Separate QA from reporting", copy: "Operational views monitor completeness, classifications, alerts, and suppression; executive reporting answers different questions." },
      { title: "Make maturity explicit", copy: "Document ownership, recurring QA, change control, launch checks, and the steps between an interim timing anchor and the target system." },
    ],
    outcome: "Feedback became an owned workflow, not an inbox of scores.",
    outcomeDetail: "The Zendesk-to-Qualtrics NPS integration is live with documented QA, routing, suppression, ownership, and follow-up. A true Paid/completion timestamp remains the planned refinement, clearly separated from the current foundation.",
    next: "booking-journey",
  },
];

export const findCase = (slug: string) => cases.find((item) => item.slug === slug);
