function colorChange() {
  const blocoDeCores = document.querySelectorAll('.color');
  for (let i = 0; i < blocoDeCores.length; i += 1) {
    if (blocoDeCores[i] === blocoDeCores[0]) {
      blocoDeCores[i].style.backgroundColor = 'rgb(0,0,0)';
    } else {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      blocoDeCores[i].style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }
  }
}

const button = document.querySelector('#button-random-color');
button.addEventListener('click', colorChange);

function armazenaCores() {
  const blocoDeCores = document.querySelectorAll('.color');
  const f = [];
  for (let i = 0; i < blocoDeCores.length; i += 1) {
    const r = blocoDeCores[i].style.backgroundColor;
    f.push(r);
  }
  localStorage.setItem('colorPalette', JSON.stringify(f));
}
window.onload = () => {
  const salvaRGB = JSON.parse(localStorage.getItem('colorPalette'));
  if (localStorage.getItem('colorPalette')) {
    for (let i = 1; i < salvaRGB.length; i += 1) {
      const blocoDeCores = document.querySelectorAll('.color');
      blocoDeCores[i].style.backgroundColor = salvaRGB[i];
    }
  }
}
button.addEventListener('click', armazenaCores);

function generatePixels () {
  const blackPixel = document.querySelectorAll('.color');
  for (let i = 0; i < blackPixel.length; i += 1) {
    blackPixel[i].classList.remove()
    blackPixel[i].classList.add('selected');
    blackPixel[i].addEventListener('click', generatePixels)
  }
}
