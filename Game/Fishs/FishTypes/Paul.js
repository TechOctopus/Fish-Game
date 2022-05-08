import FishView from "../FishView.js";

export default class Paul extends FishView{
    constructor(canvas, mouse , gameDifficulty){
        super(canvas, mouse);
        this.gameDifficulty = gameDifficulty;
        this.gameDifficulty ? this.speed = Math.random() * 10 + 5 : this.speed = Math.random() * 5 + 1;
        this.gameDifficulty ? this.score = 2 : this.score = 1;
        this.h = 90;
        this.w = 140;
        this.radius = 70;
        this.texture = new Image();
        this.texture.src = 'imgs/red_fish.png';
    }
}