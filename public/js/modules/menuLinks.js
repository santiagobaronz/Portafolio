import { getHeaders } from "./getHeaders.js";

export const menuLinks = () => {

    const sections = document.querySelectorAll(".section");
    
    const sectionToShow = getHeaders();
    const showSectionByLink = () => {
        sections.forEach(section => {
            if(section.id != sectionToShow){
                section.classList.add("hidden")
                section.classList.remove("block")
            }else{
                if(section.classList.contains("hidden")){
                    section.classList.remove("hidden")
                    section.classList.add("block")
                }
            }
        })
    }

    showSectionByLink();

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
                        history.pushState(null, "", "/");
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
                        history.pushState(null, "", "about");
                    }
                }
            })
        })
    });

    const articlesLinks = document.querySelectorAll(".articles");
    articlesLinks.forEach( link => {
        link.addEventListener("click", () => {
            sections.forEach(section => {
                if(section.id != "articles"){
                    section.classList.add("hidden")
                    section.classList.remove("block")
                }else{
                    if(section.classList.contains("hidden")){
                        section.classList.remove("hidden")
                        section.classList.add("block")
                        history.pushState(null, "", "articles");
                    }
                }
            })
        })
    });


}