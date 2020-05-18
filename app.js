function get_todos() {
    // data access
    
    localStorage.setItem('todo', JSON.stringify('Cheese'));
    var foo = localStorage.getItem('todo');

    return JSON.parse(foo);
}

function add() {
    // take value of <input> element and insert onto localStorage string
}


function show() {
    var dbCall = get_todos();

    todos = "<ul>" + "<li>" + "Eggs" + "</li>" + "<li>" + dbCall + "</li>" + "</ul>";
    document.getElementById("todos").innerHTML = todos;  
}

show();