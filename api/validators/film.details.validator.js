module.exports = function filmDetailsValidator(req, res, next) {
    // Check if supplied movie ID follows convention from IMDB db
    const idRegex = /^tt[0-9]+$/;
    if (!idRegex.test(req.params.movieId)) {
        res.status(400).send({ success: false, message: 'Valid movie ID must be provided.' });
    }

    next();
}