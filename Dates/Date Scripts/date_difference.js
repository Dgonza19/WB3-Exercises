"use strict";

let firstDate = new Date("July 11, 2022");
let lastDate = new Date("November 11, 2022");

let msec_per_day = 1000 * 60 * 60 * 24;

console.log(firstDate.getTime());
console.log(lastDate.getTime());

let elapsedMilliseconds = lastDate.getTime() - firstDate.getTime();
let diffOfDays = elapsedMilliseconds / msec_per_day;
let noOfDays = Math.round(diffOfDays);

console.log("The amount of days in between July 11, 2022 and November 11, 2022 are: " + noOfDays);
