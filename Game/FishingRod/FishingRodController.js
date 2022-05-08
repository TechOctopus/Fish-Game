export default class FishingRodController{
    constructor(fishingRod){
        this.fishingRod = fishingRod;
    }
    update(){
        if(this.fishingRod.x_top > this.fishingRod.mouse.x){
            this.fishingRod.x_top -= (this.fishingRod.x_top - this.fishingRod.mouse.x)/10;
            this.fishingRod.x_midle -= (this.fishingRod.x_midle - this.fishingRod.mouse.x)/20;
        }
        else if(this.fishingRod.x_top < this.fishingRod.mouse.x){
            this.fishingRod.x_top += (this.fishingRod.mouse.x - this.fishingRod.x_top)/10;
            this.fishingRod.x_midle += (this.fishingRod.mouse.x - this.fishingRod.x_midle)/20;
        }
        this.fishingRod.x_top = Math.round(this.fishingRod.x_top);
        this.fishingRod.x_midle = Math.round(this.fishingRod.x_midle);

        this.fishingRod.y_midle = this.fishingRod.mouse.y / 2;

        this.fishingRod.x_bottom = this.fishingRod.mouse.x;
        this.fishingRod.y_bottom = this.fishingRod.mouse.y - 40;

        this.fishingRod.x_hook = this.fishingRod.mouse.x - 40;
        this.fishingRod.y_hook = this.fishingRod.mouse.y - 40;
    }
}