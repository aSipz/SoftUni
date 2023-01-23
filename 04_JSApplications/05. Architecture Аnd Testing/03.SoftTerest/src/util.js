export function setUserData(data) {
    localStorage.setItem('userId', data._id);
    localStorage.setItem('username', data.username);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('email', data.email);
}

export function clearUserData() {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
}

export function createSubmitHandler(formId, callback) {
    document.getElementById(formId).addEventListener('submit', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        callback(data, event);
    }
}