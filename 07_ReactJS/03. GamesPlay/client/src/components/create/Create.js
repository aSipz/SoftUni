import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as gameService from '../../service/gameService';

export default function Create() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    function changeHandler(e) {
        setFormValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        gameService.create(formValues)
            .then(navigate('/'));
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
                        value="Create Game"
                        disabled={Object.values(formValues).some(x => !x)}
                    />
                </div>
            </form>
        </section>
    );
}