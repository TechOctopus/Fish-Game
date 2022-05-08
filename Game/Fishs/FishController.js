import FishModel from "./FishModel.js";

export default class FishController extends FishModel {
    update(){
        this.x -= this.speed;
        const dx = this.x - this.mouse.x;
        const dy = this.y - this.mouse.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }
}