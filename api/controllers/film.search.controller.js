const axios = require('../axios');
const { mockData } = require('../mockData/filmSearch.mockdata');

module.exports = async function filmSearchController(req, res) {
    try {
        var apiResponse = await axios.get('https://movies-tvshows-data-imdb.p.rapidapi.com/',
            { params: { type: 'get-movies-by-title', title: req.query.title } });
        // var apiResponse = mockData;
        // console.log(apiResponse.data)
        if (apiResponse?.data?.status === 'OK') {
            res.status(200).send({ success: true, movies: apiResponse.data.movie_results });
        } else {
            throw new Error("API error");
        }
    } catch (error) {
        console.error(error);
        if (error?.response?.status === 403) {
            res.status(500).send({ success: false, message: 'API key not found - check IMDB_KEY env variable.' })
        }

        res.status(500).send({ success: false, message: 'Error' });
    }
}