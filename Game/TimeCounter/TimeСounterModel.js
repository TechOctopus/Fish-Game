export default class TimeCounterModel {
    constructor(canvas){
        this.canvas = canvas
        this.minutes =  Math.floor(this.time / 60);
        this.seconds =  this.time - (this.minutes * 60);
    }
}