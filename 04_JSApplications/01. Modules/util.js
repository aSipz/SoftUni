export function setUserData(data) {
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
}

export function clearUserData() {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('email');
}

export function getUserData() {
    if (!sessionStorage.getItem('accessToken')) {
        return null;
    }
    return {
        userId : sessionStorage.getItem('userId'),
        username : sessionStorage.getItem('username'),
        accessToken : sessionStorage.getItem('accessToken'),
        email : sessionStorage.getItem('email')
    }
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data, event);
    }
}

// export function createSubmitHandler(formId, callback) {
//     document.getElementById(formId).addEventListener('submit', onSubmit);

//     function onSubmit(event) {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const data = Object.fromEntries(formData);

//         callback(data, event);
//     }
// }