let registerUsername = document.getElementById("registerUsername");
let registerEmail = document.getElementById("registerEmail");
let registerPassword = document.getElementById("registerPassword");

const errorRegister = document.getElementById("errorRegistration");

registerUsername.addEventListener("keyup", registerUserName);
registerPassword.addEventListener("keyup", registerPasswordCheck);
registerEmail.addEventListener("keyup", registerEmailCheck);

function checkRegister() {
  if (
    registerUsername.value === "" ||
    registerEmail.value === "" ||
    registerPassword.value === ""
  ) {
    displayMessage("**Fill the Field");
    return false;
  }
}

function registerUserName() {
  const userValue = registerUsername.value;

  const userRegex = /^[A-Za-z ]{1,}$/;

  if (userRegex.test(userValue)) {
    return true;
  } else {
    displayMessage("**username must be alphabate");
    return false;
  }
}

function registerPasswordCheck() {
  const regPassValue = registerPassword.value;

  const passRegex = /^[A-Za-z*&@0-9]{3,}$/;

  if (passRegex.test(regPassValue)) {
    return true;
  } else {
    displayMessage("**password invalid");
    return false;
  }
}

function registerEmailCheck() {
  const regEmailValue = registerEmail.value;

  const emailRegex = /^[a-zA-Z.0-9]{3,}[@]{1}[a-zA-Z]{5,8}[.]{1}[a-zA-z]{2,3}$/;

  if (emailRegex.test(regEmailValue)) {
    return true;
  } else {
    displayMessage("**Enter valid email");
    return false;
  }
}

function displayMessage(msg) {
  let div = document.createElement("div");
  let text = document.createTextNode(msg);

  div.className = "alert alert-danger";
  div.id = "errorMessage";

  div.appendChild(text);
  errorRegister.appendChild(div);

  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
}
