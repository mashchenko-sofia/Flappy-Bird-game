export default class PhysicsEngine {
    constructor() {
        this.speed = 0
    }
    update(entity) {
        // this.speed += entity.fallSpeed
        this.speed += entity.fallStartSpeed 
        return entity.y += this.speed;
        // console.log('en', entity.params.y);
        // console.log(entity.params.y);
        // return entity.params.y
    }
    resetSpeed() {
        this.speed = 0
    }
    // constructor() {
    //     this.BIRD_FALL_SPEED = BIRD_FALL_SPEED;
    //     this.BIRD_FLY_HEIGHT = BIRD_FLY_HEIGHT;
    //     this.birdProp = {
    //         img: birdProp.img,
    //         x: birdProp.x,
    //         y: birdProp.y,
    //         width: birdProp.width,
    //         height: birdProp.height
    //     };

    //     // this.isDead = false;
    // }

    // create(ctx, state) {
    //     this.fall();
    //     ctx.drawImage(this.birdProp.img[state], this.birdProp.x, this.birdProp.y, this.birdProp.width, this.birdProp.height)
        
    // }
    // animate = () => {
    //     this.create();
    // }
    // update() {
        
    // }
}