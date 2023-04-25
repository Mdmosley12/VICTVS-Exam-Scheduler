const formatDate = require("/utils/formatDate");

const handleDateChange = (event, setExamList, setSelectedDate, data) => {
  const date = event.target.value;
  setSelectedDate(date);
  if (date) {
    const filtered = data.filter((item) => formatDate(item.Date) === date);
    setExamList(filtered);
  } else {
    setExamList(data);
  }
};

module.exports = handleDateChange;
