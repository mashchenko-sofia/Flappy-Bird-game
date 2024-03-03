import Game from "./classes/Game.js";


const game = new Game();

const newGameBtn = document.getElementById("new-game-btn");
const stopBtn = document.getElementById("stop-btn");
const continueBtn = document.getElementById("continue-btn");

newGameBtn.addEventListener("click", () => {
    game.create();
    game.start();
});

stopBtn.addEventListener("click", () => {
    // game.stop();
});

continueBtn.addEventListener("click", () => { 
    // game.start();
});

// window.addEventListener('resize', () => {
//     game.bird.create();
//     game.pipe.create();
// });