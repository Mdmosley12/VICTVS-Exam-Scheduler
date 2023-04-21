import Link from "next/link";
import styles from "@/styles/Home.module.css";

export const HomePage = ({ data }) => {
  return (
    <main id={styles.main}>
      <div id={styles.examContainer}>
        <div id={styles.categoriesDiv}>
          <p className={styles.categories}>Title</p>
          <p className={styles.categories}>Description</p>
          <p className={styles.categories}>Candidate</p>
          <p className={styles.categories}>Date</p>
          <p className={styles.categories}>Location</p>
        </div>
        {data.map((exam) => {
          return (
            <div className={styles.exam}>
              <h3 className={styles.examTitle}>{exam.Title}</h3>
              <p className={styles.examDescription}>{exam.Description}</p>
              <p className={styles.examCandidate}>{exam.CandidateName}</p>
              <p className={styles.examDate}>{exam.Date}</p>
              <p className={styles.examLocation}>{exam.LocationName}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};
