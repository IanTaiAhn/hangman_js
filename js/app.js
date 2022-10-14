// All i have to do is change this word, and it will change veryting dynamically! Haha.
// I thought about the solution while driving this morning, so this is very dope.
let wordToGuess = "TEST";
let strikes = 8;
let victoryCount = 0;
let victoryBool = false;

/*  for educational reasons.
let wordSet = new Set();
for (let i in wordToGuess)  {
    wordSet.add(wordToGuess[i]);
}
*/

function updateStrikes()    {
    let el = document.getElementById("strikes");
    el.textContent = strikes++;
}

function turnOffPointerEvents() {
    let bodyEl = document.getElementById("body");
    bodyEl.style.pointerEvents = "none";
}

function showVictory()  {
    let victoryPanel = document.getElementById("victoryPanel");
    let victoryText = document.getElementById("victoryText");
    // victoryPanel.style.animation = "";
    victoryPanel.classList.add("animate-divGrowRight");
    victoryPanel.classList.add("h-full");
    victoryPanel.classList.add("w-full");   
    victoryText.classList.remove("hidden");
    console.log("victorypanel is shown");
}

function showDefeat()   {
    let defeatPanel = document.getElementById("defeatPanel");
    let defeatText = document.getElementById("defeatText");
    // victoryPanel.style.animation = "";
    defeatPanel.classList.add("animate-divGrowLeft");
    defeatPanel.classList.add("h-full");
    defeatPanel.classList.add("w-full");   
    defeatText.classList.remove("hidden");
    console.log("defeatpanel is shown");
}

// instead of 
for (let i = 0; i < wordToGuess.length; i++)    {
    var tag = document.createElement("p");
    var value = document.createTextNode("?");
    tag.appendChild(value);

    var element = document.getElementById("correctGuess");
    tag.classList.add("border-b-2");
    tag.classList.add("border-emerald-800");
    tag.classList.add("w-8");
    tag.classList.add("p-2");
    tag.classList.add("text-center");
    tag.classList.add("text-lg");
    element.appendChild(tag);
}

// I'm getting the HTML document from the ID, and then turning it into an array, since that is best practice.
var guessesSelect = document.getElementById("correctGuess");
let eachSelection = Array.from(guessesSelect.children);
// var childrenArr = Array.from(getChild.children);
var childrenArr = Array.from(wordToGuess);
console.log(childrenArr);
// console.log(eachSelection);

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
            if (childrenArr[i] === guessedChar)   {
                console.log("i'm selecting" + "childrenArr: " + childrenArr[i] + " " + "guessedChar " + guessedChar);
                eachSelection[i].innerText = childrenArr[i];
                console.log(victoryCount++);
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
        // console.log("false");
    }

    if (victoryCount >= wordToGuess.length) {
        console.log("you won!");
        victoryBool = true;
        console.log(victoryBool);
        turnOffPointerEvents();
        // Maybe just put the victory screen part in here?
        showVictory();
    }

    if (strikes >= 10) {
        // Defeat
        showDefeat();
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
            if (childrenArr[i] === guessedChar)   {
                // console.log("i'm selecting" + "childrenArr: " + childrenArr[i].textContent + " " + "guessedChar " + guessedChar);
                // childrenArr[i].classList.remove("invisible");
                eachSelection[i].innerText = childrenArr[i];
                console.log(victoryCount++);
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

        // console.log("false");
    }
    if (victoryCount >= wordToGuess.length) {
        console.log("you won!");
        victoryBool = true;
        console.log(victoryBool);
        turnOffPointerEvents();
        showVictory();

    }
    if (strikes >= 10) {
        // Defeat
        showDefeat();
    }
});

// Third row char select to guess word.
document.getElementById('thirdRow').addEventListener('click', (e) => {
    let guessedChar = e.target.innerText;
    let untargetDiv = e.target.id;

    console.log(guessedChar);
    if (wordToGuess.includes(guessedChar))  {
        e.target.style.backgroundColor = 'green';
        e.target.style.pointerEvents = 'none';
        // Checks which char matches our word, and targets the correct answer.
        for (let i = 0; i < childrenArr.length; i++)    {
            if (childrenArr[i] === guessedChar)   {
                // console.log("i'm selecting" + "childrenArr: " + childrenArr[i].textContent + " " + "guessedChar " + guessedChar);
                // childrenArr[i].classList.remove("invisible");
                eachSelection[i].innerText = childrenArr[i];
                console.log(victoryCount++);
            }
        }      
    }
    else if (untargetDiv === 'thirdRow')    {
        console.log("wrong target");
    }
       else    {
        e.target.style.backgroundColor = 'darkred';
        e.target.style.pointerEvents = 'none';
        updateStrikes();        
        // console.log("false");
    }
    if (victoryCount >= wordToGuess.length) {
        console.log("you won!");
        victoryBool = true;
        console.log(victoryBool);
        turnOffPointerEvents();
        showVictory();

    }
    if (strikes >= 10) {
        // Defeat
        showDefeat();
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


