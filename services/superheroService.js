const axios = require('axios');
const config = require('../config/config');
//Configure api key variable from .env file
require('dotenv').config();

const getSuperHeroById = async (id) => {
  //get api key
  const API_KEY = process.env.API_KEY;
  const url = `${config.API_URL + API_KEY}/${id}`;
  try {
    const res = await axios.get(url);
    return {
      res,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const getSuperHeroByName = async (name) => {
  //get api key
  const API_KEY = process.env.API_KEY;
  const url = `${config.API_URL + API_KEY}/search/${name}`;

  try {
    const res = await axios.get(url);
    return {
      res,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getSuperHeroById,
  getSuperHeroByName,
};
