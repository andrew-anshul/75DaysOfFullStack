const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = localStorage.getItem('tasks') || [];
tasks.forEach(task => renderTask(task))
addTaskButton.addEventListener('click', () => {
  const taskTest = todoInput.value.trim()
  if (taskTest === "") return;

  const newTask = {
    id: Date.now(),
    text: taskTest,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks();
  todoInput.value = "";
  console.log(tasks);

});
function renderTask(task) {
const li = document.createElement('li')
li.setAttribute('data-id',task.id)
li.innerHTML = `<span${task.text}>`
}
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}