import { useState, useEffect } from 'react';
import DeleteUser from "./components/DeleteUser";
import Details from "./components/Details";
import EditUser from "./components/EditUser";
import UserSection from "./components/UserSection";

export default function Main() {
    const [userAction, setUserAction] = useState();
    const [user, setUserId] = useState();

    return (
        <main className="main">

            <UserSection userAction={{setUserAction, setUserId}} />

            {/* <!-- User details component  --> */}
            {userAction === 'details' ? <Details user={{...user, setUserAction}} onClose={onClose}/> : null}


            {/* <!-- Create/Edit Form component  --> */}
            {userAction === 'add' || userAction === 'edit' ? <EditUser user={user} onClose={onClose}/> : null}



            {/* <!-- Delete user component  --> */}
            {userAction === 'delete' ? <DeleteUser user={user} onClose={onClose}/>  : null}
            

        </main>
    );

    function onClose() {
        setUserAction('');
    }
}