import { useContext } from 'react';

import { ActionContext } from '../../contexts/ActionContext';
import { userAction } from '../../const/actions'

export default function Header() {
    const { changeAction } = useContext(ActionContext);

    const onClick = () => {
        changeAction(userAction.login);
    }

    return (
        <header className="header">
            <div className="header-wrap">
                <div className="logo plain logo-left">
                    <div className="site-title">
                        <a href="index.html" title="Go to Home">Home</a>
                    </div>
                </div>
                <nav id="nav" role="navigation">
                    <div className="table">
                        <div className="table-cell">
                            <ul id="menu-menu-1">
                                <li className="menu-item">
                                    <a href="index.html">Blog</a>
                                </li>
                                <li className="menu-item">
                                    <a href="index.html">Authors</a>
                                </li>
                                <li className="menu-item">
                                    <a href="about.html">About</a>
                                </li>
                                <li className="menu-item">
                                    <p className="dropdown">Creator Panel</p>
                                    <ul className="sub-menu">
                                        <li className="menu-item">
                                            <a href="#">Create new article</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">My articles</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Users</a>
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
                            <p>Welcome, guest!</p>
                        </li>
                        <li>
                            <a href="#"><i className="fa-solid fa-circle-user" /></a>
                        </li>
                        <li className="menu-item">
                            <button onClick={onClick}>Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}