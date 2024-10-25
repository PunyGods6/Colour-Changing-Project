//linking the html IDs to our Javascript
const colourChangeBtn = document.getElementById("colourChangeBtn");
const randomColourChangeBtn = document.getElementById("randomColourChangeBtn");
const colourDisplay = document.getElementById("colourDisplay");
const randomColourDisplay = document.getElementById("randomColourDisplay");
const resetBtn = document.getElementById("resetBtn");

// Define default state values for reset
const defaultBackgroundColor = "lightblue";
const defaultColourDisplayText = "Change My Colour!";
const defaultRandomColourDisplayText = "Randomize My Colour!";

//create a array list of colours
let bgColoursList = ["white", "red", "green", "blue", "orange", "gray", "purple", "pink", "yellow",];
console.log(bgColoursList);

//setting the index list to start at 0 aka "white". Since we will be using an addEventListener, look at it similar to a for loop (for when the user does this, do this), therefore we need to define our index here to go in between the square brackets
let currentIndex = 0;

//eventlistener for when the user clicks the button we want this function to run this is shortcut for function "() =>
colourChangeBtn.addEventListener("click", () => {
    //when user clicks, change bg colour from the predefined "bgColoursList" with the "currentIndex" starting at 0
    document.body.style.backgroundColor = bgColoursList[currentIndex]; 

    colourDisplay.textContent = `I am now ${bgColoursList[currentIndex]}`;
    console.log(bgColoursList[currentIndex]);

    // ! can display the text this way also, however it will create a new line of text everytime we click the button instead of just updating the text of 1 line
    // let colourDisplay = document.createElement("h3");
    // ! always remember to use .append to attact the element we created onto the body of the page 
    // document.body.append(colourDisplay);
    // colourDisplay.textContent = `Background Colour ${bgColoursList[currentIndex]}`;

    //increment the currentIndex by 1 every time the button is clicked
    currentIndex++;

    //if the current index is greater/equal to the length if bgColoursList, set it back to 0
    if (currentIndex >= bgColoursList.length) {
        currentIndex = 0;
    }
});

randomColourChangeBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * bgColoursList.length);

    document.body.style.backgroundColor = bgColoursList[randomIndex]; 

    randomColourDisplay.textContent = `I am now ${bgColoursList[randomIndex]}`;
    console.log(bgColoursList[randomIndex]);
});

// Reset button event listener
resetBtn.addEventListener("click", () => {
    // Reset the background color
    document.body.style.backgroundColor = defaultBackgroundColor;
    
    // Reset text content to default messages
    colourDisplay.textContent = defaultColourDisplayText;
    randomColourDisplay.textContent = defaultRandomColourDisplayText;

    // Reset current index to 0 to restart color sequence
    currentIndex = 0;
});