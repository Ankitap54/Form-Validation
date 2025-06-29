const sumbitbtn =document.querySelector("#button");
const namerror =document.querySelector(".namerror");
const icon = document.querySelector("#name-icon");
const emailerror=document.querySelector(".emailerror");
const icon2 = document.querySelector("#email-icon");
const passerror=document.querySelector(".passerror");
const icon3 = document.querySelector("#pass-icon");

sumbitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validateName() && validateEmail() && validatePassword()){
        alert("form is submitted succesfully");
    }
})

function validateName(){
const name=document.querySelector('#name').value;
if(name.length==0){
    namerror.innerHTML="name is required"; 
    icon.classList.add('fa-xmark');
    icon.style.color = "red";
    return false;
} 

if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
 namerror.innerHTML="Write your full name";
 icon.classList.add('fa-xmark');
 icon.style.color = "red";
    return false;
}

namerror.innerHTML="";
icon.classList.add('fa-check');
icon.style.color = "green";
return true;
}  




function validateEmail(){
const email=document.querySelector('#email').value;
if(email.length==0){
    emailerror.innerHTML="email is required"; 
    icon2.classList.add('fa-xmark');
    icon2.style.color = "red";
    return false;
} 

if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
 emailerror.innerHTML="Enter valid em@il";
 icon2.classList.add('fa-xmark');
 icon2.style.color = "red";
    return false;
}

emailerror.innerHTML="";
icon2.classList.add('fa-check');
icon2.style.color = "green";
return true;
}  



function validatePassword(){
const pass=document.querySelector('#password').value;
if(pass.length==0){
 passerror.innerHTML="Password is required"; 
    icon3.classList.add('fa-xmark');
    icon3.style.color = "red";
    return false;

} 

if(!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
passerror.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
 icon3.classList.add('fa-xmark');
 icon3.style.color = "red";
    return false;
}

passerror.innerHTML="";
icon3.classList.add('fa-check');
icon3.style.color = "green";
return true;
}  












