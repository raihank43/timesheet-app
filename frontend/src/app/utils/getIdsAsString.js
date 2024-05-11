export default function getIdsAsString(activities) {
  const ids = activities.map((activity) => activity.id);
  return ids.join(",");
}
