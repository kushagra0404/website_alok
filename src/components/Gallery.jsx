import styles from "./Gallery.module.css";

export default function Gallery({ images }) {
  return (
    <div className={styles.grid}>
      {images.map((image) => (
        <figure className={styles.figure} key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}
