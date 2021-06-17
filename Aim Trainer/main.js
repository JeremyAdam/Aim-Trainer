let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
// Event Listeners & Handlers
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
// Main Array
let targets = [];
let gridPositions = [ [0, 0, 0],
                      [0, 0, 0],
                      [0, 0, 0] ]
// Elements For Button
playButton = {
    x: 645,
    y: 556,
    w: 150,
    h: 39,
}
targetButtonIn = {
    x: 120,
    y: 556,
    w: 40,
    h: 39,
}
targetButtonDe = {
    x: 165,
    y: 556,
    w: 40,
    h: 39,
}
let timer = {
    w: 1000
}
// Other Elements
let lastTarget = 0;
let score = 0;
let time = 0;
let bestScore = 0;
let buttonDisplay = "play";
let gameLaunched = 0;
let mouseX, mouseY;
let mouseIsPressed = false;
let mouseIsUp = false;
let targetNumber = 1;
let gameStarting = false;
let gameStarted = false;
let onTarget = false;
// setInterval(targets.length, 10000);

// Main Looping Function
requestAnimationFrame(main);
function main () {
    // Fill Canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height, "fill");
    // Collision Detection Functions
    if (gameStarting == false) {
        MouseCollisionDetection();
    } else {
        target();
        countdown();
        timerCountdown();
    }
    missTarget();
    // Bottom and Top Bar Functions
    drawBottomBar();
    drawtopBar();
    // Redraw Main Function
    requestAnimationFrame(main);
}