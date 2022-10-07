/*
This is how I will build hangman.
Let's have a text field that the user can type in one letter at a time.
For now we can count strikes as a number.
For the letters if we guess the word right then we can add a div or something.
*/

// I don't need this function anymore, but it is still cool, and useful to look at.
function addElement(el, val, id)   {
    // This creates an element, and whatever val is passed in is what the tag gets.
    var tag = document.createElement(el);
    var value = document.createTextNode(val);
    tag.appendChild(value);

    // This adds the element into the document.
    // So the element var is actually just selecting the parent cotainer where I'm going to
    // append the child, aka put the tag/element that I created.
    var element = document.getElementById(id);

    tag.classList.add("border-b-2");
    tag.classList.add("border-emerald-900");
    tag.classList.add("w-8");
    tag.classList.add("p-2");
    tag.classList.add("text-center");
    element.appendChild(tag);

    console.log("true");
};

// All i have to do is change this word, and it will change veryting dynamically! Haha.
// I thought about the solution while driving this morning, so this is very dope.
let wordToGuess = "NICE JOB DUDE";

// So we are goin to create a for loop, and add the word into the html already, and just make it invisible.
// DID IT!
for (let i = 0; i < wordToGuess.length; i++)    {
    var tag = document.createElement("p");
    var value = document.createTextNode(wordToGuess[i]);
    tag.appendChild(value);

    var element = document.getElementById("correctGuess");
    tag.classList.add("border-b-2");
    tag.classList.add("border-emerald-800");
    tag.classList.add("w-8");
    tag.classList.add("p-2");
    tag.classList.add("text-center");
    tag.classList.add("invisible");
    element.appendChild(tag);
}

// I'm getting the HTML document from the ID, and then turning it into an array, since that is best practice.
var getChild = document.getElementById("correctGuess");
var childrenArr = Array.from(getChild.children);

// I learned that we don't need to have a function call stuff from the js. Crazy.
// First row char select to guess word.
document.getElementById('firstRow').addEventListener('click', (e) => {
    let guessedChar = e.target.innerText;
    let untargetDiv = e.target.id;

    if (wordToGuess.includes(guessedChar))  {
        e.target.style.backgroundColor = 'green';
        e.target.style.pointerEvents = 'none';
        // Checks which char matches our word, and targets the correct answer.
        for (let i = 0; i < childrenArr.length; i++)    {
            if (childrenArr[i].textContent === guessedChar)   {
                // console.log("i'm selecting" + "childrenArr: " + childrenArr[i].textContent + " " + "guessedChar " + guessedChar);
                childrenArr[i].classList.remove("invisible");
            }
        }
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

// Second row char select to guess word.
document.getElementById('secondRow').addEventListener('click', (e) => {
    let guessedChar = e.target.innerText;
    let untargetDiv = e.target.id;

    if (wordToGuess.includes(guessedChar))  {
        e.target.style.backgroundColor = 'green';
        e.target.style.pointerEvents = 'none';
        // Checks which char matches our word, and targets the correct answer.
        for (let i = 0; i < childrenArr.length; i++)    {
            if (childrenArr[i].textContent === guessedChar)   {
                // console.log("i'm selecting" + "childrenArr: " + childrenArr[i].textContent + " " + "guessedChar " + guessedChar);
                childrenArr[i].classList.remove("invisible");
            }
        }        
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

// Third row char select to guess word.
document.getElementById('thirdRow').addEventListener('click', (e) => {
    let guessedChar = e.target.innerText;
    let untargetDiv = e.target.id;

    if (wordToGuess.includes(guessedChar))  {
        e.target.style.backgroundColor = 'green';
        e.target.style.pointerEvents = 'none';
        // Checks which char matches our word, and targets the correct answer.
        for (let i = 0; i < childrenArr.length; i++)    {
            if (childrenArr[i].textContent === guessedChar)   {
                // console.log("i'm selecting" + "childrenArr: " + childrenArr[i].textContent + " " + "guessedChar " + guessedChar);
                childrenArr[i].classList.remove("invisible");
            }
        }
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


/*
function selectChild()  {
    document.getElementById('firstRow').addEventListener('click', (e) => {
        let guessedChar = e.target.innerText;
        let untargetDiv = e.target.id;

        if (wordToGuess.includes(guessedChar))  {
            e.target.style.backgroundColor = 'green';
            e.target.style.pointerEvents = 'none';
            // Correct answer will call a function that adds a p tag into our divs that will show the word.
            addElement('p', guessedChar, 'correctGuess');
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
*/

// If letter is in the word we need to guess, make the letter we clicked green, and add it up top
// if letter isn't in the word then make it red, and update strikes.

