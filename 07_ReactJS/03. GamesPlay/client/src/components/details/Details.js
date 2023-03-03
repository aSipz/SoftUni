import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import * as gameService from '../../service/gameService';
import Comments from './Comments';
import CreateComment from './CreateComments';
import { AuthContext } from '../../contexts/AuthContext';

export default function Details() {
    const { gameId } = useParams();
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getById(gameId)
            .then(result => setGame(result))
            .catch(err => {
                console.log(err);
                navigate('/catalogue');
            });
    }, [gameId, navigate]);

    function gameDeleteHandler() {
        gameService.remove(gameId)
            .then(() => navigate('/catalogue'))
            .catch(err => console.log(err));
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt="gameCover" />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <Comments />
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                {user._id === game._ownerId &&
                    <div className="buttons">
                        <Link to={'/edit/' + gameId} className="button">
                            Edit
                        </Link>
                        <Link className="button" onClick={gameDeleteHandler}>
                            Delete
                        </Link>
                    </div>
                }

            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <CreateComment />
        </section>
    );
}