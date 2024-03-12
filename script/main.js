import Game from "./classes/Game.js";


const game = new Game();



game._config.newGameBtn.addEventListener("click", () => {
    game.start();
});
game._config.continueBtn.addEventListener("click", () => { 
    game.start();
});



document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.code === 'Space') {
        game.bird.fly();
        
    } 
    if (e.code === 'Tab' || e.code === 'Escape') { 
        game.stop();

        // game._config.continueBtn.classList.remove('invisible');
    }
});
document.addEventListener("click", (e) => {
    game.bird.fly();
    // game._physicsEngine.resetSpeed();
});

