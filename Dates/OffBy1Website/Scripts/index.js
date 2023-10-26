"use strict";


function init() {
  const theButton = document.getElementById("clickButton");
  clickButton.onclick.clickButtonClicked;
}

function clickButtonClicked(){
  const dateField = document.getElementById("dateField");
  let dateValue = dateField.value;
 
  const outputDate = document.getElementById("outputDate");
  outputDate.value = dateValue;

  console.log(outputDate.value.toString());
}