function check_credentials(idForm = "") {
    var formObj = document.getElementById(idForm);
    var elements = document.getElementById(idForm).elements;
    var errorMessage = document.getElementById('formError');
    var formError = 0;
    for (var i = 0, element; element = elements[i++];) {
        if (!check_validation(element)) {
            formError++;
        };
    }
    if (formError > 0) {
        return false;
    } else {
        return true;
    }
}

function check_validation(objEle) {
    var error = 0;
    var errMessage = "Please fill this field.";
    var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var numberReg = new RegExp(/^[0-9]*$/);
    var errorBorder = "1px solid rgb(237, 28, 34)";
    var caseType = objEle.getAttribute("data-validate");
    var idVal = objEle.getAttribute("id");
    var inputValue = objEle.value.trim();
    switch (caseType) {
        case 'email':
            if (check_empty_value(objEle)) {
                if (emailReg.test(inputValue) == false) {
                    errMessage = "Please enter valid email address";
                    error++;
                }
            } else {
                error++;
            }
            break;
        case 'number':
            if (check_empty_value(objEle)) {
                if (numberReg.test(inputValue) == false) {
                    errMessage = "Please enter only number";
                    error++;
                }
            } else {
                error++;
            }
            break;
        case 'text':
            if (!check_empty_value(objEle)) {
                errMessage = "Please fill this field.";
                error++;
            }
            break;
        case 'checkbox':
            if (objEle.checked == false) {
                error++;
            }
            break;
    }
    if (error > 0) {
        objEle.style.border = errorBorder;
        return false;
    } else {
        objEle.style.border = "1px solid #ccc";
        return true;
    }
}

function check_empty_value(objEle) {
    if (!objEle.value.trim()) {
        return false;
    } else {
        return true;
    }
}