var express = require('express');
var router = express.Router();

const FILMS = [
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



//get the movie with specific ID
router.get('/:id',(req,res,next) =>{
  const indexMovie = FILMS.findIndex((movie) => movie.id == req.params.id);

  console.log(`GET /films/${req.params.id}`);

  if(indexMovie < 0) return res.sendStatus(404); //On envoie code errreur correspondant

  res.json(FILMS[indexMovie])
});

// Read all the pizzas from the menu
router.get('/', (req, res, next) => {
  console.log('GET /films');
  res.json(FILMS);
});


// Create a film
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration >= 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget >= 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  console.log('POST /pizzas');

  if (!title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'

  const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex].id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link
  };

  FILMS.push(newFilm);

  res.json(newFilm);
});

router.post

module.exports = router;