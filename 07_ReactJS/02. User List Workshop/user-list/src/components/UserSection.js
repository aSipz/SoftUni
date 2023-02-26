import { useState } from 'react';
import AddBtn from "./AddBtn";
import Overlap from "./Overlap";
import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";

export default function UserSection(props) {
    const [status, setStatus] = useState('loading');

    function addUserHandler() {
        props.userAction('add');
    }

    return (
        <section className="card users-container">
            {/* <!-- Search bar component --> */}

            <Search />

            {/* <!-- Table component --> */}
            <div className="table-wrapper">

                {/* <!-- Overlap components  --> */}

                {status !== 'success' ? <Overlap status={status} /> : null}

                <Table
                    userAction={{...props.userAction}}
                    status={setStatus}
                />

            </div>

            {/* <!-- New user button  --> */}
            <AddBtn onClick={addUserHandler} />

            {/* <!-- Pagination component  --> */}
            <Pagination />
        </section >
    );
}