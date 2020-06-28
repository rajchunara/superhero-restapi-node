const superheroService = require("../services/superheroService");

const superheroController = async (req, res, next) => {
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

module.exports = {
  superheroController,
};
