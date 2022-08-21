const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// => const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault(); // toDoForm 의 submit 기능(새로고침)을 막는다.
  const newTodo = toDoInput.value; // todo input의 값을 새로운 변수에 저장 후
  toDoInput.value = ""; // 다시 공백으로
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj); // paintTodo에 보내기
  saveToDos();
}

function deleteTodo(event) {
  const li = event.target.parentElement; // button의 부모인 li가 저장됨
  li.remove(); // const li 제거
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li"); // createElement에는 ""
  li.id = newTodo.id;
  const span = document.createElement("span"); // li에는 innerText 기능이 없기 때문에 span하나 만들기
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); // appendChild 에는 "" x
  li.appendChild(button);
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // 이전 ToDo 가져오기 (string)

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos); // 배열로 다시..
  toDos = parsedToDos; // 이전 ToDo 들을 채워주기
  parsedToDos.forEach(paintTodo); // 새로고침해도 남기기
}
