export default function Recent() {
    return (
        <div className="home-sticky" id="content">
            <h2 className="home-sticky-title">Recent posts</h2>
            <div className="sticky-inner">
                <article className="home-sticky-post post has-post-thumbnail sticky">
                    <span className="post-image">
                        <a href="#">
                            <img width={502} height={502} src="images/Lollipop-502x502.jpg" className="attachment-sticky size-sticky" alt="" />
                        </a>
                    </span>
                    <div className="inner">
                        <h3 className="entry-title">
                            <a href="#">The Lollipop</a>
                        </h3>
                        <ul className="meta top">
                            <li className="time">
                                <a href="#">
                                    <time className="post-date updated" dateTime="2015-02-02">February 2, 2015</time>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="home-sticky-post post has-post-thumbnail sticky ">
                    <span className="post-image">
                        <a href="#">
                            <img width={502} height={502} src="images/Apothecary.jpg" className="attachment-sticky size-sticky" alt="" />
                        </a>
                    </span>
                    <div className="inner">
                        <h3 className="entry-title">
                            <a href="#">The Apothecary</a>
                        </h3>
                        <ul className="meta top">
                            <li className="time">
                                <a href="#" title="The Apothecary">
                                    <time className="post-date updated" dateTime="2015-01-31">January 31, 2015</time>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="home-sticky-post post has-post-thumbnail sticky">
                    <span className="post-image">
                        <a href="#">
                            <img width={502} height={502} src="images/Flowers.jpg" className="attachment-sticky size-sticky" alt="" />
                        </a>
                    </span>
                    <div className="inner">
                        <h3 className="entry-title">
                            <a href="#">The Flowers</a>
                        </h3>
                        <ul className="meta top">
                            <li className="time">
                                <a href="#">
                                    <time className="post-date updated" dateTime="2015-01-25">January 25, 2015</time>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="home-sticky-post post has-post-thumbnail sticky ">
                    <span className="post-image">
                        <a href="#"><img width={502} height={502} src="images/Sun.jpg" className="attachment-sticky size-sticky" alt="" />
                        </a>
                    </span>
                    <div className="inner">
                        <h3 className="entry-title">
                            <a href="#">The Sunny Day</a>
                        </h3>
                        <ul className="meta top">
                            <li className="time">
                                <a href="#" title="The Sunny Day">
                                    <time className="post-date updated" dateTime="2015-01-21">January 21, 2015</time>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="home-sticky-post post has-post-thumbnail sticky ">
                    <span className="post-image">
                        <a href="#">
                            <img width={502} height={502} src="images/Meeting.jpg" className="attachment-sticky size-sticky" alt="" />
                        </a>
                    </span>
                    <div className="inner">
                        <h3 className="entry-title">
                            <a href="#">The Meeting</a>
                        </h3>
                        <ul className="meta top">
                            <li className="time">
                                <a href="#">
                                    <time className="post-date updated" dateTime="2015-01-02">January 2, 2015</time>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="home-sticky-post post has-post-thumbnail sticky ">
                    <span className="post-image">
                        <a href="#">
                            <img width={502} height={502} src="images/Bridge.jpg" className="attachment-sticky size-sticky" alt="" />
                        </a>
                    </span>
                    <div className="inner">
                        <h3 className="entry-title">
                            <a href="#">The Bridge</a>
                        </h3>
                        <ul className="meta top">
                            <li className="time">
                                <a href="#">
                                    <time className="post-date updated" dateTime="2014-12-31">December 31, 2014</time>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    );
}