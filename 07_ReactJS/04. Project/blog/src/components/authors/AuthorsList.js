import { useContext, useEffect, useState } from 'react';

import Author from './Author';
import Spinner from '../spinner/Spinner';
import Overlay from '../overlay/Overlay';
import useOverlay from '../../hooks/useOverlay';
import { AuthContext } from '../../contexts/AuthContext';

import { userAction } from '../../const/actions';
import * as userService from '../../service/user';

export default function AuthorsList() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [receiver, setReceiver] = useState();
    const [action, setAction] = useOverlay();

    const { userLogout } = useContext(AuthContext);

    useEffect(() => {

        userService.getAllAuthors()
            .then(result => {
                setAuthors(result.results);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                if (error.message === 'Invalid session token') {
                    userLogout();
                };
                setLoading(false);
            });

    }, [userLogout]);

    const onSendMsgClick = (author, e) => {
        e.stopPropagation();
        setAction(userAction.sendMsg);
        setReceiver({ ...author });
    }

    const confirmAction = {
        action: () => {
            setLoading(state => !state);
        },
        text: receiver ? `Message ${receiver.firstName} ${receiver.lastName}` : '',
        receiver
    }

    return (
        <section className="main">

            {action && <Overlay action={action} setAction={setAction} confirmAction={confirmAction} />}

            {loading && <Spinner />}

            {authors.map(a => <Author key={a.objectId} author={a} onSendMsgClick={onSendMsgClick} />)}

        </section>
    );
}