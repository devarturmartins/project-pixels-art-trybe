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
};

button.addEventListener('click', armazenaCores);

function removeCores() {
  const blackPixel = document.querySelectorAll('.color');
  for (let index = 0; index < blackPixel.length; index += 1) {
    blackPixel[index].classList.remove('selected');
  }
}
function generatePixels(event) {
  const blackPixel = document.querySelectorAll('.color');
  for (let index = 0; index < blackPixel.length; index += 1) {
    removeCores();
    event.target.classList.add('selected');
  //   if (blackPixel[index] === blackPixel[0]) {
  //     removeCores();
  //     blackPixel[index].classList.add('selected');
  //   }
  //   else if (blackPixel[index] === blackPixel[1]) {
  //     removeCores();
  //     blackPixel[index].classList.add('selected');
  //   }
  //   else if (blackPixel[index] === blackPixel[2]) {
  //     removeCores();
  //     blackPixel[index].classList.add('selected');
  //   }
  //   else {
  //     removeCores();
  //     blackPixel[index].classList.add('selected');
  //   }
  }
}

const blocoDeCores = document.querySelectorAll('.color');
for (let j = 0; j < blocoDeCores.length; j += 1) {
  blocoDeCores[j].addEventListener('click', generatePixels);
}