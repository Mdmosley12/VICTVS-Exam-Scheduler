const handleLocationChange = (event, setExamList, data) => {
  const location = event.target.value;
  if (location) {
    const filtered = data.filter((item) => item.LocationName === location);
    setExamList(filtered);
  } else {
    setExamList(data);
  }
};

module.exports = handleLocationChange;
