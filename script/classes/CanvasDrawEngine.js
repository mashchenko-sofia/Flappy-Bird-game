export default class CanvasDrawEngine {
    constructor(params) {
        this._config = params.config;
        
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = this._config.fieldWidth;
        this.canvas.height = this._config.fieldHeight;
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    draw(img, x, y, width, height) {
        this.ctx.drawImage(
            img,
            x,
            y,
            width,
            height
        );
    };
}