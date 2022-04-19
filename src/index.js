import { toDate, isToday, isThisWeek, subDays, parseISO } from "date-fns";
// import todoUI from "./todoList/UI";

function component() {
  const element = document.createElement("div");
  const form = document.createElement("form");

  const label = document.createElement("label");
  label.setAttribute("for", "due-date");
  label.textContent = "Due date:";

  const input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("id", "due-date");
  input.setAttribute("name", "due-date");

  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => console.log(isThisWeek(parseISO(input.value)));

  form.appendChild(label);
  form.appendChild(input);
  element.appendChild(form);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
