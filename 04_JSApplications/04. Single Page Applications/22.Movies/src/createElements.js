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

export function createMovieDetails(obj, userID, likes, liked) {
    let like = `<a class="btn btn-primary" href="#">Like</a>
    <span class="enrolled-span">Liked ${likes}</span>`;
    let owner = '';
    if (obj._ownerId == userID) {
        owner = `<a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>`;
        like = `<span>Liked ${likes}</span>`
    }
    if (liked.length == 1) {
        like = `<span class="enrolled-span">Liked ${likes}</span>`
    }

    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.className = 'container';
    div.dataset.id = obj._id;
    div.innerHTML = `<div class="row bg-light text-dark">
    <h1>Movie title: ${obj.title}</h1>
    <div class="col-md-8">
      <img class="img-thumbnail" src="${obj.img}" alt="Movie"/>
    </div>
    <div class="col-md-4 text-center">
      <h3 class="my-3">Movie Description</h3>
      <p>${obj.description}</p>
      ${owner}
      ${like}
    </div>
  </div>`;
    fragment.appendChild(div);
    return fragment;
}

export function createMoviePreview(obj) {
    const fragment = document.createDocumentFragment();
    const li = document.createElement('li');
    li.dataset.id = obj._id;
    li.className = 'card mb-4';
    li.textContent = obj.title;
    
    li.innerHTML = `<img class="card-img-top" src="${obj.img}"
    alt="Card image cap" width="400">
<div class="card-body">
    <h4 class="card-title">${obj.title}</h4>
</div>
<div class="card-footer">
    <a href="#">
        <button type="button" class="btn btn-info">Details</button>
    </a>
</div>`;
    fragment.appendChild(li);
    return fragment;
}

export function createAddForm() {
    const fragment = document.createDocumentFragment();
    const h1 = document.createElement('h1');
    h1.textContent = 'Add Movie';
    const div1 = document.createElement('div');
    div1.classList.add('form-group');
    div1.innerHTML = `<label for="title">Movie Title</label>
    <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="" />`;
    const div2 = document.createElement('div');
    div2.classList.add('form-group');
    div2.innerHTML = `<label for="description">Movie Description</label>
    <textarea class="form-control" placeholder="Description" name="description"></textarea>`;
    const div3 = document.createElement('div');
    div3.classList.add('form-group');
    div3.innerHTML = `<label for="imageUrl">Image url</label>
    <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="img" value="" />`;
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Submit';
    btn.type = 'submit';
    fragment.replaceChildren(h1, div1, div2, div3, btn);
    return fragment;
}

export function createEditForm(obj) {
    const fragment = document.createDocumentFragment();
    const h1 = document.createElement('h1');
    h1.textContent = 'Edit Movie';
    h1.dataset.id = obj._id;
    const div1 = document.createElement('div');
    div1.classList.add('form-group');
    div1.innerHTML = `<label for="title">Movie Title</label>
    <input id="title" type="text" class="form-control" placeholder="Movie Title" value="${obj.title}" name="title" />`;
    const div2 = document.createElement('div');
    div2.classList.add('form-group');
    div2.innerHTML = `<label for="description">Movie Description</label>
    <textarea class="form-control" placeholder="Movie Description..." name="description">${obj.description}</textarea>`;
    const div3 = document.createElement('div');
    div3.classList.add('form-group');
    div3.innerHTML = `<label for="imageUrl">Image url</label>
    <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value="${obj.img}" name="img" />`;
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Submit';
    btn.type = 'submit';
    fragment.replaceChildren(h1, div3, div1, div2, btn);
    return fragment;
}