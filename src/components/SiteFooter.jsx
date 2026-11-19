import styles from "./SiteFooter.module.css";

export default function SiteFooter({ profile, closing }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.closing}>{closing}</p>

      <div className={styles.row}>
        <span className={styles.name}>{profile.name}</span>
        <span className={styles.copyright}>© {year}</span>
      </div>
    </footer>
  );
}
