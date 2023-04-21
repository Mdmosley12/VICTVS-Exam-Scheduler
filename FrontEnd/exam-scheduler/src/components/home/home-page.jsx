import styles from "@/styles/Home.module.css";
import Link from "next/link";

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
            <div key={exam.id} className={styles.exam}>
              <h3 className={styles.examTitle}>{exam.Title}</h3>
              <p className={styles.examDescription}>{exam.Description}</p>
              <Link
                className={styles.examCandidate}
                href={`candidates/${exam.CandidateName}`}
              >
                <p>{exam.CandidateName}</p>
              </Link>
              <p className={styles.examDate}>{exam.Date}</p>
              <Link
                className={styles.examLocation}
                href={`locations/${exam.LocationName}`}
              >
                <p>{exam.LocationName}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};
