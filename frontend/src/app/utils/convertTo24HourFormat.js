export default function convertTo24HourFormat(time) {
  const [hour, minute] = time.split(":");
  const hours = (hour % 12) + (time.toUpperCase().includes("PM") ? 12 : 0);
  return new Date(`1970-01-01T${hours.toString().padStart(2, "0")}:${minute}Z`);
}
