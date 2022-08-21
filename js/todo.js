const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// => const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault(); // toDoForm 의 submit 기능(새로고침)을 막는다.
  const newTodo = toDoInput.value; // todo input의 값을 새로운 변수에 저장 후
  toDoInput.value = ""; // 다시 공백으로
  toDos.push(newTodo);
  paintTodo(newTodo); // paintTodo에 보내기
  saveToDos();
}

function deleteTodo(event) {
  const li = event.target.parentElement; // button의 부모인 li가 저장됨
  li.remove(); // const li 제거
}

function paintTodo(newTodo) {
  const li = document.createElement("li"); // createElement에는 ""
  const span = document.createElement("span"); // li에는 innerText 기능이 없기 때문에 span하나 만들기
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); // appendChild 에는 "" x
  li.appendChild(button);
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
