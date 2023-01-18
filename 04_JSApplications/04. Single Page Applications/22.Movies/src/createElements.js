export function createLoginForm() {
    const fragment = document.createDocumentFragment();
    const div1 = document.createElement('div');
    div1.classList.add('form-group');
    div1.innerHTML = `<label for="email">Email</label>
    <input id="email" type="email" class="form-control" placeholder="Email" name="email" value=""/>`;
    const div2 = document.createElement('div');
    div2.classList.add('form-group');
    div2.innerHTML = `<label for="password">Password</label>
    <input id="password" type="password" class="form-control" placeholder="Password" name="password" value=""/>`;
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Login';
    btn.type = 'submit';
    fragment.replaceChildren(div1, div2, btn);
    return fragment;
}

export function createRegisterForm() {
    const fragment = document.createDocumentFragment();
    const div1 = document.createElement('div');
    div1.classList.add('form-group');
    div1.innerHTML = `<label for="email">Email</label>
    <input id="email" type="email" class="form-control" placeholder="Email" name="email" value=""/>`;
    const div2 = document.createElement('div');
    div2.classList.add('form-group');
    div2.innerHTML = `<label for="password">Password</label>
    <input id="password" type="password" class="form-control" placeholder="Password" name="password" value=""/>`;
    const div3 = document.createElement('div');
    div3.classList.add('form-group');
    div3.innerHTML = `<label for="repeatPassword">Repeat Password</label>
    <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value=""/>`;
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Register';
    btn.type = 'submit';
    fragment.replaceChildren(div1, div2, div3, btn);
    return fragment;
}
