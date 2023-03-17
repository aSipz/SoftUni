import { useCallback, useEffect, useReducer } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import SearchBar from '../searchBar/SearchBar';
import Error from '../error/Error';
import BlogItem from './BlogItem';
import Skeleton from '../skeleton/Skeleton';

import * as postService from '../../service/post';
import { addSearch, encodeObject } from '../../utils/serviceUtils';

const loadingStep = 1;

const blogControlReducer = (state, action) => {
    switch (action.type) {
        case 'SCROLL':
            return { ...state, loading: true, skip: state.skip + loadingStep };
        case 'ERROR':
            return { ...state, loading: false, error: true };
        case 'LOAD_POSTS':
            return {
                ...state,
                posts: [...state.posts, ...action.payload.posts.filter(p => !state.posts.some(e => e.objectId === p.objectId))],
                count: action.payload.count,
                loading: false
            };
        case 'SEARCH':
            return action.payload;
        default:
            return state;
    }
};

export default function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [blogControl, dispatch] = useReducer(blogControlReducer, {
        posts: [],
        skip: 0,
        count: 0,
        loading: true,
        error: false
    });

    const { search } = useLocation();



    const hasMore = blogControl.skip + loadingStep < blogControl.count;

    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    //     console.log('search');
    //     dispatch({
    //         type: 'SEARCH',
    //         payload: { skip: 0, posts: [], loading: true, count: 0, error: false }
    //     });

    // }, [search]);

    // useEffect(() => {

    //     console.log(search);

    //     if (search === '') {
    //         dispatch({
    //             type: 'SEARCH',
    //             payload: { skip: 0, posts: [], loading: true }
    //         });

    //         window.scrollTo({ top: 0, behavior: 'auto' });
    //     }



    //     // setSearchParams('');

    // }, [search])

    const onScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight && hasMore && !blogControl.loading) {

            dispatch({ type: 'SCROLL' });
        }

    }, [blogControl.loading, hasMore]);



    useEffect(() => {
        // иф
        const searchFor = addSearch(searchParams.get('search'));
        postService.getPosts(loadingStep, blogControl.skip, searchFor)
            .then(result => {

                dispatch({
                    type: 'LOAD_POSTS',
                    payload: { posts: result.results, count: result.count }
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: 'ERROR'
                });
            });

    }, [blogControl.skip, searchParams]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [onScroll]);

    const onSearch = (searchData) => {

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
    };

    const hasAuthorSearch = !!JSON.parse(searchParams.get('search'))?.author;

    const addSearchParams = (hasAuthorSearch && blogControl.posts.length > 0)
        ? { 'author': `${blogControl.posts[0].author.firstName} ${blogControl.posts[0].author.lastName}` }
        : null;

    return (
        <div className="wrap full-wrap">

            <SearchBar
                searchParams={searchParams}
                onSearch={onSearch}
                searchFor={'title'}
                addSearch={addSearchParams}
            />

            {blogControl.error && <Error error={'Failed to fetch'} />}

            {blogControl.posts.length === 0 && !blogControl.loading && <Error error={'No posts for this search'} />}

            {blogControl.posts.length > 0
                && blogControl.posts.map(post => <BlogItem key={post.objectId} post={post} onSearch={onSearch} />)}

            {blogControl.loading && <Skeleton isBlog={true} />}

        </div>
    );
}