const calculate = document.getElementById("calculate")
const brithday = document.getElementById("brithday")
const result = document.getElementById("result")

function calculateAge(){
    const birthdayValve= brithday.value

    if(birthdayValve==""){
        alert("Please Enter Your Date Of Birth")
    }
    else{
        let age = getAge(birthdayValve)

        if(age < 0){
            result.innerText=`SORRY`  
        }else{
  result.innerText=`Your age is ${age} ${age > 1 ? "Years" :"Year"}`
        }
      
    }





}
function getAge(birthdayValve){
    const currentDate= new Date ();
    const birthdayDate = new Date (birthdayValve);

    // find the  year of this date
    let age = currentDate.getFullYear() - birthdayDate.getFullYear()

    // find the  month of this date
    let month = currentDate.getMonth() - birthdayDate.getMonth()

    // check the birthday is happen in this year or not
    // its check if month is -ve or month=0 and currentDate less than birthdayDate
    // age is subtracting by years if the month not come or happen to come then the age want to decrement
    if(month < 0 || month===0 && currentDate.getDate() < birthdayDate.getDate() ){
        age --
    }

return age

}



calculate.addEventListener("click",calculateAge )