import FishView from "../FishView.js";

export default class Lola extends FishView{
    constructor(canvas, mouse , gameDifficulty){
        super(canvas, mouse);
        this.gameDifficulty = gameDifficulty;
        this.gameDifficulty ? this.speed = Math.random() * 10 + 5 : this.speed = Math.random() * 5 + 1;
        this.gameDifficulty ? this.score = 4 : this.score = 2;
        this.h = 60;
        this.w = 95;
        this.radius = 47.5;
        this.texture = new Image();
        this.texture.src = 'imgs/yellow_fish.png';
    }
}