var CC = parseInt(prompt("Enter your First 2 digits of the Year you were born"));
var YY = parseInt(prompt("Enter your Last 2 digits of the Year you were born"));
var MM = parseInt(prompt("Enter your month number you were born"));
var DD = parseInt(prompt("Enter your date you were born"));

var dayOfWeek = function(YY, CC, MM, DD) {
    return -1*(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM+1) / 10)) + DD) % 7
};
var results = parseInt(dayOfWeek(YY, CC, MM, DD));
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var birthDay = days[results];
alert("You were born on " + birthDay);

