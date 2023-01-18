const changeArticlesURL = () => {
    const articlesURL = document.querySelectorAll(".articleURL");
    articlesURL.forEach(article => {
        const URLToConvert = article.getAttribute("aria-details");
        article.href = article.href + URLToConvert.toLowerCase().replace(/ /g, "-")
    });
}

changeArticlesURL()