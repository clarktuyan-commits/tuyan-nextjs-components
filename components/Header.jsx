import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.heroBar}>
      <h1 className={styles.pageLabel}>My Profile</h1>
      <h2 className={styles.subLabel}>Clark P. Tuyan</h2>
    </header>
  );
}
