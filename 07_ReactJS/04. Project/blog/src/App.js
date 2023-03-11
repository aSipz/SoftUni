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
import AuthorGuard from './components/guards/AuthorGuard';
import CreatePost from './components/createPost/CreatePost';
import Spinner from './components/spinner/Spinner';

import { AuthProvider } from './contexts/AuthContext';
import { ActionContext } from './contexts/ActionContext';
import { LoadingContext } from './contexts/LoadingContext';
import { userAction } from './const/actions';

function App() {
    const { action } = useContext(ActionContext);
    const { loading } = useContext(LoadingContext);

    return (
        <>
            <AuthProvider>

                {loading && <Spinner />}

                <Header />

                <main>
                    <Routes>

                        <Route path="/" element={<Home />} />

                        <Route path="/posts" element={<Blog />} />

                        <Route path="/authors" element={<></>} />

                        <Route path="/about" element={<></>} />

                        <Route path="/posts/:postId/details" element={<Post />} />

                        <Route element={<AuthorGuard />} >
                            <Route path="/create" element={<CreatePost />} />
                            <Route path="/my-articles" element={<></>} />
                            <Route path="/posts/:postId/edit" element={<></>} />
                            <Route path="/users" element={<Users />} />
                        </Route>

                        <Route element={<PrivateGuard />}>
                            <Route path="/profile" element={<Profile />} />
                        </Route>

                    </Routes>
                </main>

                <Footer />

                {action !== userAction.default && <Overlay />}

            </AuthProvider>
        </>
    );
}

export default App;
