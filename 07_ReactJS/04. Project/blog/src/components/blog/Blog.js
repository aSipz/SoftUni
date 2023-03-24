import { useCallback, useEffect, useReducer } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBar from '../searchBar/SearchBar';
import Error from '../error/Error';
import BlogItem from './BlogItem';
import Skeleton from '../skeleton/Skeleton';

import * as postService from '../../service/post';
import { addSearch, encodeObject } from '../../utils/serviceUtils';

const blogControlReducer = (state, action) => {
    switch (action.type) {
        case 'SCROLL':
            return { ...state, loading: true, skip: state.skip + loadingStep };
        case 'ERROR':
            return { ...state, loading: false, error: true };
        case 'LOAD_POSTS':
            return {
                ...state,
                ...action.payload,
                posts: [...state.posts, ...action.payload.posts.filter(p => !state.posts.some(e => e.objectId === p.objectId))]
            };
        case 'INITIAL_LOAD':
            return { ...state, ...action.payload }
        case 'SEARCH':
            return action.payload;
        default:
            return state;
    }
};

const windowEvents = ['scroll', 'resize'];

const loadingStep = 1;

export default function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [blogControl, dispatch] = useReducer(blogControlReducer, {
        posts: [],
        skip: 0,
        count: 0,
        loading: true,
        error: false,
        hadQuery: false
    });

    const hasMore = blogControl.skip + loadingStep < blogControl.count;

    const searchFor = addSearch(searchParams.get('search'));

    const skip = !searchFor && blogControl.hadQuery ? 0 : blogControl.skip;

    const scrollToTop = !searchFor && blogControl.hadQuery;

    if (scrollToTop) {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        if (document.body.scrollHeight < document.documentElement.clientHeight && hasMore) {
            dispatch({ type: 'SCROLL' });
        }
    }, [blogControl.posts, hasMore]);

    const onScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if ((Math.abs(scrollHeight - clientHeight - scrollTop) < 1 && hasMore && !blogControl.loading)
            || (document.body.scrollHeight < clientHeight && hasMore)) {

            dispatch({ type: 'SCROLL' });
        }

    }, [blogControl.loading, hasMore]);

    useEffect(() => {

        postService.getPosts(loadingStep, skip, searchFor)
            .then(result => {

                dispatch({
                    type: skip === 0 ? 'INITIAL_LOAD' : 'LOAD_POSTS',
                    payload: {
                        posts: result.results,
                        count: result.count,
                        hadQuery: searchFor ? true : false,
                        loading: false,
                        skip
                    }
                });

            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: 'ERROR' });
            });

    }, [skip, searchFor, searchParams]);

    useEffect(() => {
        windowEvents.forEach(e => window.addEventListener(e, onScroll));
        return () => windowEvents.forEach(e => window.removeEventListener(e, onScroll));
    }, [onScroll]);

    const onSearch = useCallback((searchData) => {

        const hasKeys = Object.keys(searchData).length > 0;

        if ((!searchParams.get('search') && !hasKeys)
            || (searchParams.get('search') === JSON.stringify(searchData))) {
            return;
        }

        dispatch({
            type: 'SEARCH',
            payload: { skip: 0, posts: [], loading: true }
        });

        window.scrollTo({ top: 0, behavior: 'auto' });

        setSearchParams(hasKeys ? `?search=${encodeObject(searchData)}` : '');
    }, [searchParams, setSearchParams]);

    const hasAuthorSearch = !!JSON.parse(searchParams.get('search'))?.author;

    const addSearchParams = (hasAuthorSearch && blogControl.posts.length > 0)
        ? { 'author': `${blogControl.posts[0].author.firstName} ${blogControl.posts[0].author.lastName}` }
        : null;

    return (
        <div className="wrap full-wrap">

            <SearchBar
                onSearch={onSearch}
                searchFor={'title'}
                addSearch={addSearchParams}
            />

            {blogControl.error && <Error error={'Failed to fetch'} />}

            {blogControl.posts.length === 0 && !blogControl.loading && !blogControl.error && <Error error={'No posts for this search'} />}

            {blogControl.posts.length > 0 && !scrollToTop
                && blogControl.posts.map(post => <BlogItem key={post.objectId} post={post} onSearch={onSearch} />)}

            {(blogControl.loading || scrollToTop) && <Skeleton isBlog={true} />}

        </div>
    );
} 