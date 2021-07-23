import axios from 'axios'
/*
*/
class CallApi {
     /**
     * @description: axios call to get location information
     * @param: url: String, https://randomuser.me/api/ ? results = 5000
     * @returns: object
     */
    static callApiUser(url, method, data, params){
        return new Promise( resolve => {
            axios({
                method: method,
                url: url,
                params: params,
                dataType: 'json',
                headers: {
                    Authorization: ''
                },
                data: data
            })
            .then(res => {
                resolve(res)
            })
            .catch((error) => {
                console.log("Error en la llamada", error)
                resolve(error)
            })
        })
    }
}


export { CallApi }
