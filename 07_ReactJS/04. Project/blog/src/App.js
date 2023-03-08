import './App.css';

import { useContext } from 'react';

import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Overlay from './components/overlay/Overlay';
import Post from './components/post/Post';
import Profile from './components/profile/Profile';
import Users from './components/users/Users';

import { AuthProvider } from './contexts/AuthContext';
import { ActionContext } from './contexts/ActionContext';
import { userAction } from './const/actions';

function App() {
    const { action } = useContext(ActionContext);

    return (
        <>
            <AuthProvider>

                <Header />

                <main>
                    <Home />

                    <Blog />

                    <Post />

                    <Profile />

                    <Users />
                </main>

            </AuthProvider>

            <Footer />

            {action !== userAction.default && <Overlay />}
        </>
    );
}

export default App;
