function sessionChecker(req, res, next) {
    if (req.session.user && req.cookies['connect.sid']) {
        res.send('redirect-middle')
        // res.redirect('/profile');
    } else {
        next();
    }
};

module.exports = {
    sessionChecker: sessionChecker
}