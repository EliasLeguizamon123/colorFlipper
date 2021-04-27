const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "D", "E", "F"];

const color = document.querySelector('.color');

const btn = document.querySelector('#btn');

alert('Hi, this is a proyect made by: Elías Leguizamón, Following the tutorial of John Smilga for FreeCodeCamp');

btn.addEventListener('click', ()=>{
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}