var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      let firstChord = new Audio("jump/1.mp3");
      firstChord.play();
      break;

    case "s":
      let secondChord = new Audio("jump/2.mp3");
      secondChord.play();
      break;

    case "d":
      let thirdChord = new Audio("jump/3.mp3");
      thirdChord.play();
      break;

    case "f":
      let fourthChord = new Audio("jump/4.mp3");
      fourthChord.play();
      break;

    case "g":
      let fifthChord = new Audio("jump/5.mp3");
      fifthChord.play();
      break;

    case "h":
      let sixthChord = new Audio("jump/6.mp3");
      sixthChord.play();
      break;

    case "j":
      let seventhChord = new Audio("jump/7.mp3");
      seventhChord.play();
      break;

    case "k":
      let eigthChord = new Audio("jump/8.mp3");
      eigthChord.play();
      break;

    case "l":
      let ninethChord = new Audio("jump/9.mp3");
      ninethChord.play();
      break;

    case "b":
      let bassNote = new Audio("jump/bass.mp3");
      bassNote.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
