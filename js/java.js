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
if (birthDay=="undefined"){
    alert(ERROR)
}
else{
    alert("You were born on " + birthDay);
}

var gender = (prompt("Please enter your Gender (Male or Female)"));
if (gender == "Male") {
    if (birthDay == "Sunday") {
        alert("Akan name is Kwasi");
    }
    if (birthDay == "Monday") {
        alert("Akan name is Kwandwo");
    }
    if (birthDay == "Tuesday") {
        alert("Akan name is Kwabena");
    }
    if (birthDay == "Wednesday") {
        alert("Akan name is Kwaku");
    }
    if (birthDay == "Thursday") {
        alert("Akan name is Yaw");
    }
    if (birthDay == "Friday") {
        alert("Akan name is Kofi");
    }
    if (birthDay == "Saturday") {
        alert("Akan name is Kwame");
    }
}
if (gender=="Female"){
    if (birthDay == "Sunday") {
        alert("Akan name is Akosua");
    }
    if (birthDay == "Monday") {
        alert("Akan name is Adwoa");
    }
    if (birthDay == "Tuesday") {
        alert("Akan name is Abenaa");
    }
    if (birthDay == "Wednesday") {
        alert("Akan name is Akua");
    }
    if (birthDay == "Thursday") {
        alert("Akan name is Yaa");
    }
    if (birthDay == "Friday") {
        alert("Akan name is Afua");
    }
    if (birthDay == "Saturday") {
        alert("Akan name is Ama");
    }
}
else{
    alert(ERROR)
}