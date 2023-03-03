// import useLocalStorage from "./useLocalStorage";

// const host = 'http://localhost:3030';

// export default function useFetch(method, url, data) {

//     const [user] = useLocalStorage('user', null);

//     const options = {
//         method,
//         headers: {}
//     }

//     if (data !== undefined) {
//         options.headers['Content-Type'] = 'application/json';
//         options.body = JSON.stringify(data);
//     }

//     if (user) {
//         options.headers['X-Authorization'] = user.accessToken;
//     }

//     fetch(host + url, options)
//         .then(response => {

//             if (response.status === 204) {
//                 return response;
//             }

//             if (response.ok !== true) {
//                 throw new Error(data.message);
//             }

//             return response.json();
//         })

//     try {
//         const response = await fetch(host + url, options);

//         if (response.status === 204) {
//             return response;
//         }

//         const data = await response.json();

//         if (response.ok !== true) {

//             throw new Error(data.message);
//         }

//         return data;
//     } catch (err) {
//         alert(err.message);
//         throw err;
//     }
// }