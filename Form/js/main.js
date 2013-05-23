function showErrorAlert (error_alert, sign) {
    if(error_alert != null){
        //заполнение поля ошибки
        error_alert.innerHTML = sign;
    }
}
function hideErrorAlert (error_alert, sign){
    if(error_alert != null) {
        error_alert.innerHTML = sign;
    }
}
function validateNonEmpty(inputField, error_alert) {
    //Проверка наличия данных в поле ввода
    if(inputField.value.length == 0){
        //если данные отсутствуют -  вывод поля ошибки
        showErrorAlert(error_alert, "* This field is required");
        return false;
    }
    // если данные имеются
        hideErrorAlert(error_alert, "");
        return true;
}
function validateMessageLength (minLength, maxLength, inputField, error_alert){
    //Checking of message length
    if(!validateNonEmpty(inputField, error_alert)){
        return false;
    }
    if(inputField.value.length <= minLength || inputField.value.length > maxLength){
    //checking of error alert existence
        showErrorAlert(error_alert, "Please, enter message between " + minLength + " and " + maxLength + " characters length!")
        return false;
    }else{
        hideErrorAlert(error_alert, "");
        return true;
    }
}
function validateZipCode (inputField, error_alert){
    if(!validateNonEmpty(inputField, error_alert)){
        return false;
    }
    if(inputField.value.length != 5 || isNaN(inputField.value)){
        showErrorAlert(error_alert,"Please, enter valid ZIP code.");
        return false;
    }else{
        hideErrorAlert(error_alert,"");
        return true;
    }
}
function validateClientName (inputField, error_alert){
    if(!validateNonEmpty(inputField, error_alert)){
        return false;
    }
    if(isFinite(inputField.value) || inputField.value.length<2){
        showErrorAlert(error_alert,"Please, enter your name correctly.");
        return false;
    }else{
        hideErrorAlert(error_alert,"");
        return true;
    }
}
function validatePhoneNumber (inputField, error_alert){
    if(!validateNonEmpty(inputField, error_alert)){
        return false;
    }
    if(isNaN(inputField.value) || inputField.value.length > 15 || inputField.value.length < 8){
        showErrorAlert(error_alert, "Please, enter correct phone number.");
        return false;
    }else{
        hideErrorAlert(error_alert, "");
        return true;
    }
}
function validateRegEx (regex, inputStr, error_alert, sign) {
    if(!regex.test(inputStr)){
        showErrorAlert(error_alert,sign);
        return false;
    }else{
        hideErrorAlert(error_alert,"");
        return true;
    }
}
function validateDate(inputField, error_alert){
    if(!validateNonEmpty(inputField, error_alert)){
        return false;
    }
    return validateRegEx(/^\d{2}\/\d{2}\/\d{2}|\d{4}$/, inputField.value, error_alert, "date is incorrect");
}

function validateEmail (inputField, error_alert){
    if(!validateNonEmpty(inputField, error_alert)){
        return false;
    }
    if(inputField.value.length < 8){
        showErrorAlert(error_alert, "Please, enter valid Email address.");
        return false;
    }else{
        hideErrorAlert(error_alert,"");
        return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,4}|(\.\w{2,4}+\.\w{2,4}))$/, inputField.value, error_alert, "Email is incorrect");
    }
}
function placeOrder(form){
    if(validateMessageLength(1,32,form["message"], form["error_alert"]) &&
       validateZipCode(form["zip_code"], form["error_alert_zip"]) &&
       validateClientName(form["user_name"], form["error_alert_name"]) &&
       validatePhoneNumber(form["phone_number"], form["error_alert_phone"]) &&
       validateEmail(form["email"], form["error_alert_email"])
       ){
       //Send to server
        form.submit();
        alert("Your data has been sent");
    }else{
        alert("Sorry, but your form is incorrect.");
    }
}