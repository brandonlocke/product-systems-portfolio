export type CaseStudy = {
  slug: string;
  shortTitle: string;
  title: string;
  category: string;
  status: string;
  statusTone: "live" | "pilot" | "evolving";
  period: string;
  deck: string;
  proofValue: string;
  proofLabel: string;
  proofContext: string;
  result: string;
  evidenceLimit: string;
  contribution: string;
  collaborators: string;
  challengeHeading: string;
  challenge: string[];
  decisions: { title: string; constraint: string; choice: string }[];
  outcome: string;
  outcomeDetail: string;
  detailLabel: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "rewards",
    shortTitle: "Give customers a reason to return.",
    title: "Launching CarAdvise Rewards across the customer and operational experience",
    category: "Retention & loyalty",
    status: "Launched",
    statusTone: "live",
    period: "Launched May 2026",
    deck: "Turning a points-based retention idea into a product customers could understand and teams could support.",
    proofValue: "71,424",
    proofLabel: "customers supported",
    proofContext: "First 12 weeks after launch",
    result: "Rewards launched across product, checkout, admin, and lifecycle communications. In its first 12 weeks, customers redeemed $37,520 in value.",
    evidenceLimit: "These figures describe observed program activity. They do not establish an increase in retention caused by Rewards.",
    contribution: "I defined the MVP rules, customer behavior, lifecycle requirements, and launch operating model, then used production findings to inform follow-up work.",
    collaborators: "Engineering, design, CX, support, and lifecycle",
    challengeHeading: "A retention idea needed rules people could rely on.",
    challenge: [
      "The previous miles-based concept was hard to understand and weakly connected to the behaviors CarAdvise wanted to encourage. A replacement needed recognizable value and a clear path from earning to redemption.",
      "That value also had to survive the realities of checkout: changing services, cancellations, partner benefits, discounts, taxes, and fees. Every customer-facing promise needed matching operational behavior.",
    ],
    decisions: [
      { title: "Make the value easy to recognize.", constraint: "Customers needed to understand what a balance was worth before deciding whether to use it.", choice: "I specified a simple currency: 100 points equals $1 in service credit, earned through eligible spend and selected maintenance behaviors." },
      { title: "Define redemption before expanding earning.", constraint: "Points could be reserved, spent, or returned as an order changed. Ambiguity would undermine trust.", choice: "I defined reservation, cancellation, rounding, discount, and exclusion rules across product, checkout, admin, and communications." },
      { title: "Treat the launch as the start of learning.", constraint: "An MVP could validate operations without proving a retention effect.", choice: "I created training and a 30-day support model, translated ledger and redemption issues into follow-up work, and used observed earning patterns to shape the next roadmap questions." },
    ],
    outcome: "A live program, and a clearer next question.",
    outcomeDetail: "The first 12 weeks produced 100,717 ledger transactions and approximately 7,450 order-linked redemption transactions. Customers who earned beyond the introductory grant redeemed at 32.6%, compared with 0.35% among grant-only recipients. That association focused the next questions on repeat earning, clearer redemption value, and timely engagement. It was not treated as causal evidence of retention lift.",
    detailLabel: "Explore the program evidence",
  },
  {
    slug: "declined-services",
    shortTitle: "Reopen a service decision with context.",
    title: "Building and launching a controlled declined-service recovery pilot",
    category: "Lifecycle recovery",
    status: "Manual pilot",
    statusTone: "pilot",
    period: "October 2026 pilot",
    deck: "Helping customers revisit recommended maintenance with a clear explanation, relevant shop options, and a controlled incentive.",
    proofValue: "169",
    proofLabel: "recipients processed",
    proofContext: "First manual send · October 26, 2026",
    result: "The first manual send processed 169 recipients after an eligibility review removed 11 queued sends. The flow remained under manual control.",
    evidenceLimit: "Processed recipients are not a delivery or conversion metric. Recovered bookings and revenue have not yet been validated.",
    contribution: "I defined the recovery experience and audience rules, worked through event and promotion constraints with engineering, and managed the cohort review and launch readiness.",
    collaborators: "Engineering, operations, and lifecycle",
    challengeHeading: "A declined recommendation was still an unresolved need.",
    challenge: [
      "Customers can decline recommended maintenance without deciding they will never need it. A useful follow-up had to preserve the original service context and make reconsideration easier.",
      "The journey depended on more than an email. The event had to describe an eligible service, shop options needed usable prices, the offer needed predictable behavior, and the customer still needed to be eligible when the message was sent.",
    ],
    decisions: [
      { title: "Explain the service before asking for action.", constraint: "A discount alone did not explain why the original recommendation deserved another look.", choice: "I paired a concise service explanation with the prior visit context and up to three shop options, giving the customer a concrete decision to revisit." },
      { title: "Change the promotion mechanism when its scope failed.", constraint: "An automatically applied promotion could attach outside the intended recovery journey, and the available admin controls could not restrict it to individual services.", choice: "We paused the launch and moved to an explicit checkout code. I tightened the audience and service checks and kept the initial send manual." },
      { title: "Recheck the queue at the moment of launch.", constraint: "Eligibility could change while customers waited for the promotion and data issues to be resolved.", choice: "The queued audience was reviewed again, 11 ineligible sends were canceled, and the remaining 169 were processed only after approval." },
    ],
    outcome: "A controlled launch with an honest measurement boundary.",
    outcomeDetail: "The October 26 send moved the program from preparation into a live pilot. The next measurement step is to connect the original declined service to a subsequent booking and paid order, then assess incentive use and recovered revenue. The launch demonstrates execution and control; commercial impact remains open.",
    detailLabel: "Explore the recovery decision model",
  },
  {
    slug: "booking-journey",
    shortTitle: "Keep a failed booking from becoming a lost customer.",
    title: "Rebuilding the booking journey around returning users and recoverable failure",
    category: "Consumer experience",
    status: "Released",
    statusTone: "live",
    period: "Released · Web and mobile",
    deck: "Preserving progress through late-stage failure and recognizing the information returning customers had already provided.",
    proofValue: "Retry",
    proofLabel: "without restarting",
    proofContext: "Booking recovery released",
    result: "Payment handling and final confirmation were separated, recovery paths preserved valid progress, and returning-user behavior reached production.",
    evidenceLimit: "Delivery is established. A conversion lift has not been validated against a defined baseline.",
    contribution: "I defined customer and system behavior across first-time, returning-user, and failure states, translated it into requirements, and coordinated UAT and release follow-through.",
    collaborators: "Design, engineering, and operations",
    challengeHeading: "The final step could send customers back to the beginning.",
    challenge: [
      "Booking combined vehicle entry, service selection, shop choice, scheduling, payment, and confirmation. A late failure could leave customers repeating work or uncertain whether a payment-related action had succeeded.",
      "Returning users also faced requests for information the platform already knew. The journey needed to recognize both saved information and valid progress within the current session.",
    ],
    decisions: [
      { title: "Separate payment from booking confirmation.", constraint: "A failed confirmation should not make an otherwise successful payment-method action ambiguous.", choice: "I defined those as separate operations so a confirmation retry could happen without repeating completed payment setup." },
      { title: "Recover at the affected step.", constraint: "A generic restart discarded valid vehicle, service, shop, and scheduling choices.", choice: "I specified error-specific recovery and a general fallback, preserving the customer context that remained valid." },
      { title: "Ask returning customers only for what is missing.", constraint: "First-time and repeat visits had different information needs, with additional partner and market rules.", choice: "I defined saved-data and conditional-step behavior, then worked through US, Canada, walk-in, and responsive states in UAT." },
    ],
    outcome: "Recovery became part of the designed experience.",
    outcomeDetail: "The error-recovery story, repeat-booking flow, and first-time-user modifications reached Released status. Related work covered dashboard entry, vehicle switching, service search, and responsive behavior. The shipped behavior is the result established here; its effect on booking completion still needs a validated comparison.",
    detailLabel: "Explore the booking recovery model",
  },
  {
    slug: "lifecycle-systems",
    shortTitle: "Let customer state determine the next message.",
    title: "Making lifecycle programs depend on evidence the product can support",
    category: "Lifecycle infrastructure",
    status: "Live + evolving",
    statusTone: "evolving",
    period: "2026 · Ongoing",
    deck: "Clarifying event meaning, documenting dependencies, and making a growing lifecycle environment easier to operate.",
    proofValue: "325",
    proofLabel: "saved templates reorganized",
    proofContext: "October account-organization closeout",
    result: "The work produced a documented data reference, clearer account organization, and explicit distinctions between intent, payment, and unresolved service needs.",
    evidenceLimit: "Completed account work does not mean all event and attribution issues are resolved. Payment, completion, and eligibility questions remain tracked separately.",
    contribution: "I audited lifecycle dependencies, defined customer-state requirements, investigated event and property behavior, and organized the account around current use and delivery status.",
    collaborators: "Engineering, lifecycle, CX, and operations",
    challengeHeading: "A familiar event name was not enough to trust a journey.",
    challenge: [
      "Programs depended on signals whose names could imply more than the underlying action established. A walk-in request showed intent, while later communications needed evidence of actual service or payment.",
      "Duplicated metrics, overlapping properties, draft templates, and historical journeys made it harder to distinguish the current system from its accumulated history.",
    ],
    decisions: [
      { title: "Separate the signal from its meaning.", constraint: "A request, a payment, and completed service support different downstream actions.", choice: "I documented what each event could establish and where source-of-truth validation was still required before using it for Rewards, history, feedback, or recovery." },
      { title: "Make dependencies visible before retiring data.", constraint: "An apparently redundant metric could still support a live flow or segment.", choice: "I mapped event usage and field evidence, separated confirmed behavior from open questions, and treated retirement as a dependency decision." },
      { title: "Give the account an operating structure.", constraint: "Historical and development assets made current work difficult to recognize.", choice: "The October closeout recorded 325 template moves across 12 batches, alongside verification and retained exceptions. Naming and flow organization made status easier to understand." },
    ],
    outcome: "A more legible system, with its gaps documented.",
    outcomeDetail: "The data reference and organization records give future work a concrete starting point. Recovery and onboarding investigations now explicitly distinguish historical events from current eligibility and suppression state. Account cleanup is a completed operational phase; unresolved data semantics and revenue attribution remain ongoing product work.",
    detailLabel: "Explore the customer-state model",
  },
  {
    slug: "feedback-system",
    shortTitle: "Turn customer feedback into an owned workflow.",
    title: "Connecting post-service surveys to context, routing, and follow-through",
    category: "Customer feedback",
    status: "Live foundation",
    statusTone: "evolving",
    period: "2026 · Live foundation",
    deck: "Using a survey-platform migration to clarify timing, ownership, operational QA, and the path from a response to action.",
    proofValue: "47%",
    proofLabel: "serviced 3+ days after order creation",
    proofContext: "Analysis that informed the timing requirements",
    result: "The Zendesk-to-Qualtrics integration went live with a documented operating model for QA, suppression, routing, and follow-up.",
    evidenceLimit: "The live foundation uses an interim timing anchor. The true payment and completion timestamp requirements are a separate refinement.",
    contribution: "I designed the feedback operating model and embedded-data requirements, documented ownership and QA, and translated production findings into timestamp requirements.",
    collaborators: "CX, engineering, and operations",
    challengeHeading: "Moving the survey did not solve when or why to send it.",
    challenge: [
      "A platform migration could preserve the same unreliable timing, thin transaction context, and unclear follow-up ownership. The system needed to represent the customer's service experience.",
      "Analysis found that roughly 47% of orders were serviced three or more days after creation. That made the creation date an unreliable substitute for the service moment.",
    ],
    decisions: [
      { title: "Carry the transaction context into feedback.", constraint: "A score alone could not explain the service or support action behind it.", choice: "I defined customer, order, partner, environment, and source-ticket context so a response could support investigation and follow-up." },
      { title: "Design the handoff after the response.", constraint: "Alerts and dashboards needed clear ownership to become useful action.", choice: "I connected classification to CX routing, team alerts, suppression, and accountable follow-up, with operational QA separated from executive reporting." },
      { title: "Distinguish the live system from the target.", constraint: "The integration could launch before the ideal timing source was available.", choice: "I documented the interim anchor and defined true Paid and completion timestamps as an explicit accuracy improvement." },
    ],
    outcome: "A live feedback loop with a defined path to better timing.",
    outcomeDetail: "The foundation connects survey delivery, transaction context, response routing, and recurring QA. The service-timing analysis shaped the backend refinement rather than becoming an unsupported claim about improved NPS.",
    detailLabel: "Explore the feedback operating model",
  },
];

export const findCase = (slug: string) => cases.find(item => item.slug === slug);
export const featuredCases = cases.slice(0, 3);
export const supportingCases = cases.slice(3);
