
export default class Bird {
    constructor(ctx) {
       
        this.ctx = ctx;
        
        // this.width = 10;
        // this.height = 10;
        // this.x = 200;
        // this.y = 300;
        // this.speed = 0;

        this.isDead = false;
    }
    create(img, x, y, width, height) {

        const bird = {
            img: img,
            x: x,
            y: y,
            width: width,
            height: height
        }
        this.ctx.drawImage(bird.img, bird.x, bird.y, bird.width, bird.height)

        console.log('Bird created');
    }
    // update() {
        
    // }
    fly() {

    }
    fall() {

    }
    hit() {

    }
    die () {

    }
}