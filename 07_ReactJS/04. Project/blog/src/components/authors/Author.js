import styles from './Author.module.css';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchAuthor } from '../../utils/serviceUtils';
import { AuthContext } from '../../contexts/AuthContext';

export default function Author({ author, onSendMsgClick }) {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

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
                        {user && user.objectId !== author.objectId &&
                            <button className={`button green ${styles['author_btn']}`} title={''} onClick={onSendMsgClick.bind(null, author)}>Send Message</button>
                        }
                    </div>

                </div>

            </div>
        </article>
    )
}