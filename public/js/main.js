import { fillJobs } from "./modules/fillJobs.js";
import { fillStudies } from "./modules/fillStudies.js";
import { menuSettings } from "./modules/menuSettings.js"

window.addEventListener("load", () => {
    
    menuSettings();
    fillJobs();
    fillStudies();

})