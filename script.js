function colorChange (){
  const blocoDeCores = document.querySelectorAll('.color');
  for(let i = 0; i < blocoDeCores.length ; i += 1){
    if(blocoDeCores[i] == blocoDeCores[0]){
      blocoDeCores[i].style.backgroundColor = 'black';
    } else {
      let r = Math.floor(Math.random()*255);
      let g = Math.floor(Math.random()*255);
      let b = Math.floor(Math.random()*255);
    blocoDeCores[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
    }
  }
};

let button = document.querySelector('#button-random-color');
button.addEventListener('click', colorChange);
