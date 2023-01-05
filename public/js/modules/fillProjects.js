export const fillProjects = async () => {

    const projectList = document.querySelector("#projectList");

    let projectsArray = [];

    await fetch('/api/projects')
    .then(data => data.json())
    .then(data => projectsArray = data)

    projectsArray.forEach(project => {

        const objectList = document.createElement("li");

        if(project.categoria == "destacado"){
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
        }else{
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
        }

    });




}