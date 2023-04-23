function formatDate(dateString) {
  const [datePart, timePart] = dateString.split(" ");
  const [day, month, year] = datePart.split("/");
  return `${year}-${month}-${day}`;
}

module.exports = formatDate;
