import './Error.css';

export default function Error({error}) {
    return (
        <div className="fetch-error">
            <i className="fa-solid fa-circle-exclamation"></i>
            <h2>{error}</h2>
        </div>
    );
}