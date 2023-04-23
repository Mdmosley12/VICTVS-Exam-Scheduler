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

  const sortByTitle = () => {
    setExamList(data);
  };

  const sortByName = () => {
    const sortedByName = [...examList].sort((a, b) => {
      return a.CandidateName.localeCompare(b.CandidateName);
    });
    setExamList(sortedByName);
  };

  const sortByDate = () => {
    const sortedByDate = [...examList].sort(function (a, b) {
      const dateA = new Date(formatDate(a.Date));
      const dateB = new Date(formatDate(b.Date));
      return dateA - dateB;
    });
    setExamList(sortedByDate);
  };

  const sortByLocation = () => {
    const sortedByLocation = [...examList].sort((a, b) => {
      return a.LocationName.localeCompare(b.LocationName);
    });
    setExamList(sortedByLocation);
  };

  return (
    <main id={styles.main}>
      <div id={styles.examContainer}>
        <div id={styles.categoriesDiv}>
          <button className={styles.sortButtons} onClick={sortByTitle}>
            Title
          </button>
          <button className={styles.sortButtons} onClick={sortByTitle}>
            Description
          </button>
          <button className={styles.sortButtons} onClick={sortByName}>
            Candidate
          </button>
          <div id={styles.dateDiv}>
            <button id={styles.dateButton} onClick={sortByDate}>
              Date
            </button>
            <input
              type="date"
              id={styles.dateSelector}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <button className={styles.sortButtons} onClick={sortByLocation}>
            Location
          </button>
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
