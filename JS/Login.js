
const log_Data_Submit_Btn = document.getElementById("submit_log_data");
log_Data_Submit_Btn.addEventListener("click", () => {
    const userEmail = document.getElementById("useremail");
    const userPassword = document.getElementById("userpassword");
    const userPassword_Retype = document.getElementById("userpassword_retype");

    const checkBox_Remember = document.getElementById("usercheckbox_remember");

    let userEmail_Value = userEmail.value;
    let userPassword_Value = userPassword.value;
    let userPassword_Retype_Value = userPassword_Retype.value;

    login_Email_Validation(userEmail, userEmail_Value);
    login_Password_Validation(userPassword, userPassword_Value);
    login_Password_Retype_Validation(userPassword_Retype, userPassword_Retype_Value);
    login_CheckBox_Validation(checkBox_Remember)
})

function login_Email_Validation(userEmail, userEmail_Value) {

    if (userEmail_Value === "" || userEmail_Value === null) {

        userEmail.classList.add("error");
        throw new Error('Login faild');
    }
}

function login_Password_Validation(userPassword, userPassword_Value) {

    if (userPassword_Value === "" || userPassword_Value === null) {

        userPassword.classList.add("error");
        throw new Error('Login faild');
    }
}
function login_Password_Retype_Validation(userPassword_Retype, userPassword_Retype_Value) {

    if (userPassword_Retype_Value === "" || userPassword_Retype_Value === null) {

        userPassword_Retype.classList.add("error");
        throw new Error('Login faild');
    }
}

function login_CheckBox_Validation(checkBox_Remember) {

    if (checkBox_Remember.checked) {
        console.log("remember user");
    } else {
        console.log("do not remember user");
    }
}

