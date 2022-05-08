export default class ScoreCounterView {
    constructor(scoreController){
        this.scoreController = scoreController;
    }

    draw(){
        const ctx = this.scoreController.canvas.getContext('2d');
        ctx.fillStyle = '#202020';
        ctx.font = '60px Fredoka';
        if(this.scoreController.score < 10) ctx.fillText("00" + this.scoreController.score, 1450, 70);
        else if (this.scoreController.score < 100) ctx.fillText("0" + this.scoreController.score, 1450, 70);
        else ctx.fillText(this.scoreController.score, 1450, 70);
    }
}