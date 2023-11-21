const joy = document.querySelector(".gri");
const gid=localStorage.setItem("main",joy)
localStorage.getItem("main")
console.log(localStorage)
joy.innerHTML+=localStorage.getItem("grid")