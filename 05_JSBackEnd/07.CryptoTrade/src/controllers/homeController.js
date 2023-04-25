exports.getHomePage = (req, res) => {
    res.render('home');
}

exports.get404 = (req, res) => {
    res.render('404');
}