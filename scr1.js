let input = document.getElementById("inputbox");
let btn = document.getElementById("btn");
let todolist = document.getElementById("todolist");

function addTodo() {
  if (input.value === "") {
    alert("add todo first");
  } else {
    let li = document.createElement("li");
    li.innerText = input.value;
    todolist.appendChild(li);
    let deleteitem = document.createElement("span");
    deleteitem.innerText = "x";
    li.appendChild(deleteitem);
    li.addEventListener("click", (event) => {
      if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
      }
    });
  }
  input.value=""
}
