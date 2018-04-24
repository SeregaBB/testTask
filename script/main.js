let ArrA = [6,7,8,9];
let ArrC = [11, 12, 13, 14];

let a = ArrA[getRand(ArrA.length-1)];
let c = ArrC[getRand(ArrC.length-1)];
let b =  c - a;
let answer = '?';
document.getElementById('a').textContent = a;
document.getElementById('b').textContent = b;
document.getElementById('c').textContent = answer;

function getRand(max, min=0)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//make arrow (step - 40px)
let arrow = document.getElementById('arrow');
let leftPx = document.getElementById('sprite').getBoundingClientRect().left;
let topPx = document.getElementById('sprite').getBoundingClientRect().top;

arrow.style.left = leftPx + 35 + 'px';
arrow.style.top = topPx - 80 + 'px';

arrow.style.width = 40 * a + 'px';

//check answer input 1
let inp = document.getElementById('inp');
let first_input = document.getElementById('first_input');
first_input.focus();
let first_num = document.getElementById('a');
function CheckAnswer1(){
     if (first_input === document.activeElement) {
         if (first_input.value == a) {
            inp.innerHTML = '';
            inp.textContent = a;
             rightAnswer1();
             console.log('TRUE');
         } else {
             first_input.style.color = 'red';
             first_num.style['background-color'] = 'yellow';
             console.log('FALSE');
         }
     }
}


first_input.addEventListener('click', function(){
    first_input.style.color = 'black';
    first_input.value = '';
    
});
first_input.addEventListener('keyup', CheckAnswer1);

///////////////////////////////////////////////////
//make arrow 2

function rightAnswer1() {

let arrow_2 = document.getElementById('arrow_2');

arrow_2.style.display = 'block';
arrow_2.style.left = leftPx + 28 + 40*a + 'px';
arrow_2.style.top = topPx - 80 + 'px';
arrow_2.style.width = 40 * b + 'px';


//check Answer input 2 
let inp2 = document.getElementById('inp2');
let second_input = document.getElementById('second_input');
second_input.focus();
let second_num = document.getElementById('b');
function CheckAnswer2(){
     if (second_input === document.activeElement) {
         if (second_input.value == b) {

             inp2.innerHTML = '';
             inp2.textContent = b;
             console.log('TRUE');
             FinalAnswer();
         } else {
             second_input.style.color = 'red';
             second_num.style['background-color'] = 'yellow';
             console.log('FALSE');
         }
     }
}
second_input.addEventListener('click', function(){
    second_input.style.color = 'black';
    second_input.value = '';
    
});
second_input.addEventListener('keyup', CheckAnswer2);
}

first_input.addEventListener('click', function(){
    first_input.style.color = 'black';
    first_input.value = '';
    
});

/////////////////////////// 
// function answer
function FinalAnswer() {
    let cElem = document.getElementById('c');
    cElem.innerHTML = '<input type="text" id="final_answer">';
    let fAnswer = document.getElementById('final_answer');
    fAnswer.focus();

    fAnswer.addEventListener('keyup', function(){
        if (fAnswer.value == c) {
            cElem.innerHTML = '';
            cElem.textContent = c;
            document.getElementById('congrats').textContent = 'ПРАВИЛЬНО!'

        } else {
            fAnswer.style.color = 'red';
        }
    })

}

first_input.addEventListener('keyup', CheckAnswer1);
