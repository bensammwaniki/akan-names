// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

// getting the data from the form 
var dataOne = document.getElementById("name").value
var dataTwo = document.getElementById("date").value
var dataThree = document.getElementById("male").checked
var dataFour = document.getElementById("female").checked

// calculate day of the week 
var date = dataTwo.replace(/-/g, "")
var arr = Array.from(date)
var cent = parseInt(arr[0]+arr[1])
var year = parseInt(arr[2]+arr[3])
var month = parseInt(arr[4]+arr[5])
var day = parseInt(arr[6]+arr[7])

function dayOfWeek(){
    var when = ( ( (cent/4) -2*cent-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )%7
    var day = Math. trunc(when);
    var arryDays = [
        male = {
        Sunday: "Kwasi",
        Monday: "Kwadwo",
        Tuesday: "Kwabena",
        Wednesday: "Kwaku",
        Thursday:  "Yaw",
        Friday: "Kofi",
        Saturday: "Kwame" 
                 },
        female = {
            Sunday: "Akosua",
            Monday: "Adwoa",
            Tuesday: "Abenaa",
            Wednesday: "Akua",
            Thursday:  "Yaa",
            Friday: "Afua",
            Saturday: "Ama"
                    }
                      ]
                      


return when
}

