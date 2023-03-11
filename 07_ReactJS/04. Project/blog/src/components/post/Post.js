import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../contexts/LoadingContext";
import Skeleton from "../skeleton/Skeleton";

export default function Post() {
    const postId = useParams('postId');
    const [post, setPost] = useState(null);

    const { changeLoading } = useContext(LoadingContext);

    useEffect(() => {
        debugger
        setTimeout(() => {
            setPost({});
        }, 3000);
    }, []);

    if (post === null) {
        return <Skeleton />
    }

    return (
        <div className="wrap full-wrap post">
            <article className="post has-post-thumbnail">
                <span className="post-image">
                    <img src="images/Lollipop.jpg" alt="" />
                </span>
                <div className="inner">
                    <h1 className="entry-title">The Lollipop</h1>
                    <ul className="meta top">
                        <li className="time">
                            <time className="post-date updated" dateTime="2014-10-06">October 6, 2014</time>
                        </li>
                        <li className="comments post-tags">
                            <a href="#comments">0 Comments</a>
                        </li>
                        <li className="likes post-tags">
                            <span>0 Likes</span>
                        </li>
                        <li className="author-m post-tags">
                            <a href="#author">By Clare Smith</a>
                        </li>
                    </ul>
                    <div className="post-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at risus at lacus laoreet
                            mollis sed id elit. Integer bibendum lobortis velit, eleifend commodo dui facilisis nec.
                            Aliquam mi sapien, ultrices a ultrices non, sodales ut diam. Fusce semper risus eu magna
                            placerat pulvinar. Nullam ac odio non ligula semper auctor. Fusce semper risus eu magna
                            placerat pulvinar.</p>
                        <p>Nullam ac odio non ligula semper auctor. Fusce semper risus eu magna placerat pulvinar.
                            Nullam ac odio non ligula semper auctor. Aenean at dui dui, non scelerisque nisi. Morbi
                            ullamcorper dapibus nisl, ullamcorper fringilla eros pulvinar et.</p>
                        <p>Nulla rhoncus elementum rhoncus. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Pellentesque a erat velit, venenatis porttitor mauris.
                        </p>
                        <p>Fusce semper risus eu magna placerat pulvinar. Nullam ac odio non ligula semper auctor. Fusce
                            semper risus eu magna placerat pulvinar. Nullam ac odio non ligula semper auctor. Fusce
                            semper risus eu magna placerat pulvinar. Nullam ac odio non ligula semper auctor. Aenean at
                            dui dui, non scelerisque nisi. Morbi ullamcorper dapibus nisl, ullamcorper fringilla eros
                            pulvinar et. Nulla rhoncus elementum rhoncus. Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames ac turpis egestas. Pellentesque a erat velit, venenatis
                            porttitor mauris.</p>
                    </div>
                    <div className="user-controls">
                        <button className="button small blue"><i className="fa-solid fa-thumbs-up" /></button>
                        <a href="#respond" className="button small blue">Comment</a>
                    </div>
                    <div className="author-controls">
                        <a href="#" className="button small green">Edit</a>
                        <button className="button small red">Delete</button>
                    </div>
                </div>
            </article>
            <article id="author" className="author-wrap">
                <span className="author-avatar"><img alt="" src="images/about-me.jpg" className="avatar avatar-200 photo" height={200} width={200} /></span>
                <div className="author-bio">
                    <h4><a href="blog.html">Clare Smith</a></h4>
                    <p>My name is Clare and I'm a serial blogger. I love life and more than anything in the whole wide
                        world, I love taking photographs. Oh and did I mention, I quite like blogging?</p>
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
        </div>
    );
}