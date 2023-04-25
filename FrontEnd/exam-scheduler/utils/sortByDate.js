const formatDate = require("/utils/formatDate");

const sortByDate = (examList, setExamList) => {
  const sortedByDate = [...examList].sort(function (a, b) {
    const dateA = new Date(formatDate(a.Date));
    const dateB = new Date(formatDate(b.Date));
    return dateA - dateB;
  });
  setExamList(sortedByDate);
};

module.exports = sortByDate;
