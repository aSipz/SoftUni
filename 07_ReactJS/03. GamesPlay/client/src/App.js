import { Routes, Route } from 'react-router-dom';

import Catalogue from "./components/catalogue/Catalogue";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Logout from './components/logout/Logout';
import Register from "./components/register/Register";

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
    const [user, setUser] = useLocalStorage('auth', null);

    function userLogin(userData) {
        setUser(userData);
    }

    function userLogout() {
        setUser(null);
    }

    return (
        <div id="box">

            <AuthContext.Provider value={{ user, userLogin, userLogout }}>

                <Header />

                <main id="main-content">

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/edit/:gameId" element={<Create />} />
                        <Route path="/details/:gameId" element={<Details />} />
                        <Route path="/catalogue" element={<Catalogue />} />
                    </Routes>

                </main>

            </AuthContext.Provider>

        </div>
    );
}

export default App;
