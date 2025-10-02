import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <section className={styles.bioWrapper}>
      <img
        src="pogi.png"
        alt="Profile Avatar"
        className={styles.portrait}
      />
      <h2 className={styles.fullIdentity}>Clark P. Tuyan</h2>
      <p className={styles.ageText}>Age: 26</p>
      <p className={styles.bioText}>
        Enjoys playing basketball during free time.
      </p>
    </section>
  );
}
