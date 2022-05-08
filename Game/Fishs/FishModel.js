export default class FishModel {
    constructor(canvas, mouse){
        this.mouse = mouse;
        this.canvas = canvas;
        this.x = this.canvas.width + 100;
        this.y = Math.random() * ((this.canvas.height - 100) - 200) + 200;
        this.distance;
        this.counted = false;
    }
}