import { memo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default memo(BlogItem);

function BlogItem({ post, onSearch }) {
    const [searchParams] = useSearchParams();

    const authorSearch = Object.assign({}, JSON.parse(searchParams.get('search')), { 'author': post.author ? post.author.objectId : 'deleted user' });

    return (
        <article className="post format-image has-post-thumbnail post_format-post-format-image">
            <span className="post-image">
                <Link to={`/posts/${post.objectId}/details`} title={post.title}>
                    <img width="920" height="620" src={post.picture.url} className="attachment-desktop size-desktop" alt="post" />
                </Link>
            </span>
            <div className="inner">
                <h2 className="entry-title">
                    <Link to={`/posts/${post.objectId}/details`}>{post.title}</Link>
                </h2>
                <ul className="meta top">
                    <li className="time">
                        <time className="post-date updated" dateTime={post.createdAt}>{new Date(post.createdAt).toDateString()}</time>
                    </li>
                    <li className="author-m post-tags">
                        <button
                            title={post.author ? `Posts by ${post.author.firstName} ${post.author.lastName}` : 'deleted user'}
                            onClick={post.author ? onSearch.bind(null, authorSearch) : undefined}>
                            {post.author ? `By ${post.author.firstName} ${post.author.lastName}` : 'By deleted user'}
                        </button>
                    </li>
                </ul>
                <div className="post-content">
                    <p>{post.text.split('\n').shift().trim()}</p>
                    <Link to={`/posts/${post.objectId}/details`} className="more-link">Read More</Link>
                </div>
            </div>
        </article>
    );
}