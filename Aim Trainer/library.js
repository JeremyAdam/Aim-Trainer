//
//
// Bar Functions
//
//
function drawtopBar () {
    // Bar Background 
    rect(0, 0, cnv.width, 50, "black", "fill");
    // Display Score
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 200, 30);
    // Display Time
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Time: " + time, 500, 30);
}
function drawBottomBar () {
    // Bar Background 
    rect(0, 550, cnv.width, 50, "black", "fill");
    // Bar Border
    rect(1, 550, cnv.width - 2, 49, "aqua", "stroke");
    // Draw Button
    rect(playButton.x, playButton.y, playButton.w, playButton.h, "aqua", "stroke");
    // Draw Button Background
    if (collision(playButton)) {
        rect(646, 557, 149, 38, "cyan", "fill");
    } else {
        rect(646, 557, 149, 38, "white", "fill");
    }
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    if (gameLaunched == 0) {
        // Change or Keep Button Text to Play
        buttonDisplay = "play";
        ctx.fillText(buttonDisplay, 692, 583);
    } else if (gameLaunched >= 1) {
        // Change or Keep Button Text to Replay
        buttonDisplay = "replay";
        ctx.fillText(buttonDisplay, 683, 583);
    }
    // Draw Button Increase
    rect(targetButtonIn.x, targetButtonIn.y, targetButtonIn.w, targetButtonIn.h, "aqua", "stroke");
    // Draw Button Background
    rect(121, 556, 38, 38, "white", "fill");
    if (collision(targetButtonIn)) {
        if (targetNumber >= 8) {
            rect(121, 556, 38, 38, "red", "fill");
        } else if (targetNumber <= 7) {
            rect(121, 556, 38, 38, "cyan", "fill");
        }
    }
    // Plus Symbol
    rect(125, 573, 30, 5, "black", "fill");
    rect(138, 561, 4, 30, "black", "fill");
    // Draw Button Decrease
    rect(targetButtonDe.x, targetButtonDe.y, targetButtonDe.w, targetButtonDe.h, "aqua", "stroke");
    // Draw Button Background
    rect(166, 556, 38, 38, "white", "fill");
    if (collision(targetButtonDe)) {
        if (targetNumber <= 1) {
            rect(166, 556, 38, 38, "red", "fill");
        } else if (targetNumber > 1) {
            rect(166, 556, 38, 38, "cyan", "fill");
        }
    }
    // Minus Symbol
    rect(170, 573, 30, 5, "black", "fill");
    // Display Target Amount
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Targets: " + targetNumber, 5, 583);
    // Display Best Score
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Best Score: " + bestScore, 350, 583);
}
function MouseCollisionDetection () {
    // Play Button
    if (collision(playButton)) {
        if (mouseIsPressed) {
            targets.push(1);
            gameStarting = true;
            gameIsStarting();
            time += 60;
            score = 0;
        }
    }
    // Target Increase Button
    if (collision(targetButtonIn)) {
        if (mouseIsPressed && targetNumber <= 7) {
            targetNumber += 1;
            targets.push(1);
            mouseIsPressed = false;
        } else if (mouseIsPressed && targetNumber >= 8) {
            targetNumber = 8
        }
    }
    // Target Decrease Button
    if (collision(targetButtonDe)) {
        if (mouseIsPressed && targetNumber >= 2) {
            targetNumber -= 1;
            targets.pop(1);
            mouseIsPressed = false;
        } else if (mouseIsPressed && targetNumber <= 1) {
            targetNumber = 1;
        }
    }
}
// Make Collision Dection With Mouse Easier
function collision (input) {
        if (mouseX >= input.x && mouseX <= input.x + input.w && mouseY >= input.y && mouseY <= input.y + input.h) {
            return true;
        } else {
            return false;
        }
}
//
//
// Game Started / Starting
//
//
function gameIsStarting () {
    // Draw How Many Targets that were chosen
    for (let i = 0; i < targetNumber; i++) {
        drawTargetLocation();
    }
}
function drawTargetLocation () {
    // Create a Position On the Grid
    let tempRan = randomInt(1, 10);
    if (tempRan == 1) {
        drawTargetLocationData(0, 0, 1);
    } else if (tempRan == 2) {
        drawTargetLocationData(1, 0, 2);
    } else if (tempRan == 3) {
        drawTargetLocationData(2, 0, 3);
    } else if (tempRan == 4) {
        drawTargetLocationData(0, 1, 4);
    } else if (tempRan == 5) {
        drawTargetLocationData(1, 1, 5);
    } else if (tempRan == 6) {
        drawTargetLocationData(2, 1, 6);
    } else if (tempRan == 7) {
        drawTargetLocationData(0, 2, 7);
    } else if (tempRan == 8) {
        drawTargetLocationData(1, 2, 8);
    } else {
        drawTargetLocationData(2, 2, 9);
    }
}
function target () {
    if (getGridPositions(0, 0, "testOne", 1)) {
        targetData(300, 200, 0, 0, 1)
    }
     if (getGridPositions(1, 0, "testOne", 2)) {
        targetData(400, 200, 1, 0, 2)
    }
    if (getGridPositions(2, 0, "testOne", 3)) {
        targetData(500, 200, 2, 0, 3)
    }
    if (getGridPositions(0, 1, "testOne", 4)) {
        targetData(300, 300, 0, 1, 4)
    }
    if (getGridPositions(1, 1, "testOne", 5)) {
        targetData(400, 300, 1, 1, 5)
    }
    if (getGridPositions(2, 1, "testOne", 6)) {
        targetData(500, 300, 2, 1, 6)
    }
    if (getGridPositions(0, 2, "testOne", 7)) {
        targetData(300, 400, 0, 2, 7)
    }
    if (getGridPositions(1, 2, "testOne", 8)) {
        targetData(400, 400, 1, 2, 8)
    }
    if (getGridPositions(2, 2, "testOne", 9)) {
        targetData(500, 400, 2, 2, 9)
    }
}
// Simplify the drawTargetLocation Function Data
function drawTargetLocationData (row, col, last) {
    if (getGridPositions(row, col, "testZero", last)) {
        getGridPositions(row, col, "add", last);
    } else if (getGridPositions(row, col, "testOne", last)) {
        drawTargetLocation()
    }
}
// Simplify the Targets Data
function targetData (x, y, gridCol, gridRow, last) {
    if (drawCircle(x, y, 20)) {
            onTarget == true;
            if (mouseIsPressed) {
                onTarget == false;
                mouseIsPressed = false;
                lastTarget = last;
                getGridPositions(gridCol, gridRow, "rem", 0);
                drawTargetLocation();
            }
    } else {
        onTarget == false;
    }
}
// Simplify Getting Grid Positions
function getGridPositions (col, row, what, last) {
    if (what == "add") {
        if (gridPositions[row][col] == 0) {
            if (lastTarget == last) {
                drawTargetLocation();
            } else {
                gridPositions[row][col] = 1;
            }
        }
    } else if (what == "testOne") {
        if (gridPositions[row][col] == 1) {
            return true;
        } else {
            return false;
        }
    } else if (what == "testZero") {
        if (gridPositions[row][col] == 0) {
            return true;
        } else {
            return false;
        }
    } else if (what == "rem") {
        if (gridPositions[row][col] == 1) {
            gridPositions[row][col] = 0;
        }
    }
}
// Simplify Drawing Target
function drawCircle (x, y, r) {
    circle(x, y, r, "fill", "lightblue");
    if (gameStarted) {
        if (circleCollision(x, y, r, mouseX, mouseY)) {
            return true;
        } else {
            return false;
        }
    }
}
function missTarget () {
    if (gameStarted) {
        if (mouseX > 0 && mouseX < 800 && mouseY > 50 && mouseY < 550) {
            if (onTarget == false) {
                if (mouseIsPressed) {
                    mouseIsPressed = false;
                    score -= 500;
                }
            }
        }
    }
}
// Simplify Collision Detection for Circles
function circleCollision (circX, circY, circRad, x, y) {
    if (calcualtion(circX, circY, 2, x, y, 3000)) {
        return true;
    } else if (calcualtion(circX, circY, 5, x, y, 1750)) {
        return true;
    } else if (calcualtion(circX, circY, 10, x, y, 1500)) {
        return true;
    } else if (calcualtion(circX, circY, 15, x, y, 1250)) {
        return true;
    } else if (calcualtion(circX, circY, circRad, x, y, 1000)) {
        return true;
    } else {
        return false;
    }
}
function calcualtion (circX, circY, circRad, x ,y, scoreIn) {
    if ((x - circX) * (x - circX) + (y - circY) * (y - circY) <= circRad * circRad) {
        if (mouseIsPressed) {
            score += scoreIn;
        }
        return true;
    } else {
        return false;
    }
}
function endGame () {
    if (bestScore < score) {
        bestScore = score;
    }
    timer.w = 1000;
    gameStarted = false;
    gameStarting = false;
    getGridPositions(0, 0, "rem", 0);
    getGridPositions(1, 0, "rem", 0);
    getGridPositions(2, 0, "rem", 0);
    getGridPositions(0, 1, "rem", 0);
    getGridPositions(1, 1, "rem", 0);
    getGridPositions(2, 1, "rem", 0);
    getGridPositions(0, 2, "rem", 0);
    getGridPositions(1, 2, "rem", 0);
    getGridPositions(2, 2, "rem", 0);
}
//
//
// Functions For Timers
//
//
// Countdown at Start
function countdown () {
    if (gameStarted == false) {
        if (timer.w >= 0) {
            timer.w -= 3;
        }
        if (timer.w >= 800) {
            ctx.font = "100px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("5", 375, 325);
        } else if (timer.w >= 600) {
            ctx.font = "100px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("4", 375, 325);
        } else if (timer.w >= 400) {
            ctx.font = "100px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("3", 375, 325);
        } else if (timer.w >= 200) {
            ctx.font = "100px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("2", 375, 325);
        } else if (timer.w >= 0) {
            ctx.font = "100px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("1", 375, 325);
        } else if (timer.w < 0) {
            gameStarted = true;
            timer.w = 200;
        }
    }
}
function timerCountdown () {
    if (time > 0) {
        if (gameStarted) {
            if (timer.w <= 0) {
                time -= 1;
                timer.w = 200;
            } else if (timer.w > 0) {
                timer.w -= 3;
            }
        }
    } else if (time <= 0) {
        endGame();
    }
}
//
//
// Other Functions
//
//
function mousedownHandler() {
    if (mouseIsUp = true) {
        mouseIsPressed = true;
        mouseIsUp = false;
    }
}
function mouseupHandler() {
    mouseIsUp = true;
    mouseIsPressed = false;
}
// Event Listeners & Handlers
function mousemoveHandler(event) {
    // Get Rectangle Info About Canvas Location
    let cnvRect = cnv.getBoundingClientRect(); 
    // Calc Mouse Coordinates Using Mouse Event and Canvas Location Info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
}
// Function FOr Drawing Circles
function circle(x, y, r , mode, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fillStyle = color;
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}
// Function for Drawing Rectangles
function rect (x, y, w, h, color, mode) {
    if (mode === "fill") {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, w, h)
    }
}
// Random Number Generator
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}