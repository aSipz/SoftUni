import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBar from '../searchBar/SearchBar';
import Error from '../error/Error';
import BlogItem from './BlogItem';
import Skeleton from '../skeleton/Skeleton';

import * as postService from '../../service/post';
import { addSearch, encodeObject } from '../../utils/serviceUtils';

const loadingStep = 2;

export default function Blog() {
    const [skip, setSkip] = useState(0);
    const [count, setCount] = useState();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    const search = addSearch(searchParams.get('search'));

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

                // console.log(result);
                skip === 0 && setCount(result.count);

                skip === 0
                    ? setPosts(result.results)
                    : setPosts(state => {
                        console.log(skip);
                        console.log(state);
                        return [...state, ...result.results]});

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

    const onSearch = (searchData) => {
        setSkip(0);
        setPosts(null);
        setLoading(true);
        const hasKeys = Object.keys(searchData).length > 0;
        setSearchParams(hasKeys ? `search=${encodeObject(searchData)}` : '');
    }

    const hasAuthorSearch = JSON.parse(searchParams.get('search'))?.author;
    const addSearchParams = posts && hasAuthorSearch ? { author: `${posts[0].author.firstName} ${posts[0].author.lastName}` } : null;

    return (
        <div className="wrap full-wrap">

            <SearchBar
                searchParams={searchParams}
                onSearch={onSearch}
                searchFor={'title'}
                addSearch={addSearchParams}
            />

            {posts === 'error' && <Error error={'Failed to fetch'} />}

            {Array.isArray(posts) && posts.length === 0 && <Error error={'No posts'} />}

            {Array.isArray(posts)
                && posts.length > 0
                && posts.map(post => <BlogItem key={post.objectId} post={post} />)}

            {loading && <Skeleton isBlog={true} />}

        </div>
    );
}