export default class FoodView{
    constructor(foodModel){
        this.foodModel = foodModel;
    }
    draw(){
        const ctx = this.foodModel.canvas.getContext('2d');
        for(var i = 0; i < this.foodModel.foodArray.length; i++){ 
            ctx.drawImage(this.foodModel.texture, this.foodModel.foodArray[i], this.foodModel.y, this.foodModel.w, this.foodModel.h);
        }
    }
}