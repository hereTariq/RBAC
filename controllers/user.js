exports.homePage = (req, res, next) => {
    res.render('index', { title: 'Home Page' });
};
exports.registerPage = (req, res, next) => {
    res.render('register', { title: 'Register' });
};
exports.loginPage = (req, res, next) => {
    res.render('login', { title: 'Login' });
};
