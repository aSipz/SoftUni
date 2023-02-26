import { useEffect, useState } from 'react';
import TableHead from "./TableHead";
import User from "./User";

export default function Table(props) {

    const [users, setUsers] = useState();

    useEffect(() => {

        fetchData();

        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3005/api/users');
                const result = await response.json();
                console.log(result);
                result.count === 0 ? props.status('no-user') : props.status('success');
                if (result.count > 0) {
                    setUsers(result.users);
                }
            } catch (err) {
                props.status('error');
            }
        }

    }, [])

    return (
        <table className="table">

            <TableHead />

            <tbody>
                {/* <!-- Table row component --> */}
                {Array.isArray(users) && users.length > 0 && users.map(user => <User
                    key={user._id}
                    {...user}
                    userActions={{ deleteHandler, detailsHandler, editHandler }}
                />)}

            </tbody>
        </table>
    );

    function deleteHandler(id) {
        props.userAction.setUserAction('delete')
    }

    function detailsHandler(id) {
        props.status('loading');
        props.userAction.setUserAction('details');
        props.userAction.setUserId({ id, status: props.status });

    }

    function editHandler(id) {
        props.userAction.setUserAction('edit');
    }
}