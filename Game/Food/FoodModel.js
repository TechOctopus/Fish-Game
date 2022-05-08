export default class FoodModel{
    constructor(canvas){
        this.food = 0;
        this.foodArray = [];
        this.canvas = canvas;
        this.x = 1200;
        this.y = 680;
        this.w = 60;
        this.h = 100;
        this.texture = new Image();
        this.texture.src = 'imgs/pot.png'
    }
}