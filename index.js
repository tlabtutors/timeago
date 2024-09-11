export default timeAgo = (date) => {
  // milliseconds = 1000
  const seconds = Math.floor((new Date() - date) / 1000);
  // interval is the number of year/s to date
  const interval = Math.floor(seconds / 31536000);
  //years: 365 * 24 * 60 * 60 = 31536000
  if (interval > 1) {
    return interval + " years ago";
  }
  if (interval === 1) {
    return interval + " year ago";
  }
  //months: 365/12 * 24 * 60 * 60 = 2628000
  const months = Math.floor(seconds / 2628000);
  if (months > 1) {
    return months + " months ago";
  }
  if (months === 1) {
    return months + " month ago";
  }
  //days:  24 * 60 * 60 = 86400
  const days = Math.floor(seconds / 86400);
  if (days > 1) {
    return days + " days ago";
  }
  if (days === 1) {
    return days + " day ago";
  }
  //hours:  1 * 60 * 60 = 3600
  const hours = Math.floor(seconds / 3600);
  if (hours > 1) {
    return hours + " hours ago";
  }
  if (hours === 1) {
    return hours + " hour ago";
  }
  //minutes:  1 *  60 = 60
  const minutes = Math.floor(seconds / 60);
  if (minutes > 1) {
    return minutes + " minutes ago";
  }
  if (minutes === 1) {
    return minutes + " minute ago";
  }
  return "just now";
};

// 2024-07-25T00:00:00.000+00:00
// 2024-06-14T16:04:35.178+00:00
// 2024-06-14T16:04:35.178+00:00
// console.log("AGE: ", timeAgo(new Date("2020-06-14T16:04:35.178+00:00")));
