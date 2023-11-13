const HomePage = () => {
  const main = document.querySelector('main');

  fetch('https://v2.jokeapi.dev/joke/Any?lang=fr')
    .then((response) => response.json())
    .then((data) => {
      main.innerHTML = `
      <div class="container">
        <h1>Blague du jour</h1>
        <div class="card" style="width: auto;">
          <div class="card-body">
            <h5 class="card-title">${data.setup}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.category}</h6>
            <p class="card-text">${data.delivery}</p>
          </div>
        </div>
      </div>`;
    })
};

export default HomePage;