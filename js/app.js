// let word = "fantastic"

// document.getElementById("title");

// let first = document.createElement("p");
// // let text = document.createTextNode()
// first.appendChild(word);
// let element = document.getElementById("title");
// element.appendChild(first);

// console.log(word);

var tag = document.createElement("p");
var text = document.createTextNode("Tutorix is the best e-learning platform");
tag.appendChild(text);
var element = document.getElementById("title");
element.appendChild(tag);