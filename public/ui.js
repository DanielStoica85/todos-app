class UI {
    constructor() {
        this.list = document.querySelector('.list');
        this.todoInput = document.getElementById('todoInput');
    }

    addTodos(todos) {
        let output = '';
        todos.forEach(function (todo) {
            if (todo.completed) {
                output += `<li class="task done">${todo.name}</li>`;
            } else {
                output += `<li class="task">${todo.name}</li>`;
            }
        });
        this.list.innerHTML = output;
    }

    addTodo(todo) {
        if (todo.completed) {
            this.list.innerHTML += `<li class="task done">${todo.name}</li>`;
        } else {
            this.list.innerHTML += `<li class="task">${todo.name}</li>`;
        }
    }
}