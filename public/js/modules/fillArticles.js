export const fillArticles = async () => {
    
    const articleList = document.querySelector("#articlesList");
    const articleFullList = document.querySelector("#articleFullList");

    let articlesArray = [];

    await fetch('/api/articles')
    .then(data => data.json())
    .then(data => articlesArray = data)

    for (let i = 0; i < 3; i++) {

        const articleName = articlesArray[i].titulo_articulo.toLowerCase().replace(/ /g, "-")

        const objectList = document.createElement("article");
        objectList.className = "group relative flex flex-col items-start";
        objectList.innerHTML = `
            <h2 class="text-base font-semibold tracking-tight text-white">
                <div class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-hover opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <a href="/articles/${articleName}">
                    <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span class="relative z-10">${articlesArray[i].titulo_articulo}</span>
                </a>
            </h2>
            <time class="relative z-10 order-first mb-3 flex items-center text-sm text-gray pl-3.5" datetime="2022-09-05">
                <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <span class="h-4 w-0.5 rounded-full bg-gray"></span>
                </span>${articlesArray[i].fecha_texto}
            </time>
            <p class="relative z-10 mt-2 text-sm text-gray">${articlesArray[i].resumen_articulo}</p>

            <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500 text-green">Leer articulo
                <svg viewBox="2 3 9 9" aria-hidden="true" class="ml-1 h-5 w-4 stroke-green fill-none">
                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" >
                    </path>
                </svg>
            </div>
        `

        articleList.append(objectList);
    }

    articlesArray.forEach(article => {

        const articleName = article.titulo_articulo.toLowerCase().replace(/ /g, "-")
        
        const objectList = document.createElement("article");
        objectList.className = "lg:grid lg:grid-cols-4 lg:items-baseline";
        objectList.innerHTML =  `
        <div class="lg:col-span-3 group relative flex flex-col items-start">
            <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div
                    class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-hover opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl">
                </div><a href="/articles/${articleName}"><span
                        class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                        class="relative z-10 text-white">${article.titulo_articulo}</span></a>
            </h2> <time
                class="lg:hidden relative z-10 order-first mb-3 flex items-center text-sm text-black-300 pl-3.5"
                datetime="${article.fecha_date}">
                <span class="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true">
                    <span class="h-4 w-0.5 rounded-full bg-gray"></span>
                </span>${article.fecha_texto}</time>
            <p class="relative z-10 mt-2 text-sm text-gray">${article.resumen_articulo}</p>
            <div aria-hidden="true"
                class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500 text-green">Leer articulo <svg
                    viewBox="2 3 9 9" aria-hidden="true" class="ml-1 h-5 w-4 stroke-green fill-none">
                    <path d="M6.75 5.75 9.25 8l-2.5 2.25"> </path>
                </svg> </div>
        </div>
        <time class="mt-1 hidden relative z-10 order-first mb-3 lg:flex items-center text-sm text-black-300"
            datetime="${article.fecha_date}">${article.fecha_texto}
        </time>
        `;

        articleFullList.append(objectList);

    });
}