import Game from "./classes/Game.js";

const game = new Game();

game._config.newGameBtn.addEventListener("click", () => {
    game.start();
});
game._config.continueBtn.addEventListener("click", () => { 
    game.start();
});



// GAMEPAD 
window.addEventListener("gamepadconnected", (event) => {
    const update = () => {
        for (const gamepad of navigator.getGamepads()) {
            if (!gamepad) continue;
            for (const [index, button] of gamepad.buttons.entries()) {
                if (button.touched) {
                    switch (index) {
                        case 0:
                            game.bird.fly();
                            break
                        case 2:
                            game.start();
                            break
                        case 9:
                            game.stop();
                            break
                    }
                }
            }
        }
        setTimeout(() => update(), 100) ;
    };
    update();
});