const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025']

const color = document.querySelector('.color');

const btn = document.querySelector('#btn');

alert('Hi, this is a proyect made by: Elías Leguizamón, Following the tutorial of John Smilga for FreeCodeCamp');

btn.addEventListener('click', ()=>{
    // Get random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}