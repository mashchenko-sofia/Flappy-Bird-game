export default class Pipe {
    constructor(params) {
        this._config = params.config;
        this._drawEngine = params.drawEngine;
        this._score = params.score;
        
        this._imgUp = this._config.pipeUpImg;
        this._imgDown = this._config.pipeDownImg;
        this._x = this._config.PIPE_X;
        this._yUp = this._config.PIPE_UP_Y;
        this._yDown = this._config.PIPE_DOWN_Y;
        this._width = this._config.PIPE_WIDTH;

        this._heightSum = this._config.SUM_PIPE_HEIGHT;
        this._heightMin = this._config.PIPE_HEIGHT_MIN;
        this._heightMax = this._config.PIPE_HEIGHT_MAX;

        this._fieldWidth = this._config.fieldWidth;
        this._fieldHeight = this._config.fieldHeight;

        this._padding = this._config.PIPE_PADDING;
        this._moveSpeed = this._config.PIPE_MOVE_SPEED;

        this._spawnPoint = this._config.PIPE_SPAWN_POINT;
        this._scorePoint = this._config.PIPE_SCORE_POINT;

        this._pipes = [];
    }
    getHeightUp() {
        return Math.floor(Math.random() * (this._heightMax - this._heightMin + 1)) + this._heightMin;
    }
    getHeightDown(heightUp) {
        return this._heightSum - heightUp;
    }
    // getYDown(heightDown) {
    //     return this._fieldHeight - heightDown;
    // }
    isOnPoint(pipeCoor, point) {
        return (pipeCoor % point <= this._moveSpeed) && (pipeCoor % point >= 0) && (pipeCoor / point < 2);
    }
    newPipe() {
        const heightUp = this.getHeightUp();
        const heightDown = this.getHeightDown(heightUp);
        const yDown = this._fieldHeight - heightDown;
        this._pipes.push({
            x: this._x,
            yDown: yDown,
            heightUp: heightUp,
            heightDown: heightDown,
        });
    }
    update() {
        if (this._pipes.length == 0) {
            this.newPipe();
        }

        const lastPipeCoor = this._pipes[this._pipes.length - 1].x;
        if (this.isOnPoint(lastPipeCoor, this._spawnPoint) && (lastPipeCoor <= this._spawnPoint)) {
            this.newPipe();
        }


        for (let i = 0; i < this._pipes.length; i++) {
            this.draw(i);

            this._pipes[i].x -= this._moveSpeed;
           
            const pipeMidpointCoor = this._pipes[i].x + this._width / 2;
            if (this.isOnPoint(pipeMidpointCoor, this._scorePoint) && (pipeMidpointCoor >= this._scorePoint)) {
                this._score.increaseScore();
                // this._config.scoreSound.play();
                // this._config.scoreSound.currentTime = 0;

                // УВЕЛИЧЕНИЕ СЛОЖНОСТИ 
                if (this._score.currentScore == 10 || this._score.currentScore % 50 == 0 && this._score.currentScore > 0) {
                    this._moveSpeed += 0.5;
                    console.log('speed', this._moveSpeed);
                }
            }

            const pipeLastpointCoor = this._pipes[i].x + this._width;
            if (pipeLastpointCoor < 0) {
                this._pipes.shift();
            }
        }
    }
    draw(index) {
            this._drawEngine.draw(
                this._imgDown, 
                this._pipes[index].x, 
                this._pipes[index].yDown, 
                this._width, 
                this._pipes[index].heightDown,
            )
            this._drawEngine.draw(
                this._imgUp, 
                this._pipes[index].x, 
                this._yUp, 
                this._width,
                this._pipes[index].heightUp,
            )
    }

    //     this.pipeDownSpaceVer = [this.pipeDown.y + this.PADDING, this.pipeDown.y + this.pipeDown.height];
    //     this.pipeDownSpaceHor = [this.pipeDown.x + xOffset + this.PADDING, this.pipeDown.x + xOffset + this.pipeDown.width - this.PADDING];
    //     this.pipeUpSpaceVer = [this.pipeUp.y, this.pipeUp.y + this.pipeUp.height - this.PADDING];
    //     this.pipeUpSpaceHor = [this.pipeUp.x + xOffset + this.PADDING, this.pipeUp.x + xOffset + this.pipeUp.width - this.PADDING];
        

    // }
    hittedPipe(birdX, birdY) {
        if (
            (birdX >= this.pipeDownSpaceHor[0] && birdX <= this.pipeDownSpaceHor[1] && 
            birdY >= this.pipeDownSpaceVer[0] && birdY <= this.pipeDownSpaceVer[1] )
            ||
            (birdX >= this.pipeUpSpaceHor[0] && birdX <= this.pipeUpSpaceHor[1] && 
            birdY >= this.pipeUpSpaceVer[0] && birdY <= this.pipeUpSpaceVer[1])
            ) {
                return true;
            }
        return false;
    }
}