import { fillArticles } from "./modules/fillArticles.js";
import { fillJobs } from "./modules/fillJobs.js";
import { fillProjects } from "./modules/fillProjects.js";
import { fillStudies } from "./modules/fillStudies.js";
import { menuLinks } from "./modules/menuLinks.js";
import { menuSettings } from "./modules/menuSettings.js"

window.addEventListener("load", async() => {
    
    menuLinks();
    menuSettings();
    fillJobs();
    fillStudies();
    fillArticles();
    fillProjects();

})