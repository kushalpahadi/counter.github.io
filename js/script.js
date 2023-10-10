'use strict';

const decreaseBtn = document.getElementById('btn--1');
const resetBtn = document.getElementById('btn--2');
const increaseBtn = document.getElementById('btn--3');
const body = document.body;
const number=document.querySelector('.number');


let numberValue = 0;
function colordeter(){
    if(numberValue === 0){
        color('black');
    }else if( numberValue > 0){
        color('green');
    }else{
        color('red');
    }
};
decreaseBtn.addEventListener('click',()=>{
    numberValue--;
    number.textContent= numberValue;
    colordeter();
})

resetBtn.addEventListener('click',function(){
    numberValue=0;
    number.textContent = numberValue;
    colordeter();
})


increaseBtn.addEventListener('click',function(){
numberValue++;
    number.textContent = numberValue;
    colordeter();
})

function color(colors){
    number.style.color =colors;
    body.style.background = colors;
}