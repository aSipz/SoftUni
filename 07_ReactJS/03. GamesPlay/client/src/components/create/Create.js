import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as gameService from '../../service/gameService';

export default function Create() {
    const { gameId } = useParams();

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        if (gameId) {
            gameService.getById(gameId)
                .then(result => setFormValues(result));
        }
    }, [gameId])

    function changeHandler(e) {
        setFormValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        if (gameId) {
            gameService.update(gameId, formValues)
                .then(navigate('/details/' + gameId))
                .catch(err => console.log(err));
        } else {
            gameService.create(formValues)
                .then(result => navigate('/details/' + result._id))
                .catch(err => console.log(err));
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        value={formValues.title}
                        onChange={changeHandler}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        value={formValues.category}
                        onChange={changeHandler}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        value={formValues.maxLevel}
                        onChange={changeHandler}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        value={formValues.imageUrl}
                        onChange={changeHandler}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={formValues.summary}
                        onChange={changeHandler} />
                    <input
                        className="btn submit"
                        type="submit"
                        value={gameId ? 'Edit game' : 'Create game'}
                        disabled={Object.values(formValues).some(x => !x)}
                    />
                </div>
            </form>
        </section>
    );
}