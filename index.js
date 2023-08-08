const form = document.getElementById("form");
const input = document.querySelector("input");
const error = document.querySelector(".error-msg");
const p = document.getElementById("pgraph");

form.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.type == "email") {
    if (validateEmail(input.value)) {
      input.classList.remove("error");
      input.classList.add("success");
      p.style.display = "none";
    } else {
      input.classList.add("error");
      p.style.display = "block";
    }
  }

  input.value = "";
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
