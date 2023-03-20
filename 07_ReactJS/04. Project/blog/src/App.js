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
import ScrollBtn from './components/scroll/ScrollBtn';
import AuthorsList from './components/authors/AuthorsList';

function App() {

    return (
        <>
            <AuthProvider>

                <Header />

                <main>

                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/posts" element={<Blog />} />
                        <Route path="/authors" element={<AuthorsList />} />
                        <Route path="/about" element={<></>} />
                        <Route path="/posts/:postId/details" element={<Post />} />

                        <Route element={<AuthorGuard />} >
                            <Route path="/create" element={<CreatePost />} />
                            <Route path="/posts/:postId/edit" element={<CreatePost />} />
                            <Route path="/users" element={<Users />} />
                        </Route>

                        <Route element={<PrivateGuard />}>
                            <Route path="/profile" element={<Profile />} />
                        </Route>

                    </Routes>

                </main>

                <ScrollBtn />

                <Footer />

            </AuthProvider>
        </>
    );
}

export default App;
