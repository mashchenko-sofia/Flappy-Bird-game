export default class Ground {
    constructor(params) {
        this._drawEngine = params.drawEngine;
        this._config = params.config;
        
        this._img = this._config.groundImg;
        this._x = this._config.GROUND_X;
        this._y = this._config.GROUND_Y; 
        this._width = this._config.GROUND_WIDTH;
        this._height = this._config.GROUND_HEIGHT;
    }
    draw() {
        this._drawEngine.draw(
            this._img,
            this._x, 
            this._y, 
            this._width, 
            this._height,
        )
    }
}