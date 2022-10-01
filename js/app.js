/*
This is how I will build hangman.
Let's have a text field that the user can type in one letter at a time.
For now we can count strikes as a number.
For the letters if we guess the word right then we can add a div or something.
*/


function addElement(el, val, id)   {
    // This creates an element, and whatever val is passed in is what the tag gets.
    var tag = document.createElement(el);
    var value = document.createTextNode(val);
    tag.appendChild(value);

    // This adds the element into the document.
    var element = document.getElementById(id);
    element.appendChild(tag);
};

// here we call the function, and all we need to provide is the tag, textvalue,
//  and the id so that it knows where to be placed in the document.
addElement("p", "will this work?", "word");