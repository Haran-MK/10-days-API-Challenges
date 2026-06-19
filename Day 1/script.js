const button = document.getElementById("loadBtn");
const container = document.getElementById("users");
button.addEventListener("click", loadUsers);
async function loadUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();
    let output = "";
    users.forEach(user => {

        output += `
        <div class="user-card">
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company: ${user.company.name}</p>
        </div>
        `;
    });
    container.innerHTML = output;
}