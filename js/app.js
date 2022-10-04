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

let wordToGuess = "HORSE";


function selectChild()  {
    
    document.getElementById('firstRow').addEventListener('click', (e) => {
        let guessedChar = e.target.innerText;
        let untargetDiv = e.target.id;

        if (wordToGuess.includes(guessedChar))  {
            e.target.style.backgroundColor = 'green';
            e.target.style.pointerEvents = 'none';
            // Correct answer will call a function that adds a p tag into our divs that will show the word.
            console.log("true");
        }
        else if (untargetDiv === 'firstRow')    {
            console.log("wrong target");
        }
           else    {
            e.target.style.backgroundColor = 'red';
            e.target.style.pointerEvents = 'none';
            // Upon hitting this path we will update our strikes in the bottom.
            console.log("false");
        }
    });

    document.getElementById('secondRow').addEventListener('click', (e) => {
        let guessedChar = e.target.innerText;
        let untargetDiv = e.target.id;

        if (wordToGuess.includes(guessedChar))  {
            e.target.style.backgroundColor = 'green';
            e.target.style.pointerEvents = 'none';
            // Correct answer will call a function that adds a p tag into our divs that will show the word.
            console.log("true");
        }
        else if (untargetDiv === 'secondRow')    {
            console.log("wrong target");
        }
           else    {
            e.target.style.backgroundColor = 'red';
            e.target.style.pointerEvents = 'none';
            // Upon hitting this path we will update our strikes in the bottom.
            console.log("false");
        }
    });

    document.getElementById('thirdRow').addEventListener('click', (e) => {
        let guessedChar = e.target.innerText;
        let untargetDiv = e.target.id;

        if (wordToGuess.includes(guessedChar))  {
            e.target.style.backgroundColor = 'green';
            e.target.style.pointerEvents = 'none';
            // Correct answer will call a function that adds a p tag into our divs that will show the word.
            console.log("true");
        }
        else if (untargetDiv === 'thirdRow')    {
            console.log("wrong target");
        }
           else    {
            e.target.style.backgroundColor = 'red';
            e.target.style.pointerEvents = 'none';
            // Upon hitting this path we will update our strikes in the bottom.
            console.log("false");
        }
    });
}


// If letter is in the word we need to guess, make the letter we clicked green, and add it up top
// if letter isn't in the word then make it red, and update strikes.

