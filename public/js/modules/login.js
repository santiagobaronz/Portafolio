/***************************************************************
 *                    Github Verification
***************************************************************/

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    const data = JSON.parse(sessionStorage.getItem("data"));

    if(data == null){

        if(codeParam != null){
            async function getAccesToken(){
                await fetch('/api/getAccessToken?code=' + codeParam, {
                    method: "GET"
                }).then(response => response.json())
                .then((response) => {
                    getUserData(response.access_token);
                })
            }
            getAccesToken()
        }
    
        const getUserData = token => {
            fetch('/api/getUserData', {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(data => data.json())
            .then(data => {
                if(Object.keys(data).length == 1){
                    Swal.fire({
                        icon: 'error',
                        title: 'Se ha producido un problema',
                        text: 'No eres administrador o la sesión expiró',
                        background: "#18181b",
                        iconColor: '#159184',
                        color: "#FFF",
                        customClass: { confirmButton: "swal2-button" }
                        } 
                    );
                    return;
                }else{
                    sessionStorage.setItem("data", JSON.stringify(data))
                   window.location.href = '/admin/dashboard'
                }
            })
        }
    }else{
        window.location.href = '/admin/dashboard'
    }

    