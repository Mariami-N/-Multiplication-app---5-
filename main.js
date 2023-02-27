let container=document.querySelector(".contaner");
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
