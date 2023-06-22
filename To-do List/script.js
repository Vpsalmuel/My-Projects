// const form = document.querySelector("#new-task-form");
// const input = document.querySelector("#new-task-input");
// const todos = document.querySelector("#todos");
// const searchInput = document.querySelector(".search-input");

// //Listening to events on the form
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const task = input.value;

//     if (!task) {
//         alert("please add a todo");
//         return;
//     }
//     //Creating the parent container
//     const todoEl = document.createElement("div");
//     todoEl.classList.add("task");

//     const todoContent = document.createElement("div");
//     todoContent.classList.add("content");

//     todoEl.appendChild(todoContent);

//     const todoInput = document.createElement("input");
//     todoInput.classList.add("text");
//     todoInput.type = "text";
//     //Adding the value of the input element to the text
//     todoInput.value = task;
//     todoInput.setAttribute("readonly", "readonly");

//     todoContent.appendChild(todoInput);
//     // creating the element to hold our actions
//     const todoActions = document.createElement("div");
//     todoActions.classList.add("actions");
//     //Creating the edit button
//     const editTodo = document.createElement("button");
//     editTodo.classList.add("edit");
//     editTodo.innerHTML = "Edit";
//     //creating the delete button
//     const deleteTodo = document.createElement("button");
//     deleteTodo.classList.add("delete");
//     deleteTodo.innerHTML = "Delete";

//     todoActions.append(editTodo, deleteTodo);
//     //todoActions.appendChild(deleteTodo);

//     todoEl.appendChild(todoActions);

//     todos.appendChild(todoEl);

//     input.value = "";
//     //Handling the edit functions
//     editTodo.addEventListener("click", () => {
//         if (editTodo.innerText.toLowerCase() == "edit") {
//             todoInput.removeAttribute("readonly");
//             todoInput.focus();
//             editTodo.innerText = "Save";
//         } else {
//             todoInput.setAttribute("readonly", "readonly");
//             editTodo.innerText = "Edit";
//         }
//     });
//     //Handling the delete functions
//     deleteTodo.addEventListener("click", () => {
//         if (confirm("Are you sure you want to remove this?")) {
//             todos.removeChild(todoEl);
//         } else {
//             return;
//         }
//     });

//     // Update the todo list in localStorage
//     if (localStorage.getItem("todoInput")) {
//         todoInput.innerHTML = localStorage.getItem("todoInput");
//     }
// });

//get id from the html
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const todos = document.querySelector("#todos");

// //Load todos from localStorage on page load
// document.addEventListener("DOMContentLoaded", () => {
//   if (localStorage.getItem("todos")) {
//     todos.innerHTML = localStorage.getItem("todos");
//   }
// });

// // Function to update todos in localStorage
// function updateLocalStorage() {
//   localStorage.setItem("todos", todos.innerHTML);
// }

//Add a new todo item on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value.trim();

  if (!task) {
    alert("Please add a todo");
    return;
  }

  createTodoItem(task);
  input.value = "";
  updateLocalStorage();
});

// Function to create a new todo item
function createTodoItem(task) {
  const todoEl = document.createElement("div");
  todoEl.classList.add("task");

  const todoContent = document.createElement("div");
  todoContent.classList.add("content");

  const todoInput = document.createElement("input");
  todoInput.classList.add("text");
  todoInput.type = "text";
  todoInput.value = task;
  todoInput.setAttribute("readonly", "readonly");

  todoContent.appendChild(todoInput);

  const todoActions = document.createElement("div");
  todoActions.classList.add("actions");

  const editTodo = document.createElement("button");
  editTodo.classList.add("edit");
  editTodo.innerHTML = "Edit";

  const deleteTodo = document.createElement("button");
  deleteTodo.classList.add("delete");
  deleteTodo.innerHTML = "Delete";

  todoActions.append(editTodo, deleteTodo);

  todoEl.appendChild(todoContent);
  todoEl.appendChild(todoActions);

  todos.appendChild(todoEl);

  // Attach event listeners
  editTodo.addEventListener("click", () => {
    if (editTodo.innerText.toLowerCase() === "edit") {
      todoInput.removeAttribute("readonly");
      todoInput.focus();
      editTodo.innerText = "Save";
    } else {
      todoInput.setAttribute("readonly", "readonly");
      editTodo.innerText = "Edit";
    }

    updateLocalStorage();
  });

  deleteTodo.addEventListener("click", () => {
    if (confirm("Are you sure you want to remove this?")) {
      todos.removeChild(todoEl);
      updateLocalStorage();
    }
  });
}
