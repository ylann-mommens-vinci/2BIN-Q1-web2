const redLight = document.querySelector(".feuRouge");
const colors = ["red", "orange", "green"];
let currentIndex = 0;

function changeLightColor(){
  redLight.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1);
  if(currentIndex > colors.length) currentIndex=0;

  setTimeout(changeLightColor, 500); // 2 secondes
}

changeLightColor();
