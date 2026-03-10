/* =========================
Admin Login
========================= */

function adminLogin(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user == "admin" && pass == "1234"){

window.location = "admin-dashboard.html";

}else{

document.getElementById("msg").innerHTML = "Invalid Login";

}

}

/* =========================
Upload Study Materials
========================= */

function uploadMaterial(){

let title = document.getElementById("title").value;
let link = document.getElementById("fileLink").value;

let materials = JSON.parse(localStorage.getItem("materials")) || [];

materials.push({
title: title,
link: link
});

localStorage.setItem("materials", JSON.stringify(materials));

document.getElementById("uploadMsg").innerHTML =
"Material uploaded successfully";

}

/* =========================
Load Registered Users
========================= */

function loadUsers(){

let users = ["Rahul","Priya","Amit"];

let list = document.getElementById("userList");

users.forEach(function(u){

let li = document.createElement("li");
li.innerText = u;

list.appendChild(li);

});

}

/* =========================
Quiz System
========================= */

function addQuiz(){

let q = document.getElementById("question").value;
let a = document.getElementById("answer").value;

let quiz = JSON.parse(localStorage.getItem("quiz")) || [];

quiz.push({
question: q,
answer: a
});

localStorage.setItem("quiz", JSON.stringify(quiz));

alert("Quiz Added Successfully");

}

function loadQuiz(){

let quiz = JSON.parse(localStorage.getItem("quiz")) || [];

let list = document.getElementById("quizList");

quiz.forEach(function(q){

let li = document.createElement("li");

li.innerText = q.question + " - " + q.answer;

list.appendChild(li);

});

}

