exports.getHomePage = async (req, res) => {
    try {
        
        res.render('home');
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }

}

exports.get404 = (req, res) => {
    res.render('404');
}