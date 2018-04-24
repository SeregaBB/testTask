let ArrA = [6,7,8,9];
let ArrC = [11, 12, 13, 14];

let a = ArrA[getRand(ArrA.length-1)];
let c = ArrC[getRand(ArrC.length-1)];
let b =  c - a;
let answer = '?';
document.getElementById('task').textContent = a + ' + ' + b + ' =  ' + answer;

function getRand(max, min=0)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//make arrow (step - 40px)
let arrow = document.getElementById('arrow');
let leftPx = document.getElementById('sprite').getBoundingClientRect().left;
let topPx = document.getElementById('sprite').getBoundingClientRect().top;

arrow.style.left = leftPx + 34.5 + 'px';
arrow.style.top = topPx - 80 + 'px';

arrow.style.width = 40 * a + 'px';

