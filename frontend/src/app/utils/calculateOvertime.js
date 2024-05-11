export default function calculateOvertime(activities, rate) {
  let totalDuration = 0;
  let totalEarnings = 0;

  activities.forEach((activity) => {
    const start = new Date(`1970-01-01T${activity.timeStart}Z`);
    const end = new Date(`1970-01-01T${activity.timeEnd}Z`);
    const nineAM = new Date("1970-01-01T09:00:00Z");
    const fivePM = new Date("1970-01-01T17:00:00Z");

    let overtimeStart = start;
    let overtimeEnd = end;

    if (start < nineAM) {
      overtimeEnd = nineAM;
    } else if (end > fivePM) {
      overtimeStart = fivePM;
    } else {
      return; // Skip this activity if it's not overtime
    }

    const duration = (overtimeEnd - overtimeStart) / 1000 / 60; // Convert to minutes

    if (duration > 0) {
      totalDuration += duration;
      totalEarnings += duration / 60 * rate * 1.3 ;
    }
  });

  return { totalDuration, totalEarnings };
}
