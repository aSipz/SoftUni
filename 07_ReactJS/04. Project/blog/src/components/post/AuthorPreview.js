export default function AuthorPreview({author}) {
    return (
        <article id="author" className="author-wrap">
            <span className="author-avatar"><img alt="author" src={author.imageUrl} className="avatar avatar-200 photo" /></span>
            <div className="author-bio">
                <h4><a href="blog.html" title={`Posts by ${author.firstName} ${author.lastName}`}>{author.firstName} {author.lastName}</a></h4>
                <p>{author.description}</p>
            </div>
        </article>
    );
}