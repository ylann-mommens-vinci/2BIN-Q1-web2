
const express = require('express');

const {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updatePartiallyOneFilm,
} = require('../models/films');

const router = express.Router();

// Read all the films 
router.get('/', (req, res) => {
  // console.log('GET /films');
  const allFilms = readAllFilms();
  return res.json(allFilms);
});

// get the movie with specific ID
router.get('/:id',(req,res) =>{
  const foundFilm = readOneFilm(req?.params?.id);
  if(!foundFilm) 
    return res.sendStatus(404); // error code '404 Not Found'

  return res.json(foundFilm)
});

// Create a film
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration >= 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget >= 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'

  const createdFilm = createOneFilm(title,duration,budget,link)

  if(createdFilm) return res.sendStatus(409); // error code '409 Conflict' 

  return res.json(createdFilm);
});

router.delete('/:id',(req,res) =>{
  // console.log(`DELETE /films/${req.params.id}`);
  const deleteFilm = deleteOneFilm(req?.params?.id)
  if(!deleteFilm)
    return res.status(404); // error code '404 Not Found

  return res.json(deleteFilm);
});


router.patch('/:id',(req,res) =>{
  // console.log(`PATCH /films/${req.params.id}`);
  const title = req?.body?.title;
  const duration = req.body?.link;
  const budget = req.body?.link;
  const link = req.body?.link;

  // Traitement du body
  if (
    !req.body ||
    (title !== undefined && !title.trim()) ||
    (link !== undefined && !link.trim()) ||
    (duration !== undefined && (typeof req?.body?.duration !== 'number' || duration < 0)) ||
    (budget !== undefined && (typeof req?.body?.budget !== 'number' || budget < 0))
  )
    return res.sendStatus(400);
  
  const patchMovie = updatePartiallyOneFilm(req?.params?.id,req?.body)
  
  if(!patchMovie)  return res.status(404); // error code '404 Not Found'

  return res.json(patchMovie)
});

module.exports = router;