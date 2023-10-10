const divs = document.querySelectorAll(".color-div");

divs.forEach((div) => {
  div.addEventListener('click', (e) => {
    div.innerHTML = e.target.style.backgroundColor;

    div.style.width ='1000px';
    div.style.height ='1000px';
  });
});