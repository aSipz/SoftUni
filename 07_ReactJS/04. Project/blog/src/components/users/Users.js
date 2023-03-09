import SearchBar from '../searchBar/SearchBar';
import './Users.css'

export default function Users() {
    return (
        <section className="main">
            <article className="post page">
                <div className="inner">
                    <h1>Users</h1>

                    <SearchBar />

                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    First name
                                    <i className="fa-solid fa-arrow-down active" />
                                </th>
                                <th>
                                    Last name
                                    <i className="fa-solid fa-arrow-up" />
                                </th>
                                <th>
                                    Username
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Created
                                </th>
                                <th>
                                    Author
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table row component */}
                            <tr>
                                <td>
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Peter's profile" className="image" />
                                </td>
                                <td>Peter</td>
                                <td>Johnson</td>
                                <td>peter@abv.bg</td>
                                <td>0812345678</td>
                                <td>June 28, 2022</td>
                                <td className="actions">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pagination position">
                        <div className="limits">
                            <span>Users per page:</span>
                            <select name="limit" className="limit" value={5}>
                                <option value={5}>5</option>
                                <option value={5}>10</option>
                                <option value={5}>15</option>
                                <option value={5}>20</option>
                            </select>
                        </div>
                        <p className="pages">1 - 1 of 1</p>
                        <div className="actions">
                            <button className="btn" title="First Page">
                                <i className="fa-solid fa-angles-left" />
                            </button>
                            <button className="btn" title="Previous Page">
                                <i className="fa-solid fa-angle-left" />
                            </button>
                            <button className="btn" title="Next Page">
                                <i className="fa-solid fa-angle-right" />
                            </button>
                            <button className="btn" title="Last Page">
                                <i className="fa-solid fa-angles-right" />
                            </button>
                        </div>
                        <button className="user-confirm">Confirm</button>
                    </div>
                </div>
            </article>
        </section>
    );
}