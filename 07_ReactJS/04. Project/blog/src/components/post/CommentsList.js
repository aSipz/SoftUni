export default function CommentsList() {
    return (
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
    );
}