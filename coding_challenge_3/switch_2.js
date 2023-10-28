const currentDate = new Date();
const day = currentDate.getDay();
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const dayName = days[day];

console.log(`Today is ${dayName}`);


