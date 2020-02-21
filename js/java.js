var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var akanMale = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function results(){
    var YYYY = parseInt(document.getElementById("YYYY").value);
    var MM = parseInt(document.getElementById("MM").value);
    var DD = parseInt(document.getElementById("DD").value);
    var birthDay = new Date(YYYY + "/" + MM + "/" + DD);
    var dayOfWeek = birthDay.getDay();
    var gender = print();
    var akanName;

    if(DD <1|| DD >31){
        alert("Invalid Date");
        return false;
    }
    if(MM <1|| MM >12){
        alert("Invalid Month");
        return false;
    }
    if(YYYY <1900|| YYYY >2100){
        alert("Invalid Year");
        return false;
    }

    if (gender === "Male") {
        akanName = akanMale[dayOfWeek];        
    }
    else {
        akanName = akanFemale[dayOfWeek]; 
    }
    alert("Your birth date was on a " +days[dayOfWeek]+ " and your akan name would be " +akanName+ ".");
}

function print(){
    var gender = document.getElementsByName("choice");
    for(i=0; i<gender.length; i++){
        if (gender[i].checked){
            return(gender[i].value)
        }
    }
}

