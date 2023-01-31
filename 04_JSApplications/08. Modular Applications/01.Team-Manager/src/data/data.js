import { del, get, post, put } from './api.js'


const endpoint = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    allTeams: '/data/teams',
    team: (id) => `/data/teams/${id}`,
    members: '/data/members?where=status%3D%22member%22',
    teamMembers: (id) => `/data/members?where=teamId%3D%22${id}%22&load=user%3D_ownerId%3Ausers`,
    editMembership: '/data/members',
    myTeams: (id) => `/data/members?where=_ownerId%3D%22${id}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`, 
    getMembersCount : (arr) => `/data/members?where=${encodeURIComponent(`teamId IN (${arr.map(el => `"${el}"`).join(',')}) AND status="member"`)}`
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

export async function getMyTeams(id) {
    return await get(endpoint.myTeams(id));
}

export async function getMembersCount(arr) {
    return await get(endpoint.getMembersCount(arr));
}

export async function forEdit(id) {
    return await get(endpoint.team(id));
}

export async function editTeam(id, data) {
    return await put(endpoint.team(id), data);
}

export async function createTeam(data) {
    return await post(endpoint.allTeams, data);
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
    const data = await get(endpoint.editMembership + '/' + id);
    data.status = 'member';
    return await put(endpoint.editMembership + '/' + id, data);
}


