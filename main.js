let container=document.querySelector(".container");
let box=document.querySelector(".box");
let score=document.querySelector("h6");
let h1=document.querySelector("h1");
let input=document.querySelector("input");
let button=document.querySelector("button");


let num1=0; let num2=0;
num1=Math.floor(Math.random()* 10);
num2=Math.floor(Math.random()* 10);
h1.innerHTML=`what  is  ${num1}  multiply  by  ${num2}?`;

button.disabled = false;
let scores = JSON.parse(localStorage.getItem("scores")) || 0;
score.innerHTML=`score: ${scores}`;
button.addEventListener("click", function (){
    location.reload()
    console.log(input.value)
   if(input.value == ""){
    button.disabled = true
   }else if ( input.value == num1 * num2){
        scores++
    }else if ( input.value !== num1 * num2){
        scores--
    }
    score.innerHTML=`score: ${scores}`;
    localStorage.setItem("scores", JSON.stringify(scores));
    input.value = "";
});


