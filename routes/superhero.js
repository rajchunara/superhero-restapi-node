const express = require('express');
const superhero = require('../controllers/superheroController');

const superheroRouter = express.Router();

//Endpoint app-url/superhero/id
//Endpoint http://localhost:5000/superhero/id
superheroRouter.get('/:heroId', superhero.superheroControllerWithId);
superheroRouter.get('/search/:name', superhero.superheroControllerWithName);

module.exports = superheroRouter;
