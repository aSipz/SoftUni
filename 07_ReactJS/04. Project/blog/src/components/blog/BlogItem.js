import { Link, useSearchParams } from 'react-router-dom';

export default function BlogItem({ post, onSearch }) {
    const [searchParams] = useSearchParams();
    
    const authorSearch = Object.assign({}, JSON.parse(searchParams.get('search')), { 'author': post.author.objectId });

    return (
        <article className="post format-image has-post-thumbnail post_format-post-format-image">
            <span className="post-image">
                <Link to={`/posts/${post.objectId}/details`} title={post.title}>
                    <img width="920" height="620" src={post.imageUrl} className="attachment-desktop size-desktop" alt="" />
                </Link>
            </span>
            <div className="inner">
                <h2 className="entry-title">
                    <Link to={`/posts/${post.objectId}/details`}>
                        {post.title} </Link>
                </h2>
                <ul className="meta top">
                    <li className="time">
                        <time className="post-date updated" dateTime={post.createdAt}>{new Date(post.createdAt).toDateString()}</time>
                    </li>
                    <li className="author-m post-tags">
                        <button
                            title={`Posts by ${post.author.firstName} ${post.author.lastName}`}
                            onClick={onSearch.bind(null, authorSearch)}>
                            By {post.author.firstName} {post.author.lastName}
                        </button>
                    </li>
                </ul>
                <div className="post-content">
                    <p>{post.text.split('\n').shift()}</p>
                    <Link to={`/posts/${post.objectId}/details`} className="more-link">Read More</Link>
                </div>
            </div>
        </article>
    );
}