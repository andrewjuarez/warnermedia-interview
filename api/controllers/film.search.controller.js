const axios = require('../axios');

module.exports = async function filmSearchController(req, res) {
    try {
        // var apiResponse = await axios.get('https://movies-tvshows-data-imdb.p.rapidapi.com/',
        //     { params: { type: 'get-movies-by-title', title: req.query.title } });
        var apiResponse = {
            data: {
                status: 'OK',
                movie_results: [
                    {
                        "imdb_id": "tt1974203",
                        "title": "Adventures in Odyssey: Escape from the Forbidden Matrix",
                        "year": 2001
                    },
                    {
                        "imdb_id": "tt0109151",
                        "title": "Armitage III: Poly Matrix",
                        "year": 1996
                    },
                    {
                        "imdb_id": "tt0303678",
                        "title": "Armitage: Dual Matrix",
                        "year": 2002
                    },
                    {
                        "imdb_id": "tt4074340",
                        "title": "Elektro Mathematrix",
                        "year": 2016
                    },
                    {
                        "imdb_id": "tt1595473",
                        "title": "The American Matrix - Age Of Deception",
                        "year": 2010
                    },
                    {
                        "imdb_id": "tt0328832",
                        "title": "The Animatrix",
                        "year": 2003
                    }
                ]
            }
        }
        console.log(apiResponse.data)
        if (apiResponse?.data?.status === 'OK') {
            res.status(200).send({ success: true, movies: apiResponse.data.movie_results });
        } else {
            throw new Error("API error");
        }
    } catch (error) {
        if (error?.response?.status === 403) {
            res.status(500).send({ success: false, message: 'API key not found - check IMDB_KEY env variable.' })
        }

        res.status(500).send({ success: false, message: 'Error' });
    }
}