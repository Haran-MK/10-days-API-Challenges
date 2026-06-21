const loadBtn =document.getElementById("loadBtn");
const gallery =document.getElementById("gallery");
loadBtn.addEventListener(
    "click",
    loadImages
);
async function loadImages(){
    try{
        const response =await fetch(
        "https://picsum.photos/v2/list?page=1&limit=20"
        );
        const images =await response.json();
        let output = "";
        images.forEach(image => {
            output += `
            <div class="card">
                <img
                src="${image.download_url}"
                alt="${image.author}"
                loading="lazy">
                <h3>
                    📷 ${image.author}
                </h3>
            </div>
            `;
        });
        gallery.innerHTML = output;
    }
    catch(error){
        gallery.innerHTML =
        "<h2>Failed to load images</h2>";
        console.error(error);
    }
}