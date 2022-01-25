const axios = require('../axios');
const { mockData } = require('../mockData/filmDetails.mockdata');

module.exports = async function filmDetailsController(req, res) {
    try {
        var apiResponse = await axios.get('https://movies-tvshows-data-imdb.p.rapidapi.com/',
            { params: { type: 'get-movie-details', imdb: req.params.movieId } });
        // var apiResponse = mockData;
        // console.log(apiResponse)
        if (apiResponse?.data?.status === 'OK') {
            res.status(200).send({ success: true, details: apiResponse.data });
        } else {
            throw new Error("API error");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Error' });
    }
}