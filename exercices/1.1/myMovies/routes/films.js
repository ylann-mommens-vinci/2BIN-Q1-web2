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
];

// Read all the pizzas from the menu
router.get('/', (req, res, next) => {
  console.log('GET /films');
  res.json(FILMS);
});

module.exports = router;
