import BackgroundController from "./Background/BackgroundController.js";
import BackgroundModel from "./Background/BackgroundModel.js";
import BackgroundView from "./Background/BackgroundView.js";
import FishingRodController from "./FishingRod/FishingRodController.js";
import FishingRodModel from "./FishingRod/FishingRodModel.js";
import FishingRodView from "./FishingRod/FishingRosView.js";
import Charli from "./Fishs/FishTypes/Charli.js";
import Paul from "./Fishs/FishTypes/Paul.js";
import Bella from "./Fishs/FishTypes/Bella.js";
import Lola from "./Fishs/FishTypes/Lola.js";
import FoodController from "./Food/FoodController.js";
import FoodModel from "./Food/FoodModel.js";
import FoodView from "./Food/FoodView.js";
import ScoreCounterController from "./ScoreCounter/ScoreCounterController.js";
import ScoreCounterModel from "./ScoreCounter/ScoreCounterModel.js";
import ScoreCounterView from "./ScoreCounter/ScoreCounterView.js";
import TimeCounterController from "./TimeCounter/TimeCounterController.js";
import TimeCounterModel from "./TimeCounter/TimeСounterModel.js";
import TimeCounterView from "./TimeCounter/TimeCounterView.js";

export default class Game {
    constructor(gameDifficulty, canvas, mouse, key, gameOver){
        this.mouse = mouse;
        this.key = key;
        this.canvas = canvas;
        this.gameDifficulty = gameDifficulty;
        this.gameOver = gameOver;
        this.then = Date.now();
        this.now = Date.now();
        this.gameDifficulty ? this.time = 60 : this.time = 120;
        this.difference = this.now - this.then;
        this.start = false;    
        this.init();
    }

    init(){
        this.BackgroundModel = new BackgroundModel(this.canvas);
        this.BackgroundView = new BackgroundView(this.BackgroundModel);
        this.BackgroundController = new BackgroundController(this.BackgroundModel);

        this.FishingRodModel = new FishingRodModel(this.canvas, this.mouse);
        this.FishingRodController = new FishingRodController(this.FishingRodModel);
        this.FishingRodView = new FishingRodView(this.FishingRodModel);

        this.FoodModel = new FoodModel(this.canvas);
        this.FoodView = new FoodView(this.FoodModel);
        this.FoodController = new FoodController(this.FoodModel);

        this.ScoreCounterModel = new ScoreCounterModel(this.canvas);
        this.ScoreCounterController = new ScoreCounterController(this.ScoreCounterModel);
        this.ScoreCounterView = new ScoreCounterView(this.ScoreCounterModel);

        this.TimeCounterModel = new TimeCounterModel(this.canvas);
        this.TimeCounterController = new TimeCounterController(this.TimeCounterModel);
        this.TimeCounterView = new TimeCounterView(this.TimeCounterModel);
        
        this.fishsArray = [];
        this.food = 5;
        this.foodFlag = true;
        this.timeoutFood = 0;
        this.score = 0;
        this.gameframe = 0;
    }

    update(){
        this.BackgroundController.update();
        this.FishingRodController.update();
        this.FoodController.update(this.food);
        this.ScoreCounterController.update(this.score);
        this.TimeCounterController.update(this.time);
        this.updateFishs();
        this.updateFood();
    }

    draw(){
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.BackgroundView.draw();
        this.FishingRodView.draw();
        this.FoodView.draw();
        this.ScoreCounterView.draw();
        this.TimeCounterView.draw();
        this.drawFishs();
    }

    loop(){
        this.draw();
        this.update();
        
        this.now = Date.now();
        this.difference = this.now - this.then;
        if(this.difference >= 1000){
            this.time -= 1;
            this.then = this.now;
            if(this.time == 0) {
                this.start = false;
                this.gameOver(this.score);
            }
        }
        if(this.start){
            this.gameframe++;
            window.requestAnimationFrame(this.loop.bind(this));
        }

    }

    run(){
        this.start = true;
        this.loop();
    }

    updateFishs() {
        this.addFishs();    
        for (let i = 0; i < this.fishsArray.length; i++) {
            this.fishsArray[i].update();
            if (this.fishsArray[i].y < 0 - this.fishsArray[i].radius * 2) {
                this.fishsArray.splice(i, 1);
                i--;
            } 
            else if (this.fishsArray[i].distance < this.fishsArray[i].radius + this.FishingRodModel.radius 
                && this.mouse.click && this.food > 0) {
                if (!this.fishsArray[i].counted) {
                    if(this.food != 0) this.food -= 1
                    this.mouse.click = false;
                    this.score += this.fishsArray[i].score;
                    this.fishsArray[i].counted = true;
                    this.fishsArray.splice(i, 1);
                    i--;
                }
            }
        }
    }

    drawFishs(){
        for (let i = 0; i < this.fishsArray.length; i++) {
            this.fishsArray[i].draw();
        }
    }
    
    addFishs(){
        if (this.gameframe % 80 == 0) {
            switch(Math.floor(Math.random() * 4)){
                case 0: this.fishsArray.push(new Paul(this.canvas, this.mouse, this.gameDifficulty)); break;
                case 1: this.fishsArray.push(new Lola(this.canvas, this.mouse, this.gameDifficulty)); break;
                case 2: this.fishsArray.push(new Charli(this.canvas, this.mouse, this.gameDifficulty)); break;
                case 3: this.fishsArray.push(new Bella(this.canvas, this.mouse, this.gameDifficulty)); break;
            }
        }
    }

    updateFood(){
        if (this.mouse.click && this.foodFlag == true && this.food > 0) {
            this.food -= 1;
            this.mouse.click = false;
        }
        this.mouse.click = false;

        if(this.foodFlag == true && this.food == 0 && this.key[32] == true){
            this.foodFlag = false;
            window.setTimeout(e => {
                this.food = 5;
                this.foodFlag = true;
            }, 10000);
        }
        else if(this.foodFlag == false && this.food == 0){
            const ctx = this.canvas.getContext('2d');
            ctx.fillStyle = '#202020';
            ctx.font = '60px Fredoka';
            ctx.fillText("bait recovery...", 650, 70);
        }
    }
}