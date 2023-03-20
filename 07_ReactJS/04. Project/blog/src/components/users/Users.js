import './Users.css';

import { useEffect, useState } from 'react';

import SearchBar from '../searchBar/SearchBar';

import * as userService from '../../service/user';
import User from './User';

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        Promise.all([
            userService.getUsers(),
            userService.getAllAuthors()
        ])
            .then((result) => {

                const [{ results: allUsers }, { results: allAuthors }] = result;

                // console.log(allUsers.map(user => allAuthors.some(x => x.objectId === user.objectId) ? { ...user, role: 'author'} : user));
                setUsers(allUsers.map(user => allAuthors.some(x => x.objectId === user.objectId) ? { ...user, role: 'author' } : user));
                console.log(allUsers);
                console.log(allAuthors);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="main">
            <article className="post page">
                <div className="inner">
                    <h1>Users</h1>

                    <SearchBar />

                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    First name
                                    <i className="fa-solid fa-arrow-down active" />
                                </th>
                                <th>
                                    Last name
                                    <i className="fa-solid fa-arrow-up" />
                                </th>
                                <th>
                                    Username
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Created
                                </th>
                                <th>
                                    Author
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table row component */}
                            {users.map(user =>
                                <tr key={user.objectId}>
                                    <User user={user}/>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="pagination position">
                        <div className="limits">
                            <span>Users per page:</span>
                            <select name="limit" className="limit" value={5}>
                                <option value={5}>5</option>
                                <option value={5}>10</option>
                                <option value={5}>15</option>
                                <option value={5}>20</option>
                            </select>
                        </div>
                        <p className="pages">1 - 1 of 1</p>
                        <div className="actions">
                            <button className="btn" title="First Page">
                                <i className="fa-solid fa-angles-left" />
                            </button>
                            <button className="btn" title="Previous Page">
                                <i className="fa-solid fa-angle-left" />
                            </button>
                            <button className="btn" title="Next Page">
                                <i className="fa-solid fa-angle-right" />
                            </button>
                            <button className="btn" title="Last Page">
                                <i className="fa-solid fa-angles-right" />
                            </button>
                        </div>
                        <button className="user-confirm">Confirm</button>
                    </div>
                </div>
            </article>
        </section>
    );
}