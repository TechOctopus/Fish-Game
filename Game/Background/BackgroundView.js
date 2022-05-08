export default class BackgroundView {
    constructor(background){
        this.background = background;
    }

    draw(){
        const ctx = this.background.canvas.getContext('2d');
        ctx.drawImage(this.background.texture, this.background.x1, this.background.y, this.background.w, this.background.h);
        ctx.drawImage(this.background.texture, this.background.x2, this.background.y, this.background.w, this.background.h);
        ctx.drawImage(this.background.texture2, 0, 0, 1600, 800);
    }
}