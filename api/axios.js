const axios = require('axios');
const instance = axios.create();

instance.interceptors.request.use(function (config) {
    config.headers['X-RapidAPI-Host'] = 'movies-tvshows-data-imdb.p.rapidapi.com';
    config.headers['X-RapidAPI-Key'] = process.env.IMDB_KEY;

    return config;
}, function (error) {
    return Promise.reject(error);
});

module.exports = instance;