export const fillArticles = async () => {
    
    const articleList = document.querySelector("#articlesList");

    let articlesArray = [];

    await fetch('/articles')
    .then(data => data.json())
    .then(data => articlesArray = data)

    articlesArray.forEach(article => {
        
        const objectList = document.createElement("article");
        objectList.className = "group relative flex flex-col items-start";
        objectList.innerHTML = `
            <h2 class="text-base font-semibold tracking-tight text-white">
                <div class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-hover opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                    <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span class="relative z-10">${article.titulo_articulo}</span>
                </a>
            </h2>
            <time class="relative z-10 order-first mb-3 flex items-center text-sm text-gray pl-3.5" datetime="2022-09-05">
                <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <span class="h-4 w-0.5 rounded-full bg-gray"></span>
                </span>${article.fecha_texto}
            </time>
            <p class="relative z-10 mt-2 text-sm text-gray">${article.resumen_articulo}</p>

            <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500 text-green">Leer articulo
                <svg viewBox="2 3 9 9" aria-hidden="true" class="ml-1 h-5 w-4 stroke-green fill-none">
                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" >
                    </path>
                </svg>
            </div>
        `

        articleList.append(objectList);

    });
}