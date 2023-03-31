export default function Message({ message, deleteHandler }) {
    const sender = message.sender.firstName + ' ' + message.sender.lastName;
    const receiver = message.receiver.firstName + ' ' + message.receiver.lastName;
    return (
        <article className={`message ${message.read || !message.inbox ? '' : 'unread'}`} onClick={deleteHandler.bind(null, message.objectId)}>
            <div className="title-container">
                <h3 className="message-author">{message.inbox ? `From: ${sender}` : `To: ${receiver}`}</h3>
                <button className="btn red close">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            <p className="message-text">{message.message}</p>
        </article>
    );
}