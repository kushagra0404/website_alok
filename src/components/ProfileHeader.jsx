import styles from "./ProfileHeader.module.css";

export default function ProfileHeader({ profile }) {
  return (
    <header className={styles.hero}>
      <div className={styles.avatar}>
        <img src={profile.photo} alt={profile.photoAlt} />
      </div>

      <div className={styles.copy}>
        <p className={styles.kicker}>{profile.eyebrow}</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.role}</p>
        <p className={styles.tagline}>{profile.tagline}</p>
      </div>
    </header>
  );
}
