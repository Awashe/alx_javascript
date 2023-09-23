const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    const wedgeAntillesFilms = films.filter(film => film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/'));
    console.log(`${wedgeAntillesFilms.length}`);
  }
});