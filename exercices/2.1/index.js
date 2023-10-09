const dateTimeNow = new Date();
const date = dateTimeNow.toLocaleDateString();
const heure = dateTimeNow.toLocaleTimeString();

const MESSAGE = ` ${date} ${heure}: This is the best moment to have a look at this website !`

alert(MESSAGE);