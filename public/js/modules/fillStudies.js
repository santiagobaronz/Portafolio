
export const fillStudies = async () => {
    const gradesList = document.querySelector("#studiesList");

    let studiesArray = [];

    await fetch('/studies')
    .then(data => data.json())
    .then(data => studiesArray = data)

    
    studiesArray.forEach(grade=> {
        const objectList = document.createElement("li");
        objectList.className = "flex gap-4";
        objectList.innerHTML = `
        
        <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-black-700 ring-2 ring-stroke bg-gray-hover">
            <img alt="" src="${grade.logoInstitucion}" width="32" height="32" decoding="async" data-nimg="1" class="h-7 w-7" loading="lazy" style="color:transparent">
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
            <dt class="sr-only">Degree</dt>
            <dd class="w-full flex-none text-sm font-medium text-white">${grade.titulo}</dd>
            <dt class="sr-only">Educational institution</dt>
            <dd class="text-xs text-white">${grade.nombreInstitucion}</dd>
            <dt class="sr-only">Date</dt>
            <dd class="ml-auto text-xs text-white" aria-label="${grade.fechaInicio} until ${grade.fechaFinal}">
                <time datetime="${grade.fechaInicio}">${grade.fechaInicio}</time> 
                <span aria-hidden="true">—</span>
                <time datetime="${grade.fechaFinal}">${grade.fechaFinal}</time>
            </dd>
        </dl>
        `

        gradesList.append(objectList)
    });
}