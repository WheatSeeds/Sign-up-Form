const pass = document.getElementById('pass-1');
const passC = document.getElementById('pass-2');
const passAlert = document.querySelector('.error-password-confirm');

function checkPassword() {
    if (pass.value !== passC.value) {
        passAlert.textContent = "*Password do not match"
        passAlert.style.color = '#d75661';
        pass.style.borderBottom =  ".1em solid #d75661";
        passC.style.borderBottom =  ".1em solid #d75661";
    }
    else{
        passAlert.textContent = ''
        pass.style.borderBottom =  ".1em solid #79d756";
        passC.style.borderBottom =  ".1em solid #79d756";
    }
}
passC.addEventListener('keyup', (e) =>{
    checkPassword();
});
pass.addEventListener('keyup', (e) =>{
    checkPassword();
});
