// JavaScript source code
let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");
let modeButton = document.getElementById("modeButton");
let resultMessage = document.getElementById("resultBoard");
let evilDoorImgPath = "https://i.pinimg.com/564x/17/18/3e/17183e700e3ed49b37599941ca49ea22.jpg";
let wayOutImgPath = "https://i.pinimg.com/564x/da/ee/e8/daeee83b933025ef961b878ddaa97c5a.jpg";
let cliffImgPath = "https://i.pinimg.com/564x/1d/e2/e3/1de2e3a9381b3c131cf9cb980b41d71e.jpg";
let openDoor1;
let openDoor2;
let openDoor3;
let isDoor1Closed = true;
let isDoor2Closed = true;
let isDoor3Closed = true;
let isGameOn = true;
let closedDoorImg ="https://i.pinimg.com/564x/65/02/20/650220a33bfae0cb990f5c61c0e4ceca.jpg";
let startButton = document.getElementById("startGame");
let winningStreak = 0;
let winStreakButton = document.getElementById("winningStreak");
let isHardMode = false;
let modeButtonClick = 0;
 
const resetGame = () => {
    door1.src = closedDoorImg;
    door2.src = closedDoorImg;
    door3.src = closedDoorImg;
    isDoor2Closed = true;
    isDoor1Closed = true;
    isDoor3Closed = true;
    startButton.innerHTML = "Good Luck!";
    resultMessage.innerHTML = "Let's find the way out of here!";
   
    isGameOn = true;
    isHardMode = false;
    modeButtonClick = 0;
    randomAssignDoor();
}
 
const checkDoor = (door) => {
    if (door.src === evilDoorImgPath) {
        resultMessage.innerHTML = "Oh My Gosh. You have been killed by the evil";
        startButton.innerHTML = "Game Over! Click here to restart the game!";
        winningStreak = 0;
        winStreakButton.innerHTML = winningStreak.toString();
        isGameOn = false;
    }
    else if (door.src === cliffImgPath) {
        resultMessage.innerHTML = "Sorry. It's not the right door. But you have a second chance";
        startButton.innerHTML = "Keep going. You're still alive!";
    }
    else if (door.src === wayOutImgPath) {
        resultMessage.innerHTML = "Congrats! You escaped";
        startButton.innerHTML = "You won! Click here for another round!";
        winningStreak++;
        winStreakButton.innerHTML = winningStreak.toString();
        isGameOn = false;
    }
}

let setHardMode = () => {
    winningStreak = 0;
    winStreakButton.innerHTML = "0";
    if (modeButtonClick % 2 === 0) {
        isHardMode = false;
        modeButton.innerHTML = "Easy";
    }
    else {
        isHardMode = true;
        modeButton.innerHTML = "Hard";
    }
}

let randomAssignDoor = () => {
    if (isHardMode == false) {
        let randomNum = Math.floor(Math.random(0, 1) * 3);
        if (randomNum === 0) {
            openDoor1 = evilDoorImgPath;
            openDoor2 = wayOutImgPath;
            openDoor3 = cliffImgPath;
        }
        else if (randomNum === 1) {
            openDoor1 = wayOutImgPath;
            openDoor2 = cliffImgPath;
            openDoor3 = evilDoorImgPath;
        }
        else {
            openDoor1 = cliffImgPath;
            openDoor2 = evilDoorImgPath;
            openDoor3 = wayOutImgPath;
        }
    }
    else {
        let randomNum = Math.floor(Math.random(0, 1) * 6);
        if (randomNum === 0) {
            openDoor1 = evilDoorImgPath;
            openDoor2 = wayOutImgPath;
            openDoor3 = cliffImgPath;
        }
        else if (randomNum === 1) {
            openDoor1 = evilDoorImgPath;
            openDoor2 = cliffImgPath;
            openDoor3 = wayOutImgPath;
        }
        else if (randomNum === 2) {
            openDoor1 = cliffImgPath;
            openDoor2 = wayOutImgPath;
            openDoor3 = evilDoorImgPath;
        }
        else if (randomNum === 3) {
            openDoor1 = cliffImgPath;
            openDoor2 = evilDoorImgPath;
            openDoor3 = wayOutImgPath;
        }
        else if (randomNum === 4) {
            openDoor1 = wayOutImgPath;
            openDoor2 = cliffImgPath;
            openDoor3 = evilDoorImgPath;
        }
          
        else {
            openDoor1 = wayOutImgPath;
            openDoor2 = evilDoorImgPath;
            openDoor3 = cliffImgPath;
        }
    }
   
}


door1.addEventListener('click', function () {
    if (isDoor1Closed && isGameOn) {
        door1.src = openDoor1;
        checkDoor(door1);
        isDoor1Closed = false;
    }
    //else {
    //    resultMessage.innerHTML = "dont pick a door twice";
    //}
    
     
});

door2.addEventListener('click', function () {
    if (isDoor2Closed && isGameOn) {
        door2.src = openDoor2;
        checkDoor(door2);
        isDoor2Closed = false;
    }
    //else {
    //    resultMessage.innerHTML = "dont pick a door twice";
    //}
});

door3.addEventListener('click', function () {
    if (isDoor3Closed && isGameOn) {
        door3.src = openDoor3;
        checkDoor(door3);
        isDoor3Closed = false;
    }
    //else {
    //    resultMessage.innerHTML = "dont pick a door twice";
    //}
});

modeButton.addEventListener('click', function () {
    modeButtonClick++;
})
modeButton.addEventListener('click', setHardMode);

winStreakButton.innerHTML = winningStreak.toString();

startButton.addEventListener('click', resetGame);

resetGame();