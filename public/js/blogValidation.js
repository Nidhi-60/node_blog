let blogtitle = document.getElementById("titleBlog");
let blogdesc = document.getElementById("descBlog");

let errorBlog = document.getElementById("errorBlog");

function checkBlog() {
  if (blogtitle.value === "" || blogdesc.value === "") {
    displayMessage("**Fill the field");
    return false;
  }
}

function displayMessage(msg) {
  let div = document.createElement("div");
  let text = document.createTextNode(msg);

  div.className = "alert alert-danger";
  div.id = "errorMessage";

  div.appendChild(text);
  errorBlog.appendChild(div);

  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
}
