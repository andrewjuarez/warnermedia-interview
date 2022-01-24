const axios = require('../axios');

module.exports = async function filmSearchController(req, res) {
    try {
        if (!req.query.title) {
            res.status(400).send({ success: false, message: 'You must specify a search query.' });
        }

        var apiResponse = await axios.get('https://movies-tvshows-data-imdb.p.rapidapi.com/',
            { params: { type: 'get-movies-by-title', title: req.query.title } });
        console.log(apiResponse.data)
        if (apiResponse?.data?.status === 'OK') {
            res.status(200).send({ success: true, movies: apiResponse.data.movie_results });
        } else {
            throw new Error("API error");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Error' });
    }
}