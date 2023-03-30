import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Overlay from '../overlay/Overlay';
import useOverlay from '../../hooks/useOverlay';
import { AuthContext } from '../../contexts/AuthContext';
import { userAction } from '../../const/actions';
import { searchAuthor } from '../../utils/serviceUtils';
import { MessageContext } from '../../contexts/MessageContext';

export default function Header() {
    const [action, setAction] = useOverlay();
    const { user } = useContext(AuthContext);
    const { unreadMsg } = useContext(MessageContext);

    const isAuthor = user?.roles?.includes('author');

    const onLoginClick = () => {
        setAction(userAction.login);
    }

    const search = isAuthor ? '/posts?search=' + searchAuthor(user.objectId) : '';

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

                                {isAuthor &&
                                    <li className="menu-item">
                                        <p className="dropdown">Creator Panel</p>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <NavLink to="/create">Create new post</NavLink>
                                            </li>
                                            <li className="menu-item">
                                                <Link to={search}>My posts</Link>
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
                            {user &&
                                <Link to="/messages">
                                    {unreadMsg === 0
                                        ? <i className="fa-regular fa-message" />
                                        : <i className="fa-regular fa-message fa-fade new_msg"><p>{unreadMsg}</p></i>
                                    }
                                </Link>
                            }
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