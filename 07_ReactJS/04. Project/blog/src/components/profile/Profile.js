export default function Profile() {
    return (
        <section className="main">
            <article className="post page">
                <div className="inner">
                    <h1>My profile</h1>
                    <div className="post-content">
                        <p>You can contact me using the following form :)</p>
                        <form id="fh5co_contact_form">
                            <p>
                                <input type="text" name="name" defaultValue size={40} placeholder="Name*" />
                            </p>
                            <p>
                                <input type="email" name="email" defaultValue size={40} placeholder="Email*" />
                            </p>
                            <p>
                                <textarea name="message" cols={40} rows={10} placeholder="Your Message" defaultValue={""} />
                            </p>
                            <p className="form-submit">
                                <button type='submit'>Send</button></p>
                        </form>
                    </div>
                </div>
            </article>
        </section>
    );
}