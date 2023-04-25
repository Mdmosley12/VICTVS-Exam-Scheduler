import React from "react";
import styles from "@/styles/Home.module.css";

export const CategoriesDiv = ({
  uniqueCandidates,
  uniqueLocations,
  selectedDate,
  setSelectedDate,
  examList,
  setExamList,
  handleDateChange,
  handleLocationChange,
  handleCandidateChange,
  sortByTitle,
  sortByName,
  sortByDate,
  sortByLocation,
  data,
}) => {
  return (
    <div id={styles.categoriesDiv}>
      <button
        className={styles.sortButtons}
        onClick={() => sortByTitle(examList, setExamList, data)}
      >
        Title
      </button>
      <button
        className={styles.sortButtons}
        onClick={() => sortByTitle(examList, setExamList, data)}
      >
        Description
      </button>

      <div id={styles.candidateDiv}>
        <button
          className={styles.sortButton}
          onClick={() => sortByName(examList, setExamList)}
        >
          Candidate
        </button>
        <select
          id={styles.candidateDropdown}
          name="candidates"
          onChange={(event) => handleCandidateChange(event, setExamList, data)}
        >
          <option value="">All Candidates</option>
          {uniqueCandidates.map((candidate) => {
            return (
              <option key={candidate} value={candidate}>
                {candidate}
              </option>
            );
          })}
        </select>
      </div>

      <div id={styles.dateDiv}>
        <button
          className={styles.sortButton}
          onClick={() => sortByDate(examList, setExamList)}
        >
          Date
        </button>
        <input
          type="date"
          id={styles.dateSelector}
          value={selectedDate}
          onChange={(event) =>
            handleDateChange(event, setExamList, setSelectedDate, data)
          }
        />
      </div>

      <div id={styles.locationDiv}>
        <button
          className={styles.sortButton}
          onClick={() => sortByLocation(examList, setExamList)}
        >
          Location
        </button>
        <select
          id={styles.locationDropdown}
          name="locations"
          onChange={(event) => handleLocationChange(event, setExamList, data)}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((location) => {
            return (
              <option key={location} value={location}>
                {location}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
