import styles from "./JobList.module.css";

export default function JobList({ items }) {
  return (
    <>
      {items.map((job) => (
        <article className={styles.entry} key={job.title}>
          <h3 className={styles.title}>{job.title}</h3>
          <p className={styles.role}>{job.role}</p>
          <p className={styles.description}>{job.description}</p>

          <h4 className={styles.areasTitle}>Key areas</h4>
          <ul className={styles.areas}>
            {job.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
