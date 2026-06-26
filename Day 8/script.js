const usernameInput =document.getElementById("username");
const searchBtn =document.getElementById("searchBtn");
const result =document.getElementById("result");
searchBtn.addEventListener(
    "click",
    getUser
);
async function getUser(){
    const username =usernameInput.value.trim();
    try{
        const response =await fetch(
            `https://api.github.com/users/${username}`
        );
        const user =await response.json();
        if(user.message === "Not Found"){
            result.innerHTML =
            "<h3>User Not Found</h3>";
            return;
        }
        result.innerHTML = `
            <div class="profile">
                <img
                src="${user.avatar_url}"
                alt="${user.login}">
                <h2>${user.name}</h2>
                <p>
                    Username:
                    ${user.login}
                </p>
                <p>
                    Followers:
                    ${user.followers}
                </p>
                <p>
                    Following:
                    ${user.following}
                </p>
                <p>
                    Repositories:
                    ${user.public_repos}
                </p>
                <a
                href="${user.html_url}"
                target="_blank">
                View Profile
                </a>
            </div>
        `;
    }
    catch(error){

        result.innerHTML =  "<h3>Failed to fetch data</h3>";
        console.error(error);
    }
}