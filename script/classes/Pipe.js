// const canvas = document.getElementById('canvas');
// canvas.width = document.documentElement.clientWidth * 2;

export default class Pipe {
    constructor(params) {
        this._params = params;
        // this.ctx = ctx;
        // this.index = 0;
        // this.xOffset = 0;
        // this.speed = speed;
        // this.PADDING = padding;
        // this.pipeDown = downProp;
        // this.pipeUp = upProp;
        this._heightSum = params.heightSum;
        this._heightMin = params.heightMin;
        this._heightMax = params.heightMax;

        this._fieldWidth = params.fieldWidth;
        this._fieldHeight = params.fieldHeight;

        // this._hole = params.hole;
        // this._gap = params.gap;
        // console.log(this._gap, this._fieldWidth - this._gap)
        // this._padding = params.padding;
        this._moveSpeed = params.moveSpeed;
        // this._spawnSpeed = params.spawnSpeed;
        this._spawnPoint = params.spawnPoint;
        this._scorePoint = params.scorePoint;

        this._drawEngine = params.drawEngine;

        this._pipes = [];
        // this._pipes[0] = {
        //     x: this.x += this._moveSpeed,
        //     heightUp: getHeightUp(),
        //     heightDown: getHeightDown(this.heightUp),
        //     yDown: this._fieldHeight - this.heightDown,
        // }
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

    newPipe() {
        const heightUp = this.getHeightUp();
        const heightDown = this.getHeightDown(heightUp);
        const yDown = this._fieldHeight - heightDown;
        this._pipes.push({
            x: this._params.x,
            yDown: yDown,
            heightUp: heightUp,
            heightDown: heightDown,
        });

        // console.log('New pipe');
    }
    draw() {
        if (this._pipes.length == 0) {
            this.newPipe();
        }
        // console.log(this._pipes)
        for (let i = 0; i < this._pipes.length; i++) {
            this._drawEngine.draw(
                this._params.imgDown, 
                this._pipes[i].x, 
                this._pipes[i].yDown, 
                this._params.width, 
                this._pipes[i].heightDown,
            )
            this._drawEngine.draw(
                this._params.imgUp, 
                this._pipes[i].x, 
                this._params.yUp, 
                this._params.width,
                this._pipes[i].heightUp,
            )
            this._pipes[i].x -= this._moveSpeed;
            if (Math.round(this._spawnPoint) == Math.round(this._pipes[i].x)) {
                this.newPipe();
            }
            if (this._pipes[i].x - this._params.width == this._scorePoint) {

            }
            // console.log(Math.round(this._pipes[i].x), this._spawnPoint)
            if (this._pipes[i].x + this._params.width < 0) {
                this._pipes.shift();
            }
        }
        // console.log(this._pipes[0].x, this._gap)
        // console.log('Pipe draw')
    }
    // draw(xOffset) {
    //     const heightUp = this.getHeightUp();
    //     const heightDown = this.getHeightDown(heightUp);
    //     const yDown = this._fieldHeight - heightDown;
    //     this._drawEngine.draw(
    //         this._params.imgDown, 
    //         this._params.x + xOffset, 
    //         yDown, 
    //         this._params.width, 
    //         heightDown,
    //     )
    //     this._drawEngine.draw(
    //         this._params.imgUp, 
    //         this._params.x + xOffset, 
    //         this._params.yUp, 
    //         this._params.width,
    //         heightUp,
    //     )

    // }

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

    // animate = () => {
    //     this.ctx.clearRect( 0, 0, canvas.width, canvas.height );

    //     this.index += 0.3;
    //     this.xOffset = -((this.index * this.speed) % canvas.width);

    //     this.create()
        
    //     window.requestAnimationFrame(this.animate);
    //     console.log('Pipe animated');
    // };
    // update() {

    // }
}