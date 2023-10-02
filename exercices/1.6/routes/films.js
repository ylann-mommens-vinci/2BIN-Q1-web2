var express = require('express');
var router = express.Router();

const films = [
{
  id: 1,
  title: 'Harry Potter',
  duration: 139,
  budget: 12309877,
  link:'www.google.com'
},
{
  id: 2,
  title: 'Paddington',
  duration: 120,
  budget: 999109,
  link:'www.bing.com'
},
{
id: 3,
title: 'HH',
duration: 120,
budget: 999109,
link:'www.faceboo.com'
},
{
  id: 4,
  title: 'Paddington 2',
  duration: 120,
  budget: 999109,
  link:'www.yahoo.com'
},
];

// Read all the pizzas from the menu
router.get('/', (req, res, next) => {
  console.log('GET /films');
  res.json(films);
});

//get the movie with specific ID
router.get('/:id',(req,res,next) =>{
  const indexMovie = films.findIndex((movie) => movie.id == req.params.id);

  console.log(`GET /films/${req.params.id}`);

  if(indexMovie < 0) 
    return res.sendStatus(404); //error code '404 Not Found'

  res.json(films[indexMovie])
});

// Create a film
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration >= 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget >= 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  console.log('POST /pizzas');

  if (!title || !duration || !budget || !link) 
    return res.sendStatus(400); // error code '400 Bad request'

  //SI le film existe deja alors on renvoie un code erreur
  const existingFilm = films.find(
    (film) => film.title.toLowerCase() === title.toLowerCase()
  );
  if(existingFilm) 
    return res.sendStatus(409); //error code '409 Conflict' 
    
  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex].id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link
  };

  films.push(newFilm);

  res.json(newFilm);
});

router.delete('/:id',(req,res) =>{
  console.log(`DELETE /films/${req.params.id}`);
  const indexMovie = films.findIndex((film) => film.id == req.params.id);

  if(indexMovie<0)
    return res.status(404); //error code '404 Not Found'

  const filmRemove = films.splice(indexMovie,1);  //Splice renvoie un tableau 
  const filmRemoved = filmRemove[0];    //Il faut donc reprendre le premier element de ce tableau

  res.json(filmRemoved);
});


router.patch('/:id',(req,res) =>{
  console.log(`PATCH /films/${req.params.id}`);

  
  const title = req?.body?.title;
  const duration = req.body?.link;
  const budget = req.body?.link;
  const link = req.body?.link;

  //Traitement du body
  if (
    !req.body ||
    (title !== undefined && !title.trim()) ||
    (link !== undefined && !link.trim()) ||
    (duration !== undefined && (typeof req?.body?.duration !== 'number' || duration < 0)) ||
    (budget !== undefined && (typeof req?.body?.budget !== 'number' || budget < 0))
  )
    return res.sendStatus(400);
  
  
  const indexMovie = films.findIndex((film) => film.id == req.params.id);
  if(indexMovie<0)  return res.status(404); //error code '404 Not Found'

  //On change le film par le nouveau film
  const filmsToChange = films[indexMovie];
  const updatedFilm = {
    ...filmsToChange,
    ...req.body,
  };

  films[indexMovie] = updatedFilm;

  res.json(updatedFilm)
});

router.post

module.exports = router;