module.exports = function filmSearchValidator(req, res, next) {
    if (!req.query.title) {
        res.status(400).send({ success: false, message: 'You must specify a search query.' });
    }
    next();
}