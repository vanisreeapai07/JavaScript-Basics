var day = 3;
var dayName;

switch (day) {
    case 1:
        dayName = 'mon';
        break;
    case 2:
        dayName = 'tue';
        break;
    case 3:
        dayName = 'wed';
        break;
    case 4:
        dayName = 'thu';
        break;
    case 5:
        dayName = 'fri';
        break;
    case 6:
        dayName = 'sat';
        break;
    case 7:
        dayName = 'sun';
        break;
    default:
        dayName = 'invalid';
        break;

}
console.log(`The day number ${day} corresponds to ${dayName}`);




