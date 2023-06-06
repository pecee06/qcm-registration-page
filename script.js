var email=document.getElementById("email");
var emailLabel=document.getElementById("email-label");
var emailError = document.getElementById("email-error");

function validateEmail(){
if(!email.value.match(/^[A-Za-z\_\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML="please enter a valid email";
    return false;
}
emailError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #18bf23;"></i>';

return true;
}