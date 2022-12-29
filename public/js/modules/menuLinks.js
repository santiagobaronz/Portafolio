import { getHeaderArticle, getHeaderPage } from "./getHeaders.js";

export const menuLinks = () => {

    const sections = document.querySelectorAll(".section");
    
    const showSectionByLink = () => {
        const sectionToShow = getHeaderPage();
        sections.forEach(section => {
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
                        case "articleunitary":

                            const idArticle = getHeaderArticle();
                            const articleTitle = document.querySelector("#article_title");
                            const articleDate = document.querySelector("#article_date");
                            const articleContent = document.querySelector("#article_content");

                            fetch(`/articles/library/${idArticle}`)
                            .then(data => data.json())
                            .then(data => {

                                articleTitle.innerHTML = data[0].titulo_articulo;
                                articleDate.innerHTML = data[0].fecha_texto;
                                articleContent.innerHTML = data[0].texto_articulo;




                            })




                            break;

                    }
                }
            }
        })
    }
     
    showSectionByLink();
}