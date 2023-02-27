const host = 'http://localhost:3005/api/users';

export async function getAll() {
    const response = await fetch(host);
    const result = await response.json();
    return result;
}

export async function getUser(id) {
    const response = await fetch(`${host}/${id}`);
    const result = await response.json();
    return result.user;
}

export async function del(id) {
    const response = await fetch(`${host}/${id}`,{
        method: 'DELETE'
    });
    const result = await response.json();
    return result;
}

export async function create(data) {
    const response = await fetch(host, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result.user;
}

export async function update(id, data) {
    const response = await fetch(`${host}/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result.user;
}