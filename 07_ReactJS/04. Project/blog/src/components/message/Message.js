export default function Message({ message, deleteHandler, viewHandler }) {
    return (
        <article className={`message ${message.read || !message.inbox ? '' : 'unread'}`} onClick={viewHandler.bind(null, message)}>
            <div className="title-container">
                <h3 className="message-author">{message.inbox ? `From: ${message.senderName}` : `To: ${message.receiverName}`}</h3>
                <button className="btn red close" onClick={deleteHandler.bind(null, message.objectId)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            <p className="message-text">{message.message}</p>
        </article>
    );
}