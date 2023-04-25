const sortByLocation = (examList, setExamList) => {
  const sortedByLocation = [...examList].sort((a, b) => {
    return a.LocationName.localeCompare(b.LocationName);
  });
  setExamList(sortedByLocation);
};

module.exports = sortByLocation;
