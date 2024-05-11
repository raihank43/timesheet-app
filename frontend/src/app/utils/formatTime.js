export default function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  return `${hours}:${minutes}`;
}
