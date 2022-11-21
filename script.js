document.querySelector('#my-form').addEventListener("submit", (event) => {
    let pass = document.querySelector('#password').value;
    let passConf = document.querySelector('#password-confirm').value;
    let passMsg = document.querySelector('.pass-conf');

    if (pass != passConf) {
        event.preventDefault();
        passMsg.textContent = "* Passwords do not match";
        return false;
    } else {
        passMsg.textContent = "";
        return true;
    }
});