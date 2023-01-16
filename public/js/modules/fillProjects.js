import { getDate } from "./getDate.js";

export const fillProjects = async () => {

    const projectList = document.querySelector("#projectList");

    let projectsArray = [];

    await fetch('/api/projects')
    .then(data => data.json())
    .then(data => projectsArray = data)

    document.querySelector("#imgPrj").src = projectsArray[0].img_proyecto;
    document.querySelector("#imgPrj2").src = projectsArray[1].img_proyecto;
    document.querySelector("#imgLink").href = projectsArray[0].link_proyecto;
    document.querySelector("#imgLink2").href = projectsArray[1].link_proyecto;
    

    
    projectsArray.forEach(project => {

        const objectList = document.createElement("li");
        objectList.className = "group relative flex flex-col items-start";
        objectList.innerHTML = `
        
        <div
            class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black-700 shadow-md shadow-black-800/50 ring-1 ring-black-700">
            <img alt="" src="${project.icono_proyecto}" width="32" height="32" decoding="async"
                data-nimg="1" class="h-8 w-8" loading="lazy" style="color: transparent;"></div>
        <h2 class="mt-6 text-base font-semibold text-white">
            <div
                class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-hover opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl">
            </div><a href="${project.link_proyecto}" target="blank"><span
                    class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                    class="relative z-10">${project.nombre_proyecto}</span></a>
        </h2>
        <p class="relative z-10 mt-2 text-sm text-black-300">${project.descripcion_proyecto}</p>
        <p
            class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 text-green">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none">
                <path
                    d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                    fill="currentColor"></path>
            </svg><span class="ml-2 text-green">Enlace de proyecto</span></p>
        `

        projectList.append(objectList);
        
    });

    let reposData = []

    await fetch('https://api.github.com/users/santiagobaronz/repos')
    .then(data => data.json())
    .then(data => reposData = data);

    const secondProjectList = document.querySelector("#secondProjectList");

    reposData.forEach(repo => {

            if((repo.topics).includes("deployed")){

                const date = getDate(repo.created_at);
                const urlProject = (repo.homepage).replace(/^https:\/\//i, '');
                const objectList = document.createElement("li");
                objectList.className = "xl:flex xl:flex-wrap w-full bg-gray-hover xl:mb-4 rounded-xl items-center xl:h-20 h-auto xl:px-10 xl:py-0 px-10 py-10 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all";
                objectList.innerHTML = `

                        <div class="xl:w-[23%] w-full flex items-center mb-3 xl:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-black-300" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                              </svg>
                            <p class="font-normal text-md text-white ml-4">${repo.name}</p>
                        </div>

                        <div class="xl:w-[27%] w-full xl:p-2 flex items-center mb-3 xl:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fill-black-500" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                              </svg>
                          <p class="text-gray-600 text-sm text-black-300 ml-4">${date}</p>
                        </div>

                        <div class="xl:w-[29%] w-full flex items-center xl:-m-4 mb-3 ">
                            <a href="${repo.homepage}" target="blank" class="relative z-10 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 text-green">
                                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none">
                                    <path
                                        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                        fill="currentColor">
                                    </path>
                                </svg>
                                <span class="ml-2 text-green">${urlProject}</span>
                            </a>
                          </div>

                          <div class="xl:w-24 w-full flex items-center mb-3 xl:mb-0">
                            <a href="${repo.svn_url}" target="blank">
                                <div class='xl:block flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="fill-black-500" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                    <span class='xl:hidden text-black-300 ml-4'>Repositorio de Github</span>
                                </div>
                            </a>
                        </div>

                        <div class="flex items-center justify-end">
                          <span class="w-full bg-[#32d49e43] rounded-lg px-7 text-center py-3 text-[#32d49e] text-sm font-semibold deployed">Activo</span>
                        </div>

                `
        
                secondProjectList.append(objectList);
            }
    });




}