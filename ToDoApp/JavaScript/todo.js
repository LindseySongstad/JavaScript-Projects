
/* gets task from input */
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* add inputed task to the get_todos function array */
function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";

    show();

    return false;
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button onclick="remove('+i+')" class="remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
}

function remove(index){
    var todos = get_todos();
    todos.splice(index,1)

    localStorage.setItem('todo', JSON.stringify(todos));
    show();
}

document.getElementById('add').addEventListener('click', add);

show();
