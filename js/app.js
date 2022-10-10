// All i have to do is change this word, and it will change veryting dynamically! Haha.
// I thought about the solution while driving this morning, so this is very dope.
let wordToGuess = "MAGPIES";
let strikes = 1;
let victoryCount = 0;

let wordSet = new Set();

// console.log(wordSet.size);
for (let i in wordToGuess)  {
    // console.log(wordToGuess[i]);
    wordSet.add(wordToGuess[i]);
}
// console.log(wordSet.size);

function updateStrikes()    {
    let el = document.getElementById("strikes");
    el.textContent = strikes++;
}

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
        e.target.style.pointerEvents = 'none';

        console.log(e);
        // Checks which char matches our word, and targets the correct answer.
        for (let i = 0; i < childrenArr.length; i++)    {
            if (childrenArr[i].textContent === guessedChar)   {
                // console.log("i'm selecting" + "childrenArr: " + childrenArr[i].textContent + " " + "guessedChar " + guessedChar);
                childrenArr[i].classList.remove("invisible");
                victoryCount++;
            }
        }
        console.log("true");
    }
    else if (untargetDiv === 'firstRow')    {
        console.log("wrong target");
    }
       else    {
        e.target.style.backgroundColor = 'darkred';
        e.target.style.pointerEvents = 'none';
        updateStrikes();
        console.log("false");
    }
    if (victoryCount >= wordSet.size) {
        console.log("you won!");
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
                victoryCount++;
            }
        }        
        console.log("true");
    }
    else if (untargetDiv === 'secondRow')    {
        console.log("wrong target");
    }
       else    {
        e.target.style.backgroundColor = 'darkred';
        e.target.style.pointerEvents = 'none';
        updateStrikes();

        console.log("false");
    }
    if (victoryCount >= wordSet.size) {
        console.log("you won!");
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
                victoryCount++;
            }
        }
        console.log("true");
    }
    else if (untargetDiv === 'thirdRow')    {
        console.log("wrong target");
    }
       else    {
        e.target.style.backgroundColor = 'darkred';
        e.target.style.pointerEvents = 'none';
        updateStrikes();        
        console.log("false");
    }
    if (victoryCount >= wordToGuess.length) {
        console.log("you won!");
    }
});



// I don't need this function anymore, but it is still cool, and useful to look at.
// adds element to specified id.
function addElement(el, val, id)   {
    // This creates an element, and whatever val is passed in is what the tag gets.
    var tag = document.createElement(el);
    var value = document.createTextNode(val);
    tag.appendChild(value);

    // This adds the element into the document.
    // So the element var is actually just selecting the parent cotainer where I'm going to
    // append the child, aka put the tag/element that I created.
    var element = document.getElementById(id);

    // tag.classList.add("border-b-2");
    // tag.classList.add("border-emerald-900");
    // tag.classList.add("w-8");
    // tag.classList.add("p-2");
    // tag.classList.add("text-center");
    element.appendChild(tag);

    console.log("true");
};


