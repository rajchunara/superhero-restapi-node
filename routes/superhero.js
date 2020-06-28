const express = require("express");
const superhero = require("../controllers/superheroController");

const superheroRouter = express.Router();

//Endpoint http://localhost:5000/superhero/id
superheroRouter.get("/:heroId", superhero.superheroController);

module.exports = superheroRouter;
