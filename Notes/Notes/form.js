import { teachers } from "./teachers.js";

console.log(teachers);

window.addEventListener("load", start);

function start() {
  showTeachers();

  document.querySelector("#create-form"),
    addEventListener("submit", GetNewTeacher);
}

function showTeachers() {
  document.querySelector("#teachers-list").innerHTML = "";
  for (const teacher of teachers) {
    const html = /*html */ `
    <li> ${teacher.name}, ${teacher.email} </li>
    `;
    document
      .querySelector("#teachers-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

function GetNewTeacher(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const email = form.email.value;

  createNewTeacher(name, email);

  showTeachers();
}

function createNewTeacher(name, email) {
  const newTeacher = { name, email };
  teachers.push(newTeacher);
}
