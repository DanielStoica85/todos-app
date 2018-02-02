class UI {
    constructor() {
        this.list = document.querySelector('.list');
    }

    addTodos(todos) {
        let output = '';
        todos.forEach(function (todo) {
            output += `<li class="task">${todo.name}</li>`;
        });
        this.list.innerHTML = output;
    }
}