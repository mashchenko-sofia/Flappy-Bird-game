export default class Bird {
    constructor(params) {
        this._config = params.config;
        this._drawEngine = params.drawEngine;
        this._physicsEngine = params.physicsEngine;
        
        this._imgs = this._config.birdStates;
        this._width = this._config.BIRD_WIDTH;
        this._height = this._config.BIRD_WIDTH;
        this.x = this._config.BIRD_X;
        this.y = this._config.BIRD_Y;
        // this.canvasX = this.x + (this._width / 2);
        // this.canvasY = this.y + (this._height / 2);
        this.xForCanvas = -(this._width / 2);
        this.yForCanvas = -(this._height / 2);
        
        this._rotationDegree = this._config.BIRD_ROTATION_DEGREE;
        this._flySpeed = this._config.BIRD_FLY_SPEED;
        this._animationSpeed = this._config.BIRD_ANIMATION_SPEED;

        this._flySound = this._config.flySound;

        this._state = 0;
        this._flapId = null;
    }
    update() {
        this._physicsEngine.update(this);  // this.fall();

        if (this.y < 0) {
            this.y = 0;
        }
        
        if (this._physicsEngine.speed > this._physicsEngine.fallStartSpeed * 50) {
            this._rotationDegree = 50;
        } else if (this._physicsEngine.speed > this._physicsEngine.fallStartSpeed * 25) {
            this._rotationDegree = 10;
        } 
        // else if (this._physicsEngine.speed >= this._physicsEngine.fallStartSpeed) {
        //     this._rotationDegree = 0; 
        // } 
        
        this._angle = this._rotationDegree * Math.PI / 180;


        this.draw(0);
    }
    draw(state) {
        this._drawEngine.ctx.save();
        this._drawEngine.ctx.translate(this.x + (this._width / 2), this.y + (this._height / 2));
        this._drawEngine.ctx.rotate(this._angle);
        this._drawEngine.draw(
            this._imgs[state],
            this.xForCanvas, // 0
            this.yForCanvas, // 0
            this._width,
            this._height
        )
        this._drawEngine.ctx.restore();
        // console.log('wid', this.x - this._width / 2)
    }
    fly() {
        this.y -= this._flySpeed;

        this._rotationDegree = -20;

        this._physicsEngine.resetSpeed();
        this.animate();

        this._flySound.play();
        this._flySound.currentTime = 0;
    }
    animate() {
        this._flapId = setInterval(this.flap(), 10);
    }
    flap() {
        if (this._state >= this._imgs.length) {
            this._state = 0;
            clearInterval(this._flapId);
        } else {
            // this._drawEngine.clear();
            this.draw(this._state);

            this._state +=1;
        }
    }
    // turn() {
        
    // }
    isDead(fieldHeight) {
       if(
        this.y + this._height + this._config.GROUND_HEIGHT >= fieldHeight 
        // || pipe.hittedPipe(this.params.x, this.params.y)
        ) {
        return true;
       }
       return false;
    }
}