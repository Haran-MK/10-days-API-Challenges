const gallery = document.getElementById("gallery");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumber = document.getElementById("pageNumber");
let page = 1;
const limit = 10;
const totalPages = 10;
loadPosts();
prevBtn.addEventListener("click", () => {
    if(page > 1){
        page--;
        loadPosts();
    }
});
nextBtn.addEventListener("click", () => {
    if(page < totalPages){
        page++;
        loadPosts();
    }
});
async function loadPosts(){
    try{
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
        );
        const posts = await response.json();
        let output = "";
        posts.forEach(post => {
            output += `
                <div class="card">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
        gallery.innerHTML = output;
        pageNumber.innerText = `Page ${page}`;
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
    }
    catch(error){
        gallery.innerHTML =
        "<h2>Failed to load posts</h2>";
        console.error(error);
    }
}