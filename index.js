var randomNumber1=(Math.floor(Math.random()*6)+1);
var randomVariable2="dice" + randomNumber1 + ".png";
var randomImageSource="images/"+randomVariable2;
var randomNumber2=(Math.floor(Math.random()*6)+1);
var randomVariable1="dice" + randomNumber2 + ".png";
var randomImageSource2="images/"+randomVariable1;
var ImageOne=document.querySelectorAll("img")[0];
ImageOne.setAttribute("src",randomImageSource);
var Imagetwo=document.querySelectorAll("img")[1].setAttribute("src" ,randomImageSource2 );
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win's";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 win's";
}


