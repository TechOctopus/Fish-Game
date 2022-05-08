export default class TimeCounterController {
    constructor(timeCounter){
        this.timeCounter = timeCounter
    }

    update(time){
        this.timeCounter.minutes = Math.floor(time / 60);
        this.timeCounter.seconds = time - (this.timeCounter.minutes * 60);
    }
}