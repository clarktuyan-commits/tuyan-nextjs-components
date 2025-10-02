import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  const techStack = ["HTML", "CSS", "JavaScript"];

  return (
    <section className={styles.skillBoard}>
      <h3 className={styles.skillHeading}>Skills</h3>
      <ul className={styles.skillBullets}>
        {techStack.map((skill, idx) => (
          <li key={idx} className={styles.skillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
