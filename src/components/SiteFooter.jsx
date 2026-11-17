import styles from "./SiteFooter.module.css";

export default function SiteFooter({ profile, quote, closing }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.quote}>“{quote}”</p>

      <div className={styles.row}>
        <span>{profile.name}</span>
        <span className={styles.closing}>{closing}</span>
        <span>
          © {year} {profile.name}
        </span>
      </div>
    </footer>
  );
}
