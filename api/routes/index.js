const express = require('express');
const router = express.Router();

const filmSearchController = require('../controllers/film.search');
const filmDetailsController = require('../controllers/film.details');

router.get('/api/film/search', filmSearchController);
router.get('/api/film/details', filmDetailsController);

module.exports = router;