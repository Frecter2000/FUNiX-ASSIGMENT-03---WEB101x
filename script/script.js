"use strict";
let submitBtn = document.getElementById("Submit");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let x = document.getElementById("personal-container");
let y = document.getElementById("email-form");
x.style.display = "none";

submitBtn.onclick = function myFunction() {
  let email = document.getElementById("email").value;
  if (regex.test(email)) {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    document.getElementById("email").focus();
  }
};
const skills = document.querySelectorAll(".skill");
skills.forEach((skill) => {
  const btn = skill.querySelector(".view-more-btn");
  const content = skill.querySelector(".skill-content");
  btn.addEventListener("click", function () {
    if (content.style.display === "none") {
      content.style.display = "block";
      btn.innerHTML = `&#9650 VIEW LESS`;
    } else {
      content.style.display = "none";
      btn.innerHTML = `&#9660 VIEW MORE`;
    }
  });
});
