/***************************************************************
 *                    Dashboard system
***************************************************************/

const data = JSON.parse(sessionStorage.getItem("data"));
let dataCheck;

await fetch('/security?clientID=' + data.id)
.then(data => data.json())
.then(data => dataCheck = data)

if(dataCheck){
    
}else{
    sessionStorage.clear();
    window.location.href = '/admin/login'
}