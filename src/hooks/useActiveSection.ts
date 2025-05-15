"use client";
import { useEffect, useState } from "react";

export function useActiveSection(
  sectionIds: string[],
  options: IntersectionObserverInit = { rootMargin: "0px", threshold: 0.6 }
) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((e) => e.isIntersecting)
        
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection?.target.id) {
        setActiveId(visibleSection.target.id);
      }
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds.join(","), options.rootMargin, options.threshold]);

  return activeId;
}
