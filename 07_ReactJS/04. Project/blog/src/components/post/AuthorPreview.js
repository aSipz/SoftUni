import { Link } from 'react-router-dom';

import { searchAuthor } from '../../utils/serviceUtils';

export default function AuthorPreview({ author }) {
    if (!author) {
        return (
            <article id="author" className="author-wrap">
                <p>Deleted user</p>
            </article>
        )
    }

    const search = '/posts?search=' + searchAuthor(author.objectId);

    return (
        <article id="author" className="author-wrap">
            <span className="author-avatar"><img alt="author" src={author.picture.url} className="avatar avatar-200 photo" /></span>
            <div className="author-bio">
                <h4><Link to={search} title={`Posts by ${author.firstName} ${author.lastName}`}>{author.firstName} {author.lastName}</Link></h4>
                <p>{author.description}</p>
            </div>
        </article>
    );
}