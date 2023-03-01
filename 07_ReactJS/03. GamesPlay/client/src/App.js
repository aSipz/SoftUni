import { Routes, Route } from 'react-router-dom';

import Catalogue from "./components/catalogue/Catalogue";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
    return (
        <div id="box">

            <Header />

            <main id="main-content">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/details/:gameId" element={<Details />} />
                    <Route path="/catalogue" element={<Catalogue />} />
                </Routes>

            </main>

        </div>
    );
}

export default App;
