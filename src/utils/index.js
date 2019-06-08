const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Takes in an 8601-formatted date, spits back a string in the form `June 02,
// 1984`.
const formatCalendarDate = dateString => {
  const date = new Date(Date.parse(dateString));

  const monthName = months[date.getMonth()];
  const formattedDays = date
    .getDate()
    .toString()
    .padStart(2, "0");

  return `${monthName} ${formattedDays}, ${date.getFullYear()}`;
};

export { formatCalendarDate };
