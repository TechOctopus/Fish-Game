import FishView from "../FishView.js";

export default class Bella extends FishView{
    constructor(canvas, mouse , gameDifficulty){
        super(canvas, mouse);
        this.gameDifficulty = gameDifficulty;
        this.gameDifficulty ? this.speed = Math.random() * 10 + 5 : this.speed = Math.random() * 5 + 1;
        this.gameDifficulty ? this.score = 15 : this.score = 10;
        this.h = 30;
        this.w = 46;
        this.radius = 23;
        this.texture = new Image();
        this.texture.src = 'imgs/purple_fish.png';
    }
}