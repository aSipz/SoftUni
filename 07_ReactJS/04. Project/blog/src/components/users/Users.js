import './Users.css';

import { useEffect, useState } from 'react';

import SearchBar from '../searchBar/SearchBar';
import User from './User';
import Spinner from '../spinner/Spinner';
import Overlay from '../overlay/Overlay';
import useOverlay from '../../hooks/useOverlay';

import * as userService from '../../service/user';
import { userAction } from '../../const/actions';
import { onChangeHandler } from '../../utils/inputUtils';

export default function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [confirm, setConfirm] = useState(false);
    const [selectValue, setSelectValue] = useState({ limit: '5' });
    const [currentPage, setCurrentPage] = useState(1);
    const [action, setAction] = useOverlay();

    useEffect(() => {

        Promise.all([
            userService.getUsers(),
            userService.getAllAuthors()
        ])
            .then((result) => {

                const [{ results: allUsers }, { results: allAuthors }] = result;

                setUsers(allUsers.map(user => allAuthors.some(x => x.objectId === user.objectId) ? { ...user, role: 'author' } : user));

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (confirm) {

            const addAuthor = users.filter(u => u.changed && !u.role);
            const removeAuthor = users.filter(u => u.changed && u.role === 'author');

            Promise.all([
                addAuthor.forEach(u => userService.addAuthorRole(u.objectId)),
                removeAuthor.forEach(u => userService.removeAuthorRole(u.objectId))
            ])
                .then(() => {
                    setUsers(state => state.map(u => u.changed ? { ...u, changed: false, role: u.role === 'author' ? '' : 'author' } : u));
                    setConfirm(false);
                    setAction(userAction.close);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setConfirm(false);
                    setAction(userAction.close);
                    setLoading(false);
                });

        }
    }, [confirm, users, setAction]);

    const onChange = onChangeHandler.bind(null, setSelectValue);

    const onConfirm = () => {
        setAction(userAction.confirm);
    }

    const onCancel = () => {
        setUsers(state => state.map(u => {
            const { changed, ...newUser } = u;
            return newUser;
        }));
    }

    const confirmAction = {
        action: () => {
            setConfirm(true);
            setLoading(true);
        },
        text: 'Are you sure you want to change the status of the selected users?',
        users: true
    }

    const pageChangeHandler = (newPage) => {
        const p = newPage < 1
            ? 1
            : newPage > pages
                ? pages
                : newPage;
        setCurrentPage(p);
    }

    const sortHandler = (sortField) => {
    
        if (sortField === 'createdAt') {
            setUsers(state => [...state].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt)));
            
        } else {
            setUsers(state => [...state].sort((a, b) => a[sortField].localeCompare(b[sortField])));
            console.log(users);
        }

    }

    const hasChanges = users.some(u => u.changed);

    const pages = Math.ceil(users.length / Number(selectValue.limit));

    const indexCheck = (index) => index >= (currentPage - 1) * Number(selectValue.limit) && index < currentPage * Number(selectValue.limit);

    return (
        <section className="main">

            {loading && <Spinner />}

            {action && <Overlay action={action} setAction={setAction} confirmAction={confirmAction} />}

            <article className="post page">
                <div className="inner">
                    <h1>Users</h1>

                    <SearchBar searchFor={'user'} />

                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th onClick={sortHandler.bind(null, 'firstName')}>
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
                                    Joined
                                </th>
                                <th>
                                    Author
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map((user, index) =>
                                indexCheck(index) &&
                                < tr key={user.objectId}>
                                    <User user={user} changeStatus={setUsers} />
                                </tr>
                            )}

                        </tbody>
                    </table>

                    <div className="pagination position">
                        <div className="limits">
                            <span>Users per page:</span>
                            <select name="limit" className="limit" value={selectValue.limit} onChange={onChange}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <p className="pages">{currentPage} of {pages}</p>
                        <div className="actions">
                            <button className="btn" title="First Page" onClick={pageChangeHandler.bind(null, 1)}>
                                <i className="fa-solid fa-angles-left" />
                            </button>
                            <button className="btn" title="Previous Page" onClick={pageChangeHandler.bind(null, currentPage - 1)}>
                                <i className="fa-solid fa-angle-left" />
                            </button>
                            <button className="btn" title="Next Page" onClick={pageChangeHandler.bind(null, currentPage + 1)}>
                                <i className="fa-solid fa-angle-right" />
                            </button>
                            <button className="btn" title="Last Page" onClick={pageChangeHandler.bind(null, pages)}>
                                <i className="fa-solid fa-angles-right" />
                            </button>
                        </div>

                        <div className="save_changes">
                            {hasChanges &&
                                <>
                                    <button className="user-cancel" onClick={onCancel}>Cancel</button>
                                    <button className="user-confirm" onClick={onConfirm}>Confirm</button>
                                </>
                            }
                        </div>

                    </div>
                </div>
            </article>
        </section >
    );
}