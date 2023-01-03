const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.body;

btn.addEventListener('click', () => {
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();

    const rgb = `RGB(${red},${green},${blue})`;

    body.style.background = rgb;
    color.innerText = rgb;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}
