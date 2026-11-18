import { siteContent } from "./data/content.js";
import { useActiveSection } from "./hooks/useActiveSection.js";
import ProfileHeader from "./components/ProfileHeader.jsx";
import TabNav from "./components/TabNav.jsx";
import SectionPanel from "./components/SectionPanel.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import styles from "./App.module.css";

export default function App() {
  const { profile, closing, sections } = siteContent;
  const { activeSection, setActiveId } = useActiveSection(sections);

  if (!activeSection) return null;

  return (
    <div className={styles.shell}>
      <ProfileHeader profile={profile} />

      <TabNav
        sections={sections}
        activeId={activeSection.id}
        onChange={setActiveId}
      />

      <SectionPanel key={activeSection.id} section={activeSection} />

      <SiteFooter profile={profile} closing={closing} />
    </div>
  );
}
