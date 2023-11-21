let answer1 = document.getElementById("answer1").value;
let answer2 = document.getElementById("answer2").value;
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
  if (testElement.classList.contains('task1') == true) {
    if (document.getElementById("answer1").value == 12){
      document.getElementById("answer1").style.borderColor = '#58A532'
    }
    if (document.getElementById("answer1").value == 12){
      button.style.opacity = '0'
      next.classList.add("active");
      button.style.pointerEvents='none';
      proggres.style.width = '162px';
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
      document.getElementById("answer1").style.border = '6px dashed #8E2020'
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
  } else if (testElement.classList.contains('task2') == true) {
    if (document.getElementById("answer1").value == 30){
      document.getElementById("answer1").style.borderColor = '#58A532'
    }
    if (document.getElementById("answer1").value == 30){
      button.style.opacity = '0'
      next.classList.add("active");
      button.style.pointerEvents='none';
      proggres.style.width = '324px';
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
      document.getElementById("answer1").style.border = '6px dashed #8E2020'
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
  } else if (testElement.classList.contains('task3') == true) {
    if (document.getElementById("answer1").value == 14){
      document.getElementById("answer1").style.borderColor = '#58A532'
    }
    if (document.getElementById("answer1").value == 14){
      button.style.opacity = '0'
      next.classList.add("active");
      button.style.pointerEvents='none';
      proggres.style.width = '486px';
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
      document.getElementById("answer1").style.border = '6px dashed #8E2020'
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
  } else if (testElement.classList.contains('task4') == true) {
    if (document.getElementById("answer1").value == 72){
      document.getElementById("answer1").style.borderColor = '#58A532'
    }
    if (document.getElementById("answer1").value == 72){
      button.style.opacity = '0'
      button.style.pointerEvents='none';
      next.classList.add("active");
      proggres.style.width = '648px';
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
      document.getElementById("answer1").style.border = '6px dashed #8E2020'
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
  } else if (testElement.classList.contains('task5') == true) {
    if (document.getElementById("answer1").value == 24){
      document.getElementById("answer1").style.borderColor = '#58A532'
    }
    if (document.getElementById("answer1").value == 24){
      button.style.opacity = '0'
      next.classList.add("active");
      proggres.style.width = '810px';
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
      document.getElementById("answer1").style.border = '6px dashed #8E2020'
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
    if (document.getElementById("answer1").value == 20){
      document.getElementById("answer1").style.borderColor = '#58A532'
    }
    if (document.getElementById("answer1").value == 20){
      button.style.opacity = '0'
      proggres.style.width = '970px';
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
      document.getElementById("answer1").style.border = '6px dashed #8E2020'
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






