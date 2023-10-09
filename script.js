let allCountries = [
    "Albania",
    "Algeria",
    "Angola",
    "Argentina",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Belarus",
    "Belgium",
    "Bosnia And Herzegovina",
    "Brazil",
    "Bulgaria",
    "Cameroon",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Costarica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech",
    "Denmark",
    "Ecuador",
    "Egypt",
    "Emirates",
    "England",
    "Ethiopia",
    "Finland",
    "France",
    "Gabon",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Guatemana",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "North Korea",
    "Kuwait",
    "Lebanon",
    "Liberia",
    "Luxembourg",
    "Macedonia",
    "Malaysia",
    "Maldives",
    "Mexico",
    "Monaco",
    "Montenegro",
    "Morocco",
    "Nepal",
    "Netherlands",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Russia",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Tanzania",
    "Thailand",
    "Tunisia",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Uruguay",
    "United States",
    "Vatican",
    "Venezuela",
    "Vietnam",
    "Wales",
];

let easy = [
    "Argentina",
    "Belgium",
    "Brazil",
    "Canada",
    "China",
    "England",
    "France",
    "Germany",
    "Greece",
    "Iceland",
    "India",
    "Ireland",
    "Italy",
    "Japan",
    "Luxembourg",
    "Mexico",
    "Morocco",
    "Netherlands",
    "Portugal",
    "Russia",
    "Spain",
    "Sweden",
    "Turkey",
    "United Kingdom",
    "United States",
];

let normal = [
    "Argentina",
    "Australia",
    "Belgium",
    "Brazil",
    "Canada",
    "China",
    "Colombia",
    "Croatia",
    "Denmark",
    "Egypt",
    "Emirates",
    "England",
    "Finland",
    "France",
    "Gabon",
    "Georgia",
    "Germany",
    "Iceland",
    "India",
    "Ireland",
    "Italy",
    "Japan",
    "North Korea",
    "Luxembourg",
    "Mexico",
    "Morocco",
    "Netherlands",
    "Nigeria",
    "Norway",
    "Poland",
    "Portugal",
    "Qatar",
    "Russia",
    "Saudi Arabia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Tunisia",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Uruguay",
    "United States",
    "Venezuela",
    "Vietnam",
    "Wales",
];

let hard = [
    "Albania",
    "Algeria",
    "Angola",
    "Argentina",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Belarus",
    "Belgium",
    "Bosnia And Herzegovina",
    "Brazil",
    "Bulgaria",
    "Cameroon",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Costarica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech",
    "Denmark",
    "Ecuador",
    "Egypt",
    "Emirates",
    "England",
    "Ethiopia",
    "Finland",
    "France",
    "Gabon",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Guatemana",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "North Korea",
    "Kuwait",
    "Lebanon",
    "Liberia",
    "Luxembourg",
    "Macedonia",
    "Malaysia",
    "Maldives",
    "Mexico",
    "Monaco",
    "Montenegro",
    "Morocco",
    "Nepal",
    "Netherlands",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Russia",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Tanzania",
    "Thailand",
    "Tunisia",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Uruguay",
    "United States",
    "Vatican",
    "Venezuela",
    "Vietnam",
    "Wales",
];

//This For Difficulty Buttons
let buttons = document.querySelectorAll(".buttons button");
let buttonsBox = document.getElementsByClassName("buttons-box")[0];
// This Variable For Game Box
let gameBox = document.getElementsByClassName("game")[0];
// This Variable For Result Box
let resultBox = document.getElementsByClassName("game-result")[0];
let resultTitle = document.getElementById("result-title");
// This Variable For Display Image
let image = document.getElementById("image");
let answers = document.querySelectorAll(".answer");
let time = document.getElementById("time");
// This Variable For Display Entire Score Depending On The Difficulty
let entireScore = document.getElementById("entireScore");
// This Variable For Counting The Score
let score = document.getElementById("score");
// This Variable For Knowing The Difficulty That User Gonna Choose
let difficulty = "";
// This Variable Count Us The Correct Answers
let counter = 0;
// This Variable For Generate A Random Image
let randomImage;

//Increase The Timmer by -1
const timeInterval = setInterval(updateTime, 1000);

// To Know Which Difficulty User Choose
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        difficulty = button.id;

        // Remove The Difficulty Box
        buttonsBox.classList.add("display-none");

        // Display The Game Box
        gameBox.classList.remove("display-none");

        setupScoreAndTime();
        playGame();
    });
});

// This Function Generate A Random Image Depending on The Difficulty
function playGame() {
    if (difficulty === "easy") {
        randomImage = easy[Math.floor(Math.random() * easy.length)];

        easy.splice(easy.indexOf(randomImage), 1);

        image.src = `images/Flags/${randomImage}.png`;

        image.alt = `${randomImage} flag`;
    } else if (difficulty === "normal") {
        randomImage = normal[Math.floor(Math.random() * normal.length)];

        normal.splice(normal.indexOf(randomImage), 1);

        image.src = `images/Flags/${randomImage}.png`;
        image.alt = `${randomImage} flag`;
    } else {
        randomImage = hard[Math.floor(Math.random() * hard.length)];

        hard.splice(hard.indexOf(randomImage), 1);

        image.src = `images/Flags/${randomImage}.png`;
        image.alt = `${randomImage} flag`;
    }

    generateAnswers();
}

// This Function Generate The Three Dummies Answers
function generateAnswers() {
    let dummyAnswers = [];

    for (i = 0; i < 3; i++) {
        dummyAnswers.push(
            allCountries[Math.floor(Math.random() * allCountries.length)]
        );
    }

    // Here We Push The Correct Answer Between The Three
    dummyAnswers.push(randomImage);

    // This Loop Put Answers In Different Positions For Avoiding The Repeating Of The Correct Answer
    for (let i = 0; i < 4; i++) {
        answers[i].innerHTML =
            dummyAnswers[Math.floor(Math.random() * dummyAnswers.length)];

        dummyAnswers.splice(dummyAnswers.indexOf(answers[i].innerHTML), 1);
    }
}

// Here We Know The User Choose
answers.forEach((button) => {
    button.addEventListener("click", function () {
        // User Answer
        var userAnswer = button.innerHTML;

        // If True
        if (userAnswer === randomImage) {
            counter++;

            updateScore();

            if (difficulty === "easy") {
                time.innerHTML = 20;
            } else if (difficulty === "normal") {
                time.innerHTML = 15;
            } else {
                time.innerHTML = 10;
            }
        }
        //If it's Not
        else {
            gameOver();
        }
    });
});

// This Function Setup The Score And The Time
function setupScoreAndTime() {
    score.innerHTML = 0;
    if (difficulty === "easy") {
        time.innerHTML = 20;
        entireScore.innerHTML = 25;
    } else if (difficulty === "normal") {
        time.innerHTML = 15;
        entireScore.innerHTML = 50;
    } else {
        time.innerHTML = 10;
        entireScore.innerHTML = 100;
    }
}

// This Function Update The Time
function updateTime() {
    time.innerHTML--;

    // If The is Over
    if (time.innerHTML === "0") {
        gameOver();
    }
}

// This Function Update The Score
function updateScore() {
    if (difficulty === "easy") {
        score.innerHTML = counter;

        // If The Player Reach The Goal
        if (counter === 25) {
            gameWin();
        } else {
            playGame();
        }
    } else if (difficulty === "normal") {
        score.innerHTML = counter;

        // If The Player Reach The Goal
        if (counter === 50) {
            gameWin();
        } else {
            playGame();
        }
    } else {
        score.innerHTML = counter;

        // If The Player Reach The Goal
        if (counter === 100) {
            gameWin();
        } else {
            playGame();
        }
    }
}

//To Re Play Again
function playAgain() {
    location.reload();
}

// To End The Game And Display Game Over
function gameOver() {
    clearInterval(timeInterval);
    resultTitle.innerHTML = "Game Over!";
    gameBox.classList.add("display-none");
    resultBox.classList.remove("display-none");
}

// To Tell The PLayer That He win
function gameWin() {
    clearInterval(timeInterval);
    resultTitle.innerHTML = "Congrats You Finished The Game";
    gameBox.classList.add("display-none");
    resultBox.classList.remove("display-none");
}
