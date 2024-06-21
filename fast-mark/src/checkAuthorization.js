import axios from "axios";
import {baseURL} from "./const/endpoints.js";


export function checkAuthorization() {
    let isAuthorized;
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