import { useEffect, useState } from 'react';

import PostPreview from './PostPreview';
import Spinner from '../../spinner/Spinner';

import * as postService from '../../../service/post';
import Error from '../../error/Error';

export default function Recent() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postService.getRecent()
            .then(result => {
                setPosts(result.results);
            })
            .catch((error) => {
                console.log(error);
                setPosts('error');
            });
    }, []);

    return (
        <div className="home-sticky" id="content">
            <h2 className="home-sticky-title">Recent posts</h2>
            <div className="sticky-inner">

                {posts === null && <Spinner />}

                {posts === 'error' && <Error error={'Failed to fetch'} />}

                {Array.isArray(posts) && posts.length === 0 && <Error error={'No posts'} />}

                {Array.isArray(posts)
                    && posts.length > 0
                    && posts.map(post => <PostPreview key={post.objectId} post={post} />)}

            </div>
        </div>
    );
}