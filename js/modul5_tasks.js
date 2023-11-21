let answer1 = document.getElementById("answer1").value;
let answer2 = document.getElementById("answer2").value;
let answer3 = document.getElementById("answer3").value;
var proggres = document.getElementById("progress_indicator");
let button = document.getElementById("button");
var testElement = document.getElementById('tasks');
let next = document.getElementById("next_but")
let motivation = document.getElementById("motivation")
button.onclick = check;
var x
var name

function getRandomNumber(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function check() {

  if (testElement.classList.contains('task4') == true) {
    if (document.getElementById("answer1").value == 16){
      document.getElementById("answer1").style.border = '6px dashed #58A532'
    }
    if(document.getElementById("answer2").value == 10){
      document.getElementById("answer2").style.border = '6px dashed #58A532'
    }
    if(document.getElementById("answer3").value == 12){
      document.getElementById("answer3").style.border = '6px dashed #58A532'
    }
    if ((document.getElementById("answer1").value == 16) && (document.getElementById("answer2").value == 10) && (document.getElementById("answer3").value == 12)) {
      button.style.opacity = '0'
      proggres.style.width = '648px';
      next.classList.add("active");
      button.style.pointerEvents='none';
      answer1 = ''
      x = getRandomNumber(4, 5)
      if (x === 4) {
        document.getElementById("n4").style.opacity = '1'
        document.getElementById("n1").style.opacity = '0'
        document.getElementById("n2").style.opacity = '0'
        document.getElementById("n3").style.opacity = '0'
        document.getElementById("n5").style.opacity = '0'
      } else if (x === 5) {
        document.getElementById("n5").style.opacity = '1'
        document.getElementById("n1").style.opacity = '0'
        document.getElementById("n2").style.opacity = '0'
        document.getElementById("n3").style.opacity = '0'
        document.getElementById("n4").style.opacity = '0'
      }
    } else {
      if (document.getElementById("answer1").value != 16){
        document.getElementById("answer1").style.border = '6px dashed #8E2020'
      }
      if(document.getElementById("answer2").value != 10){
        document.getElementById("answer2").style.border = '6px dashed #8E2020'
      }
      if(document.getElementById("answer3").value != 12){
                document.getElementById("answer3").style.border = '6px dashed #8E2020'
      }
      button.style.backgroundColor = '#8E2020'
      button.style.border = '#8E2020'
      answer2 = ''
      x = getRandomNumber(2, 3)
      if (x === 2) {
        document.getElementById("n2").style.opacity = '1'
        document.getElementById("n1").style.opacity = '0'
        document.getElementById("n4").style.opacity = '0'
        document.getElementById("n3").style.opacity = '0'
        document.getElementById("n5").style.opacity = '0'
      } else if (x === 3) {
        document.getElementById("n3").style.opacity = '1'
        document.getElementById("n1").style.opacity = '0'
        document.getElementById("n2").style.opacity = '0'
        document.getElementById("n5").style.opacity = '0'
        document.getElementById("n4").style.opacity = '0'
      }
    }
  } else if (testElement.classList.contains('task6') == true) {
    if (document.getElementById("answer1").value == 15){
      document.getElementById("answer1").style.border = '6px dashed #58A532'
    }
    if(document.getElementById("answer2").value == 21){
      document.getElementById("answer2").style.border = '6px dashed #58A532'
    }
    if(document.getElementById("answer3").value == 24){
      document.getElementById("answer3").style.border = '6px dashed #58A532'
    }
    if ((document.getElementById("answer1").value == 15) && (document.getElementById("answer2").value == 21) && (document.getElementById("answer3").value == 24)) {
      button.style.opacity = '0'
      next.classList.add("active");
      answer1 = ''
      button.style.pointerEvents='none';
      proggres.style.width = '970px';
      x = getRandomNumber(4, 5)
      if (x === 4) {
        document.getElementById("n4").style.opacity = '1'
        document.getElementById("n1").style.opacity = '0'
        document.getElementById("n2").style.opacity = '0'
        document.getElementById("n3").style.opacity = '0'
        document.getElementById("n5").style.opacity = '0'
      } else if (x === 5) {
        document.getElementById("n5").style.opacity = '1'
        document.getElementById("n1").style.opacity = '0'
        document.getElementById("n2").style.opacity = '0'
        document.getElementById("n3").style.opacity = '0'
        document.getElementById("n4").style.opacity = '0'
      }
    } else {
      if (document.getElementById("answer1").value != 15){
        document.getElementById("answer1").style.border = '6px dashed #8E2020'
      }
      if(document.getElementById("answer2").value != 21){
        document.getElementById("answer2").style.border = '6px dashed #8E2020'
      }
      if(document.getElementById("answer3").value != 24){
        document.getElementById("answer3").style.border = '6px dashed #8E2020'
      }
      button.style.backgroundColor = '#8E2020'
      button.style.border = '#8E2020'
      answer2 = ''
      x = getRandomNumber(2, 3)
      if (x === 2) {
        document.getElementById("n2").style.opacity = '1'
        document.getElementById("n1").style.opacity = '0'
        document.getElementById("n4").style.opacity = '0'
        document.getElementById("n3").style.opacity = '0'
        document.getElementById("n5").style.opacity = '0'
      } else if (x === 3) {
        document.getElementById("n3").style.opacity = '1'
        document.getElementById("n1").style.opacity = '0'
        document.getElementById("n2").style.opacity = '0'
        document.getElementById("n5").style.opacity = '0'
        document.getElementById("n4").style.opacity = '0'
      }
    }
  }
}



