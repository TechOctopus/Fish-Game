export default class FishingRodModel{
    constructor(canvas, mouse){
        this.mouse = mouse;
        this.canvas = canvas;
        this.x_hook = mouse.x - 30;
        this.y_hook = mouse.y - 30;
        this.x_top = mouse.x;
        this.y_top = 0;
        this.x_midle = mouse.x;
        this.y_midle = mouse.y / 2;
        this.x_bottom = mouse.x;
        this.y_bottom = mouse.y - 30;
        this.line_size = 4;
        this.hook_size = 80;
        this.texture = new Image();
        this.texture.src  = 'imgs/hook.png'
        this.radius = 10;
    }
}