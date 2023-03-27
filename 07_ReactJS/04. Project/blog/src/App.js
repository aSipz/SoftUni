import './App.css';

import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Post from './components/post/Post';
import Profile from './components/profile/Profile';
import PrivateGuard from './components/guards/PrivateGuard';
import AuthorGuard from './components/guards/AuthorGuard';
import ScrollBtn from './components/scroll/ScrollBtn';
import AuthorsList from './components/authors/AuthorsList';
import Spinner from './components/spinner/Spinner';

import { AuthProvider } from './contexts/AuthContext';
import ErrorBoundary from './components/error/ErrorBoundary';

const CreatePost = lazy(() => import('./components/createPost/CreatePost'));
const Users = lazy(() => import('./components/users/Users'));


function App() {

    return (
        <ErrorBoundary>
            <AuthProvider>

                <Header />

                <main>

                    <Suspense fallback={<Spinner />}>
                        <Routes>

                            <Route path="/" element={<Home />} />
                            <Route path="/posts" element={<Blog />} />
                            <Route path="/authors" element={<AuthorsList />} />
                            <Route path="/posts/:postId/details" element={<Post />} />

                            <Route element={<AuthorGuard />} >

                                <Route path="/create" element={<CreatePost />} />
                                <Route path="/posts/:postId/edit" element={<CreatePost />} />
                                <Route path="/users" element={<Users />} />

                            </Route>

                            <Route element={<PrivateGuard />}>
                                <Route path="/profile" element={<Profile />} />
                            </Route>

                            <Route path="*" element={<Navigate to="/" />} />

                        </Routes>
                    </Suspense>

                </main>

                <ScrollBtn />

                <Footer />

            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
