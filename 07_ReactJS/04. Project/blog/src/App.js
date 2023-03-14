import './App.css';
import { Route, Routes } from 'react-router-dom';

import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Post from './components/post/Post';
import Profile from './components/profile/Profile';
import Users from './components/users/Users';
import PrivateGuard from './components/guards/PrivateGuard';
import AuthorGuard from './components/guards/AuthorGuard';
import CreatePost from './components/createPost/CreatePost';

import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from './components/scroll/ScrollToTop';
import { OverlayProvider } from './contexts/OverlayContext';

function App() {

    return (
        <>
            <AuthProvider>

                <Header />

                <main>
                    <ScrollToTop />

                    <Routes>

                        <Route path="/" element={<Home />} />

                        <Route path="/posts" element={<Blog />} />

                        <Route path="/authors" element={<></>} />

                        <Route path="/about" element={<></>} />

                        <Route path="/posts/:postId/details" element={<Post />} />

                        <Route element={<AuthorGuard />} >
                            <Route path="/create" element={<CreatePost />} />
                            <Route path="/my-articles" element={<></>} />
                            <Route path="/posts/:postId/edit" element={<CreatePost />} />
                            <Route path="/users" element={<Users />} />
                        </Route>

                        <Route element={<PrivateGuard />}>
                            <Route path="/profile" element={<Profile />} />
                        </Route>

                    </Routes>
                </main>

                <Footer />

            </AuthProvider>
        </>
    );
}

export default App;
