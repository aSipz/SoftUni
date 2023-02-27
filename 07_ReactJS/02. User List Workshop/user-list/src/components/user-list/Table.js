import TableHead from "./TableHead";
import User from "./User";

export default function Table(
    { users,
        actions,
    }
) {

    return (
        <table className="table">

            <TableHead setUsers={actions.setUsers}/>

            <tbody>
                {/* <!-- Table row component --> */}
                {Array.isArray(users) && users.length > 0 && users.map(user =>
                    <tr key={user._id}>
                        <User
                            user={{...user}}
                            actions={actions}
                        />
                    </tr>
                )}

            </tbody>
        </table>
    );
}