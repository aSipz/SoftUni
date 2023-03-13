import './Skeleton.css';

export default function Skeleton() {
    return (
        <div className="card is-loading">
            <div className="card is-loading-image"></div>
            <div className="is-loading-content">
                <div className='div1'></div>
                <div className='div2'></div>
                <p></p>
                <p></p>
            </div>
        </div>
    );
}