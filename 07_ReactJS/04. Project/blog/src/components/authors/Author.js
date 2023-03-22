import styles from './Author.module.css';

import { useNavigate } from 'react-router-dom';

import { searchAuthor } from '../../utils/serviceUtils';

export default function Author({ author }) {

    const navigate = useNavigate();

    const search = '/posts?search=' + searchAuthor(author.objectId);

    const onAuthorClick = () => {
        navigate(search);
    }

    return (
        <article className={`post page ${styles.author}`} title={`Posts by ${author.firstName} ${author.lastName}`} onClick={onAuthorClick}>
            <div className={'inner'} >

                <div className={`content ${styles['author_content']}`}>
                    <div className="image-container">
                        <img src={author.imageUrl} alt="avatar" className="image" />
                    </div>
                    <div className="user-details">
                        <h3>{author.firstName} {author.lastName}</h3>
                        <p>About: <strong> {author.description}</strong></p>
                        <p>Author since: <strong> {new Date(author.createdAt).toDateString()}</strong></p>
                    </div>

                </div>

            </div>
        </article>
    )
}