"use client";

import { useEffect, useState } from "react";

const identities = [
  "lifecycle product manager",
  "growth strategist",
  "cross-functional translator",
  "systems-minded operator",
];

export default function TypedIdentity() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(identities[0].length);
  const [deleting, setDeleting] = useState(false);
  const phrase = identities[phraseIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const finishedTyping = characterIndex === phrase.length && !deleting;
    const finishedDeleting = characterIndex === 0 && deleting;
    const delay = finishedTyping ? 1500 : deleting ? 34 : 58;

    const timer = window.setTimeout(() => {
      if (finishedTyping) setDeleting(true);
      else if (finishedDeleting) {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % identities.length);
      } else setCharacterIndex((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterIndex, deleting, phrase]);

  return (
    <p className="typed-identity" aria-label={`I'm a ${identities.join(", ")}`}>
      <span aria-hidden="true">I’m a <strong>{phrase.slice(0, characterIndex)}</strong><i /></span>
    </p>
  );
}
