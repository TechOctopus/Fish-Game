export default class TimeCounterView {
    constructor(timeCounter){
        this.timeCounter = timeCounter
    }

    draw(){
        const ctx = this.timeCounter.canvas.getContext('2d');
        ctx.fillStyle = '#202020';
        ctx.font = '60px Fredoka';
        if(this.timeCounter.seconds < 10) ctx.fillText(this.timeCounter.minutes + ":0" + this.timeCounter.seconds, 40, 70);
        else ctx.fillText(this.timeCounter.minutes + ":" + this.timeCounter.seconds, 40, 70);
    }
}