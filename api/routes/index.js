const express = require('express');
const router = express.Router();

const filmSearchValidator = require('../validators/film.search.validator');
const filmDetailsValidator = require('../validators/film.details.validator');

const filmSearchController = require('../controllers/film.search.controller');
const filmDetailsController = require('../controllers/film.details.controller');

router.get('/api/film/search', filmSearchValidator, filmSearchController);
router.get('/api/film/details/:movieId', filmDetailsValidator, filmDetailsController);

module.exports = router;