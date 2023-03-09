import SearchBar from "../searchBar/SearchBar";

export default function Blog() {
    return (
        <div className="wrap full-wrap">

            <SearchBar />

            <div className="main-wrap">
                <section className="main main-archive">
                    <div className="loop">
                        <article className="post format-image has-post-thumbnail post_format-post-format-image">
                            <span className="post-image">
                                <a href="#" title="Camper Van Fun">
                                    <img width={916} height={611} src="images/Camper-1.jpg" className="attachment-desktop size-desktop" alt="" />
                                </a>
                            </span>
                            <div className="inner">
                                <h2 className="entry-title">
                                    <a href="#" title="Camper Van Fun">
                                        Camper Van Fun </a>
                                </h2>
                                <ul className="meta top">
                                    <li className="time">
                                        <time className="post-date updated" dateTime="2014-10-06">October 6, 2014</time>
                                    </li>
                                    <li className="comments post-tags">
                                        <span>0 Comments</span>
                                    </li>
                                    <li className="likes post-tags">
                                        <span>0 Likes</span>
                                    </li>
                                    <li className="author-m post-tags">
                                        <a href title="Posts by Clare Smith">By Clare Smith</a>
                                    </li>
                                </ul>
                                <div className="post-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at risus at lacus
                                        laoreet
                                        mollis sed id elit. Integer bibendum lobortis velit, eleifend commodo dui
                                        facilisis nec.
                                        Aliquam mi sapien, ultrices a ultrices non, sodales ut diam. Fusce semper risus
                                        eu magna
                                        placerat pulvinar. Nullam ac odio non ligula semper auctor. Fusce semper risus
                                        eu magna
                                        placerat pulvinar. </p>
                                    <a href="#" className="more-link">Read More</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    );
}