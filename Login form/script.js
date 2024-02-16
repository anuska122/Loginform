let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submits-error");

function validateName() {
    let name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;

}
function validatephone() {
    let phone = document.getElementById("contact-phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phone.Error.innerHtml = 'Number should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits';
        return false;
    }
    phoneError.innerHTML = 'valid';
    return true;

    
}
function validateEmail() {
    let email = document.getElementById("contact-email").value;
    let emailError = document.getElementById("email-error");

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    
    // Regular expression for email validation
    let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!email.match(emailPattern)) {
        emailError.innerHTML = 'Invalid email format';
        return false;
    }
emailError.innerHTML = "Valid";
    return true;
}

    function validateMessage(){
        let message = document.getElementById("contact-message").value;
        let required = 30;
        let left = required - message.length;

        if(left > 0){
            messageError.innerHTML = left + 'more characters are required';
            return false;
        }
        messageError.innerHTML = 'valid';
        return true;
    }

    function validateForm(){
        if(!validateName() || !validatephone() || !validateEmail() || !validateMessage()){
            submitError.innerHTML = 'Please fix your error to submit';
            return false;
        }
    }