export default class FishingRodView{
    constructor(fishingRod){
        this.fishingRod = fishingRod;
    }

    draw(){
        const ctx = this.fishingRod.canvas.getContext('2d');
        ctx.beginPath();
        ctx.lineWidth = this.fishingRod.line_size;
        ctx.strokeStyle = 'white';
        ctx.moveTo(this.fishingRod.x_top, this.fishingRod.y_top);
        ctx.quadraticCurveTo(this.fishingRod.x_midle, this.fishingRod.y_midle, this.fishingRod.x_bottom, this.fishingRod.y_bottom);
        ctx.stroke(); 
        ctx.closePath();
        ctx.drawImage(this.fishingRod.texture, this.fishingRod.x_hook, this.fishingRod.y_hook, this.fishingRod.hook_size, this.fishingRod.hook_size);
    }
}