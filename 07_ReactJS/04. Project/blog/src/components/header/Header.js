import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Overlay from '../overlay/Overlay';
import useOverlay from '../../hooks/useOverlay';
import { AuthContext } from '../../contexts/AuthContext';
import { userAction } from '../../const/actions';

export default function Header() {
    const [action, setAction] = useOverlay();
    const { user } = useContext(AuthContext);

    const isAuthor = user?.roles?.includes('author');

    const onLoginClick = () => {
        setAction(userAction.login);
    }

    return (
        <header className="header">

            {action && <Overlay action={action} setAction={setAction} />}

            <div className="header-wrap">
                <div className="logo plain logo-left">
                    <div className="site-title">
                        <NavLink to="/" title="Go to Home" end>Home</NavLink>
                    </div>
                </div>
                <nav id="nav" role="navigation">
                    <div className="table">
                        <div className="table-cell">
                            <ul id="menu-menu-1">
                                <li className="menu-item">
                                    <NavLink to="/posts" end>Blog</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/authors">Authors</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/about">About</NavLink>
                                </li>

                                {isAuthor &&
                                    <li className="menu-item">
                                        <p className="dropdown">Creator Panel</p>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <NavLink to="/create">Create new post</NavLink>
                                            </li>
                                            <li className="menu-item">
                                                <NavLink to="my-articles">My posts</NavLink>
                                            </li>
                                            <li className="menu-item">
                                                <NavLink to="/users">Users</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                }

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="user">
                    <ul>
                        <li className="menu-item">
                            <p>Welcome, {user ? `${user.firstName} ${user.lastName}` : 'guest'}!</p>
                        </li>

                        <li className="menu-item">
                            {user
                                ? <Link to="/profile"><i className="fa-solid fa-circle-user" /></Link>
                                : <button onClick={onLoginClick}>Login</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}