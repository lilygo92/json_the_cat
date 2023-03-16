const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName.toString().substring(0, 4)}`, (error, response, body) => {
    try {
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback(null, "Couldn't find that breed! Please check for typos");
      }
      callback(null, data);
    } catch (error) {
      callback(error.message);
    }
  });
};

module.exports = { fetchBreedDescription };