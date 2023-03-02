import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from '../../service/userService';


export default function Logout() {

    const navigate = useNavigate();

    useEffect(() => {
        userService.logout()
            .then(response => {
                navigate('/');
            })
            .catch(err => console.log(err));
    });

    return null;
}