import './Skeleton.css';

export default function Skeleton() {
    return (
        <div className="card is-loading">
            <div className="card is-loading-image"></div>
            <div className="is-loading-content">
                <h2></h2>
                <h3></h3>
                <p></p>
                <p></p>
            </div>
        </div>
    );
}