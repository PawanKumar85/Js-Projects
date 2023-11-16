const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".btn_icon");

btn.addEventListener("click",(event) =>{
    container.classList.toggle('darkmode');

    if(container.classList.contains("darkmode"))
    {
        icon.classList.replace("fa-sun","fa-moon")
    }
    else
    {
        icon.classList.replace("fa-moon","fa-sun")
    }
})