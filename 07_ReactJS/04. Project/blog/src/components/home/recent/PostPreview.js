import { Link } from "react-router-dom";

export default function PostPreview({ post }) {
    return (
        <article className="home-sticky-post post has-post-thumbnail sticky">
            <span className="post-image recent">
                <Link to={`/posts/${post.objectId}/details`}>
                    <img src={post.picture.url} className="attachment-sticky size-sticky" alt="post" />
                </Link>
            </span>
            <div className="inner">
                <h3 className="entry-title">
                    <Link to={`/posts/${post.objectId}/details`}>{post.title}</Link>
                </h3>
                <ul className="meta top">
                    <li className="time">
                        <time className="post-date created" dateTime={post.createdAt}>{new Date(post.createdAt).toDateString()}</time>
                    </li>
                </ul>
            </div>
        </article>
    );
}