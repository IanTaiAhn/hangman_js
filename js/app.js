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
        let guessedChar = e.target.innerHTML;
        // console.log(e.target.style);
        // if (e.target.innerHTML == 'Q')  {
        //     // compare this letter to the wordToGuess string, and then add it up top, or add a strike
        //     console.log('q was pressed');
        // }
        // console.log(guessedChar);

        // for (let i = 0; i < wordToGuess.length; i++)  {
        //     // console.log(wordToGuess[i]);
        //     // console.log(guessedChar);

        //     if (guessedChar === wordToGuess[i])  {
        //         console.log("found a char");
        //     }   else    {
        //         console.log("no match");
        //     }
        // }        
        // console.log(e.target.innerHTML);
        if (wordToGuess.includes(guessedChar))  {
            console.log("true");
            // let hideGuess = document.querySelector('p')
            e.target.style.backgroundColor = 'green';
            e.target.style.pointerEvents = 'none';
        }   else    {
            
            e.target.style.backgroundColor = 'red';
            console.log("false");
        }
    });
    // console.log('child selected');
}

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

    // if (firstCharRow[0].innerHTML == 'Q')   {
    //     console.log(firstCharRow[0].innerHTML);
    //     console.log('q was selected');
    // }
    // else {
    //     console.log("char select success");
    // }
    console.log('clicked');
}
// If letter is in the word we need to guess, make the letter we clicked green, and add it up top
// if letter isn't in the word then make it red, and update strikes.

