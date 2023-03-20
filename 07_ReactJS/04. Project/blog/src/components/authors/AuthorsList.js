import { useEffect, useState } from 'react';

import Spinner from '../spinner/Spinner';

import * as userService from '../../service/user';
import Author from './Author';

export default function AuthorsList() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        userService.getAllAuthors()
            .then(result => {
                setAuthors(result.results);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
            
    }, []);

    return (
        <section className="main">

            {loading && <Spinner />}

            {authors.map(a => <Author key={a.objectId} author={a} />)}

        </section>
    );
}