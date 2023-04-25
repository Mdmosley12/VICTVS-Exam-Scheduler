const sortByTitle = (examList, setExamList, data) => {
  const sortedByTitle = [...examList].sort((a, b) => {
    return a.Title.localeCompare(b.Title, undefined, { numeric: true });
  });
  setExamList(sortedByTitle);
};

module.exports = sortByTitle;
