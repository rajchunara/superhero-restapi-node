const superheroService = require('../services/superheroService');

const superheroControllerWithId = async (req, res, next) => {
  const heroId = req.params.heroId;
  //   console.log(heroId);
  try {
    const response = await superheroService.getSuperHeroById(heroId);
    res.status(200).json(response.res.data);
    // console.log(response.res.data);
    next();
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};

const superheroControllerWithName = async (req, res, next) => {
  const heroName = req.params.name;
  //   console.log(heroId);
  try {
    const response = await superheroService.getSuperHeroByName(heroName);
    res.status(200).json(response.res.data);
    // console.log(response.res.data);
    next();
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};

module.exports = {
  superheroControllerWithId,
  superheroControllerWithName,
};
