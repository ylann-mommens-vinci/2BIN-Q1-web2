import { getAllMovies } from '../../models/movie';

const ViewMoviePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '<div id="movieWrapper"></div>';

  const movieWrapper = document.querySelector('#movieWrapper');

  const movies = getAllMovies();

  const moviesAsHtmlTable = getHtmlMovieTableAsString(movies);

  movieWrapper.innerHTML = moviesAsHtmlTable;
};

function getHtmlMovieTableAsString(movies) {
  if (movies?.length === undefined || movies.length === 0) {
    return '<p class="p-5">No movies yet : (</p>';
  }

  let htmlMovieTable = `<div class="table-responsive p-5">
  <table class="table">
<thead>
  <tr>
    <th scope="col">Title</th>
    <th scope="col">Duration (min)</th>
    <th scope="col">Budget (million)</th>    
  </tr>
</thead>
<tbody>`;

  // On boucle a travers le tableau movies et on ajoute chaque element dans le tableau htmlMovieTable
  movies.forEach((element) => {
    htmlMovieTable += `
    <tr>
      <td><a href="${element.link}" target="_blank""> ${element.title}</a></td>
      <td>${element.duration}</td>
      <td>${element.budget}</td>
    </tr>
    `;
  });

  htmlMovieTable += '</tbody></table>';

  return htmlMovieTable;
}

export default ViewMoviePage;