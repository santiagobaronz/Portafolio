/***************************************************************
 *                    Github Verification
***************************************************************/
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

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
                console.log(data.msg)
            }else{
                console.log(data)
            }
        })
    }