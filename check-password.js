const pass = document.getElementById('pass-1');
const passC = document.getElementById('pass-2');
const passAlert = document.querySelector('.error');
function check() {
    if (pass.value !== passC.value) {
        passAlert.textContent = '*Password do not match'
        passAlert.style.color = 'red';
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
    check();
});
