"use strict";

window.onload = init;

function init(){
  const inputDate = document.getElementById("inputDate");
  inputDate.onclick = inputDateClicked;
}

function inputDateClicked(){
  const dateMessage = document.getElementById("dateMessage");
  let messageValue = dateMessage.value;

  let message = "That is your favorite date!";

  const outputMessage = document.getElementById("outputMessage");
  outputMessage.innerHTML = message;
}
