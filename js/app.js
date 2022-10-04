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
    console.log("true");
};

// here we call the function, and all we need to provide is the tag, textvalue,
//  and the id so that it knows where to be placed in the document.
// addElement("p", "will this work?", "word");

let wordToGuess = "horse";

// Choose a char, and depending on the guessing word we will add it up top to the correct chars, or add a strike.
function selectChar()   {
    // we select the parent div id, and then we select all of the p tags in that parent div.
    let firstCharRow = document.querySelectorAll('#firstRow p');
    // console.log(firstCharRow);

    for (let i = 0; i < firstCharRow.length; i++) {
        // console.log("1")
        // console.log(firstCharRow[i].innerHTML)

        // if (firstCharRow[i].innerHTML == 'Q')   {
        //     console.log('q was selected');
        // }
        // else {
        //     console.log("char select success");
        // }
    }

    if (firstCharRow[0].innerHTML == 'Q')   {
        console.log(firstCharRow[0].innerHTML);
        console.log('q was selected');
    }
    else {
        console.log("char select success");
    }
}
// If letter is in the word we need to guess, make the letter we clicked green, and add it up top
// if letter isn't in the word then make it red, and update strikes.

