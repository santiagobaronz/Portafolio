import { getDate } from "./getDate.js";

window.addEventListener("load", async() => {

    const projectDate = document.querySelectorAll(".date-project");
    projectDate.forEach(project => {
        const dateToConvert = project.getAttribute("aria-details");
        const dateToSend = getDate(dateToConvert);
        project.innerHTML = dateToSend;
    })

    const projectURL = document.querySelectorAll(".url-project");
    projectURL.forEach(project => {
        const urlToConvert = project.getAttribute("aria-details");
        const urlToSend = urlToConvert.replace(/^https:\/\//i, '');
        project.innerHTML = urlToSend;
    })


})