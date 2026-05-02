let timer = 60;
let score = 0;
let hit = 0;
let timerstarted = false;

function makeBubbles() {
    let clutter = "";
    for (let i = 0; i < 207; i++) {
        let num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.getElementById("bottom").innerHTML = clutter;
}

function newHit() {
    hit = Math.floor(Math.random() * 10);
    document.getElementById("hit").innerText = hit;
}

function startTimer() {
    if (timerstarted===false)
        return;
    let interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timer").textContent = timer;
        }
        else {
            clearInterval(interval);
            document.getElementById("bottom").innerHTML = "<h1>GAME OVER!</h1>";
        }
    }, 1000)
}

function game(){
    document.getElementById("bottom").addEventListener("click", (e) => {
    if (!(e.target.classList.contains("bubble")))
        return;
    if (!timerstarted) {
        timerstarted = true;
        startTimer();
    }
    let clicked = Number(e.target.textContent);
    if (clicked === hit) {
        score += 1;
        document.getElementById("score").innerText = score;
        makeBubbles();
        newHit();
    }
})
}
makeBubbles();
newHit();
game();
function playagain() {
    timer = 60;
    score = 0;
    hit = 0;
    timerstarted = false;
    document.getElementById("timer").textContent = timer;
    document.getElementById("score").innerText = score;
    makeBubbles();
    newHit();
   game();
}

