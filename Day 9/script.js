const todoList =
document.getElementById("todoList");

loadTodos();

async function loadTodos(){

    const response =
    await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    const todos =
    await response.json();

    displayTodos(todos);

}

function displayTodos(todos){

    todoList.innerHTML = "";

    todos.forEach(todo => {

        todoList.innerHTML += `
        <div class="todo">

            <span class="${
                todo.completed ? "completed" : ""
            }">

                ${todo.title}

            </span>

            <button
            onclick="updateTodo(${todo.id}, this)"
            ${todo.completed ? "disabled" : ""}>

                ${
                    todo.completed
                    ? "Completed"
                    : "Complete"
                }

            </button>

        </div>
        `;

    });

}

async function updateTodo(id, button){

    try{

        const response =
        await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                completed:true

            })

        });

        await response.json();

        button.innerText = "Completed";
        button.disabled = true;

        button.parentElement
        .querySelector("span")
        .classList.add("completed");

    }

    catch(error){

        console.error(error);

    }

}