import { Routes, Route } from 'react-router-dom';

import Catalogue from "./components/catalogue/Catalogue";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Logout from './components/logout/Logout';
import Register from "./components/register/Register";

import { AuthProvider } from './contexts/AuthContext';

function App() {


    return (
        <div id="box">

            <AuthProvider>

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

            </AuthProvider>

        </div>
    );
}

export default App;
