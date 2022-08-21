const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// => const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault(); // toDoForm 의 submit 기능(새로고침)을 막는다.
  const newTodo = toDoInput.value; // todo input의 값을 새로운 변수에 저장 후
  toDoInput.value = ""; // 다시 공백으로
  paintTodo(newTodo); // paintTodo에 보내기
}

function paintTodo(newTodo) {
  const li = document.createElement("li"); // createElement에는 ""
  const span = document.createElement("span"); // li에는 innerText 기능이 없기 때문에 span하나 만들기
  const button = document.createElement("button");
  button.innerText = "X";
  li.appendChild(span); // appendChild 에는 "" x
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
