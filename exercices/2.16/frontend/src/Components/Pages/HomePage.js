// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'underscore';


const main = document.querySelector('main');

const HomePage = () => {
  createQuestion();
};

function createQuestion() {
  fetch('http://localhost:3000/questions')
    .then((response) => response.json())
    .then((questions) => {
      const randomQuestions = getRandomQuestions(questions);
      randomQuestions.forEach((question) => {
        
        
        main.innerHTML += `
        <div class="card ">
          <div class="card-body ">
            <h5 class="card-title">${question.question}</h5>
            <div class="container"><p class="card-subtitle mb-2 text-muted"></p></div>
          </div>
        </div>`;
        
        const responsesSection = document.querySelector('.card-subtitle:last-child');

        question.answers.forEach((answer) => {
          responsesSection.innerHTML += `<h4>${answer.text} <input type="radio" name="question-${question.id}"></h4>`;
        });
      });
      main.innerHTML +=`<button id="calculateBtn">Calculate my score</button>`
    })
}

function getRandomQuestions(questions) {
  return _.sample(questions, 3);
}
export default HomePage;