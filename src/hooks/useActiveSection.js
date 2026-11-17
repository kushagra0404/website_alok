import { useEffect, useState } from "react";

const readHash = (sections) => {
  const id = window.location.hash.replace(/^#/, "");
  return sections.some((section) => section.id === id) ? id : null;
};

export function useActiveSection(sections) {
  const [activeId, setActiveId] = useState(
    () => readHash(sections) ?? sections[0]?.id ?? ""
  );

  const activeSection =
    sections.find((section) => section.id === activeId) ?? sections[0];

  useEffect(() => {
    if (!activeSection) return;
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", `${pathname}${search}#${activeSection.id}`);
  }, [activeSection]);

  useEffect(() => {
    const handleHashChange = () => {
      const id = readHash(sections);
      if (id) setActiveId(id);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [sections]);

  return { activeSection, setActiveId };
}
