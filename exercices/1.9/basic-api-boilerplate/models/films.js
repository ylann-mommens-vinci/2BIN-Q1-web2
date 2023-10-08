const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');

function readAllFilms() {
    const films = parse(jsonDbPath)

    return films;
}

function readOneFilm(id) {
    const idAsNumber = Number(id);
    const films = parse(jsonDbPath);
    const indexOfFilmFound = films.findIndex((pizza) => pizza.id === idAsNumber);
    
    if (indexOfFilmFound < 0) 
        return undefined;
    return films[indexOfFilmFound];
}

function createOneFilm(title,duration,budget,link){
    const films = parse(jsonDbPath);
    const newFilm = {
        id: getNextId,
        title,
        duration,
        budget,
        link
    };
    films.push(newFilm);
    serialize(jsonDbPath,films);
    
    return newFilm;
}

function getNextId() {
    const films = parse(jsonDbPath);
    const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = films[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
}

function deleteOneFilm(id){
    const idAsNumber = Number(id);
    const films = parse(jsonDbPath);
    const indexMovie = films.findIndex((film) => film.id === idAsNumber);

    // Splice renvoie un tableau 
    const filmRemove = films.splice(indexMovie,1);
    // Il faut donc reprendre le premier element de ce tableau  
    const filmRemoved = filmRemove[0];    

    serialize(jsonDbPath,films);
    return filmRemoved;
}

function updatePartiallyOneFilm(id,propertiesToUpdate) {
    const idAsNumber = Number(id);
    const films = parse(jsonDbPath);

    const foundIndex = films.findIndex((pizza) => pizza.id === idAsNumber);
    if (foundIndex < 0) return undefined;

    // On change le film par le nouveau film
    const filmsToChange = films[foundIndex];

    const updatedFilm = {...filmsToChange,...propertiesToUpdate};

    films[foundIndex] = updatedFilm;

    serialize(jsonDbPath, films);
    return updatedFilm;
}

module.exports = {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updatePartiallyOneFilm,
};