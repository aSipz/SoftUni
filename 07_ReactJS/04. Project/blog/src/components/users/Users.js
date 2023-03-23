import './Users.css';

import { useCallback, useEffect, useState } from 'react';

import SearchBar from '../searchBar/SearchBar';
import User from './User';
import Spinner from '../spinner/Spinner';
import Overlay from '../overlay/Overlay';
import useOverlay from '../../hooks/useOverlay';

import * as userService from '../../service/user';
import { userAction } from '../../const/actions';
import { onChangeHandler } from '../../utils/inputUtils';
import UsersTableHead from './UsersTableHead';

const searchFields = ['firstName', 'lastName', 'username', 'email'];

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

    const onSearch = useCallback((searchObj) => {
        const { user: search } = searchObj;
        search
            ? setUsers(state => state.map(u => Object.entries(u).some(([k, v]) => searchFields.includes(k) && v.toLowerCase().includes(search.toLowerCase()))
                ? { ...u, hidden: false }
                : { ...u, hidden: true }))
            : setUsers(state => state.map(u => ({ ...u, hidden: false })));

        setCurrentPage(1);
    }, [])

    const onChange = (e) => {
        onChangeHandler(setSelectValue, e);
        setCurrentPage(1);
    }

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

    const hasChanges = users.some(u => u.changed);

    const pages = Math.ceil(users.filter(u => !u.hidden).length / Number(selectValue.limit));

    const indexCheck = (index) => index >= (currentPage - 1) * Number(selectValue.limit) && index < currentPage * Number(selectValue.limit);

    return (
        <section className="main">

            {loading && <Spinner />}

            {action && <Overlay action={action} setAction={setAction} confirmAction={confirmAction} />}

            <article className="post page">
                <div className="inner">
                    <h1>Users</h1>

                    <SearchBar searchFor={'user'} onSearch={onSearch} />

                    <table className="table">

                        <UsersTableHead sortUsers={setUsers} pageChangeHandler={pageChangeHandler} />

                        <tbody>

                            {users
                                .filter(u => !u.hidden)
                                .map((user, index) =>
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