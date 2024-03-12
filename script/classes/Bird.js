export default class Bird {
    constructor(params) {
        this._params = params;
        this.imgs =params.imgs;
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;

        this.flySpeed = params.flySpeed;
        this.fallStartSpeed = params.fallStartSpeed;
        // console.log(this.fallSpeed);
        this._drawEngine = params.drawEngine;
        this._physicsEngine = params.physicsEngine;
        // this.isDead = false;
        this._state = 0;
        this._flapId = null;
    }

    draw(state) {
        this._physicsEngine.update(this);  // this.fall();

        if (this.y < 0) {
            this.y = 0;
        }
        this._drawEngine.draw(
            this.imgs[state],
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
    // animate = () => {
    //     this.create();
    // }
    // update() {
        
    // }
    fly() {
        this.y -= this.flySpeed;
        
        this._physicsEngine.resetSpeed();
        this.animate();
    }
    animate() {
        this._flapId = setInterval(this.flap(), 1000);
    }
    flap() {
        if (this._state >= this.imgs.length) {
            this._state = 0;
            clearInterval(this._flapId);
        } else {
            this.draw(this._state);
            this._state +=1;
        }
    }
    // fall() {
    //     this.params.y += this.params.fallSpeed;
    // }
    isDead(fieldHeight) {
       if(
        this.y + this.height >= fieldHeight 
        // || pipe.hittedPipe(this.params.x, this.params.y)
        ) {
        return true;
       }
       return false;
    }
    // die () {
    //     // this.isDead = true;
    //     console.log('Bird died');
    //     // new Bird(birdStates, birdX, birdY, birdWidth, birdHeight);
    // }
}