import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import * as postService from '../../service/post';
import Spinner from '../spinner/Spinner';

export default function Post() {
    const { postId } = useParams('postId');
    const [post, setPost] = useState(null);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        postService.getPostById(postId)
            .then((result) => {
                console.log(result);
                setPost(result);
            })
            .catch(error => {
                console.log(error);
            });
    }, [postId]);


    return (
        <div className="wrap full-wrap post">

            {!post
                ? <Spinner />
                : <>
                    <article className="post has-post-thumbnail">
                        <span className="post-image details">
                            <img src={post.imageUrl} alt="" />
                        </span>
                        <div className="inner">
                            <h1 className="entry-title">{post.title}</h1>
                            <ul className="meta top">
                                <li className="time">
                                    <time className="post-date updated" dateTime={new Date(post.createdAt)}>{new Date(post.createdAt).toDateString()}</time>
                                </li>
                                <li className="comments post-tags">
                                    <a href="#comments">0 Comments</a>
                                </li>
                                <li className="likes post-tags">
                                    <span>0 Likes</span>
                                </li>
                                <li className="author-m post-tags">
                                    <a href="#author">By {post.author.firstName} {post.author.lastName}</a>
                                </li>
                            </ul>
                            <div className="post-content">

                                {post.text.split('\n').map((el, i) => <p key={i}>{el}</p>)}

                            </div>

                            {user && user.objectId !== post.author.objectId &&
                                <div className="user-controls">
                                    <button className="button small blue"><i className="fa-solid fa-thumbs-up" /></button>
                                    <a href="#respond" className="button small blue">Comment</a>
                                </div>
                            }

                            {user && user.objectId === post.author.objectId &&
                                <div className="author-controls">
                                    <a href="#" className="button small green">Edit</a>
                                    <button className="button small red">Delete</button>
                                </div>
                            }

                        </div>
                    </article>
                    <article id="author" className="author-wrap">
                        <span className="author-avatar"><img alt="author" src={post.author.imageUrl} className="avatar avatar-200 photo" height="200" width="200" /></span>
                        <div className="author-bio">
                            <h4><a href="blog.html" title={`Posts from ${post.author.firstName} ${post.author.lastName}`}>{post.author.firstName} {post.author.lastName}</a></h4>
                            <p>{post.author.description}</p>
                        </div>
                    </article>
                    <div className="comments-wrapper">
                        <div id="comments" className="inner">
                            <div className="comments-inner">
                                <h3 id="respond-title">Comments (0)</h3>
                            </div>
                            <div className="comments">
                                <blockquote>
                                    <p>There are always two people in every picture: the photographer and the
                                        viewer.<cite>Ansel Adams</cite></p>
                                    <span>Edited:</span>
                                    <button className="button small green">Edit</button>
                                    <button className="button small red">Delete</button>
                                </blockquote>
                            </div>
                            <div id="respond" className="comment-respond">
                                <h3 id="reply-title" className="comment-reply-title">Leave a comment <small><a rel="nofollow" id="cancel-comment-reply-link" href="#respond" style={{ display: 'none' }}>Cancel
                                    reply</a></small></h3>
                                <form>
                                    <label htmlFor="comment">Comment</label><textarea id="comment" name="comment" cols={45} rows={8} aria-required="true" placeholder="Comment" defaultValue={""} />
                                    <div>
                                        <p className="form-submit"><button className="button red">Cancel</button></p>
                                        <p className="form-submit"><button type='submit' className="button green">Post Comment</button></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    );
}