
export const fillJobs = async () => {
    const jobsList = document.querySelector("#jobsList");

    let jobsArray = [];

    await fetch('/jobs')
    .then(data => data.json())
    .then(data => jobsArray = data)

    
    jobsArray.forEach(job=> {
        const objectList = document.createElement("li");
        objectList.className = "flex gap-4";
        objectList.innerHTML = `
        
        <div
            class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
            <img alt="" src="${job.logoTrabajo}" width="32" height="32" decoding="async" data-nimg="1" class="h-7 w-7" loading="lazy" style="color:transparent">
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
            <dd class="w-full flex-none text-sm font-medium text-white">${job.nombreTrabajo}</dd>
            <dd class="text-xs text-white">${job.cargoTrabajo}</dd>
            <dd class="ml-auto text-xs text-white" aria-label="${job.fechaInicio} until ${job.fechaFinal}">
                <time datetime="${job.fechaInicio}">${job.fechaInicio}</time> 
                <span aria-hidden="true">—</span>
                <time datetime="${job.fechaFinal}">${job.fechaFinal}</time>
            </dd>
        </dl>
        `

        jobsList.append(objectList)
    });
}