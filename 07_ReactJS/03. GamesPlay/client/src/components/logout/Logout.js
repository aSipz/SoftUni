import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import * as userService from '../../service/userService';


export default function Logout() {
    const { user, userLogout } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        userService.logout(user)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(err => console.log(err));
    });

    return null;
}