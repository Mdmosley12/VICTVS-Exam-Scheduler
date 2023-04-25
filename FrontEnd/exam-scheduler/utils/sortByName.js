const sortByName = (examList, setExamList) => {
  const sortedByName = [...examList].sort((a, b) => {
    return a.CandidateName.localeCompare(b.CandidateName);
  });
  setExamList(sortedByName);
};

module.exports = sortByName;
