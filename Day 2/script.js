const searchBox = document.getElementById("searchInput");
const postsContainer = document.getElementById("results");

let allPosts = [];

loadPosts();

async function loadPosts() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        allPosts = posts;
        displayPosts(allPosts);
    } catch(error) {
        postsContainer.innerHTML =
        "<p>Failed to load posts.</p>";
        console.error(error);
    }
}
function displayPosts(posts){
    let output = "";
    posts.forEach(post => {
        output += `
        <div class="post-card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
        `;
    });
    postsContainer.innerHTML = output;
}
searchBox.addEventListener("input", () => {
    const searchText =
    searchBox.value.toLowerCase();
    const filteredPosts =
    allPosts.filter(post =>
        post.title
        .toLowerCase()
        .includes(searchText)
    );
    displayPosts(filteredPosts);
});