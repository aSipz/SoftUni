import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function User({ account, changeStatus, onSendMsgClick }) {

    const { user } = useContext(AuthContext);

    const isAuthor = account.role === 'author';

    const onClick = () => {
        changeStatus(state => state.map(u => u.objectId === account.objectId ? { ...account, changed: !account.changed } : u));
    }
    
    return (
        <tr>
            {user.objectId === account.objectId
                ? <td>
                    <img src={account.imageUrl} alt={account.firstName} className="image" />
                </td>
                : <td title="Send message" onClick={onSendMsgClick.bind(null, account)}>
                    <img src={account.imageUrl} alt={account.firstName} className="image message" />
                </td>}
            <td>{account.firstName}</td>
            <td>{account.lastName}</td>
            <td>{account.username}</td>
            <td>{account.email}</td>
            <td>{new Date(account.createdAt).toDateString()}</td>
            <td data-testid="actions" className="actions" onClick={onClick}>
                {isAuthor
                    ? <>
                        <i data-testid="author" className="fa-regular fa-circle-check author" style={account.changed ? { opacity: 0 } : {}}></i>
                        <i data-testid="remove_author" className="fa-regular fa-circle-xmark remove_author" style={account.changed ? { opacity: 1, color: "indianred" } : {}}></i>
                    </>
                    : <i data-testid="add_author" className="fa-regular fa-circle-check add_author" style={account.changed ? { opacity: 1, color: "darkseagreen" } : {}}></i>
                }
            </td>
        </tr>
    );
}