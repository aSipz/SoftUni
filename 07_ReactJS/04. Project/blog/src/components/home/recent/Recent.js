import { useEffect, useState } from "react";

import * as postService from '../../../service/post';
import Error from "../../error/Error";
import PostPreview from "./PostPreview";

export default function Recent() {
    const [posts, setPosts] = useState();

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

                {posts === 'error' && <Error error={'Failed to fetch'} />}

                {Array.isArray(posts) && posts.length === 0 && <Error error={'No posts'} />}

                {Array.isArray(posts)
                    && posts.length > 0
                    && posts.map(post => <PostPreview key={post.objectId} post={post} />)}

            </div>
        </div>
    );
}