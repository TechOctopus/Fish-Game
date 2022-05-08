import FishView from "../FishView.js";

export default class Charli extends FishView{
    constructor(canvas, mouse , gameDifficulty){
        super(canvas, mouse);
        this.gameDifficulty = gameDifficulty;
        this.gameDifficulty ? this.speed = Math.random() * 10 + 5 : this.speed = Math.random() * 5 + 1;
        this.gameDifficulty ? this.score = 8 : this.score = 5;
        this.h = 40;
        this.w = 60;
        this.radius = 30;
        this.texture = new Image();
        this.texture.src = 'imgs/blue_fish.png';
    }
}