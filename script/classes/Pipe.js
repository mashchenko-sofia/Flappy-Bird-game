const canvas = document.getElementById('canvas');
canvas.width = document.documentElement.clientWidth * 2;

export default class Pipe {
    constructor(ctx, imgDown, xDown, yDown, widthDown, heightDown, imgUp, xUp, yUp, widthUp, heightUp) {
        this.ctx = ctx;
        this.index = 0;
        this.xOffset = 0;

        this.pipeDown = { 
            img: imgDown,
            x: xDown, 
            y: yDown, 
            width: widthDown, 
            height: heightDown, 
        }
        this.pipeUp = { 
            img: imgUp,
            x: xUp, 
            y: yUp, 
            width: widthUp, 
            height: heightUp, 
        }

        console.log(this.pipeDown, this.pipeUp);
    }
    create() {
        this.ctx.drawImage(this.pipeDown.img, this.pipeDown.x + this.xOffset, this.pipeDown.y, this.pipeDown.width, this.pipeDown.height);
        this.ctx.drawImage(this.pipeUp.img, this.pipeUp.x + this.xOffset, this.pipeUp.y, this.pipeUp.width, this.pipeUp.height);

        console.log('Pipe created');
    }
    animate(speed) {
        this.index += 0.3;
        this.xOffset = -((this.index * speed) % canvas.width);

        this.create()
        
        window.requestAnimationFrame(this.animate(speed));
    }
    // update() {

    // }
}