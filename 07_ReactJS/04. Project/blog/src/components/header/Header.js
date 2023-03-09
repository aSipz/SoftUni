import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ActionContext } from '../../contexts/ActionContext';
import { AuthContext } from '../../contexts/AuthContext';
import { userAction } from '../../const/actions';

export default function Header() {
    const { changeAction } = useContext(ActionContext);
    const { user } = useContext(AuthContext);

    const onLoginClick = () => {
        changeAction(userAction.login);
    }

    return (
        <header className="header">
            <div className="header-wrap">
                <div className="logo plain logo-left">
                    <div className="site-title">
                        <NavLink to="/" title="Go to Home">Home</NavLink>
                    </div>
                </div>
                <nav id="nav" role="navigation">
                    <div className="table">
                        <div className="table-cell">
                            <ul id="menu-menu-1">
                                <li className="menu-item">
                                    <NavLink to="/posts">Blog</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/authors">Authors</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li className="menu-item">
                                    <p className="dropdown">Creator Panel</p>
                                    <ul className="sub-menu">
                                        <li className="menu-item">
                                            <NavLink to="/create">Create new article</NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="my-articles">My articles</NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/users">Users</NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="user">
                    <ul>
                        <li className="menu-item">
                            <p>Welcome, {user? `${user.firstName} ${user.lastName}` : 'guest'}!</p>
                        </li>

                        <li className="menu-item">
                            {user
                                ? <Link to="/users/:userId"><i className="fa-solid fa-circle-user" /></Link>
                                : <button onClick={onLoginClick}>Login</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}