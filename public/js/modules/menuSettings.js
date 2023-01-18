
window.addEventListener("load", async() => {

    const menuSettings = () => {
    const menuButton = document.querySelector("#menu-button");
    const floatMenu = document.querySelector("#float-menu");
    const closeMenu = document.querySelector("#close-menu");
    const menuBox = document.querySelector("#menu-box");

    closeMenu.addEventListener("click", () => {
        if(floatMenu.classList.contains("block")){
            floatMenu.classList.remove("block")
            floatMenu.classList.add("hidden")
        }
    })

    menuButton.addEventListener("click", () => {
        if(floatMenu.classList.contains("hidden")){
            floatMenu.classList.remove("hidden")
            floatMenu.classList.add("block")
        }
    })

    floatMenu.addEventListener("click", (event) => {
        if(event.target != menuBox){
            floatMenu.classList.remove("block")
            floatMenu.classList.add("hidden")
        }
    })

    const section = document.querySelector(".section");
    section.classList.remove("hidden")

}

menuSettings();

})