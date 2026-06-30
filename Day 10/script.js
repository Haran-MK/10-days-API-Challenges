const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", loginUser);

async function loginUser() {

    try {
        const response = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "free_user_3Frnggq3sDyuFutmui1VH9eLdac"
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        });
        const data = await response.json();
        if (response.ok) {
            message.style.color = "green";
            message.innerHTML = `
                ✅ Login Successful <br><br>
                Token:<br>
                ${data.token}
            `;
        } else {
            message.style.color = "red";
            message.innerHTML = `❌ ${data.error}`;
        }
    } catch (error) {
        message.style.color = "red";
        message.innerHTML = "Something went wrong.";
        console.error(error);
    }

}