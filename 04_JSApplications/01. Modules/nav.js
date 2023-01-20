const views = {
    'logout': onLogout,
    'login': onLogin,
    'register': onRegister
}

function onNavigate(event) {
    if (event.target.tagName != 'A') {
        return;
    }
    const id = event.target.id;
    if (goto(id)) {
        event.preventDefault();
    }

}

function goto(viewName, ...params) {
    const view = views[viewName];
    if (typeof view == 'function') {
        document.querySelector('main').replaceChildren();
        view({
            goto 
        }, ...params);
        return true;
    }

    return false;
}