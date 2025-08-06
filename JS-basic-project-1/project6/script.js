// Create a TODO list app capable of storing your TODOS in local storage. Add and option to create, delete and acceess the TODOS. try to  make UI as good as possible
window.onload = function () {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || []
    savedTodos.forEach( task => {
        addTodoTOUI(task)
    });
}

function addTodo() {
    const input = document.getElementById("input")

    const task = input.value.trim()
    
    if (task === "") {
        alert('first write something to add there you donut>>>🍩');
        return 
    }
    
    
    addTodoTOUI(task)

    let todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.push(task)
    localStorage.setItem("todos", JSON.stringify(todos))

    input.value = ""
}

function addTodoTOUI(task) {
    
    let html = `
     <li class="todoItem">${task}<button onclick="deleteTodo(this)">❌</button> </li>
    `

    document.getElementById("todoList").insertAdjacentHTML("beforeend", html)
}

function deleteTodo(button) {
    const li = button.parentElement
    const taskText = li.firstChild.textContent.trim();


    let todos  = JSON.parse(localStorage.getItem("todos")) || []

    todos = todos.filter(todo => todo !== taskText)
    localStorage.setItem("todos", JSON.stringify(todos))

    li.remove()
}

// future plans 
// 1. improve css (responsive, dlt btns)
// 2. add check box