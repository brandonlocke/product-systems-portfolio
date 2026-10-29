"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CheckArt, FilterArt, ShopArt, VehicleArt } from "./DemoArt";

type DemoStep = { label: string; caption: string; duration?: number };
const scenarios: Record<string, { name: string; steps: DemoStep[] }> = {
  rewards: { name: "Rewards", steps: [
    {label:"Available",caption:"A customer can see what their points are worth."},
    {label:"Reserved",caption:"Applying points reserves them while the order is open."},
    {label:"Redeemed",caption:"The points are redeemed when the sample order is paid."},
  ]},
  "booking-journey": {name:"Booking recovery",steps:[
    {label:"Review",caption:"Vehicle, service, shop, time, and payment setup are ready."},
    {label:"Recover",caption:"Confirmation fails. The customer's valid choices stay in place."},
    {label:"Retry",caption:"Only confirmation is retried; payment setup is preserved.",duration:1400},
    {label:"Confirmed",caption:"The customer reaches confirmation without starting again."},
  ]},
  "declined-services": {name:"Declined Services",steps:[
    {label:"Recommendation",caption:"Start with the service the customer previously declined."},
    {label:"Compare",caption:"Give the customer relevant shop options to compare."},
    {label:"Choose",caption:"A selected shop carries the service into the next step."},
  ]},
  "lifecycle-systems": {name:"Customer state",steps:[
    {label:"Signal",caption:"A walk-in request records intent to visit."},
    {label:"Interpret",caption:"The request is classified separately from payment or fulfillment."},
    {label:"Route",caption:"Visit guidance is appropriate; completion still needs verification."},
  ]},
  "feedback-system": {name:"Customer feedback",steps:[
    {label:"Ask",caption:"A qualified service event starts a contextual feedback request."},
    {label:"Respond",caption:"A sample response keeps its service and order context."},
    {label:"Follow up",caption:"The response is routed to an owner for follow-up."},
  ]},
};

function Icon({name}:{name:"play"|"pause"|"next"|"reset"|"check"}) {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><>{name==="play"&&<path d="m7 4 9 6-9 6Z" fill="currentColor"/>}{name==="pause"&&<path d="M6 4v12m8-12v12" stroke="currentColor" strokeWidth="3"/>}{name==="next"&&<path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>}{name==="reset"&&<path d="M4 8a6 6 0 1 1 0 5m0-9v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}{name==="check"&&<path d="m4 10 4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}</></svg>;
}

function DemoChrome({children}:{children:React.ReactNode}) {
  return <div className="demo-window"><div className="demo-browser-bar" aria-hidden="true"><i/><i/><i/><span>CarAdvise · demonstration</span></div><div className="demo-app-bar"><b>caradvise<span>.</span></b><span className="demo-profile" aria-hidden="true">D</span></div>{children}</div>;
}

function RewardsScene({step,go}:{step:number;go:(step:number)=>void}) {
  return <DemoChrome><div className="demo-screen rewards-screen" data-step={step}>
    {step<2 ? <>
      <div className="demo-screen-heading"><span>CHECKOUT</span><h4>Put your points to work.</h4></div>
      <div className="demo-wallet"><div className="demo-coin-stack" aria-hidden="true"><i/><i/><i/><span>✦</span></div><div><span>{step===1?"Reserved for this order":"Your Rewards"}</span><strong>500 <small>points</small></strong><p>$5 in service credit</p></div><span className={`wallet-state ${step===1?"is-reserved":""}`}>{step===1?"Reserved":"Available"}</span></div>
      <div className="demo-bill"><div><span>Eligible service amount</span><b>$100.00</b></div><div className={`reward-discount ${step===1?"is-applied":""}`}><span>Rewards applied</span><b>{step===1?"−$5.00":"$0.00"}</b></div><div className="demo-bill-total"><span>After Rewards</span><b>{step===1?"$95.00":"$100.00"}</b></div></div>
      <button type="button" className="demo-product-button" onClick={()=>go(step===0?1:2)}>{step===0?"Apply 500 points":"Complete sample order"}<span aria-hidden="true">→</span></button>
      <p className="demo-ui-note">Illustrative amounts. Taxes and fees omitted.</p>
    </> : <div className="demo-success"><CheckArt/><span className="demo-small-label">SAMPLE ORDER PAID</span><h4>Points put to good use.</h4><p><b>500 points</b> redeemed<br/>$5 applied to eligible service</p><div className="demo-receipt-row"><span>Reserved</span><b>0 points</b></div><div className="demo-receipt-row"><span>Redeemed</span><b>500 points</b></div></div>}
  </div></DemoChrome>;
}

function BookingScene({step,go}:{step:number;go:(step:number)=>void}) {
  return <DemoChrome><div className="demo-screen booking-screen" data-step={step}>
    {step===3 ? <div className="demo-success"><CheckArt/><span className="demo-small-label">SAMPLE APPOINTMENT</span><h4>You're confirmed.</h4><VehicleArt/><p>Your saved choices made it through.</p><div className="demo-confirmed-chip">Oil change · Selected shop · 10:00 AM</div></div> : <>
      <div className="demo-screen-heading"><span>REVIEW & CONFIRM</span><h4>Your next service.</h4></div>
      <div className="demo-vehicle-summary"><VehicleArt/><div><b>Your vehicle</b><span>Oil change</span></div></div>
      <div className="demo-booking-fields"><div><span>SHOP</span><b>Selected shop</b><i><Icon name="check"/></i></div><div><span>TIME</span><b>10:00 AM</b><i><Icon name="check"/></i></div><div><span>PAYMENT</span><b>Method saved</b><i><Icon name="check"/></i></div></div>
      <div className={`demo-booking-notice ${step===1?"has-error":step===2?"is-retrying":""}`} role="status">{step===1?<><span className="notice-symbol">!</span><div><b>We couldn't confirm this time.</b><p>Your choices are saved. Try confirmation again.</p></div></>:step===2?<><span className="demo-spinner"/><div><b>Retrying confirmation…</b><p>Using your saved choices and payment setup.</p></div></>:<><span className="notice-symbol">✓</span><div><b>Ready when you are.</b><p>This is a sample booking, using illustrative details.</p></div></>}</div>
      <button type="button" className="demo-product-button" onClick={()=>go(step===0?1:3)} disabled={step===2}>{step===0?"Confirm sample appointment":step===1?"Try confirmation again":"Confirming…"}<span aria-hidden="true">→</span></button>
    </>}
  </div></DemoChrome>;
}

const shops=[{name:"Oak Street Auto",price:"$75",distance:"0.8 mi"},{name:"City Auto Care",price:"$90",distance:"1.2 mi"},{name:"Neighborhood Service",price:"$105",distance:"2.0 mi"}];
function RecoveryScene({step,go}:{step:number;go:(step:number)=>void}) {
  const [selected,setSelected]=useState(0);
  const choose=(index:number)=>{setSelected(index);go(2);};
  return <DemoChrome><div className="demo-screen recovery-screen" data-step={step}>
    {step===0 ? <><div className="demo-screen-heading"><span>A RECOMMENDATION TO REVISIT</span><h4>Cabin air filter.</h4></div><div className="demo-part-illustration"><FilterArt/></div><div className="demo-recommendation-copy"><b>Why this matters</b><p>The original recommendation, explained in the context of your previous visit.</p></div><button type="button" className="demo-product-button" onClick={()=>go(1)}>Compare sample shops<span aria-hidden="true">→</span></button></> : step===1 ? <><div className="demo-screen-heading"><span>CABIN AIR FILTER</span><h4>A choice of shops.</h4></div><div className="demo-shop-list">{shops.map((shop,i)=><button type="button" className="demo-shop-choice" key={shop.name} onClick={()=>choose(i)} aria-label={`Choose sample shop ${shop.name}`}><ShopArt variant={i}/><div><b>{shop.name}</b><span>{shop.distance} · Sample estimate</span></div><strong>{shop.price}</strong>{i===0&&<small>BEST VALUE</small>}</button>)}</div><p className="demo-ui-note">Illustrative shops, distances, and prices.</p></> : <div className="demo-shop-selected"><span className="demo-small-label">YOUR SAMPLE SELECTION</span><ShopArt variant={selected}/><h4>{shops[selected].name}</h4><p>Cabin air filter <strong>{shops[selected].price}</strong></p><div className="demo-selection-note"><Icon name="check"/><span>Service and shop carried into the next step.</span></div><div className="demo-offer-note"><span>Offer</span><b>Code entered at checkout</b></div><p className="demo-ui-note">Demonstration only. No booking is created.</p></div>}
  </div></DemoChrome>;
}

function LifecycleScene({step,go}:{step:number;go:(step:number)=>void}) {
  return <DemoChrome><div className="demo-screen lifecycle-screen" data-step={step}><div className="demo-screen-heading"><span>EVENT → CUSTOMER STATE → ACTION</span><h4>Read the signal correctly.</h4></div><div className="demo-routing-graph"><div className="routing-node event-node"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="m18 3-10 15h8l-2 11 10-16h-8Z" fill="currentColor"/></svg><b>Walk-in request</b><span>Intent to visit</span></div><div className={`routing-wire ${step>0?"wire-active":""}`} aria-hidden="true"><i/></div><div className={`routing-node decision-node ${step>0?"node-active":""}`}><svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 3 13 13-13 13L3 16Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="m11 16 4 4 7-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg><b>Intent verified</b><span>Fulfillment is separate</span></div><div className={`routing-wire ${step>1?"wire-active":""}`} aria-hidden="true"><i/></div><div className={`routing-node action-node ${step>1?"node-active":""}`}><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="7" width="24" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/><path d="m5 9 11 9L27 9" fill="none" stroke="currentColor" strokeWidth="2"/></svg><b>Visit guidance</b><span>Appropriate next action</span></div></div><div className="demo-event-console"><span>customer_state</span><code>{step>0?'"intent_to_visit"':'awaiting interpretation'}</code><span>service_completed</span><code className="console-muted">not established</code></div><button type="button" className="demo-product-button" onClick={()=>go(Math.min(2,step+1))} disabled={step===2}>{step===0?"Interpret sample event":step===1?"Route sample event":"Routed for visit guidance"}<span aria-hidden="true">→</span></button><p className="demo-ui-note">Illustrative rules. Integration work remains ongoing.</p></div></DemoChrome>;
}

function FeedbackScene({step,go}:{step:number;go:(step:number)=>void}) {
  const [score,setScore]=useState(3);
  const bucket=score<=6?"Detractor":score<=8?"Passive":"Promoter";
  const owner=score<=8?"Customer experience":"Advocacy review";
  return <DemoChrome><div className="demo-screen feedback-screen" data-step={step}>{step<2?<><div className="demo-screen-heading"><span>AFTER A QUALIFIED SERVICE EVENT</span><h4>How was the experience?</h4></div><div className="demo-survey-art" aria-hidden="true"><svg viewBox="0 0 160 100"><path d="M27 24h106v51H87l-22 15V75H27Z" fill="#ded9e7"/><path d="M40 36h80M40 48h62" stroke="#a393ba" strokeWidth="5" strokeLinecap="round"/><circle cx="118" cy="69" r="21" fill="#6d587f"/><path d="m109 69 6 6 12-13" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/></svg></div><p className="demo-survey-question">How likely are you to recommend CarAdvise?</p><div className="demo-nps-scale" role="group" aria-label="Sample recommendation score">{Array.from({length:11},(_,i)=><button type="button" className={step===1&&i===score?"score-selected":""} onClick={()=>{setScore(i);go(1);}} key={i} aria-label={`Submit sample score ${i}`}>{i}</button>)}</div><div className="demo-nps-labels"><span>Not likely</span><span>Very likely</span></div><div className={`demo-response-record ${step===1?"response-visible":""}`} aria-hidden={step!==1}><span className="demo-small-label">SAMPLE RESPONSE</span><b>Score: {score} · {bucket}</b><p>Customer and service context retained.</p></div><button type="button" className="demo-product-button" onClick={()=>go(step===0?1:2)}>{step===0?"Submit sample response":"Route for follow-up"}<span aria-hidden="true">→</span></button></>:<div className="demo-followup"><span className="demo-small-label">RESPONSE FOLLOW-UP</span><div className="demo-ticket-icon" aria-hidden="true">↗</div><h4>A response with an owner.</h4><div className="demo-ticket"><div><b>Post-service feedback</b><span>Open</span></div><p>Sample {bucket.toLowerCase()} response</p><div className="demo-ticket-context"><span>Score <b>{score} / 10</b></span><span>Context <b>Service + order</b></span></div><div className="demo-ticket-owner"><i>{score<=8?"CX":"AR"}</i><span>Assigned to<br/><b>{owner}</b></span><Icon name="check"/></div></div><p className="demo-ui-note">Demonstration only. No survey or ticket is sent.</p></div>}</div></DemoChrome>;
}

export default function ProductDemo({slug,compact=false}:{slug:string;compact?:boolean}) {
  const scenario=scenarios[slug]??scenarios["feedback-system"];
  const [step,setStep]=useState(0);
  const [playing,setPlaying]=useState(false);
  const [reducedMotion,setReducedMotion]=useState(false);
  const root=useRef<HTMLElement>(null);
  const id=useId();
  const last=scenario.steps.length-1;
  const activate=()=>window.dispatchEvent(new CustomEvent("portfolio-demo-active",{detail:id}));
  const go=(next:number)=>{activate();setPlaying(false);setStep(Math.max(0,Math.min(last,next)));};
  useEffect(()=>{
    const preference=window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference=()=>{setReducedMotion(preference.matches);if(preference.matches)setPlaying(false);};
    updatePreference();preference.addEventListener("change",updatePreference);
    const pauseWhenHidden=()=>{if(document.hidden)setPlaying(false);};
    const pauseOther=(event:Event)=>{if((event as CustomEvent<string>).detail!==id)setPlaying(false);};
    document.addEventListener("visibilitychange",pauseWhenHidden);
    window.addEventListener("portfolio-demo-active",pauseOther);
    const observer=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)setPlaying(false);},{threshold:0.1});
    if(root.current)observer.observe(root.current);
    return()=>{preference.removeEventListener("change",updatePreference);document.removeEventListener("visibilitychange",pauseWhenHidden);window.removeEventListener("portfolio-demo-active",pauseOther);observer.disconnect();};
  },[id]);
  useEffect(()=>{
    if(!playing)return;
    if(step===last){setPlaying(false);return;}
    const timer=window.setTimeout(()=>setStep(current=>current+1),scenario.steps[step].duration??3000);
    return()=>window.clearTimeout(timer);
  },[playing,step,last,scenario]);
  const play=()=>{activate();if(reducedMotion){go(step===last?0:step+1);return;}if(playing){setPlaying(false);return;}if(step===last)setStep(0);setPlaying(true);};
  return <figure ref={root} className={`product-demo demo-${slug}${compact?" demo-compact":""}`} aria-label={`${scenario.name}. Interactive product demonstration.`} data-playing={playing}>
    <figcaption><span>INTERACTIVE RECONSTRUCTION</span><strong>{scenario.name}</strong></figcaption>
    <div className="demo-stage">
      {slug==="rewards"?<RewardsScene step={step} go={go}/>:slug==="booking-journey"?<BookingScene step={step} go={go}/>:slug==="declined-services"?<RecoveryScene step={step} go={go}/>:slug==="lifecycle-systems"?<LifecycleScene step={step} go={go}/>:<FeedbackScene step={step} go={go}/>}
    </div>
    <div className="demo-toolbar"><button type="button" className="demo-play" onClick={play} aria-label={`${reducedMotion?"Advance":playing?"Pause":step===last?"Replay":"Play"} ${scenario.name} demo`}><Icon name={reducedMotion?"next":playing?"pause":step===last?"reset":"play"}/>{reducedMotion?"Next":playing?"Pause":step===last?"Replay":"Play"}</button><div className="demo-progress" aria-hidden="true">{scenario.steps.map((s,i)=><i key={s.label} className={i<=step?"progress-done":""}/>)}</div><span className="demo-position">{step+1}/{scenario.steps.length}</span><button type="button" className="demo-icon-button" onClick={()=>go(0)} aria-label={`Restart ${scenario.name} demo`} disabled={step===0&&!playing}><Icon name="reset"/></button><button type="button" className="demo-icon-button" onClick={()=>go(step+1)} aria-label={`Next step in ${scenario.name} demo`} disabled={step===last}><Icon name="next"/></button></div>
    <p className="demo-step-caption" aria-live="polite" aria-atomic="true">{scenario.steps[step].caption}</p>
  </figure>;
}
