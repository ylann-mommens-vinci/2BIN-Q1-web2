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
  //Ici on introduit la nouvelle notation

  const title = req?.body?.title?.trim()?.length !== 0 
    ? req.body.title 
    : undefined;
  const link = req?.body?.content?.trim().length !== 0 
    ? req.body.link 
    : undefined;

  
  const duration = typeof req?.body?.duration !== 'number' || req.body.duration < 0 
      ? undefined 
      : req.body.duration;
  const budget = typeof req?.body?.budget !== 'number' || req.body.budget < 0
      ? undefined
      : req.body.budget;

  if (!title || !link || !duration || !budget) 
    return res.json('Mauvaise requete'); 

  //On recupere le dernier ID de la table 
  const lastItemIndex = FILMS?.length !== 0 
    ? FILMS.length - 1 
    : undefined;
  const lastId = lastItemIndex !== undefined 
    ? FILMS[lastItemIndex]?.id 
    : 0;

  //On initialise le nouvel id
  const nextId = lastId + 1;

  //On cree le nouveau film
  const newFilm = { id: nextId, title, duration, budget, link };

  //On l'ajoute a FILMS
  FILMS.push(newFilm);
  return res.json(newFilm);
});

router.post

module.exports = router;