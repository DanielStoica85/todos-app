const ui = new UI();

document.addEventListener("DOMContentLoaded", function (event) {

    // Get todos and display them
    axios.get('/api/todos')
        .then((response) => {
            ui.addTodos(response.data);
        })
        .catch((err) => console.log(err));

    // add todo
    todoInput.addEventListener('keypress', function (event) {
        if (event.which === 13) {
            createTodo();
        }
    });

    // remove todo from db and ui
    ui.list.addEventListener('click', function (event) {
        if (event.target.tagName === 'SPAN') {
            event.stopPropagation();
            ui.removeTodo(event.target);
        }
    });

    // update todo completed state
    ui.list.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            ui.updateTodo(event.target);
        }
    });

});

function createTodo(todo) {

    const userInput = ui.todoInput.value;

    axios.post('/api/todos', {
            name: userInput
        })
        .then((response) => {
            ui.todoInput.value = '';
            let todo = response.data;
            ui.addTodo(todo);
        })
        .catch(err => console.log(err));

}