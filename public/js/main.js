import { fillJobs } from "./modules/fillJobs.js";
import { fillStudies } from "./modules/fillStudies.js";
import { menuSettings } from "./modules/menuSettings.js"

window.addEventListener("load", () => {
    
    menuSettings();
    fillJobs();
    fillStudies();

    const getText = document.querySelector("#prueba")
    const boton = document.querySelector("#botonPrueba");

    /*getText.addEventListener("submit" , (e) => {
        e.preventDefault();
        var content = tinymce.get("text-editor").getContent();
        console.log(content)
    })*/

})