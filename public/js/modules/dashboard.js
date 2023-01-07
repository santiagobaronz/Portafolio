/***************************************************************
 *                    Dashboard system
***************************************************************/

import { getDate } from "./getDate.js";

const data = JSON.parse(sessionStorage.getItem("data"));
let dataCheck;

await fetch('/security?clientID=' + data.id)
.then(data => data.json())
.then(data => dataCheck = data)

if(dataCheck){

    console.log(data)
    document.querySelector('#githubPhoto').src = data.avatar_url;
    document.querySelector('#githubName').innerHTML = data.name + '<span class="text-black-300 ml-1 text-md"> • (' + data.login + ')</span>';
    document.querySelector('#githubInfo').innerHTML = data.bio;
    document.querySelector('#githubFollowers').innerHTML = data.followers + '<span class="text-black-300"> seguidores</span>';
    document.querySelector('#githubFollowing').innerHTML = data.following + '<span class="text-black-300"> seguidos</span>';
    document.querySelector('#githubRepos').innerHTML = data.public_repos + '<span class="text-black-300" > repositorios</span>';
	
	const listArticlesDashboard = document.querySelector('#listArticlesDashboard');

	let articlesArray = [];
    await fetch('/api/articles')
    .then(data => data.json())
    .then(data => articlesArray = data)

	articlesArray.forEach(article => {
		const listItem = document.createElement('div')
		listItem.className = 'bg-gray-hover w-full truncate mb-4 text-sm rounded-lg py-2 px-4 text-black-300'
		listItem.innerHTML = ` <p class='truncate'>${article.titulo_articulo}</p>`

		listArticlesDashboard.append(listItem)
	});

	

    tinymce.init({
        selector: 'textarea',
        skin: 'oxide-dark',
        content_css: 'dark',
        plugins: 'save anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
        toolbar: 'save undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        oninit : "postInitWork",
        save_onsavecallback: () => {
           console.log('Saved');
           },
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ]
      });

      const textField = document.querySelector("#prueba")
    const sendButton = document.querySelector("#sendButton");

    sendButton.addEventListener("click" , (e) => {
        e.preventDefault();

        const title = document.querySelector("#title").value
        const abstract = document.querySelector("#abstract").value
        const content = tinymce.get("text-editor").getContent();
        const date = new Date();
        
        fetch('/api/create/article', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title,
            'abstract': abstract,
            'content': content,
            'date': getDate(date.toString())
          })
        }).then(response => response.json())
          .then(data => console.log(data))
        
    })



}else{
    sessionStorage.clear();
    window.location.href = '/admin/login'
}