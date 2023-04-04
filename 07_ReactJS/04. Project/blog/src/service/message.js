import { get, post, put } from './api.js';
import { createPointer, encodeObject, filterRelation } from '../utils/serviceUtils';

const endpoints = {
    'sendMessage': '/classes/Message',
    'getUnreadMessagesByReceiver': (receiverId) => {
        return '/classes/Message?where=' + encodeObject({ ...filterRelation('receiver', '_User', receiverId), 'read': false, 'receiverDeleted': false }) + '&limit=0&count=1';
    },
    'getNewMessages': (receiverId) => {
        const newMsg = encodeObject({ ...filterRelation('receiver', '_User', receiverId), 'read': false, 'receiverDeleted': false });
        return '/classes/Message?where=' + newMsg + '&order=-createdAt&include=receiver,sender';
    },
    'getRelatedMessages': (userId) => {
        const sent = { ...filterRelation('sender', '_User', userId), 'senderDeleted': false };
        const received = { ...filterRelation('receiver', '_User', userId), 'receiverDeleted': false };
        return '/classes/Message?where=' + encodeObject({ "$or": [sent, received] }) + '&order=-createdAt&include=receiver,sender';
    },
    'message': (messageId) => '/classes/Message/' + messageId,
}

export function sendMessage(msgData, senderId, receiverId) {
    const sender = createPointer('_User', senderId);
    const receiver = createPointer('_User', receiverId);
    return post(endpoints.sendMessage, { ...msgData, sender, receiver });
}

export function getUnread(receiverId) {
    return get(endpoints.getUnreadMessagesByReceiver(receiverId));
}

export function getNewMessages(receiverId) {
    return get(endpoints.getNewMessages(receiverId));
}

export function getRelated(userId) {
    return get(endpoints.getRelatedMessages(userId));
}

export function updateMessage(messageId, messageData) {
    return put(endpoints.message(messageId), messageData);
}