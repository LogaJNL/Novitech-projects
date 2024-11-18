function validateForm(){
    //get inputs
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    document.getElementById('nameError').innerHTML='';
    document.getElementById('emailError').innerHTML='';
    if(name===''){
        document.getElementById('nameError').innerHTML='Name is required';
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email===''){
        document.getElementById('emailError').innerHTML="Email is required";
        return false;
    }
    else if(!emailRegex.test(email)){
        document.getElementById('emailError').innerHTML="Invalid email format";
        return false;
    }
    else{
        return true;
    }
}