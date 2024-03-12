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
        this._drawEngine = new CanvasDrawEngine(this._config.fieldWidth, this._config.fieldHeight);
        this._physicsEngine = new PhysicsEngine();

        this.index = 0;
        this.xOffset = 0;
        // this.state = 0;

        this.gameAnimationId = 0;
    }
    reset() {
        // this.bg = new Background({
        //     img: this._config.bgImg,
        //     x: this._config.BG_X,
        //     y: this._config.BG_Y,
        //     width: this._config.BG_WIDTH,
        //     height: this._config.BG_HEIGHT,
        //     drawEngine: this._drawEngine,
        // });
        this.ground = new Ground({
            img: this._config.groundImg,
            x: this._config.GROUND_X,
            y: this._config.GROUND_Y,
            width: this._config.GROUND_WIDTH,
            height: this._config.GROUND_HEIGHT,
            drawEngine: this._drawEngine,
        });
        this.pipe = new Pipe({
            imgUp: this._config.pipeUpImg,
            imgDown: this._config.pipeDownImg,
            x: this._config.PIPE_X,
            yUp: this._config.PIPE_UP_Y,
            yDown: this._config.PIPE_DOWN_Y,
            width: this._config.PIPE_WIDTH,

            heightSum: this._config.SUM_PIPE_HEIGHT,
            heightMin: this._config.PIPE_HEIGHT_MIN,
            heightMax: this._config.PIPE_HEIGHT_MAX,
            
            fieldWidth: this._config.fieldWidth,
            fieldHeight: this._config.fieldHeight,
            // height: this._config.PIPE_HEIGHT,
            // hole: this._config.PIPE_HOLE,
            spawnPoint: this._config.PIPE_SPAWN_POINT,
            scorePoint: this._config.PIPE_SCORE_POINT,
            // gap: this._config.PIPE_GAP,
            padding: this._config.PIPE_PADDING,
            moveSpeed: this._config.PIPE_MOVE_SPEED,
            // spawnSpeed: this._config.PIPE_SPAWN_SPEED,
            drawEngine: this._drawEngine,
        });
        this.bird = new Bird({
            imgs: this._config.birdStates,
            x: this._config.BIRD_X,
            y: this._config.BIRD_Y,
            width: this._config.BIRD_WIDTH,
            height: this._config.BIRD_HEIGHT,
            rotation: this._config.BIRD_ROTATION,
            rotationDegree: this._config.BIRD_ROTATION_DEGREE,
            flySpeed: this._config.BIRD_FLY_SPEED,
            fallStartSpeed: this._config.BIRD_FALL_START_SPEED,
            animationSpeed: this._config.BIRD_ANIMATION_SPEED,
            drawEngine: this._drawEngine,
            physicsEngine: this._physicsEngine,
        });
        this.score = new Score({
            scoreBox: this._config.scoreBox,
            recordBox: this._config.recordBox,
        });
        // console.log(this._config.scoreBox)
    }
    draw() {
        // this.bg.draw();
        this.ground.draw();
        this.bird.draw(0);

        // this.index += 0.3;
        // this.xOffset = -((this.index * this._config.PIPE_MOVE_SPEED) % (this._config.fieldWidth + this._config.PIPE_WIDTH));
        this.pipe.draw();
        if (this.pipe._pipes[0].x - this._config.PIPE_WIDTH / 2  == this._config.BIRD_X) {
            this.score.increaseScore();
        }
        // this.bird.draw(0);
    }
    animate = () => {
        this._drawEngine.clear();


        if(this.bird.isDead(this._config.fieldHeight)) {
            this.finish();
        } else {
            this.draw();
            this.gameAnimationId = requestAnimationFrame(this.animate);
        }
    }
    // animate = () => {
    //     ctx.clearRect( 0, 0, canvas.width, canvas.height );

    //     this.index += 0.3;
    //     this.xOffset = -((this.index * ANIMATION_SPEED) % (canvas.width + pipeDownProp.width));
        
    //     this.pipe.create(ctx, this.xOffset);
    //     // this.background.create();

    //     if (this.bird.isDead(canvas, this.pipe)) {
    //         this.finish();
    //     } else {
    //         this.bird.create(ctx, this.state);

    //         this.state +=1;
    //         if (this.state >= birdProp.img.length) {
    //             this.state = 0;
    //         }

    //         this.gameAnimationId = requestAnimationFrame(this.animate);
    //     }
        
    // };
    // animate() {
        
    // }
    start() {
        this.reset();
        this.animate();

        this._config.newGameBtn.classList.add('invisible');
        this._config.continueBtn.classList.add('invisible');
        this._config.gameOverWindow.classList.add('invisible');
        this._config.field.classList.remove('blured');
        this._config.gameInfo.classList.remove('invisible');

    }
    stop() {
        // this.drawEngine.clear();
        // this.drawEngine.stop();
        cancelAnimationFrame(this.gameAnimationId);
        
        this._physicsEngine.resetSpeed()

        this._config.gameInfo.classList.add('invisible');
        this._config.field.classList.add('blured');
        this._config.continueBtn.classList.remove('invisible');

    }
    // update() {

    // }
    finish() {
        this.stop();

        this._config.newGameBtn.classList.remove('invisible');
        this._config.gameOverWindow.classList.remove('invisible');
        this._config.continueBtn.classList.add('invisible');

        // this.index = 0;
        // this.xOffset = 0;
        // this.state = 0;

        // this.pipe.pipeDownProp = pipeDownProp;
        // this.pipe.pipeUpProp = pipeUpProp;
        // this.background = new Background(backgroundProp);

        // this.background = new Background(backgroundProp);

        // ctx.clearRect( 0, 0, canvas.width, canvas.height );

        // this.reset();

        // this.pipe = new Pipe(PIPE_PADDING, pipeDownProp, pipeUpProp);
        // this.bird = new Bird(BIRD_FALL_SPEED, BIRD_FLY_HEIGHT, birdProp);
        // this.score = new Score();
    }
}
