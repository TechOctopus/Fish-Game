import FishController from "./FishController.js";

export default class FishView extends FishController {
    draw(){
        const ctx = this.canvas.getContext('2d');
        ctx.drawImage(this.texture, 0, 0, 500, 320, this.x - (this.w / 2), this.y - (this.h / 2), this.w, this.h);
    }
}