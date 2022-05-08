export default class BackgroundModel {
    constructor(canvas){
        this.canvas = canvas;
        this.x1 = 0;
        this.x2 = this.canvas.width;
        this.y = 0;
        this.w = this.canvas.width;
        this.h = 100;
        this.texture = new Image();
        this.texture.src = 'imgs/background.png'
        this.texture2 = new Image();
        this.texture2.src = 'imgs/corals.png'
    }
}