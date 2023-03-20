export default function User({ user }) {
    const isAuthor = user.role === 'author';

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
            <td className="actions">
                {isAuthor && <i class="fa-regular fa-circle-check"></i>}
                {/* <input type="checkbox" checked={isAuthor} /> */}
            </td>
        </>
    );
}