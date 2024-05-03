function isValid(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
}


const emailValue = document.getElementById("email");
const errorMessage = document.getElementsByClassName("red")[0];

emailValue.addEventListener("blur", ()=> {
    const email= emailValue.value;
    if(isValid(email)){
        console.log("valid email");
        errorMessage.classList.add("error");
        emailValue.classList.remove("errorEmail");

    }else {
        console.log("Invalid Email");
        errorMessage.classList.remove("error");
        emailValue.classList.add("errorEmail");
    }
});