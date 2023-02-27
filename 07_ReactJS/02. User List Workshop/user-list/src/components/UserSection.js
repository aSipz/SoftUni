import { useState, useEffect } from 'react';

import AddBtn from "./user/AddBtn";
import Overlap from "./overlap/Overlap";
import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./user-list/Table";

import * as userService from "../service/UserService";

import { currentStatus, userActions } from './constants/Constants';
import EditUser from './user/EditUser';
import Details from './user/Details';
import DeleteUser from './user/DeleteUser';

export default function UserSection() {
    const [users, setUsers] = useState(null)
    const [status, setStatus] = useState(currentStatus.loading);
    const [user, setUser] = useState({ user: {}, action: null })

    useEffect(() => {
        userService.getAll()
            .then(result => {
                if (result.count === 0) {
                    setStatus(currentStatus['no-user']);
                }
                if (result.count > 0) {
                    setStatus(currentStatus.success);
                }
                setUsers(result.users);
            })
            .catch(err => setStatus(currentStatus.error));
    }, []);


    return (
        <>
            <section className="card users-container">
                {/* <!-- Search bar component --> */}

                <Search />

                {/* <!-- Table component --> */}
                <div className="table-wrapper">

                    {/* <!-- Overlap components  --> */}

                    {status !== currentStatus.success ? <Overlap status={status} /> : null}

                    <Table
                        actions={{ setStatus, setUsers, userHandler, closeHandler }}
                        users={users}
                    />

                </div>

                {/* <!-- New user button  --> */}
                <AddBtn onClick={userHandler.bind(null, userActions.add, null)} />

                {/* <!-- Pagination component  --> */}
                <Pagination />
            </section >

            {(user.action === userActions.add || user.action === userActions.edit) &&
                <EditUser
                    onClose={closeHandler}
                    user={user.user}
                    setUsers={setUsers}
                    setStatus={setStatus}
                />}

            {user.action === userActions.details &&
                <Details
                    onClose={closeHandler}
                    user={user.user}
                />}

            {user.action === userActions.delete &&
                <DeleteUser
                    onClose={closeHandler}
                    user={user.user}
                    setUsers={setUsers}
                    setStatus={setStatus}
                />}
        </>
    );

    function userHandler(action, id) {
        if (action === userActions.details || action === userActions.edit) {
            setStatus(currentStatus.loading);
            userService.getUser(id)
                .then(result => {
                    setStatus(currentStatus.success);
                    setUser({ user: { ...result }, action: action })
                })
                .catch(err => setStatus(currentStatus.error));
        } else {
            setUser({ user: { id }, action: action });
        }
    }

    function closeHandler() {
        setUser({ user: {}, action: null })
    }
}