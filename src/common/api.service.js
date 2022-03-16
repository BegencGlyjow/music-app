import axios from "axios"

const api = axios.create({
    baseURL:'https://yeketak.com.tm/api/front/files',
    // timeout: 1000,
    // headers: {'Authorization': Bearer `${token}`}
})
export default api

// api.get('users')
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// api.get(`user/${id}`)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
