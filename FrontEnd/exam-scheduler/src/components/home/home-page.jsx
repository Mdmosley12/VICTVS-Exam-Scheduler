import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { CategoriesDiv } from "./categoriesDiv";
const handleDateChange = require("/utils/handleDateChange");
const handleLocationChange = require("/utils/handleLocationChange");
const handleCandidateChange = require("utils/handleCandidateChange");
const sortByTitle = require("/utils/sortByTitle");
const sortByName = require("/utils/sortByName");
const sortByDate = require("/utils/sortByDate");
const sortByLocation = require("/utils/sortByLocation");

export const HomePage = ({ data, uniqueLocations, uniqueCandidates }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [examList, setExamList] = useState(data);

  return (
    <main id={styles.main}>
      <div id={styles.examContainer}>
        <CategoriesDiv
          uniqueLocations={uniqueLocations}
          uniqueCandidates={uniqueCandidates}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          examList={examList}
          setExamList={setExamList}
          handleDateChange={handleDateChange}
          handleLocationChange={handleLocationChange}
          handleCandidateChange={handleCandidateChange}
          sortByTitle={sortByTitle}
          sortByName={sortByName}
          sortByDate={sortByDate}
          sortByLocation={sortByLocation}
          data={data}
        />

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
