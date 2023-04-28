const menu = document.querySelector(".menu")
const abrirMenuBtn = document.querySelector(".abrirMenu")
const cerrarMenuBtn = document.querySelector(".cerrarMenu")

function toggleMenu(){
    menu.classList.toggle("menuAbierto")
}

abrirMenuBtn.addEventListener("click", toggleMenu);
cerrarMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll(".menu a[href^='#']");

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menuAbierto")
    })
})