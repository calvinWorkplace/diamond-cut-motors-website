function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function validateForm_register(event){

    event.preventDefault();

    
    var password = document.getElementById("passwordId_regis").value;
    var confirm = document.getElementById("confirm_regis").value;
    var errorMessage = document.getElementById("errorMessage_regis");
    var email = document.getElementById("emailId_regis").value;
    var phone = document.getElementById("phoneId").value;
    var username = document.getElementById("usernameId_regis").value;
    var terms = document.getElementById("terms").checked;
    errorMessage.innerText ='';

    if(!email.includes('@')){
        errorMessage.innerText = "Email must contain @";
        return;
    }

    if (!/^\d+$/.test(phone)) {
        errorMessage.innerText = "Phone number must contain only digits";
        return;
    }

    if(username.length < 8){
        errorMessage.innerText = "Username must be at least 8 characters";
        return;   
    }
    if(password.length < 8){
        errorMessage.innerText = "Password must be at least 8 characters";
        return;
    }

    if(password !== confirm){
        errorMessage.innerText = "Password do not match"
        return;
    }

    if (!terms) {
        errorMessage.innerText = "You must agree to the terms and services";
        return;
    }
    alert("Congratulations, you have successfully registered.");
    showLoginForm();
}

function validateForm_login(event){
   
    event.preventDefault();

    var password = document.getElementById("passwordId").value;
    var errorMessage = document.getElementById("errorMessage");


    errorMessage.innerText ='';


    if(password.length < 8){
        errorMessage.innerText = "Password must be at least 8 characters";
        return;
    }
    
    alert("Congratulations, you have successfully login.")
    window.location.href = 'home.html';

}

document.getElementById('mobile-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

