const btn = document.getElementById("btn");

const inp = document.getElementById("inp");
const result = document.getElementById("result");
function calculateAge() {
    const inpValue = inp.value ;
    if (inpValue === "") {
        alert("please enter your birthday");
    }
    else {
        const age = getAge(inpValue);
        result.textContent = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(inpValue){
    const currentDate = new Date();
    const birthdayDate = new Date(inpValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}

btn.addEventListener("click",calculateAge);

