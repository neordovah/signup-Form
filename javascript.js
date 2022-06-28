const password = document.getElementById("password");
const c_password = document.getElementById("c_password");
const body = document.getElementById("body");
const submit = document.getElementById("submit");
const inputs = document.getElementsByClassName("auto-border");

function removeClasses() {
    c_password.classList.remove("green");
    c_password.classList.remove("red");
}

function check() {
    if (password.value === c_password.value && password.value != "") {
      c_password.setCustomValidity('');
      c_password.classList.remove("red");
      c_password.classList.add("green");
    }
    else if (password.value === '')
    {
        removeClasses();
    }
    else if (password.value != c_password.value && password.value != ""){
      c_password.setCustomValidity('Passwords do not match');
      c_password.classList.remove("green");
      c_password.classList.add("red");
    }
}

body.addEventListener('change', () => {
    check();
})

c_password.addEventListener('click', () => {
    removeClasses();
})


submit.addEventListener('click', () => {
    Array.from(inputs).forEach((input) => {
        if(input.value == '')
        input.classList.add("red");
        setTimeout(() => input.classList.remove("red"), 700);
    })

})

