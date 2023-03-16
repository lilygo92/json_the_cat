const request = require("request");
const args = process.argv.slice(2);
const query = args.toString().toLowerCase().substring(0, 4);


request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  try {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Couldn't find that breed! Please check for typos");
      return;
    }
    console.log(data, "typeOf", typeof(data));
  } catch (error) {
    console.log(error.message);
  }
});
