export default class Background { 
    constructor(params) {
        this.ctx = ctx;
        // this.width = 1000;
        // this.height = 600;
        // this.x = 0;
        // this.y = 0;
    }
    create(img, x, y, width, height) {
        const background = {
            img: img,
            x: x, 
            y: y, 
            width: width, 
            height: height 
        }
        this.ctx.drawImage(background.img,background.x, background.y, background.width, background.height);
        
    }
    animate(speed) {
        this.create();
    }
}