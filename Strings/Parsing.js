"use strict"

function parseDisplayName(name) {

  

  //name = ("Gabriel Uribe");
  let pos = name.indexOf(" ");
  let first = name.substring(0, pos);
  let last = name.substring(pos + 1);

  console.log("Name: " + last + ", " + first);
  console.log("First Name: " + first);
  console.log("Last Name: " + last);

}


parseDisplayName("Gabriel Uribe");
parseDisplayName("Emilsen Uribe");
parseDisplayName("Carlota Moreno");
parseDisplayName("Fabian Gonzalez")