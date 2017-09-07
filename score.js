var num = document.getElementById("number");
var scr = document.getElementById("score");

num.addEventListener("change", function() { 
    score.innerHTML = num.value;
});

//zrobic zeby po kliknieciu dodawalo graczowi punkt
var pl1 = document.querySelectorAll("button")[0];
var pl2 = document.querySelectorAll("button")[1];

var pl1goal = document.getElementById("play1");
var pl2goal = document.getElementById("play2");
var i = 1;
var j = 1;
pl1.addEventListener("click", function() { 
    if(i<num.value){
        pl1goal.innerHTML =i++
       }
      else if (i=num.value) {
          pl1goal.innerHTML =i++
          pl1goal.style.color ="blue";
      }

      else {
        pl1goal.style.color ="blue";
      }
})

pl2.addEventListener("click", function() { 
    if(j<num.value){
        pl2goal.innerHTML =j++
       }
      else if (j=num.value) {
          pl2goal.innerHTML =j++
          pl2goal.style.color ="blue";
      }

      else {
        pl2goal.style.color ="blue";
      }
})

// reset
var res = document.querySelectorAll("button")[2];
res.addEventListener("click", function() {
    num.value = 0;
    var i = 1;
    var j = 1;
    pl1goal.innerHTML = 0; 
    pl2goal.innerHTML = 0;
    pl1goal.style.color ="black";
    pl2goal.style.color ="black";
})

