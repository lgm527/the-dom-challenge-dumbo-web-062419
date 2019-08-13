
document.addEventListener("DOMContentLoaded", function(){

 const timer = document.getElementById("timer")
 let timerVar = setInterval(countTimer, 1000);
 function countTimer(){
   timer.innerText++;
 }

 const counter = document.getElementById("counter");
 const minus = document.getElementById("-");
 const plus = document.getElementById("+");
 const heart = document.getElementById("<3");
 const pause = document.getElementById("pause");

 plus.addEventListener("click", function(){
   counter.innerText++;
 })

 minus.addEventListener("click", function(){
   counter.innerText--;
 })

 pause.addEventListener("click", function(){
   if(event.target.innerText == 'pause'){
     counter.style.pointerEvents = "none";
     minus.style.pointerEvents = "none";
     plus.style.pointerEvents = "none";
     heart.style.pointerEvents = "none";
     pause.innerText = "resume";
   } else {
     counter.style.pointerEvents = "auto";
     minus.style.pointerEvents = "auto";
     plus.style.pointerEvents = "auto";
     heart.style.pointerEvents = "auto";
     pause.innerText = "pause";
   }
 })

 const comForm = document.getElementById("comment-form");
 const comList = document.getElementById("list");

 function renderComments(){

 }


 comForm.addEventListener("submit", function(){
   const content = document.querySelector('input').value;
   event.preventDefault();
   fetch("http://localhost:3000/comments",{
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({
       'body': content,
       'postId': counter.innerText
     })
   })
   .then(res => res.json())
   .then(theComment => {
     comList.innerHTML += `
     <li>${theComment.body}</li>
     `;
    }
   )
 })




  // end of DOMContentLoaded
})
