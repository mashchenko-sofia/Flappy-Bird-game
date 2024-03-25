import Config from "../config.js";
import CanvasDrawEngine from "./CanvasDrawEngine.js";
import PhysicsEngine from "./PhysicsEngine.js"

import Background from "./Background.js";
import Ground from "./Ground.js";
import Pipe from "./Pipe.js";
import Bird from "./Bird.js";
import Score from "./Score.js";



export default class Game {
    constructor() {
        this._config = new Config();
        this._drawEngine = new CanvasDrawEngine({
            config: this._config,
        });
        this._physicsEngine = new PhysicsEngine({
            config: this._config,
        });

        this._gameAnimationId = 0;
    }
    reset() {
        this.score = new Score({
            config: this._config,
        });
        this.bg = new Background({
            config: this._config,
            drawEngine: this._drawEngine,
        });
        this.ground = new Ground({
            config: this._config,
            drawEngine: this._drawEngine,
        });
        this.pipe = new Pipe({
            config: this._config,
            drawEngine: this._drawEngine,
            score: this.score,
        });
        this.bird = new Bird({
            config: this._config,
            drawEngine: this._drawEngine,
            physicsEngine: this._physicsEngine,
        });
    }
    update() {
        this.bg.draw();
        this.ground.draw();
        this.bird.update();
        this.pipe.update();
    }
    animate = () => {
        this._drawEngine.clear();

        this.update();
        
        if  (this.bird.hittedGround(this._config.fieldHeight) || 
            this.pipe.hittedBird(this.bird)) 
            {
            this._config.dieSound.play();
            this._config.dieSound.currentTime = 0;
            
            this.finish();
        } else {
            this._gameAnimationId = requestAnimationFrame(this.animate);
        }
    }
    start() {
        this.reset();
        this.animate();

        this.keyDownFunction = (e) => {
            e.preventDefault();
            if (e.code === 'Space') {
                this.bird.fly();
            } 
            if (e.code === 'Tab' || e.code === 'Escape') { 
                this.stop();
            }
        };

        this.clickFunction = (e) => {
            e.preventDefault();
            this.bird.fly();
        };

        document.addEventListener("keydown", this.keyDownFunction);
        document.addEventListener("click", this.clickFunction);

        this._config.newGameBtn.classList.add('invisible');
        this._config.continueBtn.classList.add('invisible');
        this._config.gameOverWindow.classList.add('invisible');
        this._config.field.classList.remove('blured');
        this._config.gameInfo.classList.remove('invisible');

    }
    stop() {
        cancelAnimationFrame(this._gameAnimationId);
        document.removeEventListener("keydown", this.keyDownFunction);
        document.removeEventListener("click", this.clickFunction);

        this._physicsEngine.resetSpeed()

        this._config.gameInfo.classList.add('invisible');
        this._config.field.classList.add('blured');
        this._config.continueBtn.classList.remove('invisible');

    }
    finish() {
        this.stop();
        this._config.continueBtn.classList.add('invisible');

        
        // this.score.setRecord()
        setTimeout(() => {
            this._drawEngine.clear();
            this._config.newGameBtn.classList.remove('invisible');
            this._config.gameOverWindow.classList.remove('invisible');

        }, 1000)
    }
}