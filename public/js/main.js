import { fillArticles } from "./modules/fillArticles.js";
import { fillJobs } from "./modules/fillJobs.js";
import { fillStudies } from "./modules/fillStudies.js";
import { getHeaders } from "./modules/getHeaders.js";
import { menuLinks } from "./modules/menuLinks.js";
import { menuSettings } from "./modules/menuSettings.js"

window.addEventListener("load", () => {
    
    menuLinks();
    menuSettings();
    fillJobs();
    fillStudies();
    fillArticles();

    const getText = document.querySelector("#prueba")
    const boton = document.querySelector("#botonPrueba");

    /*getText.addEventListener("submit" , (e) => {
        e.preventDefault();
        var content = tinymce.get("text-editor").getContent();
        console.log(content)
    })*/

})