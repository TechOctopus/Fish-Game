export default class ScoreCounterController {
    constructor(scoreController){
        this.scoreController = scoreController;
    }

    update(score){
        this.scoreController.score = score;
    }
}