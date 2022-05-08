export default class FoodController{
    constructor(foodModel){
        this.foodModel = foodModel;
    }
    update(food){
        this.foodModel.food = food;
        this.foodModel.foodArray = [];
        if(this.foodModel.food > 0){
            for(var i = 0; i < this.foodModel.food; i++){
                this.foodModel.foodArray[i] = this.foodModel.x + i * 80;
            }
        }
    }
}