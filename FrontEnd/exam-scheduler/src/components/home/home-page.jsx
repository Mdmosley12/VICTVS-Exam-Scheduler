import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";
const formatDate = require("/utils/formatDate");

export const HomePage = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [examList, setExamList] = useState(data);

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    if (date) {
      const filtered = data.filter((item) => formatDate(item.Date) === date);
      setExamList(filtered);
    } else {
      setExamList(data);
    }
  };

  return (
    <main id={styles.main}>
      <div id={styles.examContainer}>
        <div id={styles.categoriesDiv}>
          <p className={styles.categories}>Title</p>
          <p className={styles.categories}>Description</p>
          <p className={styles.categories}>Candidate</p>
          <div id={styles.dateDiv}>
            <p>Date</p>
            <input
              type="date"
              id="dateSelector"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <p className={styles.categories}>Location</p>
        </div>
        {examList.map((exam) => {
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
