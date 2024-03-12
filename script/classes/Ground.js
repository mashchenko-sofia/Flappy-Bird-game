export default class Ground {
    constructor(params) {
        this.params = params;
        this._drawEngine = params.drawEngine;
        // this._physicsEngine = params.physicsEngine;
        // this.isDead = false;
        // this.state = 0;
        // this.flapId = null;
    }
    draw() {
        this._drawEngine.draw(
            this.params.img,
            this.params.x, 
            this.params.y, 
            this.params.width, 
            this.params.height 
        )
        // console.log('1')
    }
}