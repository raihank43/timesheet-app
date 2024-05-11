export default function convertMinutesToHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} jam`;
  } else {
    return `${hours} jam ${remainingMinutes} menit`;
  }
}
