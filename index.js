// click sound
var bottons = document.querySelectorAll(".drum");
for (var i=0; i<bottons.length; ++i){
  bottons[i].addEventListener("click", function(){
    bottonInnerHTML = this.innerHTML;
    chooseSound(bottonInnerHTML);
    bottonAnimation(bottonInnerHTML);
  });
}

document.addEventListener("keydown", function(event){
  chooseSound(event.key);
  bottonAnimation(event.key);
})

function chooseSound(innerChar){
  switch (innerChar) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log("Wrong click and no sound!");
  }
}

function bottonAnimation(bottonKey){
  currBotton = document.querySelector("." + bottonKey);
  currBotton.classList.add("pressed");
  setTimeout(function(){
    currBotton.classList.remove("pressed");
  }, 100);
}
