const handleCandidateChange = (event, setExamList, data) => {
  const candidate = event.target.value;
  if (candidate) {
    const filtered = data.filter((item) => item.CandidateName === candidate);
    setExamList(filtered);
  } else {
    setExamList(data);
  }
};

module.exports = handleCandidateChange;
