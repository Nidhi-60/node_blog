let username = document.getElementById("username");
let password = document.getElementById("password");

username.addEventListener("keyup", checkUserName);
// password.addEventListener("keyup", checkPassword);

let error = document.getElementById("error");

function checkLogin() {
  if (username.value === "" || password.value === "") {
    displayMessage("**fill the Field");
    return false;
  }
}

function checkUserName() {
  const userNameValue = username.value;

  const usernameRegex = /^[A-Za-z ]{1,}$/;

  if (usernameRegex.test(userNameValue)) {
    return true;
  } else {
    displayMessage("**username must be alphabate");
    return false;
  }
}

// function checkPassword() {
//   const passwordValue = password.value;

//   const passwordRegex = /^[A-Za-z*&@0-9]{3,}$/;

//   if (passwordRegex.test(passwordValue)) {
//     return true;
//   } else {
//     displayMessage("**password invalid");
//     return false;
//   }
// }

function displayMessage(msg) {
  let div = document.createElement("div");
  let text = document.createTextNode(msg);

  div.className = "alert alert-danger";
  div.id = "errorMessage";

  div.appendChild(text);
  error.appendChild(div);

  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
}
