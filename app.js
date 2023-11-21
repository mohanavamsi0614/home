const user = document.getElementById("user");
const password = document.getElementById("password");
const main = document.getElementById("main");
const users = ["mohan vamsi", "prass", "jatin", "rahul"];
const word = "kalvi";
const email = "kalvium@kalvium.in";
bu1 = document.getElementById("no");
// const joy = document.querySelector(".gri");
// const gid=localStorage.setItem("main",JSON.stringify(joy))
// console.log(localStorage.getItem("main"))
bu1.onclick = function usr(e) {
  console.log("password" + password.value, word, "user" + user.value);
  e.preventDefault();
  if (users.includes(user.value) && password.value == word) {
    main.style.display = "block";
  } else {
    alert("wrong password");
  }

};
const x=document.getElementById("file")
const y=document.getElementById("name")
const z=document.getElementById("prize")
const bu2=document.getElementById("n")
document.getElementById("n").onclick=function l(e) {
    e.preventDefault()
    // console.log("here bu2",x.value,y.value,z.value)
    var fragment=`<div class='items'> 
    <img src=${x.value} alt='${y.value}'> 
    <h1>${y.value}</h1>
    <i>${z.value}</i> </div>`
 localStorage.setItem("grid",fragment)
}