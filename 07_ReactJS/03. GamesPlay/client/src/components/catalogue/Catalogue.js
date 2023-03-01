import { useEffect, useState } from 'react';
import * as gameService from '../../service/gameService';
import Game from './Game';

export default function Catalogue() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0
                ? games.map(game => <Game key={game._id} game={game} />)
                : <h3 className="no-articles">No articles yet</h3>}

        </section>
    );
}