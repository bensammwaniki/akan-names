// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

// getting the data from the form 


function dayOfWeek(){

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

    var when = ( ( (cent/4) -2*cent-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )%7
    var dayW = Math. trunc(when);
    var arryDays = [
        male = {
        Saturday:"Kwame",
        Sunday: "Kwasi",
        Monday: "Kwadwo",
        Tuesday: "Kwabena",
        Wednesday: "Kwaku",
        Thursday:  "Yaw",
        Friday: "Kofi"
                 },
        female = {
            Saturday: "Ama",
            Sunday: "Akosua",
            Monday: "Adwoa",
            Tuesday: "Abenaa",
            Wednesday: "Akua",
            Thursday:  "Yaa",
            Friday: "Afua"
                    }
                      ]


                            if(dataThree == false && dataFour == false){
                            alert("please input your gender")
                            }
                            if(dataTwo === ""){
                                alert("please input your DOB")

                            }
                            // verifying male names

                            if(dataThree == true && dayW == 0){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Saturday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Saturday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Saturday
                            }
                            if(dataThree == true && dayW == 1){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Sunday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Sunday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Sunday
                            }
                            if(dataThree == true && dayW == 2){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Monday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Monday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Monday
                            }
                            if(dataThree == true && dayW == 3){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Tuesday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Tuesday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Tuesday
                            }
                            if(dataThree == true && dayW == 4){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Wednesday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Wednesday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Wednesday
                            }
                            if(dataThree == true && dayW == 5){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Thursday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Thursday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Thursday
                            }
                            if(dataThree == true && dayW == 6){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Friday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Friday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Friday
                            }

                        //   verify female names

                            if(dataFour == true && dayW == 0){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Saturday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Saturday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Saturday
                            }
                            if(dataFour == true && dayW == 1){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Sunday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Sunday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Sunday
                            }
                            if(dataFour == true && dayW == 2){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Monday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Monday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Monday
                            }
                            if(dataFour == true && dayW == 3){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Tuesday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Tuesday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Tuesday
                            }
                            if(dataFour == true && dayW == 4){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Wednesday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Wednesday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Wednesday
                            }
                            if(dataFour == true && dayW == 5){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Thursday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Thursday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Thursday
                            }
                            if(dataFour == true && dayW == 6){
                                document.getElementById("nameDisp").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Friday
                                document.getElementById("nameDisp1").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Friday
                                document.getElementById("nameDisp2").innerHTML="Wow see "+ dataOne + " your akan name is " + arryDays[0].Friday
                            }
return dayW
} 

