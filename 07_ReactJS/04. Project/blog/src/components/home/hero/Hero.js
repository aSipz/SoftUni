export default function Hero() {
    return (
        <div className="hero" >
            <img src="images/lead.jpg" alt="hero" />
            <div className="hero-inner">
                <div className="inner">
                    <h1><span className="border border-top border-bottom">itsy</span></h1>
                    <div className="hero-line-one" />
                    <div className="hero-line-two"><span className="border border-bottom"><a href="https://freehtml5.co" style={{ color: '#FFF' }}>by FreeHTML5</a></span></div>
                </div>
                
            </div>
            <a className="more-arrow" href="#content"><i className="fa fa-chevron-down" /></a>
        </div>
    );
}