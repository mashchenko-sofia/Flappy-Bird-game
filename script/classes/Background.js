export default class Background {
    constructor(params) {
        this._config = params.config
        this._drawEngine = params.drawEngine;

        this.img = this._config.bgImg;
        this.x = this._config.BG_X;
        this.y = this._config.BG_Y;
        this.width = this._config.BG_WIDTH;
        this.height = this._config.BG_HEIGHT;
    }
    draw() {
        this._drawEngine.draw(
            this.img,
            this.x, 
            this.y, 
            this.width, 
            this.height 
        )
    }
}