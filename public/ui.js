class UI {
    constructor() {
        this.list = document.querySelector('.list');
        this.todoInput = document.getElementById('todoInput');
    }

    addTodos(todos) {
        let output = '';
        todos.forEach(function (todo) {
            if (todo.completed) {
                output += `<li class="task done" data-id="${todo._id}" data-completed="${todo.completed}">${todo.name}<span>X</span></li>`;
            } else {
                output += `<li class="task" data-id="${todo._id}" data-completed="${todo.completed}">${todo.name}<span>X</span></li>`;
            }
        });
        this.list.innerHTML = output;
    }

    addTodo(todo) {
        if (todo.completed) {
            this.list.innerHTML += `<li class="task done" data-id="${todo._id}" data-completed="${todo.completed}">${todo.name}<span>X</span></li>`;
        } else {
            this.list.innerHTML += `<li class="task" data-id="${todo._id}" data-completed="${todo.completed}">${todo.name}<span>X</span></li>`;
        }
    }

    removeTodo(clickedElement) {
        let parentLi = clickedElement.parentElement;
        let clickedId = parentLi.getAttribute('data-id');
        let deleteUrl = `/api/todos/${clickedId}`;

        axios.delete(deleteUrl)
            .then((response) => {
                clickedElement.parentElement.remove();
            }).catch(err => console.log(err));
    }

    updateTodo(clickedLi) {
        let clickedId = clickedLi.getAttribute('data-id');
        let updateUrl = '/api/todos/' + clickedId;
        let completed = clickedLi.getAttribute('data-completed');
        let isDone = (completed == 'true');
        var updateData = {
            completed: !isDone
        };

        axios.put(updateUrl, updateData)
            .then((response) => {
                clickedLi.classList.toggle('done');
                clickedLi.setAttribute('data-completed', !isDone);
            });
    }

}