
var sqr = document.getElementsByClassName("kwadrat");
var rgbmain = document.getElementById("rgbhead");

run();
run3();

losuj();
losuj1();
losujdla3();
color();


sqrToColor();
newNumber();
newNumberfor3();


function losuj() { 
    return Math.floor(Math.random() * 255); 
}

function losuj1(){

    for(var i=0; i<sqr.length; i++){

            sqr[i].style.backgroundColor=color();
}}
function losujdla3(){
    
        for(var i=0; i<3; i++){
    
                sqr[i].style.backgroundColor=color();
    }}

function color() {
     return "rgb(" + losuj() +" ," + losuj() + " ," + losuj() + " )";}
    


function newNumber() {
  var goodOne = Math.floor(Math.random() * 6);
  rgbmain.innerHTML = sqr[goodOne].style.backgroundColor;  
}

function newNumberfor3() {
    var goodOne = Math.floor(Math.random() * 3);
    rgbmain.innerHTML = sqr[goodOne].style.backgroundColor;  
  }
  function sqrToColor(){ for(var i=0; i<sqr.length; i++){
            sqr[i].style.backgroundColor=rgbmain.innerHTML;
            sqr[i].style.display="block";
            sqr[i].style.opacity="1";
            sqr[i].style.transition = ("opacity 1s ease-in");
            }}


        


 function run(){
var tryAgain = document.getElementById("tryAgain");
var sqrWrap = document.getElementById("row");
var head = document.getElementById("head");
losuj();
losuj1();
newNumber();
function isCorrect(){
    if (event.target.style.backgroundColor == rgbmain.innerHTML){
        tryAgain.innerHTML = "Great, you made it!";
        head.style.backgroundColor = rgbmain.innerHTML;
     
        sqrToColor();
        
        console.log("this.style.backgroundColor");
    }
    else {
        console.log("baaba");
        tryAgain.innerHTML = "Try Again!";
        event.target.style.opacity = ("0");
        event.target.style.transition = ("opacity 1s ease-out");
    }
}
sqrWrap.addEventListener("click", isCorrect);
    }

// tu jest fcja dla 3 kafelkow:
function run3(){
   
   losuj();
   color();
    losuj1();
    
    var rgbmain = document.getElementById("rgbhead");
    
    newNumber();
    
    var tryAgain = document.getElementById("tryAgain");
    var sqrWrap = document.getElementById("row");
    var head = document.getElementById("head");
    function isCorrect(){
        if (event.target.style.backgroundColor == rgbmain.innerHTML){
            tryAgain.innerHTML = "Great, you made it!";
            head.style.backgroundColor = rgbmain.innerHTML;
         
            sqrToColor();
            
            console.log("this.style.backgroundColor");
        }
        else {
            console.log("baaba");
            tryAgain.innerHTML = "Try Again!";
            event.target.style.opacity = ("0");
            event.target.style.transition = ("opacity 1s ease-out");
        }
    }
 

sqrWrap.addEventListener("click", isCorrect);
}
// run();
function reset (){
    
     for(var i=0; i<sqr.length; i++){
        
        
        sqr[i].style.opacity="1";
        sqr[i].style.transition = ("opacity 1s ease-in");
         
        }
   tryAgain.innerHTML = ("");
   run();

}
// run();
var newColor = document.getElementById("newColor");

// newColor.onclick = losuj;
// newColor.onclick = color;
// newColor.onclick = losuj1;
newColor.onclick = reset;

var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
easy.onclick = run3;
hard.onclick = run;




