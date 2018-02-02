const ui = new UI();

document.addEventListener("DOMContentLoaded", function (event) {

    // Get todos and display them
    axios.get('/api/todos')
        .then((response) => {
            ui.addTodos(response.data);
        })
        .catch((err) => console.log(err));

});