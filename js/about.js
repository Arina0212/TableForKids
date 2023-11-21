var modul1 = document.getElementById("roctangle_1");
var modul2 = document.getElementById("roctangle_2");
var modul3 = document.getElementById("roctangle_3");
var modul4 = document.getElementById("roctangle_4");
var modul5 = document.getElementById("roctangle_5");
var modul6 = document.getElementById("roctangle_6");
var modul7 = document.getElementById("roctangle_7");
var modul8 = document.getElementById("roctangle_8");
var modul1s = document.getElementById("roctangle_1s");
var modul2s = document.getElementById("roctangle_2s");
var modul3s = document.getElementById("roctangle_3s");
var modul4s = document.getElementById("roctangle_4s");
var modul5s = document.getElementById("roctangle_5s");
var modul6s = document.getElementById("roctangle_6s");
var modul7s = document.getElementById("roctangle_7s");
var modul8s = document.getElementById("roctangle_8s");
var tasks1 = document.getElementById("modul1_tasks");
var tasks2 = document.getElementById("modul2_tasks");
var tasks3 = document.getElementById("modul3_tasks");
var tasks4 = document.getElementById("modul4_tasks");
var tasks5 = document.getElementById("modul5_tasks");
var tasks6 = document.getElementById("modul6_tasks");
var tasks7 = document.getElementById("modul7_tasks");
var tasks8 = document.getElementById("modul8_tasks");
var icon = document.getElementsByClassName("check_mark");
const
  progress_or_exercises = document.querySelector(".progress_or_exercises"),
  progress = document.querySelector(".modul"),
  exercises = document.querySelector(".task");


// js code to appear signup and login form
exercises.addEventListener("click", ( )=>{
  progress_or_exercises.classList.add("active");
});
progress.addEventListener("click", ( )=>{
  progress_or_exercises.classList.remove("active");
});


modul1s.addEventListener("click", ( )=>{
  modul1s.classList.add("active");
  modul2s.classList.remove("active");
  modul3s.classList.remove("active");
  modul4s.classList.remove("active");
  modul5s.classList.remove("active");
  modul6s.classList.remove("active");
  modul7s.classList.remove("active");
  modul8s.classList.remove("active");

  tasks1.classList.add("active");
  tasks2.classList.remove("active");
  tasks3.classList.remove("active");
  tasks4.classList.remove("active");
  tasks5.classList.remove("active");
  tasks6.classList.remove("active");
  tasks7.classList.remove("active");
  tasks8.classList.remove("active");
});

modul2s.addEventListener("click", ( )=>{
  modul2s.classList.add("active");
  modul1s.classList.remove("active");
  modul3s.classList.remove("active");
  modul4s.classList.remove("active");
  modul5s.classList.remove("active");
  modul6s.classList.remove("active");
  modul7s.classList.remove("active");
  modul8s.classList.remove("active");

  tasks1.classList.remove("active");
  tasks2.classList.add("active");
  tasks3.classList.remove("active");
  tasks4.classList.remove("active");
  tasks5.classList.remove("active");
  tasks6.classList.remove("active");
  tasks7.classList.remove("active");
  tasks8.classList.remove("active");
});
modul3s.addEventListener("click", ( )=>{
  modul3s.classList.add("active");
  modul1s.classList.remove("active");
  modul2s.classList.remove("active");
  modul4s.classList.remove("active");
  modul5s.classList.remove("active");
  modul6s.classList.remove("active");
  modul7s.classList.remove("active");
  modul8s.classList.remove("active");

  tasks1.classList.remove("active");
  tasks2.classList.remove("active");
  tasks3.classList.add("active");
  tasks4.classList.remove("active");
  tasks5.classList.remove("active");
  tasks6.classList.remove("active");
  tasks7.classList.remove("active");
  tasks8.classList.remove("active");
});
modul4s.addEventListener("click", ( )=>{
  modul4s.classList.add("active");
  modul3s.classList.remove("active");
  modul1s.classList.remove("active");
  modul2s.classList.remove("active");
  modul5s.classList.remove("active");
  modul6s.classList.remove("active");
  modul7s.classList.remove("active");
  modul8s.classList.remove("active");

  tasks1.classList.remove("active");
  tasks2.classList.remove("active");
  tasks3.classList.remove("active");
  tasks4.classList.add("active");
  tasks5.classList.remove("active");
  tasks6.classList.remove("active");
  tasks7.classList.remove("active");
  tasks8.classList.remove("active");
});
modul5s.addEventListener("click", ( )=>{
  modul5s.classList.add("active");
  modul4s.classList.remove("active");
  modul3s.classList.remove("active");
  modul1s.classList.remove("active");
  modul2s.classList.remove("active");
  modul6s.classList.remove("active");
  modul7s.classList.remove("active");
  modul8s.classList.remove("active");

  tasks1.classList.remove("active");
  tasks2.classList.remove("active");
  tasks3.classList.remove("active");
  tasks4.classList.remove("active");
  tasks5.classList.add("active");
  tasks6.classList.remove("active");
  tasks7.classList.remove("active");
  tasks8.classList.remove("active");
});
modul6s.addEventListener("click", ( )=>{
  modul6s.classList.add("active");
  modul5s.classList.remove("active");
  modul3s.classList.remove("active");
  modul4s.classList.remove("active");
  modul1s.classList.remove("active");
  modul2s.classList.remove("active");
  modul7s.classList.remove("active");
  modul8s.classList.remove("active");

  tasks1.classList.remove("active");
  tasks2.classList.remove("active");
  tasks3.classList.remove("active");
  tasks4.classList.remove("active");
  tasks5.classList.remove("active");
  tasks6.classList.add("active");
  tasks7.classList.remove("active");
  tasks8.classList.remove("active");
});
modul7s.addEventListener("click", ( )=>{
  modul7s.classList.add("active");
  modul6s.classList.remove("active");
  modul3s.classList.remove("active");
  modul4s.classList.remove("active");
  modul5s.classList.remove("active");
  modul1s.classList.remove("active");
  modul2s.classList.remove("active");
  modul8s.classList.remove("active");

  tasks1.classList.remove("active");
  tasks2.classList.remove("active");
  tasks3.classList.remove("active");
  tasks4.classList.remove("active");
  tasks5.classList.remove("active");
  tasks6.classList.remove("active");
  tasks7.classList.add("active");
  tasks8.classList.remove("active");
});
modul8s.addEventListener("click", ( )=>{
  modul8s.classList.add("active");
  modul7s.classList.remove("active");
  modul2s.classList.remove("active");
  modul3s.classList.remove("active");
  modul4s.classList.remove("active");
  modul5s.classList.remove("active");
  modul6s.classList.remove("active");
  modul1s.classList.remove("active");

  tasks1.classList.remove("active");
  tasks2.classList.remove("active");
  tasks3.classList.remove("active");
  tasks4.classList.remove("active");
  tasks5.classList.remove("active");
  tasks6.classList.remove("active");
  tasks7.classList.remove("active");
  tasks8.classList.add("active");
});

// const progressbar = document.querySelector(".progress_indicator");
//
// const changeProgress = (progress_indicator) => {
//   progressbar.style.width = `${progress_indicator}%`;
// };
//
// /* change progress after 1 second (only for showcase) */
// setTimeout(() => changeProgress(16.7), 1000);
// setTimeout(() => changeProgress(33.3), 2000);
// setTimeout(() => changeProgress(50), 3000);
// setTimeout(() => changeProgress(66.7), 4000);
// setTimeout(() => changeProgress(83.3), 5000);
// setTimeout(() => changeProgress(100), 6000);



