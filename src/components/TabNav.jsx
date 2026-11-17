import { useRef } from "react";
import styles from "./TabNav.module.css";

export default function TabNav({ sections, activeId, onChange }) {
  const tabRefs = useRef([]);

  const moveTo = (index) => {
    const next = sections[index];
    if (!next) return;
    onChange(next.id);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event, index) => {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % sections.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + sections.length) % sections.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = sections.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    moveTo(nextIndex);
  };

  return (
    <div className={styles.tabbar}>
      <nav className={styles.tabs} role="tablist" aria-label="Sections">
        {sections.map((section, index) => {
          const selected = section.id === activeId;

          return (
            <button
              key={section.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${section.id}`}
              aria-selected={selected}
              aria-controls="section-panel"
              tabIndex={selected ? 0 : -1}
              className={styles.tab}
              onClick={() => onChange(section.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {section.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
