export default function dateFilter() {
  // return only mintes seconds and hour as a date object with 2 digits
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
