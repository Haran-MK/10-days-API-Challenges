const jokeBtn =document.getElementById("jokeBtn");
const setup =document.getElementById("setup");
const punchline =document.getElementById("punchline");
jokeBtn.addEventListener(
    "click",
    getJoke
);
async function getJoke(){
    try{
        const response = await fetch( "https://official-joke-api.appspot.com/random_joke");
        const joke = await response.json();
        setup.innerText =joke.setup;
        punchline.innerText =joke.punchline;
    }
    catch(error){
        setup.innerText ="Failed to load joke";
        console.error(error);
    }
}