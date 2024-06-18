

export function checkAuthorization() {
    isAuthorized = false
    axios.post(`${baseURL}/verify-user`, {}, 
        {
          headers: {
            'Authorization': `${localStorage.token}`,
          },
        })
        .then(function (response){
            isAuthorized = true
            console.log(response)
        })
    return isAuthorized
}