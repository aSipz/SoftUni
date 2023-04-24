exports.errorHandler = (err, req, res, next) => {
    console.log(err);
    res.render('404', { error: err });
};