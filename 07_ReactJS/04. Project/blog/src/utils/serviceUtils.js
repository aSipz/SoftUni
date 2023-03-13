export function createPointer(className, objectId) {
    return { __type: 'Pointer', className, objectId }
}

export function addOwner(record, ownerId) {
    const data = Object.assign({}, record);
    data.owner = createPointer('_User', ownerId);
    return data;
}

export function filterRelation(field, collection, objectId) {
    return {
        [field]: createPointer(collection, objectId)
    };
}

export function encodeObject(obj) {
    return encodeURIComponent(JSON.stringify(obj));
}

export function encodeDate(date) {
    return { __type: 'Date', iso: date.toISOString() };
}
