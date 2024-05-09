function calculateDuration(timeStart, timeEnd) {
  const start = new Date(`1970-01-01T${timeStart}Z`);
  const end = new Date(`1970-01-01T${timeEnd}Z`);
  const duration = (end - start) / 60000; // convert milliseconds to minutes
  return duration;
}
module.exports = calculateDuration;
