export async function getMovies() {
    const response = await fetch('http://localhost:3030/data/movies?offset=0&pageSize=50');
    const data = await response.json();
    return data;
}

export async function getMovieLikes(id) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const data = await response.json();
    return data;
}

export async function getUserLikes(movieId) {
    const userId = sessionStorage.getItem('id');
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
    const data = await response.json();
    return data;
}

export async function getMovie(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const data = await response.json();
    return data;
}

export async function removeMovie(id) {
    const token = sessionStorage.getItem('token');
    const response = await fetch('http://localhost:3030/data/movies/' + id,{
        method: 'delete',
        headers: {'Content-Type':'application/json', 'X-Authorization':token}
    });
    const data = await response.json();
    return data;
}

export async function addMovie(obj) {
    const token = sessionStorage.getItem('token');
    const response = await fetch('http://localhost:3030/data/movies',{
        method:'post',
        headers: {'Content-Type':'application/json', 'X-Authorization':token},
        body: JSON.stringify(obj)
    });
    const data = await response.json();
    return data;
}

export async function editMovie(obj, id) {
    const token = sessionStorage.getItem('token');
    const response = await fetch('http://localhost:3030/data/movies/' + id,{
        method:'put',
        headers: {'Content-Type':'application/json', 'X-Authorization':token},
        body: JSON.stringify(obj)
    });
    const data = await response.json();
    return data;
}

export async function addLike(movieId) {
    const token = sessionStorage.getItem('token');
    const response = await fetch('http://localhost:3030/data/likes',{
        method:'post',
        headers: {'Content-Type':'application/json', 'X-Authorization':token},
        body: JSON.stringify({movieId})
    });
    const data = await response.json();
    return data;
}