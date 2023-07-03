// Create a new Date object
const currentDate = new Date();

// Get the current date
const date = currentDate.getDate();

// Get the current month (Note: Months are zero-based, so January is 0)
const month = currentDate.getMonth() + 1;

// Get the current year
const year = currentDate.getFullYear();

// Get the current hours
const hours = currentDate.getHours();

// Get the current minutes
const minutes = currentDate.getMinutes();

// Get the current seconds
const seconds = currentDate.getSeconds();

// Format the date and time
export const dateTime = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

// Display the current date and time
console.log(`Current date: ${dateTime}`);
