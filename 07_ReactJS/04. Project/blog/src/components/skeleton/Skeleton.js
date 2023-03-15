import './Skeleton.css';

export default function Skeleton({ isBlog }) {
    return (
        <div className="card is-loading" style={isBlog ? { maxWidth: 960, margin: '3em auto', padding: 0 } : {}}>
            <div className="card is-loading-image"></div>
            <div className="is-loading-content">
                <div className='div1'></div>
                <div className='div2'></div>
                <p></p>
                <p style={isBlog ? { width: '20%', margin: '0 auto', height: '60px'} : {}}></p>
            </div>
        </div>
    );
}