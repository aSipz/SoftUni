export function createPointer(className, objectId) {
    return { __type: 'Pointer', className, objectId }
}

export function searchAuthor(authorId) {
    return encodeObject({ 'author': authorId });
}

export function addTitleSearch(searchParams) {
    return { title: { '$regex': `(?i)${searchParams}` } }
}

export function addSearch(searchQuery) {
    const searchObj = JSON.parse(searchQuery);
    
    const author = searchObj?.author
        ? filterRelation('author', '_User', JSON.parse(searchQuery).author)
        : null;

    const title = searchObj?.title
        ? addTitleSearch(JSON.parse(searchQuery).title)
        : null;

    const search = Object.assign({}, author, title);

    if (Object.keys(search).length > 0) {
        return encodeObject(search);
    }
    
    return null;
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
