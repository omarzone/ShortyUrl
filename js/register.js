const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const regBtn = document.getElementById("registerBtn");
const form = document.getElementById("forms");

regBtn.addEventListener("click", e =>{
    var isNicknameComplete = false;
    var isEmailComplete = false;
    var isPasswordComplete = false;
    

    if( (nickname.value == null) || (nickname.value == 0)){
        nickname.setAttribute("style", "border: 2px solid red;"); 
        isDataComplete = false;
    }else{
        nickname.setAttribute("style", "border: 2px solid #eee;"); 
        isNicknameComplete = true;
    }

    if( (email.value == null) || (email.value == 0)){
        email.setAttribute("style", "border: 2px solid red;"); 
        isDataComplete = false;
    }else{
        email.setAttribute("style", "border: 2px solid #eee;"); 
        isEmailComplete = true;
        
    }

    if(((password.value == null) || (password.value == 0))  || (password.value.length > 20)){
        password.setAttribute("style", "border: 2px solid red;"); 
        isDataComplete = false;
    }else{
        password.setAttribute("style", "border: 2px solid #eee;"); 
        isPasswordComplete = true;
    }

    var isDataComplete = isNicknameComplete && isEmailComplete && isPasswordComplete;

    if(isDataComplete){
        return true;
    }else{
        e.preventDefault();
        console.log("Se acciono el preventDefault")
    }
    
})

