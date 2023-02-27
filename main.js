let container=document.querySelector(".container");
let box=document.querySelector(".box");
let score=document.querySelector("h6");
let h1=document.querySelector("h1");
let input=document.querySelector("input");
let button=document.querySelector("button");

let number=0;
    score.innerHTML=`score: ${number}`;

let num1=0; let num2=0;
num1=Math.floor(Math.random()* 10);
num2=Math.floor(Math.random()* 10);
h1.innerHTML=`what  is  ${num1}  multiply  by  ${num2}?`;


let scores = JSON.parse(localStorage.getItem("scores")) || [];
number=0;
button.addEventListener("click", function (){
    if (input.value == num1 * num2){
        number++
    }else if (input.value !== num1 * num2){
        number--
    }
    score.innerHTML=`score: ${number}`;
    scores.push(number);
    localStorage.setItem("scores", JSON.stringify(scores));
    input.value = "";
});

scores.forEach((number2) => {
    score.innerHTML =`score: ${number2}`;
    number2++
    
});
