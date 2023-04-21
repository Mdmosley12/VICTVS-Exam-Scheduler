import Link from "next/link";
import styles from "@/styles/Header.module.css";

export const Header = () => {
  return (
    <header id={styles.header}>
      <div id={styles.logoDiv}>
        <h2>VICTVS Exam Scheduler</h2>
      </div>
      <nav id={styles.nav}>
        <Link className={styles.nav_button} href="/">
          Exam List
        </Link>
        <Link className={styles.nav_button} href="/map">
          Map View
        </Link>
      </nav>
    </header>
  );
};
