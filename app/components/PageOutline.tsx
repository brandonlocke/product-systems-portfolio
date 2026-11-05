"use client";

import { useEffect, useState } from "react";

export type OutlineItem = { id: string; label: string };

export default function PageOutline({ items }: { items: readonly OutlineItem[] }) {
  const [current, setCurrent] = useState(items[0].id);

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;

    function update() {
      frame = 0;
      const readingLine = Math.min(180, window.innerHeight * 0.3);
      let active = sections.at(0);
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) active = section;
      }
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) active = sections.at(-1);
      setCurrent(active?.id ?? items[0].id);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [items]);

  return (
    <ul className="sidebar-links sidebar-outline">
      {items.map(({ id, label }) => (
        <li key={id}>
          <a href={`#${id}`} aria-current={current === id ? "location" : undefined}>{label}</a>
        </li>
      ))}
    </ul>
  );
}
