export default function User({ user, changeStatus }) {
    const isAuthor = user.role === 'author';

    const onClick = () => {
        changeStatus(state => state.map(u => u.objectId === user.objectId ? { ...user, changed: !user.changed } : u));
    }
    return (
        <>
            <td>
                <img src={user.imageUrl} alt={user.firstName} className="image" />
            </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{new Date(user.createdAt).toDateString()}</td>
            <td className="actions" onClick={onClick}>
                {isAuthor
                    ? <>
                        <i className="fa-regular fa-circle-check author" style={user.changed ? { opacity: 0 } : {}}></i>
                        <i className="fa-regular fa-circle-xmark remove_author" style={user.changed ? { opacity: 1, color: "indianred" } : {}}></i>
                    </>
                    : <i className="fa-regular fa-circle-check add_author" style={user.changed ? { opacity: 1, color: "darkseagreen" } : {}}></i>
                }
            </td>
        </>
    );
}