import { del, get, post, put } from './api.js'


const endpoint = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    allTeams: '/data/teams',
    team: (id) => `/data/teams/${id}`,
    members: '/data/members?where=status%3D%22member%22',
    teamMembers: (id) => `/data/members?where=teamId%3D%22${id}%22&load=user%3D_ownerId%3Ausers`,
    editMembership: '/data/members'
}

export async function login(email, password) {
    return await post(endpoint.login, { email, password });
}

export async function register(email, username, password) {
    return await post(endpoint.register, { email, username, password });
}

export async function logout() {
    return await get(endpoint.logout);
}

export async function getAllTeams() {
    return Promise.all([
        get(endpoint.members),
        get(endpoint.allTeams)
    ]);
}

export async function getTeam(id) {
    return Promise.all([
        get(endpoint.team(id)),
        get(endpoint.teamMembers(id))
    ]);
}

export async function requestMembership(teamId) {
    return await post(endpoint.editMembership, {teamId});
}

export async function leaveTeam(userId) {
    return await del(endpoint.editMembership + '/' + userId);
}

export async function approveMembership(id) {
    return await put(endpoint.editMembership + '/' + id);
}


