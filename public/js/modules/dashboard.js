/***************************************************************
 *                    Dashboard system
***************************************************************/

const data = JSON.parse(sessionStorage.getItem("data"));
let dataCheck;

await fetch('/security?clientID=' + data.id)
.then(data => data.json())
.then(data => dataCheck = data)

if(dataCheck){

    console.log(data)
    document.querySelector('#githubPhoto').src = data.avatar_url;
    document.querySelector('#githubName').innerHTML = data.name;
    document.querySelector('#githubInfo').innerHTML = data.bio;
    document.querySelector('#githubFollowers').innerHTML = data.followers + '<span class="text-black-300"> seguidores</span>';
    document.querySelector('#githubFollowing').innerHTML = data.following + '<span class="text-black-300"> seguidos</span>';
    document.querySelector('#githubRepos').innerHTML = data.public_repos + '<span class="text-black-300" > repositorios</span>';

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

      function postInitWork()
        {
        var editor = tinyMCE.getInstanceById('textarea');
        editor.getBody().style.backgroundColor = "#FFFF66";
        }



}else{
    sessionStorage.clear();
    window.location.href = '/admin/login'
}