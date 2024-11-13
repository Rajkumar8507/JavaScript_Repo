let todotext = document.getElementById("todotext");
let todolist = document.getElementById("todolist");
let todobtn = document.getElementById("todobtn");

function create(event) {
    event.preventDefault();
    let todotxt = todotext.value;
    if (todotxt.trim() !== "") { 
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = todotxt;
        li.appendChild(p);
        todolist.appendChild(li);
        todotext.value = ""; 
    } else {
        alert("Please enter a task.");
    }
}

todobtn.addEventListener('click', create);
