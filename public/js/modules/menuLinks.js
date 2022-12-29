import { getHeaders } from "./getHeaders.js";

export const menuLinks = () => {

    const sections = document.querySelectorAll(".section");
    
    const showSectionByLink = () => {
        sections.forEach(section => {
            const sectionToShow = getHeaders();
            if(section.id != sectionToShow){
                section.classList.add("hidden")
                section.classList.remove("block")
            }else{
                if(section.classList.contains("hidden")){
                    section.classList.remove("hidden")
                    section.classList.add("block")
                    switch(sectionToShow){
                        case "about":
                            document.title = "Sobre mí - Santiago Baron Zuleta";
                            break;
                        case "articles":
                            document.title = "Artículos - Santiago Baron Zuleta";
                            break;
                    }
                }
            }
        })
    }
     
    showSectionByLink();
}