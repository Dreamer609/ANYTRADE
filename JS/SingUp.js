
const singup_Data_Submit_Btn = document.getElementById("singup_data_submit")

singup_Data_Submit_Btn.addEventListener("click", () => {

    const userName = document.getElementById("username");
    const userEmail = document.getElementById("useremail");
    const userPassword = document.getElementById("userpassword");
    const userPassword_Retype = document.getElementById("userpassword_retype");
    const checkBox_Terms_condition = document.getElementById("checkbox")

    let userName_Value = userName.value;
    let userEmail_Value = userEmail.value;
    let userPassword_Value = userPassword.value;
    let userPassword_Retype_Value = userPassword_Retype.value;

    singUp_userName_Validation(userName, userName_Value);
    singUp_userEmail_Validation(userEmail, userEmail_Value);
    singUp_userPassword_Validation(userPassword, userPassword_Value);
    singUp_userPassword_Retype_Validation(userPassword_Retype, userPassword_Retype_Value);
    singUp_CheckBox_Validation(checkBox_Terms_condition);
}
)

function singUp_userName_Validation(userName, userName_Value) {
    if (userName_Value === "" || userName_Value === null) {
        userName.classList.add("error")
        console.log("hello world");
    }
}

function singUp_userEmail_Validation(userEmail, userEmail_Value) {
    if (userEmail_Value === "" || userEmail_Value === null) {
        userEmail.classList.add("error")
        console.log("hello world");
    }
}

function singUp_userPassword_Validation(userPassword, userPassword_Value) {
    if (userPassword_Value === "" || userPassword_Value === null) {
        userPassword.classList.add("error")
        console.log("hello world");
    }
}

function singUp_userPassword_Retype_Validation(userPassword_Retype, userPassword_Retype_Value) {
    if (userPassword_Retype_Value === "" || userPassword_Retype_Value === null) {
        userPassword_Retype.classList.add("error")
        console.log("hello world");
    }
}


function singUp_CheckBox_Validation(checkBox_Terms_condition) {
    var user_Agreed_Terms_Condition;
    if (checkBox_Terms_condition.checked) {
        user_Agreed_Terms_Condition = true;
    }
    else {
        user_Agreed_Terms_Condition = false;
        window.alert("Please read our terms and conditions")
    }

}




