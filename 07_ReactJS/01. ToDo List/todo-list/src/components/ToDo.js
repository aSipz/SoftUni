import { useEffect, useState } from "react";
import Loading from "./Loading";
import ToDoItem from "./ToDoItem";

export default function ToDo() {
    const [toDoList, setToDoList] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        fetchData();

        async function fetchData() {
            const response = await fetch('http://localhost:3030/jsonstore/todo');
            const result = await response.json();
            setToDoList(Object.values(result));
        };
    }, []);

    async function clickHandler(todo) {

        const changed = { ...todo, isCompleted: !todo.isCompleted };

        setChange(change => !change);

        const response = await fetch('http://localhost:3030/jsonstore/todo/' + todo._id, {
            method: 'put',
            headers: { ['Content-Type']: 'application/json' },
            body: JSON.stringify(changed)
        });

        await response.json();

        setToDoList(toDoList.map(e => e._id == todo._id ? changed : e));

        setChange(change => !change);

    }

    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            {!toDoList.length || change
                ? <Loading />
                : null}

            <div className="table-wrapper">

                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {toDoList.length
                            ? toDoList.map(e => <ToDoItem key={e._id} {...e} onClick={clickHandler} />)
                            : null}

                    </tbody>
                </table>
            </div>
        </section>
    );
}