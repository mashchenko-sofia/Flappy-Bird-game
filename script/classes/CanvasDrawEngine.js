export default class CanvasDrawEngine {
    constructor(filedWidth, filedHeight) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = filedWidth;
        this.canvas.height = filedHeight;
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