import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBar from '../searchBar/SearchBar';
import Error from '../error/Error';
import BlogItem from './BlogItem';
import Skeleton from '../skeleton/Skeleton';

import * as postService from '../../service/post';
import { addSearch } from '../../utils/serviceUtils';

const loadingStep = 1;

export default function Blog() {
    const [skip, setSkip] = useState(0);
    const [count, setCount] = useState();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('search');
    const search = addSearch(searchQuery);

    const hasMore = posts ? skip + loadingStep < count : true;

    const onScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && hasMore) {
            setSkip(state => state + loadingStep);
            setLoading(true);
        }
    }, [hasMore]);

    useEffect(() => {
        postService.getPosts(loadingStep, skip, search)
            .then(result => {

                skip === 0 && setCount(result.count);

                skip === 0
                    ? setPosts(result.results)
                    : setPosts(state => [...state, ...result.results]);

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setPosts('error');
                setLoading(false);
            });

    }, [skip, searchParams, search]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [posts, onScroll]);


    // function onScroll() {
    //     const scrollTop = document.documentElement.scrollTop;
    //     const scrollHeight = document.documentElement.scrollHeight;
    //     const clientHeight = document.documentElement.clientHeight;
    //     if (scrollTop + clientHeight >= scrollHeight && hasMore) {
    //         setSkip(state => state + loadingStep);
    //         setLoading(true);
    //     }
    // }

    return (
        <div className="wrap full-wrap">

            <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />

            {posts === 'error' && <Error error={'Failed to fetch'} />}

            {Array.isArray(posts) && posts.length === 0 && <Error error={'No posts'} />}

            {Array.isArray(posts)
                && posts.length > 0
                && posts.map(post => <BlogItem key={post.objectId} post={post} />)}

            {loading && <Skeleton isBlog={true} />}

        </div>
    );
}