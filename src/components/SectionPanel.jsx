import JobList from "./JobList.jsx";
import Gallery from "./Gallery.jsx";
import styles from "./SectionPanel.module.css";

function Paragraphs({ items }) {
  return items.map((text, index) => (
    <p className={styles.paragraph} key={index}>
      {text}
    </p>
  ));
}

function Quote({ text }) {
  return <blockquote className={styles.quote}>{text}</blockquote>;
}

function Expertise({ title, items }) {
  return (
    <section className={styles.expertise}>
      <h3 className={styles.expertiseTitle}>{title}</h3>
      <ul className={styles.expertiseList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Identity({ items }) {
  return (
    <ul className={styles.identityList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Contact({ mobile, email }) {
  return (
    <div className={styles.contact}>
      <a className={styles.contactItem} href={`tel:${mobile.replace(/\s+/g, "")}`}>
        <span className={styles.contactLabel}>Mobile</span>
        <span className={styles.contactValue}>{mobile}</span>
      </a>
      <a className={styles.contactItem} href={`mailto:${email}`}>
        <span className={styles.contactLabel}>Email</span>
        <span className={styles.contactValue}>{email}</span>
      </a>
    </div>
  );
}

function Blocks({ blocks }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "paragraphs":
        return <Paragraphs items={block.items} key={index} />;
      case "quote":
        return <Quote text={block.text} key={index} />;
      case "jobs":
        return <JobList items={block.items} key={index} />;
      case "expertise":
        return <Expertise title={block.title} items={block.items} key={index} />;
      case "identity":
        return <Identity items={block.items} key={index} />;
      case "gallery":
        return <Gallery images={block.images} key={index} />;
      case "contact":
        return (
          <Contact
            mobile={block.mobile}
            email={block.email}
            key={index}
          />
        );
      default:
        return null;
    }
  });
}

export default function SectionPanel({ section }) {
  return (
    <main
      id="section-panel"
      className={styles.content}
      role="tabpanel"
      aria-labelledby={`tab-${section.id}`}
      tabIndex={-1}
    >
      <article>
        <h2 className={styles.title}>{section.heading}</h2>
        <Blocks blocks={section.blocks} />
      </article>
    </main>
  );
}
