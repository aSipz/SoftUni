import { useEffect, useState } from 'react';

export default function UsersTableHead({ sortUsers, pageChangeHandler }) {
    const [sortField, setSortField] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        createdAt: 'asc',
        sorted: 'createdAt'
    });

    useEffect(() => {

        if (!sortField.clicked) {
            return
        }

        const field = sortField.sorted;

        if (field === 'createdAt') {
            sortUsers(state => [...state].sort((a, b) => sortField[field] === 'asc'
                ? new Date(a.createdAt) - new Date(b.createdAt)
                : new Date(b.createdAt) - new Date(a.createdAt)));
        } else {
            sortUsers(state => [...state].sort((a, b) => sortField[field] === 'asc'
                ? a[field].localeCompare(b[field])
                : b[field].localeCompare(a[field])));
        }

    }, [sortField, sortUsers]);

    const onMouseEnterHandler = (field) => {
        sortField[field] === 'asc'
            ? setSortField(state => ({ ...state, [field]: 'desc' }))
            : setSortField(state => ({ ...state, [field]: 'asc' }));
    }

    const onMouseLeaveHandler = (field) => {
        if (sortField.clicked) {
            setSortField(state => ({ ...state, clicked: false }));
            return;
        }
        if (sortField.sorted !== field) {
            setSortField(state => ({ ...state, [field]: '' }))
        } else {
            sortField[field] === 'desc'
                ? setSortField(state => ({ ...state, [field]: 'asc' }))
                : setSortField(state => ({ ...state, [field]: 'desc' }));
        }
    }

    const sortHandler = (field) => {

        const newFieldValue = sortField.clicked
            ? sortField[field] === 'asc'
                ? 'desc'
                : 'asc'
            : sortField[field];

        setSortField(state => Object.fromEntries([...Object.entries(state).map(([k]) => k === field
            ? [k, newFieldValue]
            : [k, '']),
        ['sorted', field],
        ['clicked', true]]));

        pageChangeHandler(1);

    }

    return (
        <thead>
            <tr>
                <th>Image</th>
                <th
                    onClick={sortHandler.bind(null, 'firstName')}
                    onMouseEnter={onMouseEnterHandler.bind(null, 'firstName')}
                    onMouseLeave={onMouseLeaveHandler.bind(null, 'firstName')}
                >
                    First name
                    <div className="wrapper">
                        {sortField.firstName === 'asc' && <i className="fa-solid fa-arrow-up" />}
                        {sortField.firstName === 'desc' && <i className="fa-solid fa-arrow-down" />}
                    </div>
                </th>
                <th
                    onClick={sortHandler.bind(null, 'lastName')}
                    onMouseEnter={onMouseEnterHandler.bind(null, 'lastName')}
                    onMouseLeave={onMouseLeaveHandler.bind(null, 'lastName')}
                >
                    Last name
                    <div className="wrapper">
                        {sortField.lastName === 'asc' && <i className="fa-solid fa-arrow-up" />}
                        {sortField.lastName === 'desc' && <i className="fa-solid fa-arrow-down" />}
                    </div>
                </th>
                <th
                    onClick={sortHandler.bind(null, 'username')}
                    onMouseEnter={onMouseEnterHandler.bind(null, 'username')}
                    onMouseLeave={onMouseLeaveHandler.bind(null, 'username')}
                >
                    Username
                    <div className="wrapper">
                        {sortField.username === 'asc' && <i className="fa-solid fa-arrow-up" />}
                        {sortField.username === 'desc' && <i className="fa-solid fa-arrow-down" />}
                    </div>
                </th>
                <th
                    onClick={sortHandler.bind(null, 'email')}
                    onMouseEnter={onMouseEnterHandler.bind(null, 'email')}
                    onMouseLeave={onMouseLeaveHandler.bind(null, 'email')}
                >
                    Email
                    <div className="wrapper">
                        {sortField.email === 'asc' && <i className="fa-solid fa-arrow-up" />}
                        {sortField.email === 'desc' && <i className="fa-solid fa-arrow-down" />}
                    </div>
                </th>
                <th
                    onClick={sortHandler.bind(null, 'createdAt')}
                    onMouseEnter={onMouseEnterHandler.bind(null, 'createdAt')}
                    onMouseLeave={onMouseLeaveHandler.bind(null, 'createdAt')}
                >
                    Joined
                    <div className="wrapper">
                        {sortField.createdAt === 'asc' && <i className="fa-solid fa-arrow-up" />}
                        {sortField.createdAt === 'desc' && <i className="fa-solid fa-arrow-down" />}
                    </div>
                </th>
                <th>Author</th>
            </tr>
        </thead>
    );
}