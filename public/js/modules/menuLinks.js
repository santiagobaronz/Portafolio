import { getHeaderArticle, getHeaderPage } from "./getHeaders.js";

export const menuLinks = () => {

    const disableLink = (link) => {
        console.log(link)
        const options = document.querySelectorAll(".home-link");
        options.forEach(option => {
            if(option.getAttribute('href') == link){
                option.href = "javascript:void(0)"
            }
        });
    }

    const sections = document.querySelectorAll(".section");
    
    const showSectionByLink = () => {
        const sectionToShow = getHeaderPage();
        sections.forEach(section => {
            if(section.id != sectionToShow){
                if(sectionToShow != "home" && sectionToShow != "about" && 
                    sectionToShow != "articles" && sectionToShow != "articleunitary"){
                        window.location.href = "http://localhost:2020/404";
                }else{
                    section.classList.add("hidden")
                    section.classList.remove("block")
                }
            }else{
                section.classList.remove("hidden")
                section.classList.add("block")
                switch(sectionToShow){
                    case "home":
                        document.title = "Santiago Baron Zuleta - Ingeniero en sistemas y desarrollador front-end";
                        break;
                    case "about":
                        document.title = "Sobre mí - Santiago Baron Zuleta";
                        disableLink("/about")
                        break;
                    case "articles":
                        document.title = "Artículos - Santiago Baron Zuleta";
                        disableLink("/articles")
                        break;
                    case "articleunitary":
                        const idArticle = getHeaderArticle();
                        const articleTitle = document.querySelector("#article_title");
                        const articleDate = document.querySelector("#article_date");
                        const articleContent = document.querySelector("#article_content");

                        fetch(`/articles/library/${idArticle}`)
                        .then(data => data.json())
                        .then(data => {
                            if(data.code == 404){
                                window.location.href = "http://localhost:2020/404";
                            }else{
                                articleTitle.innerHTML = data[0].titulo_articulo;
                                articleDate.innerHTML = data[0].fecha_texto;
                                articleContent.innerHTML = data[0].texto_articulo;
                            }
                        })
                        break;
                }
            }
        })
    }
     
    showSectionByLink();
}