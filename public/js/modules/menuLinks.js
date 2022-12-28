export const menuLinks = () => {

    const sections = document.querySelectorAll(".section");

    const homeLinks = document.querySelectorAll(".home");
    homeLinks.forEach( link => {
        link.addEventListener("click", () => {
            sections.forEach(section => {
                if(section.id != "home"){
                    section.classList.add("hidden")
                    section.classList.remove("block")
                }else{
                    if(section.classList.contains("hidden")){
                        section.classList.remove("hidden")
                        section.classList.add("block")
                    }
                }
            })
        })
    });


    const aboutLinks = document.querySelectorAll(".about");
    aboutLinks.forEach( link => {
        link.addEventListener("click", () => {
            sections.forEach(section => {
                if(section.id != "about"){
                    section.classList.add("hidden")
                    section.classList.remove("block")
                }else{
                    if(section.classList.contains("hidden")){
                        section.classList.remove("hidden")
                        section.classList.add("block")
                    }
                }
            })
        })
    });


}