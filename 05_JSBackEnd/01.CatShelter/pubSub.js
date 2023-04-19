const events = {};

function subscribe(event, callback) {
    if (!events[event]) {
        events[event] = [];
    }

    events[event].push(callback);
}

function publish(event, data) {
    if (!events[event]) {
        events[event] = [];
    }

    events[event].forEach(callback => callback(data));
}

const messageBroker = {
    subscribe,
    publish,
}