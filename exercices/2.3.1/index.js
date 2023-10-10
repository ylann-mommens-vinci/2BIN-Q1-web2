const form = document.querySelector('form');
const message = document.querySelector('#message');
const wish = document.querySelector('#wish');

form.addEventListener("submit",  (e) => {
    form.style.display = 'none';
    e.preventDefault();

    message.textContent = `Votre souhait est de : ${wish.value}`;
    console.log(`Le client souhaite : ${wish.value}`);
})