import './App.css';

import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Overlay from './components/overlay/Overlay';
import Post from './components/post/Post';
import Profile from './components/profile/Profile';
import Users from './components/users/Users';
import PrivateGuard from './components/guards/PrivateGuard';

import { AuthProvider } from './contexts/AuthContext';
import { ActionContext } from './contexts/ActionContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { userAction } from './const/actions';

function App() {
    const { action } = useContext(ActionContext);

    return (
        <>
            <AuthProvider>
                <LoadingProvider>

                    <Header />

                    <main>
                        <Routes>

                            <Route path="/" element={<Home />} />

                            <Route path="/posts" element={<Blog />} />

                            <Route path="/create" element={<></>} />

                            <Route path="/authors" element={<></>} />

                            <Route path="/my-articles" element={<></>} />

                            <Route path="/about" element={<></>} />

                            <Route path="/posts/:postId/details" element={<Post />} />

                            <Route path="/posts/:postId/edit" element={<></>} />

                            <Route element={<PrivateGuard />}>
                                <Route path="/profile" element={<Profile />} />
                            </Route>

                            <Route path="/users" element={<Users />} />

                        </Routes>
                    </main>

                    <Footer />

                    {action !== userAction.default && <Overlay />}

                </LoadingProvider>
            </AuthProvider>
        </>
    );
}

export default App;
