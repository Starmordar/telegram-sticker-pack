function sessionChecker(req, res, next) {
    if (req.session.user && req.cookies['connect.sid']) {
        res.redirect('/profile');
    } else {
        next();
    }
};

module.exports = {
    sessionChecker: sessionChecker
}