import './SearchBar.css';

export default function SearchBar({ searchParams, setSearchParams }) {

    return (
        <form className="search-form">
            <div className="search-input-container">
                <input type="text" placeholder="Enter search parameters" name="search" />
                <button className="close-btn">
                    <i className="fa-solid fa-xmark" />
                </button>
                <button className="btn" title="Search text">
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </div>
        </form>
    );
}