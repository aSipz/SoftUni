export default function Hero() {
    return (
        <div className="hero" >
            <img src="images/lead.jpg" alt="hero" />
            <div className="hero-inner">
                <div className="inner">
                    <h1><span className="border border-top border-bottom">blog</span></h1>
                </div>
            </div>
            <a className="more-arrow" href="#content"><i className="fa fa-chevron-down" /></a>
        </div>
    );
}