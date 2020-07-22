const name = prompt("Enter your name");
title.innerText += `Welcome to the family ${name}`;

const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock,1000);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

