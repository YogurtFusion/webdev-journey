// Create a TODO list app capable of storing your TODOS in local storage. Add and option to create, delete and acceess the TODOS. try to  make UI as good as possible
function addTodo() {
    
    const input = document.getElementById("input")
    const task = input.value.trim()
  

    if (task === "") {
        alert('add something there to add there  you dooonutt🍩');
        return 
    }
  const html =`
   <li class="todoItem">${task}<button onclick="this.parentElement.remove()">❌</button> </li>
    `
    document.getElementById("todoList").insertAdjacentHTML( "beforeend", html);
    input.value = "";

}