import {
    ctx, 
    birdImg, birdWidth, birdHeight, birdX, birdY, 
    pipeDownImg, pipeDownWidth, pipeDownHeight, pipeDownX, pipeDownY,
    pipeUpImg, pipeUpWidth, pipeUpHeight, pipeUpX, pipeUpY,
    backgroundImg, backgroundWidth, backgroundHeight, backgroundX, backgroundY,
    SPEED
} from "../config.js";
// import {xOffset} from "../config.js"

import Background from "./Background.js";
import Pipe from "./Pipe.js";
import Bird from "./Bird.js";
import Score from "./Score.js";


export default class Game {
    constructor() {
        this.background = new Background(ctx);
        this.pipe = new Pipe(ctx, pipeDownImg, pipeDownX, pipeDownY, pipeDownWidth, pipeDownHeight, pipeUpImg, pipeUpX, pipeUpY, pipeUpWidth, pipeUpHeight);
        this.bird = new Bird(ctx);
        this.score = new Score();
    }
    create() {

        // this.background.create(backgroundImg, backgroundX, backgroundY, backgroundWidth, backgroundHeight);
        this.pipe.create();
        this.bird.create(birdImg, birdX, birdY, birdWidth, birdHeight);
        // this.score.create();
        
        console.log('Game created');
    }
    start() {
        // this.background.animate(SPEED);
        this.pipe.animate(SPEED);
    }
    stop() {
        
    }
    // update() {

    // }
    finish() {

    }
}
